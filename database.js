var transaction01 = {
    transactionID: "01",
    date: "December 05, 2017",
    transactionType: "ATM" ,
    locationT: "Kitchener",
    value: "-800 CAD",
    transactionDescription: ""
};
var transaction02 = {
    transactionID: "02",
    date: "December 05, 2017",
    transactionType: "Online" ,
    locationT: "Kitchener",
    value: "-56 CAD",
    transactionDescription: ""
};
var transaction03 = {
    transactionID: "03",
    date: "December 05, 2017",
    transactionType: "Transfer" ,
    locationT: "Toronto",
    value: "270 CAD",
    transactionDescription: ""
};
var transaction04 = {
    transactionID: "04",
    date: "December 08, 2017",
    transactionType: "ATM" ,
    locationT: "Kitchener",
    value: "200 CAD",
    transactionDescription: ""
};
var transaction05 = {
    transactionID: "05",
    date: "December 12, 2017",
    transactionType: "Transfer" ,
    locationT: "Kitchener",
    value: "-89 CAD",
    transactionDescription: ""
};
var transaction06 = {
    transactionID: "06",
    date: "December 15, 2017",
    transactionType: "Deposit" ,
    locationT: "Kitchener",
    value: "1200 CAD",
    transactionDescription: ""
};
var transaction07 = {
    transactionID: "07",
    date: "December 18, 2017",
    transactionType: "ATM" ,
    locationT: "Paris",
    value: "-23 CAD",
    transactionDescription: ""
};
var transaction08 = {
    transactionID: "08",
    date: "December 20, 2017",
    transactionType: "Charge" ,
    locationT: "Paris",
    value: "-230 CAD",
    transactionDescription: ""
};
var transaction09 = {
    transactionID: "09",
    date: "January 01, 2018",
    transactionType: "ATM" ,
    locationT: "Paris",
    value: "-780 CAD",
    transactionDescription: ""
};
var transaction10 = {
    transactionID: "10",
    date: "January 02, 2018",
    transactionType: "Transfer" ,
    locationT: "Kitchener",
    value: "-99 CAD",
    transactionDescription: ""
};
var transaction11 =  {
    transactionID: "11",
    date: "January 14, 2018",
    transactionType: "Transfer" ,
    locationT: "Kitchener",
    value: "78 CAD",
    transactionDescription: ""
};
var transaction12 =  {
    transactionID: "12",
    date: "February 04, 2018",
    transactionType: "Online" ,
    locationT: "Kitchener",
    value: "-67 CAD",
    transactionDescription: ""
};
var transaction13 = {
    transactionID: "13",
    date: "February 05, 2018",
    transactionType: "ATM" ,
    locationT: "Kitchener",
    value: "200 CAD",
    transactionDescription: ""
};
var transaction14 = {
    transactionID: "14",
    date: "February 10, 2018",
    transactionType: "ATM" ,
    locationT: "",
    value: "-120 CAD",
    transactionDescription: "Cash withdrawal"
};
var transaction15 ={
    transactionID: "15",
    date: "February 14, 2018",
    transactionType: "Charge" ,
    locationT: "Guelph",
    value: "-187 CAD",
    transactionDescription: ""
};
var transaction16 = {
    transactionID: "16",
    date: "March 01, 2018",
    transactionType: "Online" ,
    locationT: "Kitchener",
    value: "-89 CAD",
    transactionDescription: ""
};

var transactions = [
    transaction01,
    transaction02,
    transaction03,
    transaction04,
    transaction05,
    transaction06,
    transaction07,
    transaction08,
    transaction09,
    transaction10,
    transaction11,
    transaction12,
    transaction13,
    transaction14,
    transaction15,
    transaction16
]

function showTransactions() {
  var tableBody = "";
  var valueString = "";

  for (var i = transactions.length - 1; i >= 0; i--) {
    var locationOrDescription = transactions[i].locationT;

    if (transactions[i].locationT.length == 0) {
        locationOrDescription = transactions[i].transactionDescription;
    }

    if (transactions[i].value.indexOf("-") !== -1) {
        valueString = "<td class='value negative'>" + transactions[i].value + "</td>";
    }
    else {
        valueString = "<td class='value positive'>" + transactions[i].value + "</td>";
    }

    tableBody += "<tr><td>" + transactions[i].transactionID + "</td><td>" + transactions[i].date +
        "</td><td>" + transactions[i].transactionType + "</td><td>" + locationOrDescription
        + "</td>" + valueString + "</tr>";
  }

  document.getElementsByTagName("tbody")[0].innerHTML = tableBody;
}

