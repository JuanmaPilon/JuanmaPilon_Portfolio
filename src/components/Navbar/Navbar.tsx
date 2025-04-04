import './Navbar.css';

const NavBar = () => {
    return (
    <nav className="navbar">
        <div className='navbar-container'>
            <h2 className='navbar-about'>About me</h2>
            <h2 className='navbar-projects'>Projects</h2>
            <h2 className="logo">Logo</h2>
        </div>
    </nav>
    );
}

export default NavBar;