
// My api key
    const apiKey = {
        key: '2be57e7a-3f7b-4d36-841a-e236f950a46f'
    }

// GET fetch Requisition
fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=${apiKey.key}`)
    .then((response) => {
        if(!response.ok) throw new Error(`Erro ao executar a requisição. ${response.status}`);
        return response.json();
    })
    .then((api) => {
        var texto = "";

        for(let i = 0; i < 10; i++){

           texto = texto + `
          
            <div class="media">
                <img src="coin.jpg" class="align-self-center mr-3" alt="coin" width="100" height="100">
                <div class="media-body">
                <h5 class="mt-2">${api.data[i].name}</h5>
                <p>${api.data[i].symbol}</p>
                </div>
            </div>
       
            `;

            document.getElementById("coins").innerHTML = texto;
            console.log(api);
            
        }


    })
    .catch((error) => {
        console.error(error.message);
    })