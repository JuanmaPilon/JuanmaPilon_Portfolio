import './Tech-Carousel.css';

const techs = [
    {name: "HTML", icon: "html5"},
    {name: "CSS", icon: "css3"},
    {name: "JavaScript", icon: "javascript"},
    {name: "React", icon: "react"},
    {name: "Node.js", icon: "nodejs"},
    {name: "Express", icon: "express"},
    {name: "MongoDB", icon: "mongodb"},
    {name: "Python", icon: "python"},
    {name: "C#", icon: "csharp"},
    {name: "Java", icon: "java"},
    {name: "PHP", icon: "php"},
    {name: "Laravel", icon: "laravel"},
    {name: "Vue.js", icon: "vuejs"},
    {name: "Angular", icon: "angular"},
    {name: "MySQL", icon: "mysql"},
    {name: "PostgreSQL", icon: "postgresql"},
    {name: "SQLite", icon: "sqlite"},
    {name: "Tailwind CSS", icon: "tailwindcss"},
    {name: "Bootstrap", icon: "bootstrap"},
    {name: "Sass", icon: "sass"},
    {name: "TypeScript", icon: "typescript"},


]

const Carousel = () => {
    return (
    <div>
        <section className="section-tech-carousel" id="tech-carousel">
            <h2>Techs that I have used:</h2>
            <div>
                {techs.map((techs, index) => (
                    <div className="tech-card" key={index}>
                        <i className={`devicon-${techs.icon}-plain colored`}></i>
                        <h3>{techs.name}</h3>
                    </div>
                ))}
            </div>
            
            </section>

    </div>
    )
}

export default Carousel;