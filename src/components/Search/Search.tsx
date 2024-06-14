import styles from './Search.module.css';
import { SearchProps } from './Search.types';
import { SearchIcon } from 'lucide-react';

const Search: React.FC<SearchProps> = ({ placeholder = 'Buscar por código, nome ou cor' }) => {
    return (
        <div className={styles.Search}>
            <SearchIcon size="1.3rem" />
            <input type="search" placeholder={placeholder} />
        </div>
    );
}

export default Search;