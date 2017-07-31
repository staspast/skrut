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
            this.addNotification('success', 'success');

        }

        if (nextProps.error === true) {
            this.addNotification('error', 'error');
        }
    }

    render() {
        return (
            <div>
                <NotificationSystem ref={n => this.state.notificationSystem = n} />
            </div>
        );
    }
}

export default Notification;