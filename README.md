# Sistema de Gerenciamento de Motos - Documentação Inicial

Este projeto foi criado por mim, Nathan Santos, para participação no processo seletivo à vaga de Frontend Jr na empresa MOTOCA MOTORES TOCANTINS LTDA em junho de 2024. 
Este é um sistema de gerenciamento de motos, desenvolvido utilizando React+Typescript no frontend e json-server simulando a API backend. 
O sistema permite registrar, visualizar, editar e excluir informações sobre diversas motocicletas e pode funcionar em diferentes tamanhos de telas.

OBS: Cada componente e página tem sua respectiva documentação no arquivo README.md dentro de seu próprio diretório.

## Instalação

Para começar a usar este projeto, siga os passos abaixo:

1. Clone o repositório usando o Git:
    ```bash
    git clone https://github.com/NathanSR/teste-motocaSystems-frontend.git
    ```

2. Navegue até o diretório do projeto clonado:
    ```bash
    cd teste-motocaSystems-frontend
    ```

3. Instale as dependências necessárias utilizando npm:
    ```bash
    npm install
    ```

4. Inicie a API de teste:
    ```bash
    npm run server
    ```

5. Por fim, inicie a aplicação React:
    ```bash
    npm start
    ```

Isso irá iniciar a aplicação React no modo de desenvolvimento. Você poderá visualizar o projeto no seu navegador acessando `http://localhost:3000`.



## Componentes Principais

- **Button:** Componente para criar botões com diferentes estilos e funcionalidades.
- **Form:** Componente para criar formulários controlados com validação de dados.
- **Header:** Componente para exibir cabeçalhos em diferentes páginas da aplicação.
- **Input:** Componente para criar campos de entrada de dados com suporte a diversos tipos e validações.
- **ListMotorcycles:** Componente para renderizar uma lista de motocicletas com opções de ações.
- **Search:** Componente para busca e filtragem de motocicletas localmente ou via API.

## Páginas

- **Initial:**
  A página `Initial` apresenta uma tela inicial com informações sobre o sistema de gerenciamento de motos, oferecendo um botão para entrar na aplicação.

- **Motorcycles:**
  A página `Motorcycles` exibe uma tabela de motocicletas com funcionalidades de busca, adição de novos registros e visualização detalhada.

- **MotorcyclesForm:**
  A página `MotorcyclesForm` permite adicionar novas motocicletas ou editar informações existentes através de um formulário interativo.

## Funcionalidades Principais

- **Cadastro e Edição de Motocicletas:** Capacidade de adicionar novas motocicletas ou editar informações existentes.
- **Busca e Filtragem:** Funcionalidade de busca para localizar motocicletas com base em diferentes critérios.
- **Interação com API:** Comunicação direta com uma API backend de teste para operações CRUD de motocicletas.
- **Feedback ao Usuário:** Utilização de `Swal` (SweetAlert2) para fornecer feedback visual sobre ações realizadas.
- **Responsividade:** O sistema foi adaptado para funcionar em diferentes tamanhos de telas.

