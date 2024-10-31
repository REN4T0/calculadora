# CALCULADORA SIMPLES CRIADA COM FACTORY FUNCTION

> Status: concluído <br>
> ⚠️ Vesão 1.0.5 (Beta)

## Objetivo
Este pequeno projeto tem como propósito ser um meio adotado para exercitar uma prática de programação em específico - as Factory Functions.

## Conceituação básica do código fonte e do funcionamento do site
A calculadora realiza operações extremamente simples, descartando cálculos com números fracionários e entre parênteses. Seu objetivo principal é apresentar o uso de
uma factory function para processar todos os dados recebidos para executar o cálculo, algo que pode ser percebido no código fonte. Portanto, o código fonte dessa
calculadora ersume-se em uma factory function responsável por fazê-la funcionar.

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

## Notas adicionais
1. A partir do momento em que é inserido um operador matemático (sinal), a expressão digitada é salva e não pode mais ser apagada com o <kbd>Backspace</kbd>, sendo necessário limpar o
display.
2. Um objeto é gerado propositalmente no console.
