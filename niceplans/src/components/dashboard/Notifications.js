import React from 'react'
import moment from 'moment'


const Notifications = (props) => {
    const { notifications } = props
    return (
        <div className="notifications section">
            <div className="title">
                Notifications
            </div>
            <ul className="notifications-list">
                { notifications && notifications.map(item => {
                    return (
                        <li key={item.id}>
                            <p>
                                <span class="user-name">{item.user} - </span> 
                                {item.content}
                            </p>
                            <p class="note-date">
                                {moment(item.time.toDate()).fromNow()}
                            </p>
                        </li>
                    )
                }) }
            </ul>
        </div>
    )
}

export default Notifications