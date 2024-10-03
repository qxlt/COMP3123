const resolvePromise = ()=> {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            let success = {
                'message': 'delayed success'
            }
            resolve(success);
        }, 500)
    })
} 

const rejectPromise = () =>{
    return new Promise((reject)=>{
        setTimeout(()=>{
            try{
               reject({error: 'error: delayed exception!'}); 
            }catch(e){
                reject(e);
            }
        }, 500)
    })
}

resolvePromise()
    .then((res) =>{
        console.log(res);
    })
    .catch((e)=>{
        console.log(e);
    })
rejectPromise()
    .then((res)=>{
        console.log(res);
    })
    .catch((e)=>{
        console.log(e);
    })