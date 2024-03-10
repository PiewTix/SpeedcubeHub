let queryString = window.location.search;
let id = queryString.substring(4)


fetch(`/organisatoren/id/${id}`)
    .then((response) => response.json())
    .then((data) => {

          if(data.message){

                  document.body.innerHTML = "";
                  let text = document.createElement("p");
                  text.innerText = "We hebben helaas de gevraagde organisator niet terug kunnen vinden..."
                  document.body.appendChild(text)


          }






        let names = document.getElementsByClassName("name")

        for(let el of names){
            el.innerHTML = data.voornaam + " " + data.achternaam
        }

        let email = document.getElementById("email")

        email.innerText = data.email


        let geslacht = document.getElementById("geslacht")
        geslacht.innerText = data.geslacht

        let land = document.getElementById("land")
        land.innerText = data.land









    }).catch((error)=>{

            console.log("kaka")

})


