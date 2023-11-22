import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

const getRandomHexColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};

export const Statistics = ({ title = null, data }) => {
    return (
        <section className={styles.statistics}>
            {title !== null && <h2 className={styles.title}>{title}</h2>}

            <ul className={styles.statList}>
                {data.map(item => (
                    <li key={item.id} className={styles.item} style={{ backgroundColor: getRandomHexColor(), flex: 1}}>
                        <span className={styles.label}>{item.label}</span>
                        <span className={styles.percentage}>{item.percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    data: PropTypes.array,
};
