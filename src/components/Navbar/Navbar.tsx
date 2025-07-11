import './Navbar.css';
import { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

const NavBar = () => {

    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        setIsDark(document.documentElement.classList.contains('dark'));
    }, []);

    const changeTheme = () => {
        const html = document.documentElement;
        html.classList.toggle('dark');
        setIsDark(html.classList.contains('dark'));
      };

      const handleScrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    


    return (
    <nav className="bg-white/50 dark:bg-black/70 text-black dark:text-white fixed top-0 left-0 w-full z-50 transition duration-300 ease-in-out backdrop-blur-sm">
        <div className='navbar-container max-w-6xl mx-auto px-4 py-4 flex justify-center space-x-6 items-center'>
            <button className='navbar-dev font-semibold hover:text-cyan-600 tracking-wide transition'
            onClick={() => handleScrollToSection("header")}>
                Dev
            </button>
            <button className='navbar-about font-semibold hover:text-cyan-600 tracking-wide transition font-[source_code_pro]' onClick={() => handleScrollToSection("about")}>About me</button>
            <button className='navbar-projects font-semibold hover:text-cyan-600 tracking-wide transition font-[source_code_pro]' onClick={() => handleScrollToSection("projects")}>Projects</button>
            <button className="navbar-contact font-semibold hover:text-cyan-600 tracking-wide transition font-[source_code_pro]" onClick={() => handleScrollToSection("contacts")}>Contact</button>
            <button className='navbar-theme font-semibold hover:text-cyan-600 tracking-wide transition w-10 h-6 rounded-full bg-gradient-to-br from-blue-900 to-red-950 dark:bg-gradient-to-br dark:from-blue-400 dark:to-red-600 flex duration-300 hover:scale-115' onClick={() => changeTheme()}>
                <div className={`w-6 h-6 rounded-full bg-white text-yellow-500 dark:text-blue-600 flex items-center justify-center transition-transform duration-300 transform ${isDark ? 'translate-x-0' : 'translate-x-4'}`}>
            {isDark ? <FiMoon/> : <FiSun/>}
            </div>
            </button>
        </div>
    </nav>
    );
}

export default NavBar;