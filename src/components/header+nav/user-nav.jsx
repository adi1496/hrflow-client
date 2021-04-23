import { Link } from "react-router-dom";

const UserNavigation = () => {
    return(
        <nav className="user-nav user-nav--hidden" id="user-nav">
    
    
            <div className="user-nav__user-tools">
                <div className="user-nav__hello">
                    Hello <span>Adrian</span>!
                </div>
    
                <ul className="user-nav__list">
                    <li className="user-nav__item">
                        <svg className="user-nav__item--icon">
                            <use xlinkHref="img/icons.svg#icon-display"></use>
                        </svg>
                        <Link to='dashboard' className="user-nav__item--link">Dashboard</Link>
                    </li>
                    <li className="user-nav__item">
                        <svg className="user-nav__item--icon">
                            <use xlinkHref="img/icons.svg#icon-user-tie"></use>
                        </svg>
                        <Link to='my-profile' className="user-nav__item--link">My Proile</Link>
                    </li>
                    <li className="user-nav__item">
                        <svg className="user-nav__item--icon">
                            <use xlinkHref="img/icons.svg#icon-hourglass"></use>
                        </svg>
                        <Link to='time-management' className="user-nav__item--link">Time Management</Link>
                    </li>
                    <li className="user-nav__item">
                        <svg className="user-nav__item--icon">
                            <use xlinkHref="img/icons.svg#icon-tasks"></use>
                        </svg>
                        <Link to='tasks' className="user-nav__item--link">Tasks</Link>
                    </li>
                    <li className="user-nav__item">
                        <svg className="user-nav__item--icon">
                            <use xlinkHref="img/icons.svg#icon-calendar"></use>
                        </svg>
                        <Link to='calendar' className="user-nav__item--link">Calendar</Link>
                    </li>
                    <li className="user-nav__item">
                        <svg className="user-nav__item--icon">
                            <use xlinkHref="img/icons.svg#icon-airplane"></use>
                        </svg>
                        <Link to='leave-aplications' className="user-nav__item--link">Leave Applications</Link>
                    </li>
                    
                </ul>
            </div>
    
            <div className="user-nav__admin-tools">
                <div className="user-nav__hello">
                    Admin tools!
                </div>
    
                <ul className="user-nav__list">
                    <li className="user-nav__item">
                        <svg className="user-nav__item--icon">
                            <use xlinkHref="img/icons.svg#icon-office"></use>
                        </svg>
                        <Link to='company-config' className="user-nav__item--link">Company Config</Link>
                    </li>
                    <li className="user-nav__item">
                        <svg className="user-nav__item--icon">
                            <use xlinkHref="img/icons.svg#icon-cogs"></use>
                        </svg>
                        <Link to='reports' className="user-nav__item--link">Reports</Link>
                    </li>
                    <li className="user-nav__item">
                        <svg className="user-nav__item--icon">
                            <use xlinkHref="img/icons.svg#icon-stats-dots"></use>
                        </svg>
                        <Link to='statistics' className="user-nav__item--link">Statistics</Link>
                    </li>
                    <li className="user-nav__item">
                        <svg className="user-nav__item--icon">
                            <use xlinkHref="img/icons.svg#icon-user-plus"></use>
                        </svg>
                        <Link to='onboarding' className="user-nav__item--link">Onboarding</Link>
                    </li>
                    
                </ul>
            </div>
        </nav>
    )
}

export default UserNavigation;