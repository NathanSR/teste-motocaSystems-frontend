# Search

O componente `Search` é utilizado para realizar buscas e filtragens em uma lista de itens, tanto localmente no DOM quanto fazendo requisições para uma API.

## Propriedades

- `state: [any[], React.Dispatch<React.SetStateAction<any[]>>]`: Um estado que consiste em um array de objetos e uma função para atualizar esse estado.
- `placeholder?: string`: Texto exibido como placeholder no campo de busca.
- `isQueryTheAPI: boolean`: Indica se a busca deve ser feita diretamente na API (`true`) ou localmente no DOM (`false`).
- `querySelector?: string`: Seletor CSS para localizar os elementos no DOM que serão filtrados (usado apenas se `isQueryTheAPI` for `false`).
- `APIRoute?: string`: Rota da API para consultar os dados (usado apenas se `isQueryTheAPI` for `true`).
- `APIField?: string`: Campo específico da API a ser consultado (ex: model, color) para realizar a busca (usado apenas se `isQueryTheAPI` for `true`).

## Funcionalidades

O componente `Search` oferece as seguintes funcionalidades:

### Campo de Busca

- Renderiza um campo de busca onde o usuário pode digitar termos para filtrar os items de uma lista.

### Busca Local (DOM)

- Se `isQueryTheAPI` for `false`, filtra os elementos no DOM usando o `querySelector` especificado.
- Atualiza dinamicamente a visibilidade dos elementos com base nos termos digitados pelo usuário.

### Busca na API

- Se `isQueryTheAPI` for `true`, realiza uma requisição GET para a `APIRoute` especificada com base no `APIField`.
- Atualiza o estado dos items com os resultados obtidos da API.

### Eventos de Busca

- Ao pressionar `Enter` no campo de busca, executa a função de busca.
- Ao clicar no ícone de busca (`SearchIcon`), executa a função de busca.

## Exemplo de Uso

```tsx
import Search from './Search';

const MotorcyclesPage = () => {
    const [motorcycles, setMotorcycles] = useState<Motorcycle[]>([]);

    useEffect(() => {
        // Lógica para carregar os dados das motocicletas
    }, []);

    return (
        <div>
            <Search
                state={[motorcycles, setMotorcycles]}
                placeholder="Buscar por código, modelo ou cor"
                querySelector=".motorcycle-item"
                isQueryTheAPI={false}
            />
            {/* Lista de motocicletas renderizadas */}
            {motorcycles.map(motorcycle => (
                <div key={motorcycle.id} className="motorcycle-item">
                    {/* Renderização do item da motocicleta */}
                </div>
            ))}
        </div>
    );
};
