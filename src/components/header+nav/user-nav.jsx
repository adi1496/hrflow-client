import { Link } from "react-router-dom";

const UserNavigation = ({user}) => {

    return(
        <nav className="user-nav user-nav--hidden" id="user-nav">
    
            <div className="user-nav__user-tools">
                <div className="user-nav__hello">
                    Hello <span>{user.firstName}</span>!
                </div>
    
                <ul className="user-nav__list">
                    
                    <NavItem iconID='icon-display' link='/dashboard' name='Dashboard' />
                    <NavItem iconID='icon-user-tie' link='/my-profile' name='My Proile' />
                    <NavItem iconID='icon-hourglass' link='/time-management' name='Time Management' />
                    <NavItem iconID='icon-tasks' link='/tasks' name='Tasks' />
                    <NavItem iconID='icon-calendar' link='/calendar' name='Calendar' />
                    <NavItem iconID='icon-airplane' link='/leave-aplications' name='Leave Applications' />
                    
                </ul>
            </div>

            {
                user.userRole === 'admin' ? <AdminTools /> : ''
            }
    
            
        </nav>
    )
}


const NavItem = ({iconID, link, name}) => {
    return(
        <li className="user-nav__item">
            <svg className="user-nav__item--icon">
                <use xlinkHref={`img/icons.svg#${iconID}`}></use>
            </svg>
            <Link to={link} className="user-nav__item--link">{name}</Link>
        </li>
    )
}


const AdminTools = () => {
    return(
        <div className="user-nav__admin-tools">
            <div className="user-nav__hello">
                Admin tools!
            </div>

            <ul className="user-nav__list">

                <NavItem iconID='icon-office' link='/company-config' name='Company Config' />
                <NavItem iconID='icon-cogs' link='/reports' name='Reports' />
                <NavItem iconID='icon-stats-dots' link='/statistics' name='Statistics' />
                <NavItem iconID='icon-user-plus' link='/onboarding' name='Onboarding' />

            </ul>
        </div>
    )
}


export default UserNavigation;