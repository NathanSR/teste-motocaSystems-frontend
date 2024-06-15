# Input

O componente `Input` é utilizado para renderizar campos de entrada em formulários, incluindo inputs de texto e selects.

## Propriedades

- `label: string`: Rótulo que descreve o campo de entrada.
- `type: string`: Tipo de campo de entrada (`text`, `number`, `select`, etc.).
- `name: string`: Nome do campo de entrada usado para registro no React Hook Form.
- `value?: string | number`: Valor inicial opcional para o campo de entrada.
- `options?: string[]`: Opções disponíveis para um campo do tipo `select`.
- `prefix?: string`: Texto a ser exibido antes do campo de entrada.
- `autoComplete?: string`: Valor do atributo `autocomplete` para o campo de entrada (padrão é `'off'`).
- Quaisquer outras propriedades válidas de um elemento `<input>` ou `<select>` do HTML podem ser passadas e serão repassadas para o elemento renderizado.

## Exemplo de Uso

```tsx
import Input from './Input';

const MyPageForm = () => {
    return (
        <Form {/* propriedades do comp Form*/} >
            <Input label="Nome" type="text" name="name" autoComplete="off" />
            <Input label="Idade" type="number" name="age" autoComplete="off" />
            <Input label="Gênero" type="select" name="gender" options={['Masculino', 'Feminino']} />
        </Form>
    );
};
