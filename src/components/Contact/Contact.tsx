import './Contact.css';
import {SiGmail, SiLinkedin} from 'react-icons/si';

const Contact = () => {
    return  (
        <section id="contacts" className="section-contact px-4 py-20 text-white flex flex-col items-center justify-center">
        <div className="contact max-w-2xl w-full text-center">
            <h1 className="contact-title text-4xl font-bold mb-6">Contact Me!</h1>
            <a href="mailto:juanmartin.pilon@gmail.com"
            className='inline-flex items-center gap-2 bg-red-400 hover:bg-red-600 text-white font-semibold py-2 px-5 rounded-full transition mx-1'>
                <SiGmail className='text-2xl' />
            </a>
            <a 
            href="https://www.linkedin.com/in/juanmartinpilon/" target="_blank" rel="noopener noreferrer"
            className='inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-5 rounded-full transition mx-1'>
                <SiLinkedin className='text-2xl' />
            </a>
            <p className='contact-subtitle text-lg text-gray-300 mt-6'>If you have any questions, feel free to reach out!</p>
        </div>
        </section>
    );
}

export default Contact;