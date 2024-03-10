const tournamentList = document.getElementById("tournament-list");



fetch("/toernooien/all")
    .then((response) => response.json())
    .then((data) => {
        data.forEach((tournament) => {


            const tournamentCard = document.createElement("div");
            tournamentCard.classList.add("tournament-card");

            if(tournament.naam == "AvesMaria2023"){
                tournamentCard.id="divColor"
            }

            const tournamentLink = document.createElement("a");
            tournamentLink.textContent = tournament.naam;
            tournamentLink.href = `/tournament?name=${tournament.naam}`;

            const stad = document.createElement("p");
            stad.textContent = `Stad: ${tournament.stad}`;

            const land = document.createElement("p");
            land.textContent = `Land: ${tournament.land}`;

            const datum = document.createElement("p");
            datum.textContent = `Datum: ${tournament.datum}`;

            const deelnamePrijs = document.createElement("p");
            deelnamePrijs.textContent = `Deelnameprijs: €${tournament.deelnamePrijs}`;

            const editDeelnameprijsButton = document.createElement("button");
            editDeelnameprijsButton.textContent = "Edit Deelnameprijs";



            const newDeelnameprijsInput = document.createElement("input");
            newDeelnameprijsInput.type = "number";
            newDeelnameprijsInput.placeholder = tournament.deelnamePrijs;
            newDeelnameprijsInput.classList.add("new-deelnameprijs-input");

            editDeelnameprijsButton.addEventListener("click", () => {
                updateDeelnameprijs(tournament, newDeelnameprijsInput.value, deelnamePrijs);
            });

            const organizerNames = document.createElement("p");
            organizerNames.innerText = "Organizatoren: ";
            organizerNames.classList.add("organizer-names");
            const organizerLinks = tournament.organisatoren.map((organizer) => {
                const organizerLink = document.createElement("a");
                organizerLink.textContent = organizer.voornaam;
                organizerLink.href = `/organisator?id=${organizer.id}`;
                return organizerLink;
            });
            organizerLinks.forEach((link, index) => {
                if (index > 0) {
                    organizerNames.appendChild(document.createTextNode(", "));
                }
                organizerNames.appendChild(link);
            });

            tournamentCard.appendChild(tournamentLink);
            tournamentCard.appendChild(stad);
            tournamentCard.appendChild(land);
            tournamentCard.appendChild(datum);
            tournamentCard.appendChild(deelnamePrijs);
            tournamentCard.appendChild(editDeelnameprijsButton);
            tournamentCard.appendChild(newDeelnameprijsInput);
            tournamentCard.appendChild(organizerNames);

            tournamentList.appendChild(tournamentCard);
        });
    })
    .catch((error) => console.error("Error fetching data: ", error));





function updateDeelnameprijs(tournamentName, newDeelnameprijs, deelnamePrijs) {




    if(newDeelnameprijs != "" && (!isNaN(parseFloat(newDeelnameprijs)) && isFinite(newDeelnameprijs))){

    fetch(`/toernooien/deelnameprijs`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            toernooiName: tournamentName,
            newDeelnameprijs: newDeelnameprijs,
        }),
    })
        .then((response) => {
            if (response.ok) {
                console.log("Deelnameprijs updated successfully");


                deelnamePrijs.innerText = "Deelnameprijs: €"+ newDeelnameprijs




            } else {
                console.error("Failed to update Deelnameprijs");
            }
        })
        .catch((error) => console.error("Error updating Deelnameprijs: ", error));
}
}