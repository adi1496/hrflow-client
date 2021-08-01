import { useState } from "react";
import { Link } from "react-router-dom";

import {userNav, adminNav} from './navList.js';

const UserNavigation = ({user}) => {
    // const [location, setLocation] = useState(useLocation());
    const [target, setTarget] = useState(null);
    // console.log(location);

    const handleLocationChange = e => {
        if(target) target.classList.remove(`${target.classList[0]}--active`);
        const newTarget = e.target.parentNode;
        newTarget.classList.add(`${newTarget.className}--active`);
        setTarget(newTarget);
    }

    return(
        <nav className="user-nav user-nav--hidden" id="user-nav">
    
            <div className="user-nav__user-tools">
                <div className="user-nav__hello">
                    Hello <span>{user.firstName}</span>!
                </div>
    
                <ul className="user-nav__list">
                    {userNav.map((el, index) => {
                        return <NavItem key={index} iconID={el.icon} link={el.path} name={el.name} 
                            handleLocationChange={handleLocationChange} />
                    })}

                    {/* <NavItem iconID='icon-display' link='/dashboard' name='Dashboard' />
                    <NavItem iconID='icon-user-tie' link='/my-profile' name='My Profile' />
                    <NavItem iconID='icon-hourglass' link='/time-management' name='Time Management' />
                    <NavItem iconID='icon-tasks' link='/tasks' name='Tasks' />
                    <NavItem iconID='icon-calendar' link='/calendar' name='Calendar' />
                    <NavItem iconID='icon-airplane' link='/leave-aplications' name='Leave Applications' /> */}
                    
                </ul>
            </div>

            {
                user.userRole === 'admin' ? <AdminTools adminNav={adminNav} handleLocationChange={handleLocationChange}/> : ''
            }
    
            
        </nav>
    )
}

const AdminTools = ({adminNav, handleLocationChange}) => {
    return(
        <div className="user-nav__admin-tools">
            <div className="user-nav__hello">
                Admin tools!
            </div>

            <ul className="user-nav__list">
                    {adminNav.map((el, index) => {
                        return <NavItem key={index} iconID={el.icon} link={el.path} name={el.name} 
                            handleLocationChange={handleLocationChange} />
                    })}

                {/* <NavItem iconID='icon-office' link='/company-config' name='Company Config' />
                <NavItem iconID='icon-cogs' link='/reports' name='Reports' />
                <NavItem iconID='icon-stats-dots' link='/statistics' name='Statistics' />
                <NavItem iconID='icon-user-plus' link='/onboarding' name='Onboarding' /> */}

            </ul>
        </div>
    )
}


const NavItem = ({iconID, link, name, handleLocationChange}) => {
    return(
        <li className="user-nav__item">
            <svg className="user-nav__item--icon">
                <use xlinkHref={`img/icons.svg#${iconID}`}></use>
            </svg>
            <Link to={link} onClick={handleLocationChange} className="user-nav__item--link">{name}</Link>
        </li>
    )
}


export default UserNavigation;