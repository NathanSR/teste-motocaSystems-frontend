import { useState } from 'react';
import styles from './Search.module.css';
import { SearchProps } from './Search.types';
import { SearchIcon } from 'lucide-react';

const Search: React.FC<SearchProps> = ({ placeholder = 'Buscar por código, nome ou cor', state }) => {
    const [motorcycles, setMotorcycles] = state;
    const [filter, setFilter] = useState("");
    const onChangeFilter = () => {
        const listFiltered = motorcycles.filter(moto => moto.id.toLocaleLowerCase().includes(filter) || moto.color.toLocaleLowerCase().includes(filter) || moto.model.toLocaleLowerCase().includes(filter))
        setMotorcycles([...listFiltered])
    }

    return (
        <div className={styles.Search}>
            <SearchIcon size="1.3rem" />
            <input type="search" placeholder={placeholder} value={filter} onChange={onChangeFilter} />
        </div>
    );
}

export default Search;