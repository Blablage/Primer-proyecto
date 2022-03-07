let database = [
    {name: "Gerardo Garcia", course: "Computacion I", startDate: "30-1-2022", endDate: "30-1-2022"},
    {name: "Monica Dominguez", course: "Ingles C1", startDate: "25-9-2021", endDate: "25-9-2021"},
    {name: "Ernesto Perez", course: "Cocina B", startDate: "4-1-2021", endDate: "4-1-2021"},
    {name: "Omar Aguilar", course: "Natacion", startDate: "15-12-2021", endDate: "15-12-2021"},
  ];

//por probar
  function buildTable(data) {
    var table = document.createElement("table");
  
    var fields = Object.keys(data[0]);
    var headRow = document.createElement("tr");
    fields.forEach(function(field) {
      var headCell = document.createElement("th");
      headCell.appendChild(document.createTextNode(field));
      headRow.appendChild(headCell);
    });
    table.appendChild(headRow);
  
    data.forEach(function(object) {
      var row = document.createElement("tr");
      fields.forEach(function(field) {
        var cell = document.createElement("td");
        cell.appendChild(document.createTextNode(object[field]));
        if (typeof object[field] == "number") {
          cell.style.textAlign = "right";
        }
        row.appendChild(cell);
      });
      table.appendChild(row);
    });
  
    return table;
}