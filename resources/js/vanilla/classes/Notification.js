/*
    @message - displayed in notification
    @status - notification style
    @pos
    @timeout
 */
class Notification {
    constructor(notParams) {
        this.notParams = notParams;
    }
    checkPosition() {
        let fixedTop = document.querySelector('.topFixedMenu');
        let notification = document.querySelector('.uk-notification');

        if (fixedTop) {
            notification.style.top = '50px';
        }

        window.addEventListener('scroll', function () {
            let notification = document.querySelector('.uk-notification');

            if (window.pageYOffset >= 60) {
                if (notification) {
                    notification.style.top = '50px';
                }
            } else {
                if (notification) {
                    notification.style.top = '56px';
                }
            }
        })
    }

    show() {
        UIkit.notification.closeAll()
        UIkit.notification(this.notParams);

        this.checkPosition();
    }

    hide() {
        UIkit.notification.closeAll()
    }
}


export default Notification
