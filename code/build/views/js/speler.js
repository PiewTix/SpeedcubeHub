let queryString = window.location.search;
let id = queryString.substring(4)


fetch(`/spelers/id/${id}`)
    .then((response) => response.json())
    .then((data) => {

            if(data.message){

                    document.body.innerHTML = "";
                    let text = document.createElement("p");
                    text.innerText = "We hebben helaas de gevraagde speler niet terug kunnen vinden..."
                    document.body.appendChild(text)


            }


            let speler = data.__speler__





        let names = document.getElementsByClassName("name")

        for(let el of names){
            el.innerHTML = speler.voornaam + " " + speler.achternaam
        }






        let geslacht = document.getElementById("geslacht")
        geslacht.innerText = speler.geslacht

        let land = document.getElementById("land")
        land.innerText = speler.land

        let contestsWon = document.getElementById("contestsWon")
        contestsWon.innerText = data.GewonnenWedstrijden


        let tournamentsWon = document.getElementById("tournamentsWon")
        tournamentsWon.innerText = data.GewonnenToernooien

        let recordtime = document.getElementById("recordTime")
        recordtime.innerText = data.recordTijd











    })


