//Ex.1 O functie care va numara de la n la 0 in console,
    // unde n este argumentul primit ,folosind recursie.

 //const func1 = (num) => {
    //console.log(num)
    //if( num < 2) return num
    //return func1(num-1)
 //} 
 //func1(10)
 
 //Ex2 O functie care primeste un string si intoarce numarul 
    // de vocale din el.

   // const lookupVowels = str => {
    //    let count = 0
    //    const vowels = ['a', 'e', 'i', 'o', 'u']
     //   for (let char of str.toLowerCase()) {
      //      if (vowels.includes(char)) {
       //         count++
       //     }
       // }
        //return count
    //} 
   // console.log(lookupVowels('Ariadna'))
   //node index 4

   //Ex3  O functie care primeste o lista de stringuri si intoarce 
         //cel mai lung string

         const arr = [18, 888, 1818, 818181, 1818181818]
         function findMax(arr){
            let max = arr[0]
            for(let num of arr) {
                if (max < num) {
                    max = num
                }
            }
            return max
         }
         console.log(findMax(arr))


    




