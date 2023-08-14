



// Taking reference here

const jokes = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');


const setHeader ={
    headers:{
        Accept : "application/json"
    }
}




// Iss function mein naa humne fetch API use kiya hee fetch API matlab ek fetch Method
// Jiske andar hum API pass Kardete hee 

//Using promises here

const generateJokes =()=>{
    fetch('https://icanhazdadjoke.com' , setHeader)
    .then((res)=> res.json())
    .then((data)=>{
        jokes.innerHTML = data.joke;
    })
    .catch((error)=>{
        console.log(error);
    })
    
}
    
    




jokeBtn.addEventListener('click', generateJokes);
generateJokes(); 
