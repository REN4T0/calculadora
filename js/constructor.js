import { showAlert } from "./assets/alert.js";

function Calculator() {
    this.display = document.querySelector("input");
    this.validChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '÷', '×', '(', ')', '.', '=', 'C', 'CE', 'Enter', 'Backspace', 'Delete'];
    this.operation;
    this.result;

    // Método que vai iniciar a função construtora em cadeia
    this.initialize = function () {
        this.receiveData();
    };

    // Método que vai receber os dados, seja via HTML, seja via teclado
    this.receiveData = function () {
        document.addEventListener('click', (e) => {
            let el = e.target;

            if (this.validChar.includes(el.value)) this.show(el.value); // Verificando se o charactere enviado está entre os permitidos
        });

        document.addEventListener('keydown', (e) => {
            let key = e.key;

            // Via teclado, os seguintes caracteres serão substituídos por outros, que permitirão maior compreensividade do usuário
            if (key === "*") {
                key = '×';
            } else if (key === "/") {
                key = "÷";
            }

            if (this.validChar.includes(key)) this.show(key);
        })
    };

    this.show = function (char) {
        if (char !== 'CE' && char !== 'C' && char !== '=' && char !== 'Delete' && char !== 'Backspace' && char !== 'Enter') {
            this.display.value += char; // Exibindo a conta na tela para o usuário
        } else if (char === 'C' || char === 'Backspace') {
            this.delete();
        } else if (char === 'CE' || char === 'Delete') {
            this.clear();
        } else if (char === "=" || char === 'Enter') {
            this.executeCalculation();
        }
    }

    this.delete = function () {
        this.display.value = this.display.value.slice(0, -1); // Apagando o último caractere da conta
    };

    this.clear = function () {
        this.display.value = ''; // Limpando o input onde é exibido a conta
    };

    this.executeCalculation = function () {
        // Condição que não permite enviar valores vazios
        if (this.display.value === '') {
            showAlert("Informe uma operação a ser calculada!");

        } else {
            this.operation = this.display.value; // Coletando a conta que está no input

            // Substituindo os seguintes caracteres por outros caracteres que, agora, sejam compreensíveis para a máquina
            this.operation = this.operation.replace(/×/, "*");
            this.operation = this.operation.replace(/÷/, "/");

            /* /!\ ÁREA DE RISCO /!\ */
            try {
                this.result = eval(this.operation); // Transformando a string em um argumento JavaScript
                this.display.value = this.result;

                console.log({
                    result: this.result,
                    operation: this.operation
                });

            } catch (er) {
                showAlert("Cálculo inválido!");
            }
        }
    };
}

(() => {
    let constructorCalc = new Calculator();
    constructorCalc.initialize();
})();