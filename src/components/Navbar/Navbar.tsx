import './Navbar.css';

const NavBar = () => {

    const handleScrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });

        }
    };


    return (
    <nav className="navbar">
        <div className='navbar-container'>
            <button className='navbar-about' onClick={() => handleScrollToSection("about")}>About me</button>
            <button className='navbar-projects' onClick={() => handleScrollToSection("projects")}>Projects</button>
            <button className="navbar-contact" onClick={() => handleScrollToSection("contacts")}>Contact</button>
        </div>
    </nav>
    );
}

export default NavBar;