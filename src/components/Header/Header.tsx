import './Header.css';
import { motion } from 'framer-motion';


const Header = () => {
    return (
        <header className="header text-white py-20  px-4 flex flex-col items-center justify-center h-screen">
            <div className='header-container max-w-4xl mx-auto text-center px-4'>
                <img src="/projects/JMP Profile Picture.png" alt="JMP Profile Picture" className='w-80 h-80 rounded-full object-cover shadow-lg border-4 border-white mx-auto mb-14'/>
        <motion.h1
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: -50 }}
          transition={{ duration: 1.2 }}
          className="header-title text-4xl md:text-5xl font-bold mb-4"
        >
          Hello, my name is Juan Martin Pilon
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: -50 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="header-subtitle text-2xl md:text-3xl font-semibold mb-4"
        >
            I'm a Software Engineer
        </motion.h2>
        </div>
        </header>
    );
}

export default Header;