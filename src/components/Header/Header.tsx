import { HomeIcon } from "lucide-react";
import Button from "../Button";
import { HeaderProps } from "./Header.types";
import styles from './Header.module.css';

const Header: React.FC<HeaderProps> = ({ contentHeaderTitle, contentHeaderAdditional }) => {
    return (
        <header>
            <div className={styles.initialHeader}>
                <nav>
                    <Button icon={<HomeIcon />} theme='transparent' />
                    <div className={styles.userProfilePicture} />
                </nav>
            </div>
            <div className={styles.contentHeader}>
                <h1>{contentHeaderTitle}</h1>
                {contentHeaderAdditional}
            </div>
        </header>
    )
}

export default Header