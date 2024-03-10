import { AppDataSource } from "./data-source"
import { Persoon } from "./entity/Persoon"
import {Speler} from "./entity/Speler"
import {Toernooi} from "./entity/Toernooi";
import {Organisator} from "./entity/Organisator";
import {Wedstrijd} from "./entity/Wedstrijd";
import {Statistiek} from "./entity/Statistiek";
import {findTopStatistieken} from "./dao/StatistiekDAO";



let spelers = [
    {'voornaam': 'Amir', 'acthernaam': 'Mechqouq', 'land': 'België', 'geslacht': 'man' },
    {'voornaam': 'Sanjog', 'acthernaam': 'Singh', 'land': 'België', 'geslacht': 'man' },
    {'voornaam': 'Xiu', 'acthernaam': 'Dojing', 'land': 'China', 'geslacht': 'man' },
    {'voornaam': 'Stijn', 'acthernaam': 'Van Gouberghen', 'land': 'België', 'geslacht': 'X' },
    { 'voornaam': 'Laura', 'acthernaam': 'Vanderbilt', 'land': 'Verenigde Staten', 'geslacht': 'woman' },
    { 'voornaam': 'Javier', 'acthernaam': 'Hernandez', 'land': 'Spanje', 'geslacht': 'man' },
    { 'voornaam': 'Mia', 'acthernaam': 'Johnson', 'land': 'Verenigde Staten', 'geslacht': 'woman' },
    { 'voornaam': 'Hans', 'acthernaam': 'Schmidt', 'land': 'Duitsland', 'geslacht': 'man' },
    { 'voornaam': 'Sofia', 'acthernaam': 'Lopez', 'land': 'Spanje', 'geslacht': 'woman' },
    { 'voornaam': 'Pierre', 'acthernaam': 'Dupont', 'land': 'Frankrijk', 'geslacht': 'man' },
    { 'voornaam': 'Elena', 'acthernaam': 'Ivanova', 'land': 'Rusland', 'geslacht': 'woman' },
    { 'voornaam': 'Luca', 'acthernaam': 'Rossi', 'land': 'Italië', 'geslacht': 'man' },
    { 'voornaam': 'Nina', 'acthernaam': 'Kowalski', 'land': 'Polen', 'geslacht': 'woman' },
    { 'voornaam': 'Elsa', 'acthernaam': 'Andersson', 'land': 'Zweden', 'geslacht': 'woman' },
    { 'voornaam': 'Hiroshi', 'acthernaam': 'Yamamoto', 'land': 'Japan', 'geslacht': 'man' },
    { 'voornaam': 'Lena', 'acthernaam': 'Kovalenko', 'land': 'Oekraïne', 'geslacht': 'woman' },
    { 'voornaam': 'Maria', 'acthernaam': 'Garcia', 'land': 'Mexico', 'geslacht': 'woman' },
    { 'voornaam': 'Chen', 'acthernaam': 'Li', 'land': 'Chia', 'geslacht': 'man' },
]

let toernooien = [
    {'naam': "AvesMaria2023", 'land': 'Colombia', 'stad': 'Abaneta', 'date': '2023-11-07', 'prijs': 5},
    {'naam': 'FitchburgFMC2023', 'land': 'Verenigde Staten', 'stad': 'Fitchburg', 'date': '2023-11-02', 'prijs': 12}

]



