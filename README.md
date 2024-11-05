# CALCULADORAS CRIADAS COM FACTORY E CONSTRUCT FUNCTIONS

> Status: atualizado <br>
> ⚠️ Versão 1.1.0 - Utilização de recurso volátil

## Objetivo
Este pequeno projeto tem como propósito ser um meio adotado para exercitar duas práticas de programação em específico - as Factory Functions e Contruct Functions.

## Conceituação básica do código fonte e do funcionamento do site
O site possui duas calculadoras - Uma criada utilizando Construct Function (presente no arquivo ```index.html```) e outra criada utilizando Factory Function. Há diferenças peculiares
entre as duas. A principal delas é em como o cálculo é executado.

<p>Na calculadora com Factory Function, a execução do cálculo está descrito em código manual, ou seja, não utilizei nenhum recurso externo, ou do próprio JavaScript, para executar o cálculo imediatamente. Pelo contrário, programei o sistema com determinadas regras de negócio, para que o programa entenda a ordem de precendência do cálculo e a execute. Por este motivo, a calculadora á base de Factory Function possui menos funções que sua versão alternativa.</p>

Já na calculadora criada com Construct Function, optei por um facilitador um tanto que volátil. Ao receber a expressão matemática no formato string, esse programa a transforma em um argumento JavaScript através do comando ```eval```.

<p>Ambas as calculadoras realizam operações simples. Como dito anteriormente, devido a forma como ambas foram construídas, uma possui algo que a outra não tem. A calculadora desenvolvida com Construct Function, além de ser capaz de executar cálculos de adição, subtração, multiplicação e divisão (algo que a calculadora com Factory Function também detém), consegue executar cálculos com parênteses e com números fracionários, funções descartadas na variante com Factory Function. Entretanto, a calculadora á base de Factory Function propõe maior segurança, por não partilhar de um recurso que vulnerabiliza o sistema a recepções de comandos externos prejudiciais.</p>

## DIRETÓRIOS
```bash
├───📁css
│   ├───📁components
│   │   └───📄alert.css
│   ├───📄constructor.css
│   └───📄factory.css
├───📁js
│   ├───📁assets
│   │   └───📄alert.js
│   ├───📄constructor.js
│   └───📄factory.js
├───📄factory.html
└───📄index.html
```

## Envio de dados
É possível digitar os caracteres para realização da operação matemática, tanto através dos botões gerados em HTML na tela, quanto pelas teclas no teclado. Há uma validação que
determina se a tecla pressionada (ou até mesmo um elemento clicado) é válido para ser inserido no cálculo. As teclas que o usuário poderá usar são:

+ <kbd>-</kbd> = Subtração
+ <kbd>Shift</kbd> + <kbd>=</kbd> = Adição
+ <kbd>Shift</kbd> + <kbd>8</kbd> = Multiplicação
+ <kbd>AltGr</kbd> + <kbd>Q</kbd> = Divisão
+ <kbd>Enter</kbd> ou <kbd>=</kbd> = Realizar cálculo
+ <kbd>Backspace</kbd> = Apagar 1 caractere por vez 
+ <kbd>Del</kbd> = Limpar
+ <kbd>.</kbd> = Adiciona um ponto que simula a vírgula fracionária (Disponível apenas na calculadora de Construct Function)
+ <kbd>shift</kbd> + <kbd>9</kbd> = Abre parênteses (Disponível apenas na calculadora de Construct Function)
+ <kbd>shift</kbd> + <kbd>0</kbd> = Fecha parênteses (Disponível apenas na calculadora de Construct Function)

## Notas adicionais
1. A partir do momento em que é inserido um operador matemático (sinal) na calculadora á base de Factory Function, a expressão digitada é salva e não pode mais ser apagada com o <kbd>Backspace</kbd>, sendo necessário limpar o
display.
2. Um objeto é gerado propositalmente no console.
3. ⚠️ O comando ```eval``` é utilizado na calculadora de Construct Function, tornando o sistema vulnerável.
