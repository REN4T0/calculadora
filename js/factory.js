import { showAlert } from "./assets/alert.js";

function calculator() {
    return {
        validKeys: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '×', '÷', '+', '-', 'Enter', 'Backspace', 'Delete', '=', 'C', 'CE'],
        signals: ["×", "÷", "+", "-"],
        operation: [],
        calculation: [],
        result: '',
        argument: '', // A chave 'argument' vai armazenar 1 número e um sinal de operação por vez, no formato string

        multiplyNdivide() {
            // Muliplicação e divisão

            for (let index = 0; index < this.operation.length; index++) {
                if (this.operation[index] === "×") {
                    /* O índice que possui o sinal passará a conter o resultado da operação entre os números que estão nos
                       índices anterior e posterior a esse. */
                    this.operation[index] = Number(this.operation[index - 1]) * Number(this.operation[index + 1]);

                    /* Ambos os índices apagado abaixo foram usados para realizar o cálculo acima. portanto, a partir desse
                       momento eles são inúteis, pois seu propósito já foi alcançado. para evitar conflito no resultado, é
                       necessário apagá-los. */
                    this.operation.splice(index + 1, 1); // Excluindo o índice posterior
                    this.operation.splice(index - 1, 1); // Excluindo o índice anterior

                    index = 0; // O index deverá percorrer o array novamente, portanto, será zerado
                } else if (this.operation[index] === "÷") {
                    this.operation[index] = Number(this.operation[index - 1] / Number(this.operation[index + 1]));
                    this.operation.splice(index + 1, 1);
                    this.operation.splice(index - 1, 1);

                    index = 0;
                }
            }
        },

        sumNminus() {
            // Adição e subtração

            for (let index = 0; index < this.operation.length; index++) {
                if (this.operation[index] === "+") {
                    this.operation[index] = Number(this.operation[index - 1]) + Number(this.operation[index + 1]);
                    this.operation.splice(index + 1, 1);
                    this.operation.splice(index - 1, 1);

                    index = 0;
                } else if (this.operation[index] === "-") {
                    this.operation[index] = Number(this.operation[index - 1]) - Number(this.operation[index + 1]);
                    this.operation.splice(index + 1, 1);
                    this.operation.splice(index - 1, 1);

                    index = 0;
                }
            }
        },

        showOperation(counts) {
            document.querySelector(".result").innerText = counts;
            document.querySelector(".operation").innerText = '';

            for (let value of this.calculation) {
                document.querySelector(".operation").innerText += value + " ";
            }
        },

        clear() {
            this.calculation = [];
            this.operation = [];
            this.argument = '';
            this.result = '';
        },

        organizeOperation(counts) {
            // A cada sinal de operação inserida na string, a expressão será armazenada em um array, presente na chave 'operation'
            if (this.signals.includes(counts[counts.length - 1])) {
                let number = counts.slice(0, -1); // O número da operação estará entre o primeiro e o penúltimo índice da string 
                let signal = counts[counts.length - 1]; // o sinal da operação ficará no último índice da string

                // caso não haja número na string, um erro retornará
                if (number === '') {
                    this.showOperation('');
                    return {status: 'error', msg: "Insira um número primeiro"}
                };

                this.operation.push(number, signal); // Enviando o número e o sinal para o array da chave 'operation'
                this.calculation.push(number, signal);

                return ''; // A chave 'argument' será esvaziada para inserir mais um número e um sinal no formato string
            }

            // Caso o sinal da operação não tenha sido inserido ainda, a variável 'argument' não será esvaziada
            return counts;
        },

        executeCalculation(number) {
            // Se não houver nenhum número após o último sinal de operação do cálculo, um erro será emitido
            if (this.signals.includes(this.operation[this.operation.length - 1])) {
                if (number !== '') {
                    this.operation.push(number);
                    this.calculation.push(number);
                } else {
                    return {status: 'error', msg: "A conta não pode fechar com um sinal em aberto!"};
                }
            }

            /* Caso não haja nenhum valor no array (presente na chave 'operation'), e a tecla enter for pressionada, enviando
               um valor vazio, um erro será emitido. */
            if (this.operation.length === 0) {
                if (number !== '') {
                    this.operation.push(number);
                    this.calculation.push(number);
                } else {
                    this.showOperation('');
                    return {status: 'error', msg: "Insira um número primeiro"};
                }
            }

            this.multiplyNdivide();
            this.sumNminus();

            this.result = this.operation[0];
            this.showOperation(this.result)

            return {status: 'success', calc: this.calculation.join(' '), msg: `O resultado é ${this.result}`};
        },

        getCommands(key) {
            // Permitindo enviar os sinais de multiplicação e divisão pelo teclado
            if(key === "*"){
                key = '×'
            } else if (key === "/"){
                key = '÷';
            }
            
            // Verificando se as chaves enviadas (seja pelo teclado ou pelos botões em HTML) são válidOs
            if (this.validKeys.includes(key)) {
                if (key !== "Backspace" && key !== "Delete" && key !== "Enter" && key !== "C" && key !== "CE" && key !== "=") {
                    this.argument += key;
                    let result = this.organizeOperation(this.argument);

                    if (result.status === 'error') {
                        showAlert(result.msg);
                        this.argument = '';
                    } else {
                        this.showOperation(this.argument);
                        this.argument = result;
                    }

                } else if (key === "Backspace" || key === "C") {
                    this.argument = this.argument.slice(0, -1); // Deletando 1 caractere por vez na string
                    this.showOperation(this.argument);

                } else if (key === "Delete" || key === "CE") { // Resetando a calculadora
                    this.clear();
                    this.showOperation('');

                } else if (key === "Enter" || key === "=") {
                    let result = this.executeCalculation(this.argument);
                    
                    if(result.status === 'error'){
                        showAlert(result.msg);
                    } else {
                        console.log(result);
                        this.clear();
                    }
                }
            }
        }
    }
}

(() => {
    const calcObj = calculator(); // Fabricando o objeto através da função

    // Realizando a operação pelas teclas do teclado
    document.addEventListener('keydown', (event) => {
        calcObj.getCommands(event.key);
    });

    // Realizando a operação pelos botões do site
    document.addEventListener('click', (event) => {
        let element = event.target;
        calcObj.getCommands(element.textContent)
    })
})();