import { LightningElement } from 'lwc';

export default class SumUsingGetter extends LightningElement {
    firstNum;
    SecondNum;

    handleChange(event){
        if(event.target.name ==='input1'){
            this.firstNum = event.target.value;
        }else if(event.target.name ==='input2'){
            this.SecondNum = event.target.value;
        }
    }

    get sumoftwonumber(){
        if(this.firstNum && this.SecondNum){
        return parseInt(this.firstNum)+parseInt(this.SecondNum)
        }
    }
}