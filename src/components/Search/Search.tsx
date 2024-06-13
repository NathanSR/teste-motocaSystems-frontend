import styles from './Search.module.css';
import { SearchProps } from './Search.types';
import { SearchIcon } from 'lucide-react';

const Search: React.FC<SearchProps> = ({ children, ...props }) => {
    return (
        <div className={styles.Search}>
            <SearchIcon size="1.3rem" />
            <input type="search" placeholder='Buscar por código, nome e cor' />
        </div>
    );
}

export default Search;