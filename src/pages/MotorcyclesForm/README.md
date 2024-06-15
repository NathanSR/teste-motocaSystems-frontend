# MotorcyclesForm

A página `MotorcyclesForm` é utilizada para criar e editar registros de motocicletas, permitindo inserir novos dados ou atualizar informações existentes. OBS: Caso a página seja carregada com uma querystring `motorcycleId`, ela vai funcionar como fomulário de edição (pois irá consultar à API pelo id informado da moto, os dados para aparecer no formulário), senão, vai ser formulário para novos registros de motos.

## Funcionalidades

- Utiliza o componente `Header` para exibir o título dinâmico conforme o modo de operação: "Registro de Motos" para novo registro ou "Editar" para edição.
- Renderiza um formulário (`Form`) onde os usuários podem preencher informações como código, modelo, cor, valor e status da motocicleta.
- Inclui validação de campos obrigatórios e tipos de entrada (como numérico para o campo de valor e seleção para o status).
- Exibe botões dinâmicos para enviar o formulário: "Registrar" para novo registro ou "Atualizar" para edição.
- Realiza requisições POST para adicionar novas motocicletas ou PUT para atualizar motocicletas existentes na API.
- Utiliza o pacote `axios` para realizar chamadas HTTP para a API.
- Integra o componente `Swal` (SweetAlert2) para exibir mensagens de sucesso ou erro após o envio do formulário.