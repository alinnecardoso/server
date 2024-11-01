<details>
  <summary> Instruments Routes </summary>

  Esta API permite gerenciar instrumentos, realizando operações de CRUD (Create, Read, Update, Delete) para adicionar, visualizar, atualizar e excluir instrumentos.

  ## Endpoints

  ### Base URL
  Todas as rotas têm como base `/instruments`.

  ### Rotas

  | Método | Endpoint               | Descrição                                                                 |
  |--------|------------------------|---------------------------------------------------------------------------|
  | GET    | `/instruments`         | Retorna uma lista de todos os instrumentos.                               |
  | GET    | `/instruments/:id`     | Retorna as informações de um instrumento específico, dado seu `id`.      |
  | POST   | `/instruments`         | Cria um novo instrumento com os dados fornecidos no corpo da requisição.  |
  | PUT    | `/instruments/:id`     | Atualiza os dados de um instrumento existente, especificado pelo `id`.    |
  | DELETE | `/instruments/:id`     | Exclui o instrumento especificado pelo `id`.                              |

  ### Exemplos de Requisição e Resposta

  #### 1. GET /instruments

  - **Descrição:** Retorna uma lista de todos os instrumentos cadastrados.
  - **Resposta Exemplo:**
    ```json
    [
      {
        "id": 1,
        "nome": "Violino",
        "tipo": "Cordas",
        "marca": "Yamaha",
        "modelo": "V3",
        "preco": "1500.00",
        "quantidade": 4,
        "descricao": "Violino acústico com excelente qualidade sonora e acabamento refinado, ideal para iniciantes e músicos experientes.",
        "data_aquisicao": "2024-10-30T03:00:00.000Z",
        "status": "disponivel"
      },
      {
        "id": 2,
        "nome": "Guitarra",
        "tipo": "Cordas",
        "marca": "Fender",
        "modelo": "Stratocaster",
        "preco": "3000.00",
        "quantidade": 2,
        "descricao": "Guitarra elétrica com timbre versátil e qualidade renomada, ideal para todos os estilos musicais.",
        "data_aquisicao": "2023-05-12T03:00:00.000Z",
        "status": "disponivel"
      }
    ]
    ```

  #### 2. GET /instruments/:id

  - **Descrição:** Retorna os detalhes de um instrumento específico.
  - **Parâmetro:** `id` - o identificador do instrumento.
  - **Resposta Exemplo:**
    ```json
    {
      "id": 1,
      "nome": "Violino",
      "tipo": "Cordas",
      "marca": "Yamaha",
      "modelo": "V3",
      "preco": "1500.00",
      "quantidade": 4,
      "descricao": "Violino acústico com excelente qualidade sonora e acabamento refinado, ideal para iniciantes e músicos experientes.",
      "data_aquisicao": "2024-10-30T03:00:00.000Z",
      "status": "disponivel"
    }
    ```

  #### 3. POST /instruments

  - **Descrição:** Cria um novo instrumento.
  - **Corpo da Requisição Exemplo:**
    ```json
    {
      "nome": "Violino",
      "tipo": "Cordas",
      "marca": "Yamaha",
      "modelo": "V3",
      "preco": "1500.00",
      "quantidade": 4,
      "descricao": "Violino acústico com excelente qualidade sonora e acabamento refinado, ideal para iniciantes e músicos experientes.",
      "data_aquisicao": "2024-10-30T03:00:00.000Z",
      "status": "disponivel"
    }
    ```

  - **Resposta Exemplo:**
    ```json
    {
      "id": 3,
      "nome": "Violino",
      "tipo": "Cordas",
      "marca": "Yamaha",
      "modelo": "V3",
      "preco": "1500.00",
      "quantidade": 4,
      "descricao": "Violino acústico com excelente qualidade sonora e acabamento refinado, ideal para iniciantes e músicos experientes.",
      "data_aquisicao": "2024-10-30T03:00:00.000Z",
      "status": "disponivel"
    }
    ```

  #### 4. PUT /instruments/:id

  - **Descrição:** Atualiza os dados de um instrumento existente.
  - **Parâmetro:** `id` - o identificador do instrumento.
  - **Corpo da Requisição Exemplo:**
    ```json
    {
      "nome": "Violino Elétrico",
      "tipo": "Cordas",
      "marca": "Yamaha",
      "modelo": "EV-204",
      "preco": "2500.00",
      "quantidade": 3,
      "descricao": "Violino elétrico com design moderno e excelente projeção sonora.",
      "data_aquisicao": "2024-11-01T03:00:00.000Z",
      "status": "disponivel"
    }
    ```

  - **Resposta Exemplo:**
    ```json
    {
      "id": 1,
      "nome": "Violino Elétrico",
      "tipo": "Cordas",
      "marca": "Yamaha",
      "modelo": "EV-204",
      "preco": "2500.00",
      "quantidade": 3,
      "descricao": "Violino elétrico com design moderno e excelente projeção sonora.",
      "data_aquisicao": "2024-11-01T03:00:00.000Z",
      "status": "disponivel"
    }
    ```

  #### 5. DELETE /instruments/:id

  - **Descrição:** Exclui um instrumento específico.
  - **Parâmetro:** `id` - o identificador do instrumento.
  - **Resposta:** Retorna o status 204 sem conteúdo.

