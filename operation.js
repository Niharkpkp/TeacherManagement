function readdata() {
  var garde1 = "";
  var myn = document.getElementById("name");
  var rol = document.getElementById("roll1");
  var em = document.getElementById("emarks").value;
  var mm = document.getElementById("mmarks").value;
  var cs = document.getElementById("csmarks").value;

  var table1 = document.getElementById("disp");

  var a1 = parseFloat(em);
  var b1 = parseFloat(mm);
  var c1 = parseFloat(cs);
  var tot1 = a1 + b1 + c1;

  var avg1 = tot1 / 3;

  switch (
    avg1 >= 90 && avg1 <= 100
      ? 1
      : avg1 >= 80 && avg1 <= 89
      ? 2
      : avg1 >= 70 && avg1 <= 79
      ? 3
      : avg1 >= 60 && avg1 <= 69
      ? 4
      : 0
  ) {
    case 1:
      grade1 = "A";
      break;
    case 2:
      grade1 = "B";
      break;
    case 3:
      grade1 = "C";
      break;
    case 4:
      grade1 = "D";
      break;
    case 0:
      grade1 = "Fail";
  }
  var rowCount1 = table1.rows.length;
  var row1 = table1.insertRow(rowCount1);
  row1.insertCell(0).innerHTML = "";
  row1.insertCell(1).innerHTML = myn.value;
  row1.insertCell(2).innerHTML = rol.value;
  row1.insertCell(3).innerHTML = em;
  row1.insertCell(4).innerHTML = mm;
  row1.insertCell(5).innerHTML = cs;
  row1.insertCell(6).innerHTML = grade1;
}
function copytable() {
  var source = document.getElementById("displaytable1");
  var destination = document.getElementById("displaytable2");
  var copy = source.cloneNode(true);
  copy.setAttribute("id", "displaytable2");
  destination.parentNode.replaceChild(copy, destination);
}
function addRow() {
  var grade = "";
  var myName = document.getElementById("name");
  var Roll = document.getElementById("roll1");
  var Em = document.getElementById("emarks").value;
  var Mm = document.getElementById("mmarks").value;
  var Cs = document.getElementById("csmarks").value;
  var table = document.getElementById("displaytable1");

  var a = parseFloat(Em);
  var b = parseFloat(Mm);
  var c = parseFloat(Cs);
  var tot = a + b + c;

  var avg = tot / 3;

  switch (
    avg >= 90 && avg <= 100
      ? 1
      : avg >= 80 && avg <= 89
      ? 2
      : avg >= 70 && avg <= 79
      ? 3
      : avg >= 60 && avg <= 69
      ? 4
      : 0
  ) {
    case 1:
      grade = "A";
      break;
    case 2:
      grade = "B";
      break;
    case 3:
      grade = "C";
      break;
    case 4:
      grade = "D";
      break;
    case 0:
      grade = "Fail";
  }
  var rowCount = table.rows.length;
  var row = table.insertRow(rowCount);
  row.insertCell(0).innerHTML =
    '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
  row.insertCell(1).innerHTML = myName.value;
  row.insertCell(2).innerHTML = Roll.value;
  row.insertCell(3).innerHTML = Em;
  row.insertCell(4).innerHTML = Mm;
  row.insertCell(5).innerHTML = Cs;
  row.insertCell(6).innerHTML = grade;
}
function toggle_visibility(hideteacher) {
  var e = document.getElementById(hideteacher);
  if (e.style.display == "block") e.style.display = "none";
  else e.style.display = "block";
}
document
  .querySelector(".toggleButton")
  .addEventListener("click", toggleDarKMode);
function toggleDarKMode() {
  var element = document.getElementById("dark-mode");
  element.classList.toggle("dark-mode");
}
function deleteRow(obj) {
  var index = obj.parentNode.parentNode.rowIndex;
  var table = document.getElementById("displaytable1");
  table.deleteRow(index);
}
