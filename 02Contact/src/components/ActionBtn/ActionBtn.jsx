import styles from "./ActionBtn.module.css";

export default function ActionBtn({ label, icon, onPress, isOutline }) {
  return (
    <button
      onClick={onPress}
      className={`${styles.btnCtr} ${isOutline && styles.outline}  `}
    >
      {icon}
      <p>{label}</p>
    </button>
  );
}
