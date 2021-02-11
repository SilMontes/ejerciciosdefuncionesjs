    const rapid =(x) => {
        x=x.toLowerCase()
    let newString=""
    for(i=0; i<x.length; i++){
            if(x[i] !== "a" && x[i] !== "e" && x[i] !== "i" && x[i] !== "o" && x[i] !== "u") {
                newString += x[i].toUpperCase()
            }
        }
        return newString;
    }
   // From this line up Do not change code below
   let str = "John";
   console.log(rapid(str));