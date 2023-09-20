import styles from './Avatar.module.css'
import { ImgHTMLAttributes } from "react";

type AvatarProps =  {
  hasBorder?: boolean;
} & ImgHTMLAttributes<HTMLImageElement>

export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  );
}