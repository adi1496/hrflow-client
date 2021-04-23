
const Header = () => {
    return(
        <header className="header">
            <div className="header__content">
                <div className="header__left">
                    <div className="header__logo" id="logo">
                        <img src="img/miniLogo.png" alt="hrFLOW logo" />
                    </div>
                    <nav className="header__nav">
                        <div className="header__item">
                            <a href="#" className="header__link">Home</a>
                        </div>
                        <div className="header__item">
                            <a href="#" className="header__link">People</a>
                        </div>
                        <div className="header__item">
                            <a href="#" className="header__link">Teams</a>
                        </div>
                    </nav>
                </div>
        
                <div className="header__right">
                    <div className="header__notifications"></div>
                    <div className="header__user">
                        <img src="img/user-adi.jpg" alt="user photo" className="header__user-photo" />
                        <div className="header__user-text">
                            <span className="header__user-name">Adrian</span>
                            <div className="header__user-arrow"></div>
                        </div>
                    </div>
                </div>
            </div>
    
    
            
        </header>
    )
}

export default Header;