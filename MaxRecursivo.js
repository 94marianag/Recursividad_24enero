function recursivo(array, index, max){
    if (index >= array.length)
        return max;

if(max < array[index]){
    max = array[index];    
}
return recursivo(array,index+1,max)

}
console.log(recursivo([1,4,9,5,6,7],0,0));