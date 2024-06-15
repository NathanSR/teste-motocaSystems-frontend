# Header

O componente `Header` é responsável por exibir o cabeçalho padrão do sistema, geralmente contendo botões de navegação e informações adicionais. Ele está dividido em dois blocos: 
- `initialHeader`: que é o cabeçalho inicial com menu de navegação;
- `contentHeader`: que é o cabeçalho do conteúdo da página, que pode receber as propriedades abaixo;

## Propriedades

- `contentHeaderTitle: React.ReactNode`: Título principal exibido no cabeçalho do conteúdo.
- `contentHeaderAdditional?: React.ReactNode`: Conteúdo adicional opcional a ser exibido ao lado do título principal.

## Componente `Button`

O componente `Header` utiliza o componente `Button` para os botões de navegação. O `Button` é configurado com os seguintes atributos:

### Botão Home

- Ícone: `HomeIcon`
- Tema: "transparent"
- Função: Navega para "/motorcycles"

### Botão Logout

- Ícone: `LogOutIcon`
- Tema: "transparent"
- Função: Navega para "/", simbolizando um logout

## Exemplo de Uso

```tsx
import Header from './Header';

const MyPage = () => {
    return (
        <Header
            contentHeaderTitle="Título do Cabeçalho"
            contentHeaderAdditional={<p>Informação adicional</p>}
        />
    );
};