AppDataSource.initialize().then(async () => {

    const organisator1 =  new Organisator()
    organisator1.voornaam = "Max"
    organisator1.achternaam = "Jongbloed"
    organisator1.land = "Nederland"
    organisator1.geslacht ="man"
    organisator1.email = "max.jongbloed123@gmail.com"



    const organisator2 = new Organisator();
    organisator2.voornaam = "Emma";
    organisator2.achternaam = "Johnson";
    organisator2.land = "Verenigde Staten";
    organisator2.geslacht = "vrouw";
    organisator2.email = "emma.johnson2@gmail.com";


    const organisator3 = new Organisator();
    organisator3.voornaam = "Liam";
    organisator3.achternaam = "Brown";
    organisator3.land = "Canada";
    organisator3.geslacht = "man";
    organisator3.email = "liam.brown3@gmail.com";


    const organisator4 = new Organisator();
    organisator4.voornaam = "Olivia";
    organisator4.achternaam = "Smith";
    organisator4.land = "Engeland";
    organisator4.geslacht = "vrouw";
    organisator4.email = "olivia.smith4@gmail.com";


    const organisator5 = new Organisator();
    organisator5.voornaam = "Noah";
    organisator5.achternaam = "Davis";
    organisator5.land = "Australië";
    organisator5.geslacht = "man";
    organisator5.email = "noah.davis5@gmail.com";


    const organisator6 = new Organisator();
    organisator6.voornaam = "Ava";
    organisator6.achternaam = "White";
    organisator6.land = "Germany";
    organisator6.geslacht = "vrouw";
    organisator6.email = "ava.white6@gmail.com";


    const organisator7 = new Organisator();
    organisator7.voornaam = "Sophia";
    organisator7.achternaam = "Hall";
    organisator7.land = "Frankrijk";
    organisator7.geslacht = "vrouw";
    organisator7.email = "sophia.hall7@gmail.com";


    const organisator8 = new Organisator();
    organisator8.voornaam = "Mia";
    organisator8.achternaam = "Lee";
    organisator8.land = "Spanje";
    organisator8.geslacht = "vrouw";
    organisator8.email = "mia.lee8@gmail.com";

    const organisator9 = new Organisator();
    organisator9.voornaam = "Isabella";
    organisator9.achternaam = "Taylor";
    organisator9.land = "Italië";
    organisator9.geslacht = "vrouw";
    organisator9.email = "isabella.taylor9@gmail.com";

    const organisator10 = new Organisator();
    organisator10.voornaam = "Liam";
    organisator10.achternaam = "Brown";
    organisator10.land = "Japan";
    organisator10.geslacht = "man";
    organisator10.email = "liam.brown10@gmail.com";

    const organisator11 = new Organisator();
    organisator11.voornaam = "Sophia";
    organisator11.achternaam = "White";
    organisator11.land = "Duitsland";
    organisator11.geslacht = "vrouw";
    organisator11.email = "sophia.white11@gmail.com";

    const organisator12 = new Organisator();
    organisator12.voornaam = "Mia";
    organisator12.achternaam = "Davis";
    organisator12.land = "Frankrijk";
    organisator12.geslacht = "vrouw";
    organisator12.email = "mia.davis12@gmail.com";

    const organisator13 = new Organisator();
    organisator13.voornaam = "Noah";
    organisator13.achternaam = "Johnson";
    organisator13.land = "Italië";
    organisator13.geslacht = "man";
    organisator13.email = "noah.johnson13@gmail.com";




    let organisatoren = [[organisator1, organisator2], [organisator3, organisator4], [organisator5], [organisator6], [organisator7, organisator8, organisator9],
        [organisator10, organisator11], [organisator3], [organisator13, organisator4, organisator8]
    ]


    console.log("Inserting a new user into the database...")


// vanaf hier data toevoegen aan DB -> eenmaal doen


    let spelersStored = []

    for (let spelerData of spelers) {
        let pers = new Speler();
        pers.voornaam = spelerData.voornaam;
        pers.achternaam = spelerData.acthernaam;
        pers.geslacht = spelerData.geslacht;
        pers.land = spelerData.land;

        spelersStored.push(pers)

        await AppDataSource.manager.save(pers);
        console.log("Saved a new user with id: " + pers.id)


    }











    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(Persoon)
    console.log("Loaded users: ", users)






    let i = 0

    let toernooienStored = []

    for (let toernooiData of toernooien) {
        let toernooi = new Toernooi();
        toernooi.datum = new Date(toernooiData.date)
        toernooi.naam = toernooiData.naam
        toernooi.land = toernooiData.land
        toernooi.stad = toernooiData.stad
        toernooi.deelnamePrijs = toernooiData.prijs

        toernooi.organisatoren =  organisatoren[i]
        i++

        toernooienStored.push(toernooi)


        await AppDataSource.manager.save(toernooi);
    }



    //wedstrijden voor avesmaria toernooi


    let wed = new Wedstrijd();
    wed.speler1 = spelersStored[0]
    wed.speler2 = spelersStored[1]
    wed.tijd1 = 4.4
    wed.tijd2 = 8.3
    wed.ronde = "eerste ronde"
    wed.toernooi = toernooienStored[0]

    await AppDataSource.manager.save(wed);

    wed = new Wedstrijd();
    wed.speler1 = spelersStored[2]
    wed.speler2 = spelersStored[3]
    wed.tijd1 = 8.4
    wed.tijd2 = 9.3
    wed.ronde = "eerste ronde"
    wed.toernooi = toernooienStored[0]

    await AppDataSource.manager.save(wed);

    wed = new Wedstrijd();
    wed.speler1 = spelersStored[4]
    wed.speler2 = spelersStored[5]
    wed.tijd1 = 13.4
    wed.tijd2 = 10.3
    wed.ronde = "eerste ronde"
    wed.toernooi = toernooienStored[0]

    await AppDataSource.manager.save(wed);

    wed = new Wedstrijd();
    wed.speler1 = spelersStored[6]
    wed.speler2 = spelersStored[7]
    wed.tijd1 = 7.4
    wed.tijd2 = 8.3
    wed.ronde = "eerste ronde"
    wed.toernooi = toernooienStored[0]

    await AppDataSource.manager.save(wed);



    wed = new Wedstrijd();
    wed.speler1 = spelersStored[0]
    wed.speler2 = spelersStored[2]
    wed.tijd1 = 4.3
    wed.tijd2 = 6.7
    wed.ronde = "halve finale"
    wed.toernooi = toernooienStored[0]

    await AppDataSource.manager.save(wed);

    wed = new Wedstrijd();
    wed.speler1 = spelersStored[5]
    wed.speler2 = spelersStored[6]
    wed.tijd1 = 7.8
    wed.tijd2 = 6.9
    wed.ronde = "halve finale"
    wed.toernooi = toernooienStored[0]

    await AppDataSource.manager.save(wed);


    wed = new Wedstrijd();
    wed.speler1 = spelersStored[0]
    wed.speler2 = spelersStored[6]
    wed.tijd1 = 4.8
    wed.tijd2 = 5.6
    wed.ronde = "finale"
    wed.toernooi = toernooienStored[0]

    await AppDataSource.manager.save(wed);



    //wedstrijden voor fitscbburg toernooi


    wed = new Wedstrijd();
    wed.speler1 = spelersStored[5]
    wed.speler2 = spelersStored[6]
    wed.tijd1 = 9.4
    wed.tijd2 = 10.3
    wed.ronde = "eerste ronde"
    wed.toernooi = toernooienStored[1]

    await AppDataSource.manager.save(wed);

    wed = new Wedstrijd();
    wed.speler1 = spelersStored[7]
    wed.speler2 = spelersStored[8]
    wed.tijd1 = 11.4
    wed.tijd2 = 17.8
    wed.ronde = "eerste ronde"
    wed.toernooi = toernooienStored[1]

    await AppDataSource.manager.save(wed);

    wed = new Wedstrijd();
    wed.speler1 = spelersStored[9]
    wed.speler2 = spelersStored[10]
    wed.tijd1 = 8.4
    wed.tijd2 = 10.2
    wed.ronde = "eerste ronde"
    wed.toernooi = toernooienStored[1]

    await AppDataSource.manager.save(wed);

    wed = new Wedstrijd();
    wed.speler1 = spelersStored[11]
    wed.speler2 = spelersStored[12]
    wed.tijd1 = 23.8
    wed.tijd2 = 9.3
    wed.ronde = "eerste ronde"
    wed.toernooi = toernooienStored[1]

    await AppDataSource.manager.save(wed);

    wed = new Wedstrijd();
    wed.speler1 = spelersStored[13]
    wed.speler2 = spelersStored[14]
    wed.tijd1 = 4.9
    wed.tijd2 = 5.3
    wed.ronde = "eerste ronde"
    wed.toernooi = toernooienStored[1]

    await AppDataSource.manager.save(wed);

    wed = new Wedstrijd();
    wed.speler1 = spelersStored[15]
    wed.speler2 = spelersStored[16]
    wed.tijd1 = 18.2
    wed.tijd2 = 6.6
    wed.ronde = "eerste ronde"
    wed.toernooi = toernooienStored[1]

    await AppDataSource.manager.save(wed);

    wed = new Wedstrijd();
    wed.speler1 = spelersStored[17]
    wed.speler2 = spelersStored[3]
    wed.tijd1 = 7.4
    wed.tijd2 = 6.2
    wed.ronde = "eerste ronde"
    wed.toernooi = toernooienStored[1]

    await AppDataSource.manager.save(wed);

    wed = new Wedstrijd();
    wed.speler1 = spelersStored[4]
    wed.speler2 = spelersStored[5]
    wed.tijd1 = 6.4
    wed.tijd2 = 9.2
    wed.ronde = "eerste ronde"
    wed.toernooi = toernooienStored[1]

    await AppDataSource.manager.save(wed);










    wed = new Wedstrijd();
    wed.speler1 = spelersStored[5]
    wed.speler2 = spelersStored[7]
    wed.tijd1 = 4.3
    wed.tijd2 = 6.7
    wed.ronde = "tweede ronde"
    wed.toernooi = toernooienStored[1]

    await AppDataSource.manager.save(wed);

    wed = new Wedstrijd();
    wed.speler1 = spelersStored[9]
    wed.speler2 = spelersStored[12]
    wed.tijd1 = 7.8
    wed.tijd2 = 6.9
    wed.ronde = "tweede ronde"
    wed.toernooi = toernooienStored[1]



    await AppDataSource.manager.save(wed);

    wed = new Wedstrijd();
    wed.speler1 = spelersStored[13]
    wed.speler2 = spelersStored[16]
    wed.tijd1 = 5.3
    wed.tijd2 = 4.7
    wed.ronde = "tweede ronde"
    wed.toernooi = toernooienStored[1]

    await AppDataSource.manager.save(wed);

    wed = new Wedstrijd();
    wed.speler1 = spelersStored[3]
    wed.speler2 = spelersStored[4]
    wed.tijd1 = 6.4
    wed.tijd2 = 5.9
    wed.ronde = "tweede ronde"
    wed.toernooi = toernooienStored[1]

    await AppDataSource.manager.save(wed);




    wed = new Wedstrijd();
    wed.speler1 = spelersStored[5]
    wed.speler2 = spelersStored[12]
    wed.tijd1 = 4.9
    wed.tijd2 = 5.2
    wed.ronde = "halve finale"
    wed.toernooi = toernooienStored[1]

    await AppDataSource.manager.save(wed);


    wed = new Wedstrijd();
    wed.speler1 = spelersStored[16]
    wed.speler2 = spelersStored[4]
    wed.tijd1 = 5.6
    wed.tijd2 = 6.2
    wed.ronde = "halve finale"
    wed.toernooi = toernooienStored[1]

    await AppDataSource.manager.save(wed);


    wed = new Wedstrijd();
    wed.speler1 = spelersStored[16]
    wed.speler2 = spelersStored[5]
    wed.tijd1 = 3.2
    wed.tijd2 = 3.4
    wed.ronde = "finale"
    wed.toernooi = toernooienStored[1]

    await AppDataSource.manager.save(wed);





    let statistieken = [
        { wedstrijden: 4, toernooien: 3, record: 12.1 },
        { wedstrijden: 1, toernooien: 0, record: 2.5 },
        { wedstrijden: 12, toernooien: 7, record: 24.3 },
        { wedstrijden: 5, toernooien: 3, record: 8.7 },
        { wedstrijden: 8, toernooien: 4, record: 18.9 },
        { wedstrijden: 2, toernooien: 1, record: 6.2 },
        { wedstrijden: 15, toernooien: 10, record: 31.8 },
        { wedstrijden: 9, toernooien: 5, record: 14.4 },
        { wedstrijden: 3, toernooien: 2, record: 5.9 },
        { wedstrijden: 6, toernooien: 3, record: 10.3 },
        { wedstrijden: 10, toernooien: 5, record: 19.5 },
        { wedstrijden: 13, toernooien: 8, record: 27.2 },
        { wedstrijden: 14, toernooien: 9, record: 29.8 },
        { wedstrijden: 16, toernooien: 11, record: 34.5 },
        { wedstrijden: 0, toernooien: 0, record: 16.2 },
        { wedstrijden: 19, toernooien: 13, record: 18.6 },
        { wedstrijden: 11, toernooien: 9, record: 22.6 },
        { wedstrijden: 5, toernooien: 4, record: 12.4 }
    ];


    for  (let i = 1; i< 19; i++){
        let stat = new Statistiek();
        stat.GewonnenWedstrijden = statistieken[i-1].wedstrijden
        stat.GewonnenToernooien = statistieken[i-1].toernooien
        stat.recordTijd = statistieken[i-1].record
        stat.spelerId = i
        await AppDataSource.manager.save(stat);

    }
















    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))


