const socket = new WebSocket('ws://157.193.171.24:3000/');


let cache = []

socket.addEventListener('open', (event) => {
    console.log('WebSocket connection established');
});

socket.addEventListener('message', (event) => {

    checkCache(event.data)

    //addDataToSite()
});


function addDataToSite(data){


    let rankingList = document.getElementById("ranking-list");

    rankingList.innerHTML = ''

    let index = 0

    for(let el of data){

        el = JSON.parse(el)

        console.log(typeof(el))

        let time = el.recordTijd

        let speler = el.__speler__

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
           
            <td>${time}</td>
            
            <td>${speler.voornaam} ${speler.achternaam}</td>
           
           
        `;
        rankingList.appendChild(row);

        index++



    }


}

function checkCache(data){

  if(!data == cache){
      cache = data
        console.log("cache not the same!")
      addDataToSite(JSON.parse(data))
  }
  else{
      console.log("caching!")
  }
}