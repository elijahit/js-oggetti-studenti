const oggettiStudenti = [
  { nome: "Manuel", cognome: "Marchi", eta: 22 },
  { nome: "Maria", cognome: "Rossi", eta: 21 },
  { nome: "Giovanni", cognome: "Bianchi", eta: 23 },
  { nome: "Anna", cognome: "Verdi", eta: 20 },
  { nome: "Luca", cognome: "Russo", eta: 22 },
  { nome: "Giulia", cognome: "Ferrari", eta: 21 },
  { nome: "Paolo", cognome: "Esposito", eta: 24 },
  { nome: "Sara", cognome: "Ricci", eta: 20 },
  { nome: "Marco", cognome: "Costa", eta: 23 },
  { nome: "Chiara", cognome: "Gallo", eta: 22 }
];

// CICLO FOR OF
// for (const student of oggettiStudenti) {
//   console.log(student.nome, student.cognome)
// }

// CICLO FOR
// for (let i = 0; i < oggettiStudenti.length; i++) {
//   console.log(oggettiStudenti[i].nome, oggettiStudenti[i].cognome);
// }

// // CICLO FOR EACH
// oggettiStudenti.forEach(student => {
//   console.log(student.nome, student.cognome);
// })

// ESERCIZIO 2 PARTE

// DICHIRAZIONI
const formAddStudent = document.getElementById("formAddStudent");

// FUNZIONI
function appendHtml (studentObject) {
  const listUserTable = document.getElementById('tbody-userList');
  listUserTable.innerHTML += `
  <tr>
    <td>${studentObject.nome}</td>
    <td>${studentObject.cognome}</td>
    <td>${studentObject.eta}</td>
  </tr>
  `
}

function addStudentFunction (e) {
  e.preventDefault();
  const studentObject = {
    nome: e.srcElement[0].value,
    cognome: e.srcElement[1].value,
    eta: e.srcElement[2].value,
  }

  console.log(studentObject)
  

}

// CICLO INIZIALE CHE POPOLA LA TABELLA

for (const value of oggettiStudenti) {
  appendHtml(value);
}

formAddStudent.addEventListener('submit', addStudentFunction);