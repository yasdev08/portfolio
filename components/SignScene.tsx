"use client";

import { useEffect, useRef, useState } from "react";

// Interactive 3D hero: the initials "YM" as illuminated channel letters on a dark wall.
// Letters are drawn from polygons (no font file), extruded with a bevel, with a lit acrylic face,
// metal returns and a back-lit halo on the wall. Drag to rotate; idles with a slow sway.
export default function SignScene({ hint }: { hint: string }) {
  const mount = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const el = mount.current;
    if (!el) return;
    let disposed = false;
    let cleanup = () => {};

    (async () => {
      const THREE = await import("three");
      if (disposed) return;

      let renderer: import("three").WebGLRenderer;
      try {
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      } catch {
        setFailed(true);
        return;
      }
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      el.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
      camera.position.set(0, 0.1, 7.2);

      // Wall
      const wall = new THREE.Mesh(
        new THREE.PlaneGeometry(30, 20),
        new THREE.MeshStandardMaterial({ color: 0x0a0f1c, roughness: 0.92, metalness: 0 }),
      );
      wall.position.z = -0.42;
      scene.add(wall);

      // Halo texture (radial gradient) for the back-lit glow on the wall
      const c = document.createElement("canvas");
      c.width = c.height = 256;
      const g = c.getContext("2d")!;
      const grad = g.createRadialGradient(128, 128, 0, 128, 128, 128);
      grad.addColorStop(0, "rgba(43,99,240,0.6)");
      grad.addColorStop(0.45, "rgba(43,99,240,0.22)");
      grad.addColorStop(1, "rgba(43,99,240,0)");
      g.fillStyle = grad;
      g.fillRect(0, 0, 256, 256);
      const haloTex = new THREE.CanvasTexture(c);
      const halo = new THREE.Mesh(
        new THREE.PlaneGeometry(7.6, 5.2),
        new THREE.MeshBasicMaterial({ map: haloTex, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }),
      );
      halo.position.z = -0.4;
      scene.add(halo);

      // Letter shapes, in units where cap height = 1.2
      const shapeFrom = (pts: [number, number][]) => {
        const s = new THREE.Shape();
        s.moveTo(pts[0][0], pts[0][1]);
        pts.slice(1).forEach(([x, y]) => s.lineTo(x, y));
        s.closePath();
        return s;
      };
      const Y = shapeFrom([
        [0, 1.2], [0.3, 1.2], [0.52, 0.8], [0.74, 1.2], [1.04, 1.2], [0.67, 0.5], [0.67, 0], [0.37, 0], [0.37, 0.5],
      ]);
      const M = shapeFrom([
        [0, 0], [0, 1.2], [0.27, 1.2], [0.57, 0.7], [0.87, 1.2], [1.14, 1.2], [1.14, 0], [0.88, 0], [0.88, 0.72], [0.57, 0.24], [0.26, 0.72], [0.26, 0],
      ]);

      const extrude = { depth: 0.26, bevelEnabled: true, bevelThickness: 0.025, bevelSize: 0.018, bevelSegments: 3 };
      const faceMat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0x5d86ff, emissiveIntensity: 0.9, roughness: 0.4 });
      const sideMat = new THREE.MeshStandardMaterial({ color: 0x9aa3b5, metalness: 0.9, roughness: 0.28 });

      const sign = new THREE.Group();
      const yMesh = new THREE.Mesh(new THREE.ExtrudeGeometry(Y, extrude), [faceMat, sideMat]);
      const mMesh = new THREE.Mesh(new THREE.ExtrudeGeometry(M, extrude), [faceMat, sideMat]);
      mMesh.position.x = 1.28;
      sign.add(yMesh, mMesh);
      // center the pair
      sign.position.set(-1.21, -0.6, 0);
      const pivot = new THREE.Group();
      pivot.add(sign);
      scene.add(pivot);

      // Lights
      scene.add(new THREE.AmbientLight(0x8fa6ff, 0.35));
      const key = new THREE.DirectionalLight(0xffffff, 1.6);
      key.position.set(3, 4, 6);
      scene.add(key);
      const rim = new THREE.PointLight(0x2b63f0, 9, 6, 2);
      rim.position.set(0, 0, -0.1);
      scene.add(rim);

      // Size
      const resize = () => {
        const { clientWidth: w, clientHeight: h } = el;
        renderer.setSize(w, h, false);
        renderer.domElement.style.width = "100%";
        renderer.domElement.style.height = "100%";
        camera.aspect = w / h;
        // keep the letters in frame on narrow screens
        camera.position.z = w / h < 1 ? 9.4 : 7.2;
        camera.updateProjectionMatrix();
      };
      const ro = new ResizeObserver(resize);
      ro.observe(el);
      resize();

      // Interaction
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      let dragging = false;
      let lastX = 0;
      let lastY = 0;
      let targetY = -0.5;
      let targetX = 0.08;
      let idle = 0;
      const onDown = (e: PointerEvent) => {
        dragging = true;
        lastX = e.clientX;
        lastY = e.clientY;
        idle = 0;
        renderer.domElement.setPointerCapture(e.pointerId);
      };
      const onMove = (e: PointerEvent) => {
        if (!dragging) return;
        targetY = Math.max(-0.9, Math.min(0.9, targetY + (e.clientX - lastX) * 0.008));
        targetX = Math.max(-0.35, Math.min(0.35, targetX + (e.clientY - lastY) * 0.005));
        lastX = e.clientX;
        lastY = e.clientY;
      };
      const onUp = () => {
        dragging = false;
      };
      const cv = renderer.domElement;
      cv.style.touchAction = "pan-y";
      cv.style.cursor = "grab";
      cv.addEventListener("pointerdown", onDown);
      cv.addEventListener("pointermove", onMove);
      cv.addEventListener("pointerup", onUp);
      cv.addEventListener("pointercancel", onUp);

      // Pause rendering when off screen
      let visible = true;
      const io = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting));
      io.observe(el);

      const clock = new THREE.Clock();
      let raf = 0;
      const tick = () => {
        raf = requestAnimationFrame(tick);
        if (!visible) return;
        const dt = clock.getDelta();
        const t = clock.elapsedTime;
        if (!dragging) {
          idle += dt;
          if (!reduce && idle > 1.5) targetY += (Math.sin(t * 0.35) * 0.45 - targetY) * 0.01;
        }
        pivot.rotation.y += (targetY - pivot.rotation.y) * 0.08;
        pivot.rotation.x += (targetX - pivot.rotation.x) * 0.08;
        faceMat.emissiveIntensity = reduce ? 0.9 : 0.88 + Math.sin(t * 1.6) * 0.05;
        renderer.render(scene, camera);
      };
      tick();

      cleanup = () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        io.disconnect();
        cv.removeEventListener("pointerdown", onDown);
        cv.removeEventListener("pointermove", onMove);
        cv.removeEventListener("pointerup", onUp);
        cv.removeEventListener("pointercancel", onUp);
        renderer.dispose();
        cv.remove();
      };
    })();

    return () => {
      disposed = true;
      cleanup();
    };
  }, []);

  return (
    <div className="scene" ref={mount} aria-hidden="true">
      {failed && <div className="scene-fallback">YM</div>}
      <span className="scene-hint">{hint}</span>
    </div>
  );
}
