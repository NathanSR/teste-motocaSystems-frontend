import { useState } from 'react';
import styles from './Search.module.css';
import { SearchProps } from './Search.types';
import { SearchIcon } from 'lucide-react';
import axios from '../../config/axios';

const Search: React.FC<SearchProps> = ({ placeholder = 'Buscar por código, modelo ou cor', state }) => {
    const [motorcycles, setMotorcycles] = state;
    let [filter, setFilter] = useState("");

    const onSearch = async () => {
        const resp = await axios.get(`/motorcycles?color=${filter}&id=${filter}&model=${filter}`)
        setMotorcycles([...resp.data])
        // filter = filter.toLocaleLowerCase();
        // const listFiltered = motorcycles.filter(moto =>
        //     moto.color.toLowerCase().includes(filter) ||
        //     moto.model.toLowerCase().includes(filter) ||
        //     moto.id.toLowerCase() === filter
        // );
        // setMotorcycles([...listFiltered])
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            onSearch();
        }
    };

    return (
        <div className={styles.Search}>
            <SearchIcon size="1.3rem" onClick={onSearch} />
            <input
                type="search"
                placeholder={placeholder}
                value={filter}
                onChange={e => setFilter(e.target.value)}
                onKeyDown={handleKeyDown}
            />
        </div>
    );
}

export default Search;