function modulo(n , m){
    if(n<m){
        return n;
    }
    else{
        return modulo(n-m,m);
    }
}
console.log(modulo(10 , 3));