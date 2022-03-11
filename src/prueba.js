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