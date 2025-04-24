import './Navbar.css';

const NavBar = () => {

    const handleScrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });

        }
    };


    return (
    <nav className="navbar bg-black/50 backdrop-blur-md text-white fixed top-0 left-0 w-full z-50">
        <div className='navbar-container max-w-6xl mx-auto px-4 py-4 flex justify-center space-x-6'>
            <button className='navbar-about font-semibold hover:text-cyan-600 tracking-wide transition' onClick={() => handleScrollToSection("about")}>About me</button>
            <button className='navbar-projects font-semibold hover:text-cyan-600 tracking-wide transition' onClick={() => handleScrollToSection("projects")}>Projects</button>
            <button className="navbar-contact font-semibold hover:text-cyan-600 tracking-wide transition" onClick={() => handleScrollToSection("contacts")}>Contact</button>
        </div>
    </nav>
    );
}

export default NavBar;