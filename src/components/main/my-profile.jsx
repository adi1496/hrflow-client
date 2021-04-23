
const MyProfile = () => {
    return(
        <div className="profile">
                <div className="profile__user-information">
                    <div className="profile__details">
                        <figure className="profile__photo">
                            <img src="img/user-adi.jpg" alt="user-photo" className="profile__img" />
                        </figure>
                        <div className="profile__user-description">
                            <h3 className="profile__name">Adrian Matei</h3>
                            <div className="profile__position">Full Stack Developer</div>
                            <div className="profile__employed-time">Employed for 8 years, 11 months</div>
                            <div className="profile__infos">
                                <div className="profile__infos--left">
                                    <div className="profile__info">Departament:</div>
                                    <div className="profile__info">Position:</div>
                                    <div className="profile__info">Reports to:</div>
                                </div>
                                <div className="profile__infos--right">
                                    <div className="profile__info profile__info--bold">Development</div>
                                    <div className="profile__info profile__info--bold">Javascript Developer</div>
                                    <div className="profile__info profile__info--bold">Adrian Matei</div>
                                </div>
                            </div>
                            <div className="profile__contact">
                                <svg className="profile__contact--icon">
                                    <use xlinkHref="img/icons.svg#icon-envelope"></use>
                                </svg>
                                <span className="profile__contact--text">ady_matey@yahoo.com</span>
                            </div>
                            <div className="profile__contact">
                                <svg className="profile__contact--icon">
                                    <use xlinkHref="img/icons.svg#icon-phone"></use>
                                </svg>
                                <span className="profile__contact--text">0762455643</span>
                            </div>
                        </div>
                    </div>
                    <div className="profile__details-actions">
                        <button className="profile__delete">Del</button>
                        <button className="profile__suspend">Suspend</button>
                        <button className="profile__edit">Edit</button>
                    </div>
                </div>

                <div className="profile__tabs">
                    <button className="profile__tab profile__tab--active">Personal Information</button>
                    <button className="profile__tab">Qualifications</button>
                    <button className="profile__tab">Banking Information</button>
                    <button className="profile__tab">Job Information</button>
                </div>

                <div className="profile__personal-info">
                    <div className="profile__personal-data">
                        <div className="profile__personal-data-title">Info</div>

                        <div className="profile__info-box">
                            <label className="profile__info-label">Gender:</label>
                            <div className="profile__info-value">Male</div>
                        </div>
                        <div className="profile__info-box">
                            <label className="profile__info-label">Martial Status:</label>
                            <div className="profile__info-value">Single</div>
                        </div>
                        <div className="profile__info-box">
                            <label className="profile__info-label">Date of Birth:</label>
                            <div className="profile__info-value">14-03-1996</div>
                        </div>
                        <div className="profile__info-box">
                            <label className="profile__info-label">Title:</label>
                            <div className="profile__info-value">Mr.</div>
                        </div>
                        <div className="profile__info-box">
                            <label className="profile__info-label">Father's Name:</label>
                            <div className="profile__info-value">Nicolae</div>
                        </div>
                        <div className="profile__info-box">
                            <label className="profile__info-label">Nationality:</label>
                            <div className="profile__info-value">Romania</div>
                        </div>
                    </div>

                    <div className="profile__personal-data">
                        <div className="profile__personal-data-title">Address</div>

                        <div className="profile__info-box">
                            <label className="profile__info-label">Country:</label>
                            <div className="profile__info-value">Romania</div>
                        </div>
                        <div className="profile__info-box">
                            <label className="profile__info-label">City:</label>
                            <div className="profile__info-value">Cernisoara</div>
                        </div>
                        <div className="profile__info-box">
                            <label className="profile__info-label">Address:</label>
                            <div className="profile__info-value">Armasesti, strada Principala, nr. 7</div>
                        </div>
                        <div className="profile__info-box">
                            <label className="profile__info-label">Postal Code:</label>
                            <div className="profile__info-value">247096</div>
                        </div>
                    </div>

                    
                </div>

            </div>
    )
}

export default MyProfile;