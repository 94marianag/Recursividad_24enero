/*function LinearSearch(number, array){
    //console.log(array);
    for(let i=0; i<=array.length; i++){
        if(number == array[i]){
            console.log("El número que se repite es: ",i);
        }
    }   
}
LinearSearch(3,[1,2,3,4,5,6,7])
*/

/*
function BinarySearch(n,a){
    let min=0;
    let max = a.length-1;
    let middle= Math.floor(max/2);
    if(n==a[middle]){
        return middle;
    }
    if(n<a[middle]){

        max = middle;
        console.log("Si")
        for(i=x;i<x;i--){
            if(n==a[i]){
                return i;
            }            
        }
    }
    else{
        for(let i =x; i>=a.length;i++)
        if(n==a[i]){
            return i;
        }
    }   
}
console.log(BinarySearch(3,[1,2,3,4,5,6,7]));
*/

const binarysearch = (array, item) => {
    let min = 0;
    let max = array.length-1;

    while(min <= max){
        let middle = Math.ceil((min + max)/2);
        let guess = array[middle];

        if (guess == item){
            return middle;
        }

        if(guess > item){
            max = middle - 1;            
        } else {
            min = middle + 1;
            }
    }
    return -1;
}
console.log(binarysearch([1,2,3,4,5,6,7],8));