import styles from "./button.module.css";

const Button = ({
  size = "m",
  As = "button",
  className = "",
  ...otherProps
}) => {
  return (
    <As
      {...otherProps}
      className={`${styles.button} ${styles[size]} ${className}`}
    />
  );
};

export default Button;
