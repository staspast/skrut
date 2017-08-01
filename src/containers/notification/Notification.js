import React, {Component} from 'react';
import NotificationSystem from 'react-notification-system';

class Notification extends Component {
    constructor() {
        super();

        this.state = {
            notificationSystem: null
        }
    }

    addNotification = (level, message) => {
        this.state.notificationSystem.addNotification({
            message: message,
            level: level
        });
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.success === true) {
            let message = 'success';
            this.addNotification('success', message);
        }

        if (nextProps.error === true) {
            let message = 'error';
            this.addNotification('error', message);
        }
    }

    render() {
        return (
            <div>
                <NotificationSystem ref={ n => this.state.notificationSystem = n } />
            </div>
        );
    }
}

export default Notification;