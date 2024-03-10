// addPlayer.js

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const numberOfPlayers = parseInt(document.getElementById('numberOfPlayers').value) || 0;
    const playersData = [];


    for (let i = 1; i <= numberOfPlayers; i++) {
        const playerData = {
            voornaam: document.getElementById(`voornaam${i}`).value,
            achternaam: document.getElementById(`achternaam${i}`).value,
            geslacht: document.getElementById(`geslacht${i}`).value,
            land: document.getElementById(`land${i}`).value,
        };

        playersData.push(playerData);
    }

    // Create the POST request
    fetch('/spelers/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(playersData),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            // Check if the response has a JSON content type
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
               // return response.json();
                window.location.href = "/players"}

        })
        .catch(error => {
            // Handle errors during the fetch
            console.error('Error during fetch:', error);
        });

});
