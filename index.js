const perguntas = [
    {
      pergunta: "Qual é a função da palavra-chave `var` em JavaScript?",
      respostas: [
        "Declarar uma variável com escopo global.",
        "Declarar uma variável com escopo de bloco.",
        "Executar um bloco de código.",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual a diferença entre `==` e `===` em JavaScript?",
      respostas: [
        "Ambos comparam o valor e o tipo de duas variáveis.",
        "Apenas `==` compara o valor de duas variáveis.",
        "Apenas `===` compara o tipo de duas variáveis.",
      ],
      correta: 1,
    },
    {
      pergunta: "O que é um loop `for` em JavaScript?",
      respostas: [
        "Uma estrutura de controle que executa um bloco de código até que uma condição seja satisfeita.",
        "Uma função que itera sobre um array.",
        "Uma variável que armazena um conjunto de valores.",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual a diferença entre `function` e `class` em JavaScript?",
      respostas: [
        "Ambos declaram funções em JavaScript.",
        "Funções declaradas com `function` são mais antigas e menos flexíveis.",
        "Classes permitem definir propriedades e métodos em um objeto.",
      ],
      correta: 2,
    },
    {
      pergunta: "O que é um objeto em JavaScript?",
      respostas: [
        "Uma coleção de propriedades e métodos.",
        "Uma variável que armazena um valor único.",
        "Uma estrutura de controle que permite executar diferentes blocos de código.",
      ],
      correta: 0,
    },
    {
      pergunta: "Como adicionar um evento 'click' a um elemento HTML usando JavaScript?",
      respostas: [
        "Usando o método `addEventListener`.",
        "Usando o método `onclick`.",
        "Usando o método `click`.",
      ],
      correta: 0,
    },
    {
      pergunta: "Como manipular o DOM (Document Object Model) em JavaScript?",
      respostas: [
        "Usando o objeto `document`.",
        "Usando o método `querySelector`.",
        "Usando o método `getElementById`.",
      ],
      correta: 0,
    },
    {
      pergunta: "O que é AJAX em JavaScript?",
      respostas: [
        "Uma técnica para enviar e receber dados de um servidor sem recarregar a página.",
        "Uma biblioteca JavaScript para manipular o DOM.",
        "Uma estrutura de controle para executar blocos de código assíncronos.",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual a diferença entre `async` e `await` em JavaScript?",
      respostas: [
        "Async permite definir funções assíncronas.",
        "Await permite esperar o resultado de uma função assíncrona.",
        "Ambos permitem executar blocos de código assíncronos.",
      ],
      correta: 1,
    },
    {
      pergunta: "Como lidar com erros em JavaScript?",
      respostas: [
        "Usando o bloco `try` e `catch`.",
        "Usando o método `throw`.",
        "Usando o método `catch`.",
      ],
      correta: 0,
    },
  ];
  // A1 Seleciona o elemento HTML com o id `quiz`.
  const quiz = document.querySelector('#quiz');
  
  // A1 Seleciona o elemento HTML com a tag `template`.
  const template = document.querySelector('template');
  // A2
  const corretas = new Set();
  const totalDePerguntas = perguntas.length;//responder o total de item
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;
  // A1 Itera sobre o array de perguntas nesse laço de repetição
  for (const item of perguntas) {
    // A1 Cria um clone do conteúdo do elemento `template`.
    // A1 Isso cria uma cópia do HTML que será usado para cada pergunta.
    const quizItem = template.content.cloneNode(true);
  
    // A1 Define o texto da pergunta no elemento `h3` do clone.
    // A1 Isso coloca a pergunta na tela para o usuário.
    quizItem.querySelector('h3').textContent = item.pergunta;
  
    // A1 Itera sobre o array de respostas da pergunta.
    for (let resposta of item.respostas) {
      // A1 Cria um clone do elemento `dt` dentro do elemento `dl`.
      // A1 Isso cria uma nova opção de resposta para a pergunta.
      const dt = quizItem.querySelector('dl dt').cloneNode(true);
  
      // A1 Define o texto da resposta no elemento `span` dentro do clone.
      // A1 Isso coloca o texto da opção de resposta na tela.
      dt.querySelector('span').textContent = resposta;
      
      //A2
      dt.querySelector('input').setAttribute('name', 'pergunta-'+ perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      //A2
      dt.querySelector('input').onchange = (event) =>{
      //A2 gera resposta booleana pode ser indicada por alert(estaCorreta) comparando com'=='
        const estaCorreta = event.target.value == item.correta //gera resposta booleana
        //deleta se trocar a resposta
        corretas.delete(item);
        //A2 se estiver correto faça
        if(estaCorreta){
          corretas.add(item);
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;
      }
  
      // A1 Adiciona o clone do elemento `dt` ao elemento `dl`.
      // A1 Isso adiciona a opção de resposta à lista de opções para a pergunta.
      quizItem.querySelector('dl').appendChild(dt);
    }
  
    // A1 Remove o primeiro elemento `dt` do elemento `dl`, que é um clone vazio.
    // A1 Isso remove o elemento `dt` vazio que foi criado no início do loop.
    quizItem.querySelector('dl dt').remove();
  
    // A1 Adiciona o clone do quizItem ao elemento `quiz`.
    // A1 Isso coloca a pergunta e suas opções de resposta na tela.
    quiz.appendChild(quizItem);
  }