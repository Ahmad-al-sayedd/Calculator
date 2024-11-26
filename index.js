class Calculator{

    constructor(){
      this.PI=Math.PI
      this.E=Math.E
    }

    ratio(x,y,width){

       


        return (width*y)/x
     
    }




    percentage(x,y){
     const toPercentage=(x / y) * 100
     return y===0?'Error:Divisor cannot be zero ':`${toPercentage}`
    }

 

    add(x,y){
       return x+y
    }
   subtract(x,y){
    return y - x
}


}
const calc=new Calculator()
console.log(calc.ratio(5,7,300));
console.log(calc.percentage(3,12));
console.log(calc.add(5,7));
console.log(calc.subtract(5,7));
