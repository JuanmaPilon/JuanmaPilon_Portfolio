import './Tech-Carousel.css';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const techs = [
    {name: "HTML", icon: "html5"},
    {name: "CSS", icon: "css3"},
    {name: "JavaScript", icon: "javascript"},
    {name: "React", icon: "react"},
    {name: "Redux", icon: "redux"},
    {name: "Node.js", icon: "nodejs"},
    {name: "Express", icon: "express-original colored"},
    {name: "MongoDB", icon: "mongodb"},
    {name: "Python", icon: "python"},
    {name: "C#", icon: "csharp"},
    {name: "Java", icon: "java"},
    {name: "PHP", icon: "php"},
    {name: "Laravel", icon: "laravel"},
    {name: "Vue.js", icon: "vuejs"},
    {name: "Angular", icon: "angularjs"},
    {name: "MySQL", icon: "mysql"},
    {name: "PostgreSQL", icon: "postgresql"},
    {name: "SQLite", icon: "sqlite"},
    {name: "Tailwind CSS", icon: "tailwindcss"},
    {name: "Bootstrap", icon: "bootstrap"},
    {name: "Sass", icon: "sass"},
    {name: "TypeScript", icon: "typescript"},
    {name: "NPM", icon: "npm-original-wordmark colored"},
    {name: "Deno", icon: "denojs"},
    {name: "Dynatrace", icon: "dynatrace"},

    
]

const Carousel = () => {
    const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true, align: 'start', skipSnaps: false, }, [Autoplay({ delay: 1500, stopOnInteraction: false })]);


    return (
    <div>
        <section className="section-tech-carousel" id="tech-carousel">
            <h2>Techs that I have used:</h2>

            <div className='overflow-hidden' ref={emblaRef}>

            <div className='flex'>
                {techs.map((techs, index) => (
                    <div className="tech-card flex flex-col items-center justify-center min-w-[100px] mx-4" key={index}>
                        <i className={`devicon-${techs.icon}-plain colored text-6xl`}></i>
                        <h3 className='text-md mt-2 text-white font-semibold'>{techs.name}</h3>
                    </div>
                ))}
            </div>

            </div>
            </section>

    </div>
    )
}

export default Carousel;