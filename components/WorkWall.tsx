"use client";

import { useEffect, useRef, useState } from "react";
import type { Cv, Work, WorkCategory } from "@/data/cv";

type Filter = "all" | WorkCategory;

export default function WorkWall({ cv, base }: { cv: Cv; base: string }) {
  const l = cv.labels;
  const [filter, setFilter] = useState<Filter>("all");
  const [open, setOpen] = useState<Work | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);

  const filters: { id: Filter; label: string }[] = [
    { id: "all", label: l.all },
    { id: "installed", label: l.installed },
    { id: "print", label: l.print },
  ];
  const count = (f: Filter) => (f === "all" ? cv.work.length : cv.work.filter((w) => w.category === f).length);

  return (
    <>
      <div className="filters" role="group" aria-label={cv.labels.work}>
        {filters.map((f) => (
          <button key={f.id} type="button" aria-pressed={filter === f.id} onClick={() => setFilter(f.id)}>
            {f.label}
            <small>{count(f.id)}</small>
          </button>
        ))}
      </div>

      <div className="wall">
        {cv.work.map((w) => (
          <figure key={w.file} className="tile" hidden={!(filter === "all" || filter === w.category)}>
            <button type="button" onClick={() => setOpen(w)} aria-label={`${w.client}, ${w.spec}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${base}work/${w.file}.webp`} width={w.w} height={w.h} loading="lazy" decoding="async" alt={`${w.client}: ${w.spec}`} />
            </button>
            <figcaption>
              {w.category === "installed" && <span className="ticket-tag">{l.installed}</span>}
              <span className="ticket-client">{w.client}</span>
              <span className="ticket-spec">
                {w.size && <em>{w.size}</em>}
                {w.size && " · "}
                {w.spec}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      <dialog
        ref={dialog}
        className="lightbox"
        onClose={() => setOpen(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(null);
        }}
      >
        <button type="button" className="lightbox-close" onClick={() => setOpen(null)}>
          {l.close}
        </button>
        {open && (
          <figure>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${base}work/${open.file}.webp`} alt={`${open.client}: ${open.spec}`} />
            <figcaption>
              {open.client} · {open.size ? `${open.size} · ` : ""}
              {open.spec}
            </figcaption>
          </figure>
        )}
      </dialog>
    </>
  );
}
