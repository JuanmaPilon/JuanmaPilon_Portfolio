import './Contact.css';

const Contact = () => {
    return  (
        <section id="contacts" className="section-contact px-4 py-20 text-white flex flex-col items-center justify-center">
        <div className="contact max-w-2xl">
            <h1 className="contact-title text-4xl font-bold mb-4">Contact Me!</h1>
            <p className='contact-subtitle text-lg text-gray-200'>If you have any questions, feel free to reach out!</p>
        </div>
        </section>
    );
}

export default Contact;