const express = require('express');
const bodyParser = require('body-parser');
let path = require('path');
const app = express();
const server = require("http").createServer(app);
const WebSocket = require('ws')
const wss = new WebSocket.Server({server:server})

wss.on('connection', async function connection(ws) {


    ws.on('message', function message(data) {
        //console.log('received: %s', data);

    });



    setInterval(async () => {
        let stats = await findTopStatistieken();
        let array = []
        for (let stat of stats) {
            let jsonStat = JSON.stringify(stat)
            array.push(jsonStat)
        }
        ws.send(JSON.stringify(array))
        // Send data to the client


    }, 1000);






});




app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/views')));

app.get('/', (_, resp) => {
    resp.sendFile(path.join(__dirname, '/views/index.html'));
});

app.get('/tournaments', (_, resp) => {
    resp.sendFile(path.join(__dirname, '/views/toernooien.html'));
});

app.get('/organisator', (_, resp) => {
    resp.sendFile(path.join(__dirname, '/views/organisator.html'));
});


app.get('/tournament', (_, resp) => {
    resp.sendFile(path.join(__dirname, '/views/singleToernooi.html'));
});


app.get('/player', (_, resp) => {
    resp.sendFile(path.join(__dirname, '/views/speler.html'));
});

app.get('/ranking', (_, resp) => {
    resp.sendFile(path.join(__dirname, '/views/ranking.html'));
});


app.get('/players', (_, resp) => {
    resp.sendFile(path.join(__dirname, '/views/players.html'));
});



app.get('/addplayers', (_, resp) => {
    resp.sendFile(path.join(__dirname, '/views/addPlayers.html'));
});

let userrouter = require('./routes/SpelerRouter');
let toernooirouter = require('./routes/ToernooiRouter')
let wedstrijdrouter = require("./routes/WedstrijdRouter")
let organisatorrouter = require("./routes/OrganisatorRouter")
let statistiekrouter = require("./routes/StatistiekRouter")

app.use('/spelers', userrouter); // Place this route definition after the app.use for serving static files.
app.use('/toernooien',toernooirouter);
app.use('/wedstrijden',wedstrijdrouter);
app.use('/organisatoren', organisatorrouter)
app.use('/statistieken', statistiekrouter)

server.listen(3000, () => {console.log("listening on port 3000")})

console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results");