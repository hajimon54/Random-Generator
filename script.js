const firstNames = ["Hope", "Launa", "Katherine", "Walker", "Moses", "Tayna", "Rosia", "Yahaira", "Tommy", "Elwanda", "Clorinda", "Sheron", "Kayla", "Clementina", "Rene", "Rex", "Kathy", "Latoya", "Shirleen", "Shoshana"];

const lastNames = ["Chauncey", "Houchins", "Lama", "Frasca", "Houston", "Ake", "Shankles", "Cantor", "Mizell", "Cleland", "Maltby", "Tirrell", "Cary", "Mace", "Horta", "Carlile", "Deegan", "Torrez", "Humfeld", "Helgeson"];

const getRandomNumber = (max) => Math.floor(Math.random() * max);

let getRandomName = () => `${firstNames[getRandomNumber(firstNames.length)]} ${lastNames[getRandomNumber(lastNames.length)]}`;


const setRandomName = () => {
document.getElementById('random-name').innerText = getRandomName();
};

document.getElementById('generate').addEventListener('click', setRandomName);