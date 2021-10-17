import styles from "../components/NavBar.module.css";

export default function NavBar(props) {
  return (
    <div className={styles["NavBar"]}>
      <div className={styles["NavBar-Brand"]}>{props.brand}</div>

      <div className={styles["NavBar-Links"]}>
        {props.links.map((link, index) => {
          return <a key={index}>{link}</a>;
        })}
      </div>
    </div>
  );
}
