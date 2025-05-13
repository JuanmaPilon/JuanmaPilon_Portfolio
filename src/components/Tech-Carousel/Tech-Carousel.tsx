import './Tech-Carousel.css';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { 
    SiHtml5, SiCss3, SiJavascript, SiReact, SiRedux, SiNodedotjs, 
    SiMongodb, SiPython, SiPhp, SiLaravel, 
    SiVuedotjs, SiAngular, SiMysql, SiPostgresql, SiSqlite, 
    SiTailwindcss, SiBootstrap, SiSass, SiTypescript, SiNpm, 
    SiDeno, SiDynatrace, SiGit, SiGithub, SiDocker,
    SiSharp, SiCplusplus, SiC
  } from "react-icons/si";
import { FaJava } from 'react-icons/fa6';

  const techs = [
    { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
    { name: "CSS", icon: SiCss3, color: "text-blue-500" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "React", icon: SiReact, color: "text-cyan-400" },
    { name: "Redux", icon: SiRedux, color: "text-purple-500" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
    { name: "Python", icon: SiPython, color: "text-blue-400" },
    { name: "PHP", icon: SiPhp, color: "text-indigo-500" },
    { name: "Laravel", icon: SiLaravel, color: "text-red-700" },
    { name: "Vue.js", icon: SiVuedotjs, color: "text-green-400" },
    { name: "Angular", icon: SiAngular, color: "text-red-500" },
    { name: "MySQL", icon: SiMysql, color: "text-blue-500" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-600" },
    { name: "SQLite", icon: SiSqlite, color: "text-blue-400" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
    { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-400" },
    { name: "Sass", icon: SiSass, color: "text-pink-400" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
    { name: "NPM", icon: SiNpm, color: "text-red-500" },
    { name: "Deno", icon: SiDeno, color: "text-gray-400" },
    { name: "Dynatrace", icon: SiDynatrace, color: "text-green-400" },
    { name: "Git", icon: SiGit, color: "text-orange-500" },
    { name: "GitHub", icon: SiGithub, color: "text-gray-400" },
    { name: "Docker", icon: SiDocker, color: "text-blue-400" },
    { name: "C#", icon: SiSharp, color: "text-blue-500" },
    { name: "Java", icon: FaJava, color: "text-red-500" },
    { name: "C++", icon: SiCplusplus, color: "text-blue-500" },
    { name: "C", icon: SiC, color: "text-blue-500" },
  ];

const Carousel = () => {
    const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true, align: 'start', skipSnaps: false, }, [Autoplay({ delay: 1500, stopOnInteraction: false })]);


    return (
    <div>
        <section className="section-tech-carousel bg-black/40 backdrop:blur-sm py-16 px-6 text-white" id="tech-carousel">
        <div className="tech-carousel-container w-full mx-auto text-center">
            <h2 className='text-3xl font-bold mb-8 font-[source_code_pro]'>Techs that I have used:</h2>

            <div className='overflow-hidden' ref={emblaRef}>

            <div className='flex'>
                {techs.map((techs, index) => (
                    <div className="tech-card flex flex-col items-center justify-center min-w-[100px] mx-4" key={index}>
                        <techs.icon className={`text-5xl ${techs.color}`} />
                        <h3 className='text-md mt-2 text-white font-semibold font-sans'>{techs.name}</h3>
                    </div>
                ))}
            </div>

            </div>
            </div>
            </section>

    </div>
    )
}

export default Carousel;