import { HomeIcon, LogOutIcon } from "lucide-react";
import Button from "../Button";
import { HeaderProps } from "./Header.types";
import styles from './Header.module.css';
import { useNavigate } from "react-router-dom";

const Header: React.FC<HeaderProps> = ({ contentHeaderTitle, contentHeaderAdditional }) => {
    const navigate = useNavigate()
    return (
        <header>
            <div className={styles.initialHeader}>
                <nav>
                    <Button icon={<HomeIcon size="2rem" />} theme='transparent' onClick={() => navigate("/motorcycles")} />
                    <Button icon={<LogOutIcon size="2rem" />} theme='transparent' onClick={() => navigate("/")} />
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