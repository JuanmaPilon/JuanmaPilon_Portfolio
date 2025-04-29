import './Contact.css';
import {SiGithub, SiGmail, SiLinkedin} from 'react-icons/si';

const Contact = () => {
    return  (
        <section id="contacts" className="section-contact px-4 py-20 text-white flex flex-col items-center justify-center">
        <div className="contact max-w-2xl w-full text-center">
            <h1 className="contact-title text-4xl font-bold mb-6">Contact Me!</h1>
            <a href="mailto:juanmartin.pilon@gmail.com"
            className='inline-flex items-center gap-2 text-red-400 hover:text-red-600 font-semibold py-2 px-3 transition mx-0.5'>
                <SiGmail className='text-2xl' />
            </a>
            <a 
            href="https://www.linkedin.com/in/juanmartinpilon/" target="_blank" rel="noopener noreferrer"
            className='inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold py-2 px-3 transition mx-0.5'>
                <SiLinkedin className='text-2xl' />
            </a>
            <a
            href="https://github.com/JuanmaPilon" target="_blank" rel="noopener noreferrer"
            className='inline-flex items-center gap-2 text-gray-200 hover:text-gray-400 font-semibold py-2 px-3 transition mx-0.5'
            >
                <SiGithub className='text-2xl' />
            </a>
            <p className='contact-subtitle text-lg text-gray-300 mt-6'>If you have any questions, feel free to reach out!</p>
        </div>
        </section>
    );
}

export default Contact;