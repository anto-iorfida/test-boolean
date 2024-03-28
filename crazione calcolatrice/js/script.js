const { createApp } = Vue;

createApp({
    data() {
        return {
        numOne: null,
        numTwo: null,
        result:null,
        operator: null,
        recentOpeation :[]
        };
        
    },
    methods: {
        // bottone che al click esegue 2 funzioni 
        doubleFunction (){
            this.clickCalculator(),
            this.createdLiOperation()
        },
        // creare funzione che si richiama al click di calcolare l'operazione
        clickCalculator (){
           this.calculator();
        },
        // creazione di li con dentro l'operazione 
        createdLiOperation (){
            // ccreazione template per li 
            const operation = `${this.numOne} ${this.operator} ${this.numTwo} = ${this.result}`; 
            // aggiungere operazione con template in li creata 
            this.recentOpeation.unshift(operation); 
        },
        cancelMemory (){
            this.recentOpeation = []
        },
        // funzione per calcolare i numeri
        calculator() {
            // convertire le variabili in nuberi 
            const num1 = parseFloat(this.numOne);
            const num2 = parseFloat(this.numTwo);

            switch (this.operator) {
                case '+':
                    this.result = num1 + num2;
                    break;
                case '-':
                    this.result = num1 - num2;
                    break;
                case '*':
                    this.result = num1 * num2;
                    break;
                case '/':
                    this.result = num1 / num2;
                    break;
                default:
                    this.result = 'non posso calcolare se non mi dai i dati corretti'
            }
        }
        
            
     }
}).mount('#app');