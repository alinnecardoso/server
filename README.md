<details>
  <summary># Instruments Routes </summary>

  Esta API permite gerenciar instrumentos, realizando operações de CRUD (Create, Read, Update, Delete) para adicionar, visualizar, atualizar e excluir instrumentos.

  ## Endpoints

  ### Base URL
  Todas as rotas têm como base `/instruments`.

  ### Rotas

  | Método | Endpoint               | Descrição                                                                 |
  |--------|-------------------------|---------------------------------------------------------------------------|
  | GET    | `/instruments`         | Retorna uma lista de todos os instrumentos.                               |
  | GET    | `/instruments/:id`     | Retorna as informações de um instrumento específico, dado seu `id`.       |
  | POST   | `/instruments`         | Cria um novo instrumento com os dados fornecidos no corpo da requisição.  |
  | PUT    | `/instruments/:id`     | Atualiza os dados de um instrumento existente, especificado pelo `id`.    |
  | DELETE | `/instruments/:id`     | Exclui o instrumento especificado pelo `id`.                              |

  ### Exemplos de Requisição e Resposta

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

  #### 2. GET /instruments

  - **Descrição:** Retorna os detalhes de um instrumento específico.
  - **Parâmetro:** id - o identificador do instrumento.
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
    ]


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
    [
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
    ]

  #### 4. PUT /instruments/

  - **Descrição:** Atualiza os dados de um instrumento existente.
  - **Parâmetro:** id - o identificador do instrumento.
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
    [
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
    ]


  #### 5. DELETE /instruments/

  - **Descrição:** Exclui um instrumento específico.
  - **Parâmetro:** id - o identificador do instrumento.
  - **Resposta:** Retorna o status 204 sem conteúdo

</details>