function showLatest() {
  var tableBody = "";
  var valueString = "";

  for (var i = transactions.length - 1; i >= transactions.length - 5; i--) {
    var locationOrDescription = transactions[i].locationT;

    if (transactions[i].locationT.length == 0) {
        locationOrDescription = transactions[i].transactionDescription;
    }

    if (transactions[i].value.indexOf("-") !== -1) {
        valueString = "<td class='value negative'>" + transactions[i].value + "</td>";
    }
    else {
        valueString = "<td class='value positive'>" + transactions[i].value + "</td>";
    }

    tableBody += "<tr><td>" + transactions[i].transactionID + "</td><td>" + transactions[i].date +
        "</td><td>" + transactions[i].transactionType + "</td><td>" + locationOrDescription
        + "</td>" + valueString + "</tr>";
  }

  document.getElementsByTagName("tbody")[0].innerHTML = tableBody;
}

function filter() {
  var monthF = document.getElementById("dateFilter");
  var month = monthF.options[monthF.selectedIndex].text;
  var typeF = document.getElementById("typesFilter");
  var type = typeF.options[typeF.selectedIndex].text;
  var locationF = document.getElementById("locationFilter");
  var location = locationF.options[locationF.selectedIndex].text;

  var sortedArray1 = [];
  var sortedArray2 = [];
  var sortedArray3 = [];

  if (month == "All" && type == "All" && location == "All") {
    showTransactions();
    return;
  }

  for (var i = 0; i < transactions.length; i++) {
    if (month == "All") {
      sortedArray1 = transactions;
      break;
    }
    else {
      if (transactions[i].date.includes(month)) {
        sortedArray1.push(transactions[i]);
      }
    }
  }

  for (var i = 0; i < sortedArray1.length; i++) {
    if (type == "All") {
      sortedArray2 = sortedArray1;
      break;
    }
    else {
      if (sortedArray1[i].transactionType.includes(type)) {
        sortedArray2.push(sortedArray1[i]);
      }
    }
  }

  for (var i = 0; i < sortedArray2.length; i++) {
    if (location == "All") {
      sortedArray3 = sortedArray2;
      break;
    }
    else {
      if (sortedArray2[i].locationT.includes(location)) {
        sortedArray3.push(sortedArray2[i]);
      }
    }
  }
  var tableBody = "";
  var valueString = "";

  for (var i = sortedArray3.length - 1; i >= 0; i--) {
    var locationOrDescription = sortedArray3[i].locationT;

    if (sortedArray3[i].locationT.length == 0) {
        locationOrDescription = sortedArray3[i].transactionDescription;
    }

    if (sortedArray3[i].value.indexOf("-") !== -1) {
        valueString = "<td class='value negative'>" + sortedArray3[i].value + "</td>";
    }
    else {
        valueString = "<td class='value positive'>" + sortedArray3[i].value + "</td>";
    }

    tableBody += "<tr><td>" + sortedArray3[i].transactionID + "</td><td>" + sortedArray3[i].date +
        "</td><td>" + sortedArray3[i].transactionType + "</td><td>" + locationOrDescription
        + "</td>" + valueString + "</tr>";
  }
  document.getElementsByTagName("tbody")[0].innerHTML = tableBody;
}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

function loadOptions() {
  var arrayOfTypes = [];
  for (var i = 0; i < transactions.length; i++) {
    arrayOfTypes.push(transactions[i].transactionType);
  }
  var unique = arrayOfTypes.filter(onlyUnique);
  var typesSelect = document.getElementById("typesFilter");

  for (var i = 0; i < unique.length; i++) {
    if (unique[i] != "") {
      var option = document.createElement("option");
      option.text = unique[i];
      typesSelect.add(option);
    }
  }

  var arrayOfLocations = [];
  for (var i = 0; i < transactions.length; i++) {
    arrayOfLocations.push(transactions[i].locationT);
  }
  var unique = arrayOfLocations.filter(onlyUnique);
  var locationsSelect = document.getElementById("locationFilter");

  for (var i = 0; i < unique.length; i++) {
    if (unique[i] != "") {
      var option = document.createElement("option");
      option.text = unique[i];
      locationsSelect.add(option);
    }
  }
}
