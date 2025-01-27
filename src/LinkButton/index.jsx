import React from "react";
import styles from "./LinkButton.module.css";

export default function LinkButton({ href, children, variant = "primary", size = "m" }) {
  return <a
    className={`${styles.root} ${variant === "primary" ? styles.primary : styles.secondary} ${size === "m" ? styles.medium : styles.large}`}
    href={href}>
        {children}
    </a>;
};

