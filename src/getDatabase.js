/*//Vista tentativa de los datos en firebase
let database = [
    {name: "Gerardo Garcia", course: "Computacion I", startDate: "30-1-2022", endDate: "30-1-2022"},
    {name: "Monica Dominguez", course: "Ingles C1", startDate: "25-9-2021", endDate: "25-9-2021"},
    {name: "Ernesto Perez", course: "Cocina B", startDate: "4-1-2021", endDate: "4-1-2021"},
    {name: "Omar Aguilar", course: "Natacion", startDate: "15-12-2021", endDate: "15-12-2021"},
  ];

//Modelo Tentativo por corregir
function buildTable(data) {
  let studentElements;
  let table = document.getElementById('databaseTable')

  data.forEach((elem, index) => {
    let id = index + 1;

    studentElements = `
    ${!!studentElements ? studentElements : ''}
      <tr>
        <th scope="row">${id}</th>
        <td>${elem.name}</td>
        <td>${elem.course}</td>
        <td>10</td>
        <td>${elem.startDate}</td>
        <td>${elem.endDate}</td>
        <td class="d-flex">
          <a class="ps-2 mx-4" href="#"><img src="images/plus.png"/></a>
          <a class="ps-2 mx-4"href="#"><img src="images/minus.png"/></a>
        </td>
      </tr>
    `
    table.innerHTML = studentElements;
  })
}

buildTable(database);*/

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js"
import { getFirestore, collection, getDocs, query } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js"

const firebaseApp = initializeApp({
  apiKey: "AIzaSyAbB5YTMV3gkN-VvegI39ogGyeJBo0Ng5I",
  authDomain: "school-5aab5.firebaseapp.com",
  projectId: "school-5aab5"
});

const db = getFirestore(firebaseApp);

const consulta = query(collection(db, 'school'));

let studentsArray = await getDocs(consulta)
  .catch(e => console.log(e));

//Convierte la marca de tiempo a la fecha en formato dd/mm/aaaa
function getOnlyDate(timestamp){
  let date = new Date(timestamp.seconds*1000);
  return date.getDate() + "/"+(date.getMonth()+1) + "/" + date.getFullYear();
}

//Modelo Tentativo por corregir
function buildTable(data) {
  let studentElements;
  let table = document.getElementById('databaseTable')

  data.forEach((elem, index) => {

    studentElements = `
    ${!!studentElements ? studentElements : ''}
      <tr>
        <th scope="row">${elem.data().id}</th>
        <td>${elem.data().name}</td>
        <td>${elem.data().course}</td>
        <td>${elem.data().grade}</td>
        <td>${getOnlyDate(elem.data().startDate)}</td>
        <td>${getOnlyDate(elem.data().endDate)}</td>
        <td class="d-flex">
          <a class="ps-2 mx-4" href="#"><img src="images/Plus.png"/></a>
          <a class="ps-2 mx-4"href="#"><img src="images/Minus.png"/></a>
        </td>
      </tr>
    `
    table.innerHTML = studentElements;
  })
}

buildTable(studentsArray);