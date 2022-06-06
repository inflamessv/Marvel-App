const url= 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=c3b8c4016ee5a158b2e57de06616e67d&hash=c0a2deea2c4fc323e99295b5c1caa128';

fetch(url)
    .then(r => r.json())
    .then(json => { 
         let contentHTML="";
         for(let hero of json.data.results){
            let wikiHero= hero.urls[1].url;
           
            contentHTML += `
                <div class="heroes">
                    <a href="${wikiHero}" target="_blank" class="heroesImages">
                        <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name} class="heroesImages">
                    </a>
                    <h3>${hero.name}</h3>
                </div>
            `;
         }  
         document.getElementById('row-marvel').innerHTML= contentHTML;
     })
    .catch(error=> console.log(error));