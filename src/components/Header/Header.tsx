import "./Header.css";
import { motion } from "framer-motion";
import profilePic from "../../assets/jmp-profile-picture.png";

const Header = () => {
  return (
    <section id="header">
      <header className="header dark:text-white  py-20  px-4 flex flex-col items-center justify-center h-screen">
        <div className="header-container max-w-4xl mx-auto text-center px-4">
          <img
            src={profilePic}
            alt="JMP Profile Picture"
            className="w-80 h-80 rounded-full object-cover shadow-lg border-4 border-gray-700 mx-auto mb-14 dark:border-white"
          />
          <motion.h1
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: -50 }}
            transition={{ duration: 1.2 }}
            className="header-title text-5xl md:text-5xl font-bold mb-4 font-[source_code_pro]"
          >
            Hello, my name is Juan Martin Pilon
          </motion.h1>
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: -50 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="header-subtitle text-2xl md:text-3xl font-semibold mb-4 font-[source_code_pro]"
          >
            I'm a Software Engineer
          </motion.h2>
        </div>
      </header>
    </section>
  );
};

export default Header;
