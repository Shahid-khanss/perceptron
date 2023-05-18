export default class Perceptron {
    constructor(no, learningRate = 0.00001) {

        // Set Initial Values
        this.learnc = learningRate;
        this.bias = 1;
        this.no = no
        // Computer Random weights
        this.weights = []

        for(let i=0;i<this.no;i++){
            this.weights[i] = Math.random()*2-1;
           
        }
       } 
        // Activate Function
        activate = (inputs)=>{
            let sum = 0
            for(let i = 0;i<this.no;i++){
                sum += inputs[i]*this.weights[i]
            }

            if(sum){return 1} else { return 0}
        }
        
        // Train Function
        train = (inputs, desired)=> {
            inputs.push(this.bias);
            let guess = this.activate(inputs);
            let error = desired - guess;
            if (error != 0) {
              for (let i = 0; i < inputs.length; i++) {
                this.weights[i] += this.learnc * error * inputs[i];
              }
            }
          }
    
}