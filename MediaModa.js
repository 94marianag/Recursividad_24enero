let media=0; 
function calcule(array,index){

    if(index >= array.length)
    return media/array.length;

    else{
        //console.log("Indice", index);
        media = media + array[index]; 
        //console.log("Suma", media)       
    }   
    return calcule(array,++index) 
}
console.log(calcule([1,5,20,6,9,20,10,50,2,5,5],0));