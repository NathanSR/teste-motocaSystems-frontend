# ListMotorcycles

O componente `ListMotorcycles` é responsável por exibir uma lista de motocicletas com opções para deletar e visualizar detalhes de cada moto.

## Propriedades

- `state: [Motorcycle[], React.Dispatch<React.SetStateAction<Motorcycle[]>>]`: Um estado que consiste em um array de objetos `Motorcycle` e uma função para atualizar esse estado.

## Funcionalidades

O componente `ListMotorcycles` oferece as seguintes funcionalidades:

### Exibição da Lista de Motocicletas

- Renderiza uma lista de motocicletas com informações como id, modelo, status, valor e cor.

### Deletar Moto

- Ao clicar no ícone de lixeira (`TrashIcon`), exibe um alerta para confirmar a exclusão da moto.
- Realiza uma requisição DELETE para a API para remover a moto do banco de dados.
- Atualiza a lista de motocicletas após a exclusão com uma requisição GET.
- Exibe um alerta de sucesso ou erro após a operação.

### Visualizar Detalhes da Moto

- Ao clicar no ícone de olho (`EyeIcon`), navega para a página de formulário com o ID da moto para edição ou visualização dos detalhes.

## Exemplo de Uso

```tsx
import ListMotorcycles from './ListMotorcycles';

const MotorcyclesPage = () => {
    const [motorcycles, setMotorcycles] = useState<Motorcycle[]>([]);

    useEffect(() => {
        // Lógica para carregar os dados das motocicletas na API
    }, []);

    return (
        <ListMotorcycles state={[motorcycles, setMotorcycles]} />
    );
};
