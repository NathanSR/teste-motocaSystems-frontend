import { useLayoutEffect, useState } from 'react';
import styles from './Search.module.css';
import { SearchProps } from './Search.types';
import { SearchIcon } from 'lucide-react';
import axios from '../../config/axios';

const Search: React.FC<SearchProps> = ({ placeholder = 'Buscar por código, modelo ou cor', state, querySelector = "", isQueryTheAPI = false, APIRoute, APIField }) => {
    const [motorcycles, setMotorcycles] = state;
    let [filter, setFilter] = useState("");

    const onSearch = async () => {
        if (isQueryTheAPI) {
            const resp = await axios.get(`${APIRoute}?${APIField}=${filter}`)
            setMotorcycles([...resp.data])
        }
    }

    // Filtrar por querySelector no DOM do navegador
    useLayoutEffect(() => {
        if (isQueryTheAPI) return;

        let DOMItemReferences = Array.from(document.body.querySelectorAll(querySelector));
        DOMItemReferences.forEach((row, indexRow) => {
            const item = motorcycles[indexRow]
            if (
                item.color?.toLocaleLowerCase().includes(filter?.toLocaleLowerCase()) ||
                item.id?.toLocaleLowerCase().includes(filter?.toLocaleLowerCase()) ||
                item.model?.toLocaleLowerCase().includes(filter?.toLocaleLowerCase())
            )
                //@ts-ignore
                row.style.display = ""
            //@ts-ignore
            else row.style.display = "none"
        });


    }, [filter])

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        filter = e.target.value
        setFilter(filter);
        onSearch()
    }

    //Filtrar quando usuário apertar 'enter'
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
                onChange={onChange}
                onKeyDown={handleKeyDown}
            />
        </div>
    );
}

export default Search;