import classNames from 'classnames';
import styles from './Button.module.css';

type ButtonProps = {
  variant: "default" | "icon";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ children, variant, ...rest }: ButtonProps) {
  const classMap = {
    default: styles.default,
    icon: styles.icon,
  };

  return (
    <button className={classNames(styles.button, classMap[variant])} {...rest}>
      {children}
    </button>
  );
};

export default Button;