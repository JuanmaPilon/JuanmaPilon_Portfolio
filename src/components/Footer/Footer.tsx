import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer bg-black/30 backdrop-blur-md text-white py-3 px-4">
            <div className='footer-container max-4-xl mx-auto flex flex-col items-center justify-center gap-2 font-serif'>
                <p className="footer-text text-sm">© Juan Martin Pilon. All rights reserved.</p>
                <p className="footer-subtext text-sm">Made by Juan Martin Pilon</p>
            </div>
        </footer>
    );
}

export default Footer;