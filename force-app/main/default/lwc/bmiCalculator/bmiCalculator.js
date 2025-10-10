import { LightningElement } from 'lwc';

export default class BmiCalculator extends LightningElement {

    height = '';
    weight = '';
    bmiValue = 0;
    result = '';
    idealWeight = 0;

    inputHandler(event) {
        const {name, value} = event.target;
        if (name === "height") {
            this.height= value;
        }

        if (name === "weight") {
            this.weight = value;
        }
    }

    handleClick(event) {
        event.preventDefault();
        console.log("height", this.height);
        console.log("weight", this.weight);
        this.calculate();
    }

    calculate() {
        let height = Number(this.height)/100;
        let bmi = Number(this.weight) / (height*height);
        this.bmiValue = Number(bmi.toFixed(2));

        if(this.bmiValue < 18.5){
            this.result = "Underweighted";
        } else if(this.bmiValue >= 18.5 && this.bmiValue <= 24.9){
            this.result = "Healthy";
        } else if(this.bmiValue >= 25 && this.bmiValue <= 29.9){
            this.result = "Overweighted";
        } else if (this.bmiValue >= 30) {
            this.result = "Obese";
        }

        this.idealWeight = (Number(this.height) - 110) * 1.15;
        this.idealWeight = Number(this.idealWeight.toFixed(0));
    }

    recalculate() {
        this.height = '';
        this.weight = '';
        this.bmiValue = 0;
        this.result = '';
    }
}