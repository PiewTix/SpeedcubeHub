let queryString = window.location.search;
let name = queryString.substring(6)

let wedstrijdenList = document.getElementById("wedstrijden-list")

let titel = document.getElementById("titel")
titel.innerText = `${name} wedstrijden`

fetch(`/wedstrijden/toernooi/${name}`)
    .then((response) => response.json())
    .then((data) => {displayWedstrijden(data)})



function displayWedstrijden(wedstrijden) {
    wedstrijdenList.innerHTML = '';

    // Categorize and display wedstrijden
    const categories = {
        "eerste ronde": [],
        "tweede ronde": [],
        "halve finale": [],
        "finale": [],
    };

    wedstrijden.forEach(wedstrijd => {
        categories[wedstrijd.ronde].push(wedstrijd);
    });

    for (const [category, wedstrijdenInCategory] of Object.entries(categories)) {
        if (wedstrijdenInCategory.length > 0) {



            const categoryHeading = document.createElement('h2');
            categoryHeading.textContent = category;
            wedstrijdenList.appendChild(categoryHeading);

            const categoryList = document.createElement('ul');
            wedstrijdenInCategory.forEach(wedstrijd => {

                const listItem = document.createElement('li');
                listItem.className="li"
                listItem.innerHTML = `
                    <a href="/player?id=${wedstrijd.speler1.id}">${wedstrijd.speler1.voornaam} ${wedstrijd.speler1.achternaam}</a> vs 
                    <a href="/player?id=${wedstrijd.speler2.id}">${wedstrijd.speler2.voornaam} ${wedstrijd.speler2.achternaam}</a>
                    <br>
                    Tijd 1: ${wedstrijd.tijd1}, Tijd 2: ${wedstrijd.tijd2}
                    <br>
                    Winner: ${parseFloat(wedstrijd.tijd1) < parseFloat(wedstrijd.tijd2) ? wedstrijd.speler1.voornaam : wedstrijd.speler2.voornaam}
                `;
                categoryList.appendChild(listItem);
            });

            wedstrijdenList.appendChild(categoryList);
        }
    }
}