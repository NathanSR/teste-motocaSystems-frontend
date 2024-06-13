import styles from './Button.module.css';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({ icon, children, isAsync, theme = "default",  ...props }) => {
    return (
        <button className={`${styles.Button} ${styles[theme]}`} type='button' {...props}>
            {icon}
            {children}
        </button>
    );
}

export default Button;