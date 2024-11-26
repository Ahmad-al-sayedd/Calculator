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
   
    multiply(x, y) {
      return x * y;
    }

    divide(x, y) {
      if (y !== 0) {
        return x / y;
      } else {
        return `Error: Divisor cannot be zero`
      }
    }

    remainder(x, y) {
      if (y !== 0) {
        return x % y;
      } else {
        return `Error: Divisor cannot be zero`
      }
    }

    elevate(x, y) {
      return x ** y;
    }

    sqrt(x) {
      if (x > 0) {
        return Math.sqrt(x);
      } else {
        return `Error: Cannot calculate the square root of a negative number.`
      }

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


//console.log(calc.ratio(5, 7, 300));
//console.log(calc.percentage(3, 12)); 
//console.log(calc.add(5, 7)); 
//console.log(calc.subtract(5, 7)); 
console.log(calc.multiply(5, 7)); 
console.log(calc.divide(35, 7)); 
console.log(calc.remainder(7, 5)); 
console.log(calc.elevate(5, 3)); 
console.log(calc.sqrt(25));



