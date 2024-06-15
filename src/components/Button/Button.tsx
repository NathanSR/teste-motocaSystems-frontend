import { MouseEvent, MouseEventHandler, useState } from 'react';
import styles from './Button.module.css';
import { ButtonProps } from './Button.types';
import { LoaderCircleIcon } from 'lucide-react';

const Button: React.FC<ButtonProps> = ({ icon, children, isAsync, theme = "default", onClick, hideLabelInMobile = false, ...props }) => {
    const [loading, setLoading] = useState(false);

    const whenClick = async (event: MouseEvent<HTMLButtonElement>) => {
        if (onClick) {
            try {
                setLoading(true);
                await onClick(event);
            } finally {
                setLoading(false);
            }
        }
    }

    return (
        <button
            className={`${styles.Button} ${styles[theme]} ${hideLabelInMobile ? styles['hideLabelInMobile'] : ""}`}
            type='button'
            onClick={whenClick}
            {...props}
        >
            {
                loading ?
                    <LoaderCircleIcon size="1.3rem" />
                    :
                    <>
                        {icon}
                        {(children) && <span>{children}</span>}
                    </>
            }
        </button>
    );
}

export default Button;