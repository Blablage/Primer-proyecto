//Vista tentativa de los datos en firebase
//En contruccion
let database = [
    {id: 111, name: "Jocelyn Garcia", course: "Computacion I", startDate: "30-1-2022", endDate: "30-1-2022"},
    {id: 499, name: "Enrique Dominguez", course: "Ingles C1", startDate: "25-9-2021", endDate: "25-9-2021"},
  ];

//Modelo Tentativo por corregir
function buildAddedStudents(data) {
  let studentElements;
  let table = document.getElementById('addedStudents')

  data.forEach((elem) => {

    studentElements = `
    ${!!studentElements ? studentElements : ''}
      <tr>
        <th scope="row">${elem.id}</th>
        <td>${elem.name}</td>
        <td>${elem.course}</td>
        <td>10</td>
        <td>${elem.startDate}</td>
        <td>${elem.endDate}</td>
        <td class="d-flex">
          <a class="ps-2 mx-4"href="#"><img src="images/Minus.png"/></a>
        </td>
      </tr>
    `
    table.innerHTML = studentElements;
  })
}

buildAddedStudents(database);