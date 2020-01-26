function recursividad(number){
    if(number<=1){
        return 1;
    }else {
        return number * recursividad(number-1);
    }
}
console.log(recursividad(4));



