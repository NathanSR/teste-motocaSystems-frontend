# Form

O componente `Form` é usado para criar e controlar formulários usando React Hook Form, fornecendo suporte para valores iniciais, validação e submissão assíncrona. Ele deve ser usado junto com o componente `<Input>` que definide os campos de entrada do formulário.

## Propriedades

- `defaultValues: Record<string, any>`: Valores iniciais dos campos do formulário.
- `onSubmit: (data: any) => Promise<void>`: Função de callback chamada quando o formulário é submetido. Deve lidar com os dados do formulário.
- `children: React.ReactNode`: Componentes filhos que compõem o conteúdo do formulário, como `<Input>` e `<Button type="submit">`.
- Quaisquer outras propriedades válidas de um elemento `<form>` do HTML podem ser passadas e serão repassadas para o elemento `<form>` renderizado.

## Exemplo de Uso

```tsx
import Form from './Form';

const MyForm = () => {
    const onSubmit = async (data: any) => {
        // Lógica para lidar com a submissão do formulário
    };

    return (
        <Form
            defaultValues={{ name: '', email: '' }}
            onSubmit={onSubmit}
        >
            <Input type="text" name="name" />
            <Input type="email" name="email" />
            <Button type="submit">Enviar</Button>
        </Form>
    );
};
