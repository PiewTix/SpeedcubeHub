

fetch("/spelers/all")
    .then((response) => response.json())
    .then((data) => {displaySpelers(data)})

function displaySpelers(spelers) {
    const spelersList = document.getElementById('spelers-list');

    spelers.forEach((speler) => {
        const spelerCard = document.createElement('div');
        spelerCard.className = 'col-md-6 speler-card';

        spelerCard.innerHTML = `
           <a href="/player?id=${speler.id}"><h3>${speler.voornaam} ${speler.achternaam}</h3></a>
            <p><strong>Geslacht:</strong> ${speler.geslacht}</p>
            <p><strong>Land:</strong> ${speler.land}</p>
        `;

        spelersList.appendChild(spelerCard);
    });
}



let knop = document.getElementById("knop")

knop.addEventListener('click', function () {

    window.location.href = '/addplayers';
});
