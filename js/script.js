function calculator(){
    return {
        validKeys: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '(', ')', '*', '/', '+', '-', 'Enter', 'Backspace'],
        signals: ["*", "/", "+", "-", "(", ")"],
        operation: [],
        calculation: [],
        result: '',

        multiply(){
            console.log("Muliplicação");

            for(let index = 0;  index < this.operation.length; index++){
                if(this.operation[index] === "*"){
                    this.operation[index] = Number(this.operation[index - 1]) * Number(this.operation[index + 1]);
                    this.operation.splice(index + 1, 1);
                    this.operation.splice(index - 1, 1);
                }
            }

            console.log(this.operation);
        },

        divide(){
            console.log("Divisão");
        },

        sum(){
            console.log("Adição");
        },

        minus(){
            console.log("Subtração");
        },

        organizeOperation(counts){
            console.log(counts);

            if(this.signals.includes(counts[counts.length - 1])){
                let number = counts.slice(0, -1);

                if(number === ''){
                    return 'Insira um número primeiro!';
                }

                let signal = counts[counts.length - 1];

                this.operation.push(number, signal);
                console.log(this.operation);

                return '';
            }

            return counts;
        },

        executeCalculation(number){
            if(this.signals.includes(this.operation[this.operation.length - 1])){
                if(number !== ''){
                    this.operation.push(number);
                } else {
                    return "A conta não pode fechar com um sinal em aberto!";
                }
            }
            
            if (this.operation.length === 0){
                if(number !== ''){
                    this.operation.push(number);
                } else {
                    return "Insira um número primeiro!";
                }
            }

            console.log(this.operation);

            this.multiply();
            this.divide();
            this.sum();
            this.minus();

            return "Ok";
        }
    }
}

(() => {
    let argument = '';
    const calcObj = calculator();

    document.addEventListener('keydown', (event) => {
    
        if(calcObj.validKeys.includes(event.key)){
            if(event.key !== "Backspace" && event.key !== "Enter"){
                argument += event.key;
                
                let result = calcObj.organizeOperation(argument);

                if(result === 'Insira um número primeiro!'){
                    console.log(result);
                    argument = '';
                }else{
                    argument = result;
                }

            }else if(event.key === "Backspace"){
                argument = argument.slice(0, -1);

            }else if(event.key === "Enter"){
                let result = calcObj.executeCalculation(argument);

                console.log(result);
            }
        }
    })
})();