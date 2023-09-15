import styles from "./Avatar.module.css";

export function Avatar({
  hasBorder = true,
  src = "https://via.placeholder.com/64",
}) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  );
}
