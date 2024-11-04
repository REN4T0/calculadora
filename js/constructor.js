import { showAlert } from "./assets/alert.js";

function Calculator() {
    this.display = document.querySelector("input");
    this.validChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '/', '*', '(', ')', '.', '=', 'C', 'CE', 'Enter', 'Backspace', 'Delete'];
    this.operation;
    this.result;

    this.initialize = function () {
        this.receiveData();
    };

    this.receiveData = function () {
        document.addEventListener('click', (e) => {
            let el = e.target;

            if (this.validChar.includes(el.value)) this.show(el.value);
        });

        document.addEventListener('keydown', (e) => {
            let key = e.key;

            if (this.validChar.includes(key)) this.show(key);
        })
    };

    this.show = function (char) {
        if (char !== 'CE' && char !== 'C' && char !== '=' && char !== 'Delete' && char !== 'Backspace' && char !== 'Enter') {
            this.display.value += char;
        } else if (char === 'C' || char === 'Backspace') {
            this.delete();
        } else if (char === 'CE' || char === 'Delete') {
            this.clear();
        } else if (char === "=" || char === 'Enter') {
            this.executeCalculation();
        }
    }

    this.delete = function () {
        this.display.value = this.display.value.slice(0, -1);
    };

    this.clear = function () {
        this.display.value = '';
    };

    this.executeCalculation = function () {
        this.operation = this.display.value;

        if(this.display.value === ''){
            showAlert("Informe uma operação a ser calculada!")
        } else {
            try{
                this.result = eval(this.display.value);
                this.display.value = this.result;
    
                console.log({
                    result: this.result,
                    operation: this.operation
                });
    
            } catch (er){
                showAlert("Cálculo inválido!");
            }
        } 
    };
}

(() => {
    let constructorCalc = new Calculator();
    constructorCalc.initialize();
})();