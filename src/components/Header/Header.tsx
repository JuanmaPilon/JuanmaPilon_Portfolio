import './Header.css';

const Header = () => {
    return (
        <header className="header text-white py-20  px-4 flex flex-col items-center justify-center h-screen">
            <div className='header-container max-w-4xl mx-auto text-center px-4'>
        <h1 className="header-title text-4xl md:text-5xl font-bold mb-4">Hello, my name is Juan Martin Pilon</h1>
        <h2 className="header-subtitle">I'm a Software Engineer</h2>
        </div>
        </header>
    );
}

export default Header;