</details>

<hr>

<details>
  <summary> Suppliers Routes </summary>

  Esta API permite gerenciar fornecedores, realizando operações de CRUD (Create, Read, Update, Delete) para adicionar, visualizar, atualizar e excluir fornecedores.

  ## Endpoints

  ### Base URL
  Todas as rotas têm como base `/suppliers`.

  ### Rotas

  | Método | Endpoint               | Descrição                                                             |
  |--------|------------------------|-----------------------------------------------------------------------|
  | GET    | `/suppliers`          | Retorna uma lista de todos os fornecedores.                           |
  | GET    | `/suppliers/:id`      | Retorna as informações de um fornecedor específico, dado seu `id`.    |
  | POST   | `/suppliers`          | Cria um novo fornecedor com os dados fornecidos no corpo da requisição.|
  | PUT    | `/suppliers/:id`      | Atualiza os dados de um fornecedor existente, especificado pelo `id`. |
  | DELETE | `/suppliers/:id`      | Exclui o fornecedor especificado pelo `id`.                          |

  ### Exemplos de Requisição e Resposta

  #### 1. GET /suppliers

  - **Descrição:** Retorna uma lista de todos os fornecedores cadastrados.
  - **Resposta Exemplo:**
    ```json
    [
      {
        "id": 1,
        "nome": "Fornecedor A",
        "contato": "contato@fornecedora.com",
        "telefone": "1234-5678",
        "endereco": "Rua Exemplo, 123",
        "data_aquisicao": "2024-01-15T03:00:00.000Z"
      },
      {
        "id": 2,
        "nome": "Fornecedor B",
        "contato": "contato@fornecedorB.com",
        "telefone": "8765-4321",
        "endereco": "Avenida Teste, 456",
        "data_aquisicao": "2024-02-20T03:00:00.000Z"
      }
    ]
    ```

  #### 2. GET /suppliers/:id

  - **Descrição:** Retorna os detalhes de um fornecedor específico.
  - **Parâmetro:** `id` - o identificador do fornecedor.
  - **Resposta Exemplo:**
    ```json
    {
      "id": 1,
      "nome": "Fornecedor A",
      "contato": "contato@fornecedora.com",
      "telefone": "1234-5678",
      "endereco": "Rua Exemplo, 123",
      "data_aquisicao": "2024-01-15T03:00:00.000Z"
    }
    ```

  #### 3. POST /suppliers

  - **Descrição:** Cria um novo fornecedor.
  - **Corpo da Requisição Exemplo:**
    ```json
    {
      "nome": "Fornecedor C",
      "contato": "contato@fornecedorC.com",
      "telefone": "0000-1111",
      "endereco": "Praça Novo, 789",
      "data_aquisicao": "2024-11-01T03:00:00.000Z"
    }
    ```

  - **Resposta Exemplo:**
    ```json
    {
      "id": 3,
      "nome": "Fornecedor C",
      "contato": "contato@fornecedorC.com",
      "telefone": "0000-1111",
      "endereco": "Praça Novo, 789",
      "data_aquisicao": "2024-11-01T03:00:00.000Z"
    }
    ```

  #### 4. PUT /suppliers/:id

  - **Descrição:** Atualiza os dados de um fornecedor existente.
  - **Parâmetro:** `id` - o identificador do fornecedor.
  - **Corpo da Requisição Exemplo:**
    ```json
    {
      "nome": "Fornecedor A Atualizado",
      "contato": "contato@fornecedora.com",
      "telefone": "1234-5678",
      "endereco": "Rua Exemplo, 123",
      "data_aquisicao": "2024-01-15T03:00:00.000Z"
    }
    ```

  - **Resposta Exemplo:**
    ```json
    {
      "id": 1,
      "nome": "Fornecedor A Atualizado",
      "contato": "contato@fornecedora.com",
      "telefone": "1234-5678",
      "endereco": "Rua Exemplo, 123",
      "data_aquisicao": "2024-01-15T03:00:00.000Z"
    }
    ```

  #### 5. DELETE /suppliers/:id

  - **Descrição:** Exclui um fornecedor específico.
  - **Parâmetro:** `id` - o identificador do fornecedor.
  - **Resposta:** Retorna o status 204 sem conteúdo.

</details>
