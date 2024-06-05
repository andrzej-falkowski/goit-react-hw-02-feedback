import propTypes from "prop-types";
import styles from "./Statistics.module.css";

function getRandomColor() {
  let symbols = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += symbols[Math.floor(Math.random() * 16)];
  }
  return color;
}

export const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.statsList}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              className={styles.stats}
              key={id}
              style={{ backgroundColor: getRandomColor() }}>
              <span className={styles.label}>{label}</span>
              <span className={styles.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  label: propTypes.string,
  percentage: propTypes.number,
};
