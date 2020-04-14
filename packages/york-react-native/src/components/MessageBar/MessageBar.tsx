// Peer dependecies
/* eslint-disable import/no-unresolved, import/extensions */
import React, { Component } from 'react';
import { View, Animated, PanResponder, StyleSheet, SafeAreaView, PanResponderStatic, PanResponderInstance } from 'react-native';
import { Message as MessageComponent } from 'york-react-native/components'
/* eslint-enable import/no-unresolved, import/extensions */

import messageManager from './messageManager';
import { Message } from '../Message';

const MIN_SWIPE_DISTANCE = 20;
const MIN_SWIPE_VELOCITY = 0.15;

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
});

export type Notification = {
  message: Message,
  config: Config,
  isVisibleAnimValue?: Animated.Value,
  key?: string,
}

export type Config = {
  duration: number,
  slideAnimationOffset: number,
  showAnimationDuration: number,
  hideAnimationDuration: number,
  closeOnSwipe: boolean,
}

type Props = {
  overlayDuration: number,
  messageComponent: typeof MessageComponent,
}

const defaultConfig: Config = {
  duration: 1000,
  slideAnimationOffset: 40,
  showAnimationDuration: 255,
  hideAnimationDuration: 255,
  closeOnSwipe: true,
};

type State = {
  notifications: ReadonlyArray<Notification>,
}

export default class MessageBar extends Component<Props, State> {
  panResponder: PanResponderInstance | null
  static defaultProps = {
    messageComponent: MessageComponent,
    overlayDuration: 0,
  };

  constructor(props: Props) {
    super(props);
    this.panResponder = null;
    this.state = {
      notifications: [],
    };
  }

  componentDidMount() {
    this.panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: (e, gesture) => (
        defaultConfig.closeOnSwipe
        && gesture.dy < -MIN_SWIPE_DISTANCE
        && gesture.vy < -MIN_SWIPE_VELOCITY
      ),
      onPanResponderMove: () => {
        this.hideMessage();
      },
      onShouldBlockNativeResponder: () => true,
    });
    messageManager.registerMessageBar(this);
  }

  componentWillUnmount() {
    messageManager.unregisterMessageBar();
  }

  pushMessage(notification: Notification) {
    const { notifications } = this.state;
    this.setState(
      {
        notifications: [
          ...notifications,
          {
            message: notification.message,
            config: {
              ...defaultConfig,
              ...notification.config,
            },
            isVisibleAnimValue: new Animated.Value(0),
            key: `${Date.now().toString()}`,
          },
        ],
      },
      () => {
        this.showMessage(notification);
      },
    );
  }

  showMessage(notificationParam: Notification) {
    const { overlayDuration } = this.props;
    const { notifications } = this.state;
    const notification = notifications.find(itemOfNotifications => itemOfNotifications.message === notificationParam.message);

    if (notification && notification.isVisibleAnimValue) {
      const { duration, showAnimationDuration } = notification.config;
      notification.isVisibleAnimValue.setValue(0);

      Animated.timing(
        notification.isVisibleAnimValue,
        {
          toValue: 1,
          duration: showAnimationDuration,
          useNativeDriver: true,
        },
      ).start(() => {
        setTimeout(() => this.hideMessage(notification), duration);
      });
      if (notifications.length > 1) {
        setTimeout(() => this.hideMessage(notifications[0]), overlayDuration);
      }
    }
  }

  hideMessage(notificationParam?: Notification) {
    const { notifications } = this.state;

    const notification = notificationParam 
      ? notifications.find(itemOfNotifications => itemOfNotifications.message === notificationParam.message)
      : notifications[notifications.length - 1];

    const notificationIndex = notificationParam
      ? notifications.findIndex(itemOfNotifications => itemOfNotifications.message === notificationParam.message)
      : notifications.findIndex(itemOfNotifications => itemOfNotifications.message === notifications[notifications.length -1].message)

    if (notification && notification.isVisibleAnimValue && notifications.includes(notification)) {
      const { hideAnimationDuration } = notification.config;

      Animated.timing(
        notification.isVisibleAnimValue,
        {
          toValue: 0,
          duration: hideAnimationDuration,
          useNativeDriver: true,
        },
      ).start(() => {
        if (notifications.includes(notification)) {
          this.setState({
            notifications: notifications.filter((itemOfNotifications, index) => index !== notificationIndex),
          });
        }
      });
    }
  }

  render() {
    const { notifications } = this.state;
    const { messageComponent: MessageComponent } = this.props;
    const { slideAnimationOffset } = defaultConfig;
    const panHandlers = this.panResponder ? this.panResponder.panHandlers : {}

    return (
      <View style={styles.root}>
        <SafeAreaView />
        <View style={{ position: 'relative' }}>
          {
            notifications.map((notification, index) => {
              if (!notification.isVisibleAnimValue) return null
              const translateY = notification.isVisibleAnimValue.interpolate({
                inputRange: [0, 1],
                outputRange: [-slideAnimationOffset, 0],
              });
              const opacity = notification.isVisibleAnimValue.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              });

              return (
                <Animated.View
                  style={[
                    styles.root,
                    { transform: [{ translateY }] },
                    { opacity },
                  ]}
                  key={notification.key}
                >
                  <View {...panHandlers}>
                    {notification && (
                      <MessageComponent
                        message={notification.message}
                        hideMessage={() => this.hideMessage(notification)}
                        index={index}
                        count={notifications.length}
                      />
                    )
                    }
                  </View>
                </Animated.View>
              );
            })
          }
        </View>
      </View>
    );
  }
}
