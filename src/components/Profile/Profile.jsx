import { Component } from "react";
import propTypes from "prop-types";
import styles from "./Profile.module.css"

export class Profile extends Component {
  static defaultProps = {};

  static propTypes = {
    username: propTypes.string,
    tag: propTypes.string,
    location: propTypes.string,
    avatar: propTypes.string,
    stats: propTypes.shape({
      followers: propTypes.number,
      views: propTypes.number,
      likes: propTypes.number,
    }),
  };

  render() {
    return (
      <div className={styles.profile}>
        <div className={styles.description}>
          <img src={this.props.avatar} alt="User avatar" className={styles.avatar} />
          <p className={styles.name}>{this.props.username}</p>
          <p className={styles.tag}>@pmarica</p>
          <p className={styles.location}>Salvador, Brasil</p>
        </div>

        <ul className={styles.stats}>
          <li className={styles.item}>
            <span className={styles.label}>Followers</span>
            <span className={styles.quantity}>{this.props.stats.followers}</span>
          </li>
          <li className={styles.item}>
            <span className={styles.label}>Views</span>
            <span className={styles.quantity}>{this.props.stats.views}</span>
          </li>
          <li className={styles.item}>
            <span className={styles.label}>Likes</span>
            <span className={styles.quantity}>{this.props.stats.likes}</span>
          </li>
        </ul>
      </div>
    )
  }
}
