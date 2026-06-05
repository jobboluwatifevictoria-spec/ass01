function table() {
  let start = document.getElementById("start").value;
  let end = document.getElementById("end").value;
  let length = document.getElementById("length").value;

  let show = "";
  for (let i = start; i <= end; i++) {
    show += `<table border="3">
        <tr>
        <td>
        Table ${i} </td></tr> 
        <tbody>`;
    for (let j = 1; j <= length; j++) {
      show += `<tr><td>${i} * ${j} = ${i * j}</td></tr>`;
    }
    show += `</tbody> </table>`;
  }
  document.getElementById("results").innerHTML = show;
}
