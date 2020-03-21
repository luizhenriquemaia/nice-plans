import React from 'react'
import moment from 'moment'


const Notifications = (props) => {
    const { notifications } = props
    return (
        <div>
            <span className="title">Notifications</span>
            <ul className="notifications-list">
                { notifications && notifications.map(item => {
                    return (
                        <li key={item.id}>
                            <span class="user-name">{item.user} - </span>
                            <span>{item.content}</span>
                            <div class="note-date">
                                {moment(item.time.toDate()).fromNow()}
                            </div>
                        </li>
                    )
                }) }
            </ul>
        </div>
    )
}

export default Notifications