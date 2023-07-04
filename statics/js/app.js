

function get_data(){
  document.querySelector('#get_meanings').innerHTML =``;
  document.querySelector('#get_synonyms').innerHTML = ''; 
  document.querySelector('#get_antonyms').innerHTML = '';
  document.querySelector('#get_sen_app').innerHTML = '';
  document.querySelector('#raw_output').innerHTML = '';
  
  let src_word = document.querySelector('#src-word').value;

  let api_url = 'https://dictionary-backend-services-9ds582yy9-abhisaha15.vercel.app/';
  let fetchRes = fetch(api_url+src_word);
  fetchRes.then(res =>
  res.json()).then(d => {
    
    document.querySelector('#raw_output').innerHTML =JSON.stringify(d,undefined, 2);

    d.meanings.forEach(element => {
      document.querySelector('#get_meanings').innerHTML+= '<li>'+element+'</li>' ;
    });

    d.synonyms.forEach(element => {
      
      document.querySelector('#get_synonyms').innerHTML+= '<li>'+element+'</li>' ;
    
     
    });

    d.antonyms.forEach(element => {
      
      document.querySelector('#get_antonyms').innerHTML+= '<li>'+element+'</li>' ;
    
     
    });

    d.sentence_application.forEach(element => {
      
      document.querySelector('#get_sen_app').innerHTML+= '<li>'+element+'</li>' ;
    
     
    });

    

  })

  



}


