import { useEffect, useState } from "react";
import { Link, Route, useLocation } from "react-router-dom";

const MyProfile = ({user}) => {
    const noData = 'Not Specified';
    const [profileTabActive, setProfileTabActive] = useState(new URLSearchParams (useLocation().search).get('page'));
    console.log(profileTabActive);

    const handleTab = e => {
        console.log('link to');
        return <Link to='/' />
    }

    // console.log(useLocation());

    return(
        <div className="profile">
                <div className="profile__user-information">
                    <div className="profile__details">
                        <figure className="profile__photo">
                            <img src="img/user-adi.jpg" alt="user" className="profile__img" />
                        </figure>
                        <div className="profile__user-description">
                            <h3 className="profile__name">Adrian Matei</h3>
                            <div className="profile__position">{user.actualPosition || noData}</div>
                            <div className="profile__employed-time">{user.userRole === 'admin' ? '-' : user.employedTime}</div>
                            <div className="profile__infos">
                                <div className="profile__infos--left">
                                    <div className="profile__info">Departament:</div>
                                    <div className="profile__info">Role:</div>
                                    <div className="profile__info">Reports to:</div>
                                </div>
                                <div className="profile__infos--right">
                                    <div className="profile__info profile__info--bold">{user.actualDepartment || noData}</div>
                                    <div className="profile__info profile__info--bold">{user.userRole}</div>
                                    <div className="profile__info profile__info--bold">{user.reportsTo || noData}</div>
                                </div>
                            </div>
                            <div className="profile__contact">
                                <svg className="profile__contact--icon">
                                    <use xlinkHref="img/icons.svg#icon-envelope"></use>
                                </svg>
                                <span className="profile__contact--text">{user.email}</span>
                            </div>
                            <div className="profile__contact">
                                <svg className="profile__contact--icon">
                                    <use xlinkHref="img/icons.svg#icon-phone"></use>
                                </svg>
                                <span className="profile__contact--text">{user.phone}</span>
                            </div>
                        </div>
                    </div>
                    <div className="profile__details-actions">
                        <button className="profile__delete">Delete</button>
                        <button className="profile__suspend">Suspend</button>
                        <button className="profile__edit">Edit</button>
                    </div>
                </div>

                <div className="profile__tabs">
                    <button onClick={handleTab} className={`profile__tab ${(!profileTabActive||profileTabActive==='personal-info')?'profile__tab--active':''}`}>Personal Information</button>
                    <button className={`profile__tab ${profileTabActive==='qualifications'?'profile__tab--active':''}`}>Qualifications</button>
                    <button className={`profile__tab ${profileTabActive==='bank-info'?'profile__tab--active':''}`}>Banking Information</button>
                    <button className={`profile__tab ${profileTabActive==='job-info'?'profile__tab--active':''}`}>Job Information</button>
                </div>

                <div className="profile__personal-info">
                    
                    <div className="profile__personal-data">
                        <div className="profile__personal-data-title">Info</div>

                        <ProfileInfoBox label='Gender' value={user.gender || noData} />
                        <ProfileInfoBox label='Martial Status:' value={user.martialStatus || noData} />
                        <ProfileInfoBox label='Date of Birth' value={user.dateOfBirth || noData} />
                        <ProfileInfoBox label='Title' value={user.title || noData} />
                        <ProfileInfoBox label='Nationality' value={user.nationality || noData} />
                        
                    </div>

                    <div className="profile__personal-data">
                        <div className="profile__personal-data-title">Address</div>

                        <ProfileInfoBox label='Country' value={user.country || noData}  />
                        <ProfileInfoBox label='City' value={user.city || noData}  />
                        <ProfileInfoBox label='Address' value={user.address || noData}  />
                        <ProfileInfoBox label='Postal Code' value={user.postalCode || noData}  />

                    </div>

                    
                </div>

            </div>
    )
}



const ProfileInfoBox = ({label, value}) => {
    return(
        <div className="profile__info-box">
            <label className="profile__info-label">{`${label}:`}</label>
            <div className="profile__info-value">{value}</div>
        </div>
    )
}

export default MyProfile;