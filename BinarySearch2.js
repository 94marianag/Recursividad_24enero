const bs = (array , item) => {
    let min = 0;
    let max = array.length-1;
    const  Recursiva = (min, max) => {
        if (min > max){
            return -1;
        }
        let middle = Math.floor((min + max)/2);
        let guess = array[middle];
        if (guess == item){            
            return middle;
        }
        if(guess > item){             
            return Recursiva(min, middle -1) 
        }
        return Recursiva(middle+1,max)
    }
    return Recursiva(min,max);
}
console.log(bs([1,2,3,4,5],3));

