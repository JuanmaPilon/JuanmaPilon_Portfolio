import './About.css';
import { motion } from 'framer-motion';
import Carousel from '../Tech-Carousel/Tech-Carousel';

const About = () => {
    return (
        <section id="about" className="section-about py-40 px-6 text-white h-screen">
        <div className="about-container max-w-3xl mx-auto text-center my-15">
        <motion.h2 
                  initial={{ opacity: 0, y: -200 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  animate={{ opacity: 1, y: -50 }}
                  transition={{ duration: 1.2 }}
                  className="text-4xl font-bold mb-6 font-[source_code_pro]">Who am I?</motion.h2>
            <p className='about-description text-lg leading-relaxed text-gray-200 font-[source_code_pro]'>I'm a Software Developer with solid experience in designing and developing full-scale applications, and a strong understanding of various software ecosystems.
Graduate of UTEC University, with over two years of experience in the IT sector, I am proficient in modern technologies and specialize in creating scalable and efficient solutions.
Recognized for my ability to tackle complex problems and collaborate in multidisciplinary teams to deliver high-quality products.</p>
        </div>
        <Carousel></Carousel>
        </section>
    );
}

export default About;