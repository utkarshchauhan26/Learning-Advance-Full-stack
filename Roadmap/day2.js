function mockFetch(url,delay){
    if(delay<0){
        return Promise.reject(new Error('Invalid delay: must be >= 0'));
    }
    else{
    return new Promise((resolve,reject)=>{ 
       setTimeout(()=>{ 
        if(url.includes('goals')){ 
            resolve({goals:['running','hunting','coding']});

        }
        else{ 
            reject(new Error('invalid url'));
        }
       })

    },delay) 
    
}}

mockFetch('https:buddy-ai/goals',2000) 
  .then(data=>console.log('fetched data',data)) 
  .catch(error =>console.error(error));

mockFetch('https://buddy-ai/goals', -1)
  .then(data => console.log('This won\'t run'))
  .catch(error => console.error('Delay error:', error.message));

async function fetchGoals(){ 
    try{
        const data=await mockFetch('https:buddy-ai/goals',1000); 
    } catch(error){
        console.error('Async error',error);
    }
}
fetchHabits();