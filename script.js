// searchInput
searchbtn

const dictionary = (word)=>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4b5400afbemshc6882b818f2b829p1a7367jsn01079ed0f5a3',
            'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word='+ word, options)
        .then(response => response.json())
        .then(response => {
             console.log(response)
            wordok.innerHTML = "meaning of :"+ response.word;
            definition.innerHTML = response.definition.replace("2.","<br>2.").replace("3.","<br>3.").replace("4.","<br>4.");
               })

        .catch(err => console.error(err));
}

searchbtn.addEventListener("click",(e)=>{
    e.preventDefault();
    dictionary(searchinput.value)
})