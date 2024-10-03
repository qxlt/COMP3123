const lowerCaseWords = (arr) =>{
    let myPromise = new Promise((resolve, reject)=>{
        if (!Array.isArray(arr)){
            reject("Your input is not an array");
        } 
        try{
            const stringArr = arr.filter(x => typeof x === "string");
            let resultArr = stringArr.map(LowerCase = (y)=>{
                return y.toLowerCase();
            });

            resolve(resultArr);
        }catch(error){
            reject(error);
        }
    })
    return myPromise;
}
const mixed_arr = ['PIZZA', true, 10, 25, false, 'WiNgs']

lowerCaseWords(mixed_arr)
    .then(res =>{
        console.log(res);
    })
    .catch(error =>{
        console.log(error);
    })