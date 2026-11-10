import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useState, useEffect } from 'react'
import Loader from 'react-loaders'

import forceGym from '../../assets/images/signage/force-gym.jpg'
import forceGymInstall from '../../assets/images/signage/force-gym-install.jpg'
import forceGymMockup from '../../assets/images/signage/force-gym-mockup.jpg'
import pharmacie from '../../assets/images/signage/pharmacie-la-poste.jpg'
import pharmacieCladding from '../../assets/images/signage/pharmacie-cladding.jpg'
import wakeUp from '../../assets/images/signage/wake-up.jpg'
import rezki from '../../assets/images/signage/rezki-phone.jpg'
import cimSante from '../../assets/images/signage/cim-sante.jpg'
import wonderFood from '../../assets/images/signage/wonder-food.jpg'

const projects = [
    {
        title: 'Force Gym',
        caption: 'Illuminated 3D channel letters with logo, installed from an aerial lift.',
        images: [
            { src: forceGym, label: 'Result' },
            { src: forceGymMockup, label: 'Client mockup' },
            { src: forceGymInstall, label: 'Installation' },
        ],
    },
    {
        title: 'Pharmacie La Poste / Ma Parapharmacie',
        caption: 'ACM (Alucobond) façade cladding, illuminated channel letters and a bilingual French/Arabic lightbox.',
        images: [
            { src: pharmacie, label: 'Result' },
            { src: pharmacieCladding, label: 'ACM cladding install' },
        ],
    },
    {
        title: 'Wake Up Pastry & Brunch',
        caption: 'Illuminated letters and five perforated window-vinyl panels (212 cm high).',
        images: [{ src: wakeUp, label: 'Result' }],
    },
    {
        title: 'Rezki Phone',
        caption: 'Double-sided illuminated pylon with brand blades, plus the shop front.',
        images: [{ src: rezki, label: 'Result' }],
    },
    {
        title: 'CIM Santé',
        caption: 'Round lightbox and LED-outlined façade.',
        images: [{ src: cimSante, label: 'Result' }],
    },
    {
        title: "Wonder Food's Maraval",
        caption: 'Illuminated pole sign.',
        images: [{ src: wonderFood, label: 'Result' }],
    },
]

const Signage = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            <div className='container signage-page'>
                <div className='signage-intro'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['S', 'i', 'g', 'n', 'a', 'g', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Sign designer &amp; production coordinator at MB Pub (Oran). From client
                        brief to installed sign: design in CorelDRAW, quotations, production files,
                        fabrication and coordination of production and installation.
                    </p>
                    <p className='materials'>
                        Materials: acrylic (PMMA), ACM (Alucobond), Forex/PVC, vinyl, LED.
                    </p>
                </div>

                <div className='signage-grid'>
                    {projects.map((project) => (
                        <article className='signage-card' key={project.title}>
                            <div className='signage-images'>
                                {project.images.map((image) => (
                                    <figure key={image.label}>
                                        <img
                                            src={image.src}
                                            alt={`${project.title}: ${image.label}`}
                                            loading='lazy'
                                        />
                                        {project.images.length > 1 && (
                                            <figcaption>{image.label}</figcaption>
                                        )}
                                    </figure>
                                ))}
                            </div>
                            <h2>{project.title}</h2>
                            <p>{project.caption}</p>
                        </article>
                    ))}
                </div>

                <p className='signage-note'>
                    Projects produced at MB Pub, Oran (2026). Shared with the owner's permission.
                </p>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Signage
