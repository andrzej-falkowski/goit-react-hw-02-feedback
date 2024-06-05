import propTypes from "prop-types";
import { FriendListItem } from "../FriendListItem/FriendListItem";

import styles from "./FriendList.module.css";

export const FriendList = ({ friends }) => {
  return (
  <ul className={styles.friendList}>
    {friends.map((friend) => (
      <FriendListItem
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
        key={friend.id}
      />
    ))}
  </ul>
  );
};

FriendList.propTypes = {
  id: propTypes.number,
  isOnline: propTypes.bool,
  avatar: propTypes.string,
  name: propTypes.string,
};
