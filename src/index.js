//Vista tentativa de los datos en firebase
let database = [
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


}