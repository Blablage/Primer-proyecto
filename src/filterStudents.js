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

//variable global que guarda la tabla de las busquedas
let studentElements;

//Convierte la marca de tiempo a la fecha en formato dd/mm/aaaa
function getOnlyDate(timestamp){
  let date = new Date(timestamp.seconds*1000);
  return date.getDate() + "/"+(date.getMonth()+1) + "/" + date.getFullYear();
}

//Genera la tabla filtrada de los alumnos y su informacion desde la base de datos de firebase
function buildFilteredTable(data) {
  let table = document.getElementById('databaseTable');
  
  studentElements = `
  ${!!studentElements ? studentElements : ''}
  <tr>
    <th scope="row">${data.id}</th>
    <td>${data.name}</td>
    <td>${data.course}</td>
    <td>${data.grade}</td>
    <td>${getOnlyDate(data.startDate)}</td>
    <td>${getOnlyDate(data.endDate)}</td>
    <td class="d-flex">
      <a class="ps-2 mx-4" href="#"><img src="images/plus.png"/></a>
    </td>
    </tr>
    `
    table.innerHTML = studentElements;
}

let searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", function() {

    //Borra cualquier busqueda anterior de la tabla
    studentElements = undefined;
        
    let titleSearch = document.getElementById("titleSearch");
    let studentTable = document.getElementById("studentTable");
    let searchBox = document.getElementById("searchBox").value;
    let searchOptions;

    titleSearch.style.display = "block";
    studentTable.style.display = "table";
    
    studentsArray.forEach((elem) => {

      let words = Object.keys(elem.data())
      //console.log( Object.keys(elem.data()));
      //console.log( Object.keys(elem.data().name));
      searchOptions = document.getElementById("searchOptions").value;
      console.log(searchOptions);

      
      //Compara los datos ingresados segun el parámetro de busqueda elegido
      //NOTA: Filtra los datos correctamente, pero no segun la opcion ingresada
      switch(searchOptions){

        case 'id': if( searchBox === elem.data().id ) {
          //console.log("id");
          buildFilteredTable(elem.data());
          break;
        }
        
        case 'name': if( searchBox === elem.data().name ) {
          //console.log("name");
          //console.log(searchBox);
          //console.log(elem.data().name);
          buildFilteredTable(elem.data());
          break;
        }
    
        case 'course':
        console.log("searchOptions: " + searchOptions);      
        console.log("en course: ");     
        if( searchBox === elem.data().course ) {
          buildFilteredTable(elem.data());
          break;
        }

        default: console.log("NotFound");
      }
  })
});