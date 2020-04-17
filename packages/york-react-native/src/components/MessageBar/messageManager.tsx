import { Message } from '../Message'
import { Config, Notification } from './MessageBar';


export default {
  messageBar: {
    pushMessage: (notification: Notification) => {},
  },
  registerMessageBar(component: any) {
    this.messageBar = component;
  },
  unregisterMessageBar() {
    this.messageBar = {
      pushMessage: (notification: Notification) => {},
    };
  },
  showMessage(message: Message, config: Config) {
    if (this.messageBar) {
      this.messageBar.pushMessage({ message, config });
    }
  },
};
