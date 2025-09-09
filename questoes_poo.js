const questoes = [
  {
    "id": "q1",
    "tipo": "unica",
    "enunciado": "1) Em termos históricos, qual sequência melhor representa a evolução mencionada em aula até a POO?",
    "obrigatoria": true,
    "alternativas": [
      "POO → Programação Estruturada → Programação Modular",
      "Programação Estruturada → Programação Modular → POO",
      "Programação Modular → POO → Programação Estruturada",
      "POO → Programação Modular → Programação Estruturada"
    ],
    "correta": 1
  },
  {
    "id": "q2",
    "tipo": "unica",
    "enunciado": "2) De acordo com a definição trabalhada, 'paradigma' em programação significa:",
    "obrigatoria": true,
    "alternativas": [
      "Um conjunto de bibliotecas padrão de uma linguagem.",
      "Um modelo/estilo que orienta como programar.",
      "O processo de compilação e otimização do código.",
      "Um padrão formal de documentação de APIs."
    ],
    "correta": 1
  },
  {
    "id": "q3",
    "tipo": "unica",
    "enunciado": "3) O termo POO é associado a qual pesquisador e linguagem?",
    "obrigatoria": true,
    "alternativas": [
      "Bjarne Stroustrup e C++",
      "James Gosling e Java",
      "Alan Kay e Smalltalk",
      "Dennis Ritchie e C"
    ],
    "correta": 2
  },
  {
    "id": "q4",
    "tipo": "unica",
    "enunciado": "4) Qual pilar da POO está diretamente ligado a 'dar formas diferentes a um mesmo método conforme o contexto'?",
    "obrigatoria": true,
    "alternativas": [
      "Herança",
      "Encapsulamento",
      "Polimorfismo",
      "Abstração"
    ],
    "correta": 2
  },
  {
    "id": "q5",
    "tipo": "unica",
    "enunciado": "5) Um objetivo central da POO ao representar um 'controle remoto' é:",
    "obrigatoria": true,
    "alternativas": [
      "Expor todos os componentes internos para maior flexibilidade.",
      "Modelar a entidade como objeto com dados (atributos) e comportamentos (métodos).",
      "Restringir o uso de métodos apenas a cálculos numéricos.",
      "Minimizar o uso de classes para reduzir o acoplamento."
    ],
    "correta": 1
  },
  {
    "id": "q6",
    "tipo": "unica",
    "enunciado": "6) Entre as vantagens citadas da POO, aquela relacionada a crescer o sistema com novas funcionalidades é:",
    "obrigatoria": true,
    "alternativas": [
      "Confiabilidade",
      "Extensibilidade",
      "Oportunidade",
      "Performabilidade"
    ],
    "correta": 1
  },
  {
    "id": "q7",
    "tipo": "unica",
    "enunciado": "7) Entre as linguagens listadas em aula, qual é classificada como obrigatoriamente orientada a objetos?",
    "obrigatoria": true,
    "alternativas": [
      "C++",
      "PHP",
      "Java",
      "Python"
    ],
    "correta": 2
  },
  {
    "id": "q8",
    "tipo": "unica",
    "enunciado": "8) A característica da POO que 'protege' os dados internos e controla o acesso externo é:",
    "obrigatoria": true,
    "alternativas": [
      "Herança",
      "Polimorfismo",
      "Encapsulamento",
      "Generalização"
    ],
    "correta": 2
  },
  {
    "id": "q9",
    "tipo": "unica",
    "enunciado": "9) A ideia do 'Dynabook' apresentada por Alan Kay se aproxima hoje de:",
    "obrigatoria": true,
    
    "alternativas": [
      "Servidores de banco de dados distribuídos",
      "Tablets e notebooks pessoais",
      "Compiladores JIT",
      "Robôs industriais colaborativos"
    ],
    "correta": 1
  },
  {
    "id": "q10",
    "tipo": "unica",
    "enunciado": "10) O conceito de 'objeto' destacado na aula inclui a possibilidade de representar:",
    "obrigatoria": true,
    "alternativas": [
      "Apenas coisas físicas e tangíveis.",
      "Somente processos do sistema operacional.",
      "Entidades materiais ou abstratas descritas por atributos, métodos e estado.",
      "Exclusivamente elementos gráficos de uma GUI."
    ],
    "correta": 2
  },
  {
    "id": "q11",
    "tipo": "unica",
    "enunciado": "11) Em Java, uma classe pública no arquivo-fonte exige que:",
    "obrigatoria": true,
    "alternativas": [
      "O arquivo tenha o mesmo nome da classe e extensão .java.",
      "O arquivo tenha qualquer nome, desde que esteja no mesmo pacote.",
      "A classe seja definida após o método main.",
      "O arquivo termine com extensão .class."
    ],
    "correta": 0
  },
  {
    "id": "q12",
    "tipo": "unica",
    "enunciado": "12) O método 'main' em Java tem a função de:",
    "obrigatoria": true,
    "alternativas": [
      "Construir todas as instâncias da aplicação.",
      "Ser o ponto de entrada da aplicação.",
      "Gerenciar o garbage collector explicitamente.",
      "Registrar os atributos estáticos da classe."
    ],
    "correta": 1
  },
  {
    "id": "q13",
    "tipo": "unica",
    "enunciado": "13) A criação de um objeto a partir da classe é chamada de:",
    "obrigatoria": true,
    "alternativas": [
      "Generalização",
      "Especialização",
      "Instanciação",
      "Serialização"
    ],
    "correta": 2
  },
  {
    "id": "q14",
    "tipo": "unica",
    "enunciado": "14) Em Java, de acordo com a regra apresentada, métodos:",
    "obrigatoria": true,
    "alternativas": [
      "Podem existir fora de qualquer classe.",
      "Podem ser declarados dentro de outros métodos.",
      "Devem pertencer a uma classe e não podem ser criados dentro de outros métodos.",
      "Precisam necessariamente retornar um valor."
    ],
    "correta": 2
  },
  {
    "id": "q15",
    "tipo": "unica",
    "enunciado": "15) Sobre os tipos primitivos em Java, a lista correta mostrada foi:",
    "obrigatoria": true,
    "alternativas": [
      "byte, short, int, long, float, double, boolean, char",
      "byte, short, int, long, float, decimal, boolean, char",
      "byte, short, integer, long, float, double, boolean, char",
      "byte, short, int, long, float, double, bool, char"
    ],
    "correta": 0
  },
  {
    "id": "q16",
    "tipo": "unica",
    "enunciado": "16) O 'type casting' (conversão de tipo) no contexto da aula permite:",
    "obrigatoria": true,
    "alternativas": [
      "Converter entre tipos primitivos quando for seguro/permitido.",
      "Instanciar classes abstratas diretamente.",
      "Modificar visibilidade de atributos em tempo de execução.",
      "Sobrescrever métodos sem herança."
    ],
    "correta": 0
  },
  {
    "id": "q17",
    "tipo": "unica",
    "enunciado": "17) A prática com a classe 'Caneta' enfatiza que 'rabiscar()' deve:",
    "obrigatoria": true,
    "alternativas": [
      "Ignorar o estado do objeto.",
      "Verificar se a caneta está tampada antes de executar.",
      "Alterar automaticamente a cor para azul.",
      "Lançar exceção sempre que chamado."
    ],
    "correta": 1
  },
  {
    "id": "q18",
    "tipo": "unica",
    "enunciado": "18) A distinção correta entre classe e objeto, conforme tratado, é:",
    "obrigatoria": true,
    "alternativas": [
      "Classe é instância; objeto é molde.",
      "Classe é molde; objeto é instância.",
      "Classe e objeto são sinônimos.",
      "Objeto é código-fonte; classe é pacote."
    ],
    "correta": 1
  },
  {
    "id": "q19",
    "tipo": "unica",
    "enunciado": "19) A abstração, na construção de um cadastro de alunos, implica:",
    "obrigatoria": true,
    "alternativas": [
      "Selecionar apenas atributos relevantes ao contexto escolar.",
      "Modelar a pessoa com todos os possíveis atributos.",
      "Desconsiderar atributos e focar só em métodos.",
      "Sempre usar herança múltipla."
    ],
    "correta": 0
  },
  {
    "id": "q20",
    "tipo": "unica",
    "enunciado": "20) No arquivo-fonte Java, é correto afirmar que:",
    "obrigatoria": true,
    "alternativas": [
      "Uma classe pode ficar fora de um arquivo com extensão .java.",
      "Comentários usando // ou /*...*/ não são compilados.",
      "O compilador ignora a palavra-chave class.",
      "O nome do arquivo e da classe pública podem divergir livremente."
    ],
    "correta": 1
  },
  {
    "id": "q21",
    "tipo": "unica",
    "enunciado": "21) Um construtor válido em Java deve:",
    "obrigatoria": true,
    "alternativas": [
      "Ter o mesmo nome da classe e não possuir tipo de retorno.",
      "Retornar void para indicar inicialização sem valor.",
      "Ser sempre privado para garantir encapsulamento.",
      "Ter nome diferente da classe para evitar confusão com métodos."
    ],
    "correta": 0
  },
  {
    "id": "q22",
    "tipo": "unica",
    "enunciado": "22) 'Sobrecarga' e 'sobreposição' significam, respectivamente:",
    "obrigatoria": true,
    "alternativas": [
      "Mesma assinatura em classes distintas; assinaturas diferentes na mesma classe.",
      "Assinaturas diferentes na mesma classe; mesma assinatura redefinida em herança.",
      "Criação e destruição de objetos; coleta de lixo.",
      "Conversão de tipos; polimorfismo paramétrico."
    ],
    "correta": 1
  },
  {
    "id": "q23",
    "tipo": "unica",
    "enunciado": "23) Não há 'destrutor' em Java, como em C/C++, pois:",
    "obrigatoria": true,
    "alternativas": [
      "O Java não utiliza memória heap.",
      "O garbage collector gerencia a liberação de objetos sem método explícito do usuário.",
      "Todos os objetos são estáticos por padrão.",
      "O Java não permite alocação dinâmica."
    ],
    "correta": 1
  },
  {
    "id": "q24",
    "tipo": "unica",
    "enunciado": "24) Um atributo 'static' em uma classe é utilizado para:",
    "obrigatoria": true,
    "alternativas": [
      "Compartilhar um único valor entre todas as instâncias.",
      "Impedir acesso por métodos da classe.",
      "Tornar o atributo somente-leitura sempre.",
      "Evitar a necessidade de construtores."
    ],
    "correta": 0
  },
  {
    "id": "q25",
    "tipo": "unica",
    "enunciado": "25) Uma interface em Java:",
    "obrigatoria": true,
    "alternativas": [
      "Define um conjunto de métodos (contrato) sem implementação.",
      "É uma classe concreta com herança múltipla.",
      "Só pode conter atributos privados obrigatórios.",
      "Substitui completamente classes abstratas."
    ],
    "correta": 0
  },
  {
    "id": "q26",
    "tipo": "unica",
    "enunciado": "26) Classes abstratas, conforme visto, são:",
    "obrigatoria": true,
    "alternativas": [
      "Instanciáveis diretamente.",
      "Projetadas para herança, podendo conter métodos abstratos.",
      "Exclusivamente coleções de constantes.",
      "Equivalentes a interfaces."
    ],
    "correta": 1
  },
  {
    "id": "q27",
    "tipo": "unica",
    "enunciado": "27) No diagrama de classes UML, os símbolos de visibilidade '+', '-' e '#' significam, respectivamente:",
    "obrigatoria": true,
    "alternativas": [
      "Privado, Protegido, Público",
      "Público, Privado, Protegido",
      "Protegido, Público, Privado",
      "Padrão, Privado, Público"
    ],
    "correta": 1
  },
  {
    "id": "q28",
    "tipo": "unica",
    "enunciado": "28) Um método privado não pode ser invocado:",
    "obrigatoria": true,
    "alternativas": [
      "Por nenhum código, nem na mesma classe.",
      "Diretamente de fora da classe em que foi definido.",
      "Por métodos públicos da própria classe.",
      "Por métodos protegidos da mesma classe."
    ],
    "correta": 1
  },
  {
    "id": "q29",
    "tipo": "unica",
    "enunciado": "29) O uso de @Override em Java serve para:",
    "obrigatoria": true,
    "alternativas": [
      "Indicar que um método está sendo sobrescrito em relação a uma superclasse ou interface.",
      "Forçar um método a ser estático.",
      "Tornar um método privado.",
      "Converter um método em construtor."
    ],
    "correta": 0
  },
  {
    "id": "q30",
    "tipo": "unica",
    "enunciado": "30) O exemplo do 'caixa do supermercado' foi usado para ilustrar:",
    "obrigatoria": true,
    "alternativas": [
      "Herança múltipla entre classes.",
      "Acesso público irrestrito a dados sensíveis.",
      "Encapsulamento e a necessidade de controlar o acesso interno.",
      "Sobrecarga de operadores aritméticos."
    ],
    "correta": 2
  },
  {
    "id": "q31",
    "tipo": "unica",
    "enunciado": "31) Na agregação (conforme definido), o objeto-parte:",
    "obrigatoria": true,
    "alternativas": [
      "Não pode existir sem o todo.",
      "Pode existir independentemente do todo.",
      "É sempre estático.",
      "Deve ter a mesma visibilidade do todo."
    ],
    "correta": 1
  },
  {
    "id": "q32",
    "tipo": "unica",
    "enunciado": "32) Na composição, diferentemente da agregação, o objeto-parte:",
    "obrigatoria": true,
    "alternativas": [
      "É independente do todo.",
      "Depende do todo para existir.",
      "É automaticamente público.",
      "Não pode conter métodos."
    ],
    "correta": 1
  },
  {
    "id": "q33",
    "tipo": "unica",
    "enunciado": "33) A especialização/generalização corresponde a qual relação?",
    "obrigatoria": true,
    "alternativas": [
      "\"tem um\"",
      "\"é um tipo de\"",
      "\"faz parte de\"",
      "\"usa\""
    ],
    "correta": 1
  },
  {
    "id": "q34",
    "tipo": "unica",
    "enunciado": "34) O operador '==' em Java é utilizado para:",
    "obrigatoria": true,
    "alternativas": [
      "Atribuir valores a variáveis.",
      "Comparar valores para igualdade.",
      "Converter tipos primitivos.",
      "Concatenar strings."
    ],
    "correta": 1
  },
  {
    "id": "q35",
    "tipo": "unica",
    "enunciado": "35) Sobre o comando 'switch' (conforme observado), são tipos de case válidos:",
    "obrigatoria": true,
    "alternativas": [
      "int, String, char, byte",
      "float, double, boolean",
      "long, double, boolean",
      "qualquer objeto com equals()"
    ],
    "correta": 0
  },
  {
    "id": "q36",
    "tipo": "unica",
    "enunciado": "36) Em métodos especiais, um 'getter' serve para:",
    "obrigatoria": true,
    "alternativas": [
      "Modificar um atributo.",
      "Acessar com segurança o valor de um atributo.",
      "Criar uma nova instância da classe.",
      "Realizar casting entre tipos."
    ],
    "correta": 1
  },
  {
    "id": "q37",
    "tipo": "unica",
    "enunciado": "37) Já um 'setter' é usado para:",
    "obrigatoria": true,
    "alternativas": [
      "Consultar o valor de um atributo.",
      "Alterar o valor de um atributo de forma controlada.",
      "Declarar uma interface.",
      "Definir a classe como abstrata."
    ],
    "correta": 1
  },
  {
    "id": "q38",
    "tipo": "unica",
    "enunciado": "38) Qual é a principal vantagem do construtor parametrizado, segundo a aula?",
    "obrigatoria": true,
    "alternativas": [
      "Eliminar a necessidade de encapsulamento.",
      "Garantir inicialização consistente de instâncias já com valores desejados.",
      "Dispensar o uso de métodos getters.",
      "Permitir herança múltipla."
    ],
    "correta": 1
  },
  {
    "id": "q39",
    "tipo": "unica",
    "enunciado": "39) Entre os tipos primitivos citados, qual sequência está correta:",
    "obrigatoria": true,
    "alternativas": [
      "byte, short, int, long, float, double, boolean, char",
      "byte, short, int, long, float, decimal, boolean, char",
      "byte, short, integer, long, float, double, bool, char",
      "byte, short, int, long, float, double, boolean, character"
    ],
    "correta": 0
  },
  {
    "id": "q40",
    "tipo": "unica",
    "enunciado": "40) A comparação lógica composta por '&&' e '||' integra qual categoria de operadores?",
    "obrigatoria": true,
    "alternativas": [
      "Aritméticos",
      "Relacionais",
      "Lógicos",
      "De atribuição"
    ],
    "correta": 2
  },
  {
    "id": "q41",
    "tipo": "unica",
    "enunciado": "41) A principal diferença entre 'while' e 'do-while' é que:",
    "obrigatoria": true,
    "alternativas": [
      "Ambos testam a condição antes.",
      "O 'while' testa antes; o 'do-while' testa depois (executa pelo menos uma vez).",
      "O 'do-while' nunca executa o bloco.",
      "O 'while' não aceita blocos com chaves."
    ],
    "correta": 1
  },
  {
    "id": "q42",
    "tipo": "unica",
    "enunciado": "42) O comando 'for' é particularmente adequado para:",
    "obrigatoria": true,
    "alternativas": [
      "Estruturas condicionais simples.",
      "Repetições controladas por uma variável de controle.",
      "Gerenciamento de memória estática.",
      "Definição de interfaces."
    ],
    "correta": 1
  },
  {
    "id": "q43",
    "tipo": "unica",
    "enunciado": "43) Todo laço de repetição deve considerar:",
    "obrigatoria": true,
    "alternativas": [
      "Um construtor público.",
      "Uma condição de parada.",
      "Um atributo 'static'.",
      "Uma herança explícita."
    ],
    "correta": 1
  },
  {
    "id": "q44",
    "tipo": "unica",
    "enunciado": "44) No exemplo ContaBanco, ao abrir uma Conta Poupança (CP), o cliente recebe:",
    "obrigatoria": true,
    "alternativas": [
      "R$12 de bônus.",
      "R$20 de bônus.",
      "R$50 de bônus.",
      "R$150 de bônus."
    ],
    "correta": 3
  },
  {
    "id": "q45",
    "tipo": "unica",
    "enunciado": "45) Para fechar uma conta no exemplo, é necessário:",
    "obrigatoria": true,
    "alternativas": [
      "Saldo positivo.",
      "Saldo zerado e não negativo.",
      "Ter feito um saque previamente.",
      "Estar aberta por 30 dias."
    ],
    "correta": 1
  },
  {
    "id": "q46",
    "tipo": "unica",
    "enunciado": "46) A visibilidade do atributo 'saldo' na ContaBanco foi definida como:",
    "obrigatoria": true,
    "alternativas": [
      "Pública",
      "Protegida",
      "Privada",
      "Padrão (package-private)"
    ],
    "correta": 2
  },
  {
    "id": "q47",
    "tipo": "unica",
    "enunciado": "47) O método 'pagarMensalidade()' no exemplo cobra:",
    "obrigatoria": true,
    "alternativas": [
      "R$12 para CC e R$20 para CP, se a conta estiver ativa.",
      "R$20 para CC e R$12 para CP, sempre.",
      "R$50 para ambas, apenas uma vez.",
      "R$150 apenas para CP, em toda execução."
    ],
    "correta": 0
  },
  {
    "id": "q48",
    "tipo": "unica",
    "enunciado": "48) Para 'depositar(valor)' no exemplo, uma regra essencial é:",
    "obrigatoria": true,
    "alternativas": [
      "A conta deve estar aberta.",
      "A conta deve estar negativa.",
      "O valor deve ser múltiplo de 10.",
      "O tipo da conta deve ser CC."
    ],
    "correta": 0
  },
  {
    "id": "q49",
    "tipo": "unica",
    "enunciado": "49) O atributo 'tipo' (CC/CP) no exemplo tem visibilidade:",
    "obrigatoria": true,
    "alternativas": [
      "Pública",
      "Protegida",
      "Privada",
      "Estática"
    ],
    "correta": 1
  },
  {
    "id": "q50",
    "tipo": "unica",
    "enunciado": "50) O construtor da ContaBanco deve iniciar:",
    "obrigatoria": true,
    "alternativas": [
      "status = true e saldo inicial não nulo",
      "status = false e saldo = 0",
      "saldo = 50 para todas as contas",
      "tipo = CC por padrão"
    ],
    "correta": 1
  }
];

export default questoes;
