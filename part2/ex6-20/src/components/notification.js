const Notification = ({ message }) => {
    const notificationStyle = {
        color: 'red',
        padding: 3,
        'text-align': 'center',
        'width': '100%',
        'font-weight': 'bold',
        backgroundColor: 'lightgrey',
        fontSize: 22
    }

    if (message === '') {
        return null
    }else {
        return (
            <div className="message" style={notificationStyle}>
                {message}
            </div>
        )
    }
}

export default Notification