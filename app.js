let serach = document.getElementById('search');
let serachword = document.getElementById('search_words');
let serachDefination = document.getElementById('search_definition');

serach.addEventListener('submit',(e)=>{
    e.preventDefault();
    fetch(`https://dictionaryapi.com/api/v3/references/collegiate/json/${e.target[0].value}?key=7461e0f4-4c42-488c-a70a-ef40214c5f4a`)
    .then((resp)=> resp.json())
    .then((data)=> {
        console.log(data)
        serachword.textContent = data[0].meta.id;
        serachDefination.textContent= data[0].shortdef[0];
    })
  
})