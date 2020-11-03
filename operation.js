function readdata() {
  var garde1 = "";
  var n = "";
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
  n = avg1.toFixed(2);

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
  row1.insertCell(6).innerHTML = n;
  row1.insertCell(7).innerHTML = grade1;
}
function addRow() {
  var grade = "";
  var n1 = "";
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
  n1 = avg.toFixed(3);
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
  row.insertCell(0).innerHTML = '<input type="checkbox" class="select"  >';
  row.insertCell(1).innerHTML = myName.value;
  row.insertCell(2).innerHTML = Roll.value;
  row.insertCell(3).innerHTML = Em;
  row.insertCell(4).innerHTML = Mm;
  row.insertCell(5).innerHTML = Cs;
  row.insertCell(6).innerHTML = n1;
  row.insertCell(7).innerHTML = grade;
}

function readteacher() {
  var garde2 = "";
  var n2 = "";
  var myn11 = document.getElementById("name");
  var rol11 = document.getElementById("roll1");
  var em11 = document.getElementById("emarks").value;
  var mm11 = document.getElementById("mmarks").value;
  var cs11 = document.getElementById("csmarks").value;

  var table2 = document.getElementById("displaytable2");

  var a11 = parseFloat(em11);
  var b11 = parseFloat(mm11);
  var c11 = parseFloat(cs11);
  var tot11 = a11 + b11 + c11;

  var avg11 = tot11 / 3;
  n2 = avg11.toFixed(2);

  switch (
    avg11 >= 90 && avg11 <= 100
      ? 1
      : avg11 >= 80 && avg11 <= 89
      ? 2
      : avg11 >= 70 && avg11 <= 79
      ? 3
      : avg11 >= 60 && avg11 <= 69
      ? 4
      : 0
  ) {
    case 1:
      grade2 = "A";
      break;
    case 2:
      grade2 = "B";
      break;
    case 3:
      grade2 = "C";
      break;
    case 4:
      grade2 = "D";
      break;
    case 0:
      grade2 = "Fail";
  }
  var rowCount2 = table2.rows.length;
  var row2 = table2.insertRow(rowCount2);

  row2.insertCell(0).innerHTML = myn11.value;
  row2.insertCell(1).innerHTML = rol11.value;
  row2.insertCell(2).innerHTML = em11;
  row2.insertCell(3).innerHTML = mm11;
  row2.insertCell(4).innerHTML = cs11;
  row2.insertCell(5).innerHTML = n2;
  row2.insertCell(6).innerHTML = grade2;
}

function toggle_visibility(hideteacher) {
  var e = document.getElementById(hideteacher);
  if (e.style.display == "block") e.style.display = "none";
  else e.style.display = "block";
}

function deleteRow(obj) {
  var index = obj.parentNode.parentNode.rowIndex;
  var table = document.getElementById("displaytable1");
  table.deleteRow(index);
}
function delm() {
  document.querySelectorAll("#displaytable1 .select:checked").forEach((e) => {
    e.parentNode.parentNode.remove();
  });
}
function SomeDeleteRowFunction() {
  var tab = document.getElementById("displaytable2");
  //or use :  var table = document.all.tableid;
  for (var i = tab.rows.length - 1; i > 0; i--) {
    tab.deleteRow(i);
  }
}

function searchTable() {
  var take, filter, found, tab1, tr11, td11, i11, j11, tname;

  tname = "disp";
  take = document.getElementById("myInput");
  filter = take.value.toUpperCase();
  tab1 = document.getElementById(tname);
  tr11 = tab1.getElementsByTagName("tr");
  for (i11 = 0; i11 < tr11.length; i11++) {
    td11 = tr11[i11].getElementsByTagName("td");
    for (j11 = 0; j11 < td11.length; j11++) {
      if (td11[j11].innerHTML.toUpperCase().indexOf(filter) > -1) {
        found = true;
      }
    }
    if (found) {
      tr11[i11].style.display = "";
      found = false;
    } else {
      if (i11 > 0) {
        //this skips the headers
        tr11[i11].style.display = "none";
      }
    }
  }
}
