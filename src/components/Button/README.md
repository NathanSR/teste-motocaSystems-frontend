# Button

O componente `Button` é usado para renderizar um botão com funcionalidades adicionais como ícone opcional, suporte para operações assíncronas e estilização baseada em temas.

## Propriedades

- `icon?: React.ReactNode`: Um ícone opcional a ser exibido antes do conteúdo do botão.
- `children?: React.ReactNode`: Conteúdo interno do botão, como texto ou outros elementos React.
- `theme?: "transparent" | "default"`: Define o tema do botão. Pode ser "transparent" para um botão transparente ou "default" para o tema padrão.
- `hideLabelInMobile?: boolean`: Oculta o rótulo do botão em dispositivos móveis quando definido como `true`.
- `onClick?: (event: MouseEvent<HTMLButtonElement>) => void | Promise<void>`: Função de callback chamada quando o botão é clicado. Pode ser síncrona ou assíncrona.
- Quaisquer outras propriedades válidas de um elemento `<button>` do HTML podem ser passadas e serão repassadas para o elemento `<button>` renderizado.

## Exemplo de Uso

```tsx
import Button from './Button';

const MyComponent = () => {
    const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {};

    return (
        <Button
            icon={<IconComponent />}
            isAsync={true}
            theme="default"
            hideLabelInMobile={false}
            onClick={handleClick}
        >
            Meu Botão
        </Button>
    );
};
