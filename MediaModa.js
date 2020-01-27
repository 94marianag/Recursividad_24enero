let media=0; 
function calculemedia(array,index){

    if(index >= array.length)
    return media/array.length;

    else{
        media = media + array[index]; 
        //console.log("Suma", media)       
    }   
    return calculemedia(array,++index) 
}
//console.log(calcule([1,5,20,6,9,20,10,50,2,5,5],0));



function calculamoda(a){
    a.sort(); let i=0;
    console.log(a);
    var dict = {};
    let k=0,d=0,m=0,n=0;

    mod();
    function mod(){
        if(k==a.length)
        {
            return m;
        }
        if(a[k]==a[k+1])
        {
            if(d>0&&n<d)
            {
                d+1;
                n=d;
                k++;
            }
            if(d>0&&n>=d)
            {
                d+1;
                n=d;
                m=a[k];
                k++;
            }
            if(d==0)
            {
                d+1;
                n=d;
                m=a[k];
                k++;
            }
            mod();
        }
        else
        {
            k++;
            d=0;
            mod();
        }
        
    }
console.log(mod());

a.forEach(function(i) { dict[i] = (dict[i]||0) + 1;});
//console.log(dict);
   
}
console.log(calculamoda([1,5,9,20,6,20,10,50,2,9,9]));


// function calculamoda(a) {
//     a.sort();
//     let moda = 0;
//     var dict = {};
//     a.forEach(i => {
//       dict[i] = (dict[i] || 0) + 1;
//       moda = dict[i] > (dict[moda] || 0) ? i : moda;
//     });
//     return moda;
//   }
//   console.log(calculamoda([1, 5, 20, 6, 9, 20, 10, 50, 2, 5, 5]));