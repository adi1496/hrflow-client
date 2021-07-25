
const AppMsg = ({appMessage, handleAppMessageBtn}) => {
    return (
        <div className={`message-screen ${appMessage.hidden ? 'message-screen--hidden' : ''}`}>
            <div className="message-screen__box">
                <svg className={`message-screen__icon ${appMessage.error ? 
                        'message-screen__icon--error': ''}`}>
                    <use xlinkHref={`img/icons.svg#${appMessage.error ? 'icon-x-altx-alt': 'icon-cloud_done'}`}></use>
                </svg>
                <div className={`message-screen__message ${appMessage.error ? 
                        'message-screen__message--error': ''}`}>{appMessage.message}</div>
                <button onClick={handleAppMessageBtn} className="message-screen__button">Ok</button>
            </div>
        </div>
    )
}

export default AppMsg;