/*
function recursividad(cadena,index){
    if(index > cadena.length){
        if(cadena.length != 0)
        console.log(cadena);
        return;
    }else{
        console.log(cadena.substring(0 , ++index));
        cadena = cadena.slice(index, cadena.length);
        recursividad(cadena,index);
    }
}
(recursividad("Mariana", 0));
*/

function recursividad(cadena,index, nuevaCadena){
    if(index > cadena.length){
        if(cadena.length != 0)
        nuevaCadena.push(cadena)
        
        return nuevaCadena;
    }else{
        nuevaCadena.push(cadena.substring(0, ++index))        
        cadena = cadena.slice(index, cadena.length);
        return recursividad(cadena,index, nuevaCadena);
    }
}
console.log(recursividad("Mariana", 0, []));