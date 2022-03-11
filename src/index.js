//Vista tentativa de los datos en firebase
/*let database = [
    {name: "Gerardo Garcia", course: "Computacion I", startDate: "30-1-2022", endDate: "30-1-2022"},
    {name: "Monica Dominguez", course: "Ingles C1", startDate: "25-9-2021", endDate: "25-9-2021"},
    {name: "Ernesto Perez", course: "Cocina B", startDate: "4-1-2021", endDate: "4-1-2021"},
    {name: "Omar Aguilar", course: "Natacion", startDate: "15-12-2021", endDate: "15-12-2021"},
  ];

//Modelo Tentativo por corregir
function buildTable(data) {
  
  document.getElementById('databaseTable').innerHTML = `
  <tr>
    <th scope="row">1</th>
    <td>Gerardo García</td>
    <td>Computación Nivel 1</td>
    <td>10</td>
    <td>1/12/2021</td>
    <td>30/1/2022</td>
  <td class="d-flex">
    <a class="ps-2" href="#"><img src="images/Plus.png"/></a>
    <a href="#"><img src="images/Minus.png"/></a>
  </td>
  </tr>
  <tr>
    <th scope="row">2</th>
    <td>David López</td>
    <td>Cocina A</td>
    <td>8</td>
    <td>1/12/2021</td>
    <td>30/1/2022</td>
    <td class="d-flex">
      <a class="ps-2" href="#"><img src="images/Plus.png"/></a>
      <a href="#"><img src="images/Minus.png"/></a>
    </td>
  </tr>
  <tr>
    <th scope="row">3</th>
    <td>Cristina Dominguez</td>
    <td>Administración</td>
    <td>9</td>
    <td>1/12/2021</td>
    <td>30/1/2022</td>
    <td class="d-flex">
      <a class="ps-2" href="#"><img src="images/Plus.png"/></a>
      <a href="#"><img src="images/Minus.png"/></a>
    </td>
  </tr>
  `


}*/


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

studentsArray.forEach((student) => {
  console.log(`${student.id} => `, student.data().id);
  console.log(`${student.id} => `, student.data().name);
  console.log(`${student.id} => `, student.data().course);
  console.log(`${student.id} => `, student.data().grade);
  console.log(`${student.id} => `, student.data().startDate.toDate());
  console.log(`${student.id} => `, getOnlyDate(student.data().startDate));
  console.log(`${student.id} => `, student.data().endDate.toDate());
  console.log(`${student.id} => `, getOnlyDate(student.data().endDate));
})

//let timestamp = 1607110465663;
//let date = new Date(timestamp);
//console.log("timestamp = " + date); 
//console.log("timestamp mes= " + date.getMonth()); 
