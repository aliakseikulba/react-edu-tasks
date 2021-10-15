import React from 'react';
import styles from './Message.module.css';

type MessageType = {
  avatar: string
  name: string
  message: string
  time: string
}

function Message(props: MessageType) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <div className={styles.avatarBlock}>
          <img src={props.avatar} alt="user avatar"/>
        </div>
        <div className={styles.textBubble}>
          <div className={styles.messageBlock}>
            <div className={styles.userData}>
              <div className={styles.userName}>
                {props.name}
              </div>
              <div className={styles.userMessage}>
                {props.message}
              </div>
            </div>
            <div className={styles.timeData}>
              {props.time}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
