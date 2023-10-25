const Header = () => {
    return ( 
        <div className="header">
            <img className='logo' src="logo-website.png" alt="logo" />
            <nav>
                <ul>
                    <li>من نحن</li>
                    <li>لماذا نحن</li>
                    <li>أراء العملاء</li>
                    <li>روابط التحميل</li>
                </ul>
            </nav>
            <div className="social">
                <a href="/">
                    <img className='socialIcon' src="facebook.png" alt="Facebook" />
                </a>
                <a href="/">
                    <img className='socialIcon' src="instagram.png" alt="Instagram" />
                </a>
                <a href="/">
                    <img className='socialIcon' src="wahtsapp.png" alt="WhatsApp" />
                </a>
            </div>
            <div className="menu-trigger">
                Menu
            </div>
        </div>
    );
}

export default Header;