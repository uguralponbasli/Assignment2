function transaction(transactionID, date, transactionType, locationT, value){
    this.transactionID = transactionID;
    this.date = date;
    this.transactionType = transactionType;
    this.locationT = locationT;
    this.value = value;
}


var transaction01 = {
    transactionID: "01",
    date: "2012-05-17",
    transactionType: "ATM" ,
    locationT: "Kitchener",
    value: "-800.00",
    transactiondDescription: ""
};
var transaction02 = {
    transactionID: "02",
    date: "2012-05-17",
    transactionType: "Online" ,
    locationT: "Kitchener",
    value: "-56.00",
    transactiondDescription: ""
};
var transaction03 = {
    transactionID: "03",
    date: "2012-05-17",
    transactionType: "Transfer" ,
    locationT: "Toronto",
    value: "270.00",
    transactiondDescription: ""
};
var transaction04 = {
    transactionID: "04",
    date: "2012-08-17",
    transactionType: "ATM" ,
    locationT: "Kitchener",
    value: "200.00",
    transactiondDescription: ""
};
var transaction05 = {
    transactionID: "05",
    date: "2012-08-17",
    transactionType: "Transfer" ,
    locationT: "Kitchener",
    value: "-89.00",
    transactiondDescription: ""
};
var transaction06 = {
    transactionID: "06",
    date: "2012-08-19",
    transactionType: "Deposit" ,
    locationT: "Kitchener",
    value: "1200.00",
    transactiondDescription: ""
};
var transaction07 = {
    transactionID: "07",
    date: "2012-09-01",
    transactionType: "ATM" ,
    locationT: "Paris",
    value: "-23.00",
    transactiondDescription: ""
};
var transaction08 = {
    transactionID: "08",
    date: "2017-01-17",
    transactionType: "Charge" ,
    locationT: "Paris",
    value: "-230.00",
    transactiondDescription: ""
};
var transaction09 = {
    transactionID: "09",
    date: "2017-03-21",
    transactionType: "ATM" ,
    locationT: "Paris",
    value: "-780.00",
    transactiondDescription: ""
};
var transaction10 = {
    transactionID: "10",
    date: "2017-04-03",
    transactionType: "Transfer" ,
    locationT: "Kitchener",
    value: "-99.00",
    transactiondDescription: ""
};
var transaction11 =  {
    transactionID: "11",
    date: "2017-04-17",
    transactionType: "Transfer" ,
    locationT: "Kitchener",
    value: "78.00",
    transactiondDescription: ""
};
var transaction12 =  {
    transactionID: "12",
    date: "2017-05-12",
    transactionType: "Online" ,
    locationT: "Kitchener",
    value: "-67.00",
    transactiondDescription: ""
};
var transaction13 = {
    transactionID: "13",
    date: "2017-05-12",
    transactionType: "ATM" ,
    locationT: "Kitchener",
    value: "200.00",
    transactiondDescription: ""
};
var transaction14 = {
    transactionID: "14",
    date: "2017-05-13",
    transactionType: "ATM" ,
    locationT: "Guelph",
    value: "-120.00",
    transactiondDescription: "Cash withdrawal"
};
var transaction15 ={
    transactionID: "15",
    date: "2017-05-19",
    transactionType: "Charge" ,
    locationT: "Guelph",
    value: "-187.00",
    transactiondDescription: ""
};
var transaction16 = {
    transactionID: "16",
    date: "2018-01-12",
    transactionType: "Online" ,
    locationT: "Kitchener",
    value: "-89.00",
    transactiondDescription: ""
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

  for (var i = 0; i < transactions.length; i++) {
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
  var month = monthF.selectedIndex;
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
    if (month == 0) {
      sortedArray1 = transactions;
      break;
    }
    else {
      if (month < 10) {
        if (transactions[i].date.split("-")[1][1].includes(month)) {
          sortedArray1.push(transactions[i]);
        }
      }
      else if (month >= 10) {
        if (transactions[i].date.split("-")[1].includes(month)) {
          sortedArray1.push(transactions[i]);
        }
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

  for (var i = 0; i < sortedArray3.length; i++) {
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

function GoBack(){
    window.history.back();
}

function addTransaction(){
    var date = document.getElementById("date").value;
    var ld = document.getElementById("ld").value;
    var value = document.getElementById("value").value;
    var ttype = document.getElementById("ttype").value;

    var rDate1 = /[1][9][9][0-9][-][0-9][0-9][-][0-9][0-9]/;
    var rDate2 = /[2][0][0,1][0-9][-][0-9][0-9][-][0-9][0-9]/;
    var rld = /^[a-zA-Z0-9_ ]*$/;
    var rValue = /[-]*[1-9][0-9]*[.]{0,1}[0-9]*/;
    var correct = false;

    document.getElementById("dateHelp").innerHTML="";
    document.getElementById("date").style.borderColor = "black"
    document.getElementById("ldHelp").innerHTML="";
    document.getElementById("ld").style.borderColor = "black";
    document.getElementById("ttype").style.borderColor = "black";
    document.getElementById("valueHelp").innerHTML="";
    document.getElementById("value").style.borderColor = "black";




    if (!(rDate1.test(date) || rDate2.test(date)) || !rld.test(ld) || ld ==="" || value===""|| ld.length<10 || !rValue.test(value) || parseFloat(value) > 10000.00 || parseFloat(value) < -10000.00) {
        if (!(rDate1.test(date) || rDate2.test(date))) {
            document.getElementById("dateHelp").innerHTML="Date is not valid!";
            document.getElementById("date").style.borderColor = "red";


        } else {
            document.getElementById("dateHelp").innerHTML="";
            document.getElementById("date").style.borderColor = "black"
        }
        if (!rld.test(ld) || ld ==="") {
            document.getElementById("ld").style.borderColor = "red";

        } else {
            document.getElementById("ld").style.borderColor = "black";
        }


        if (ld.length<10) {
            document.getElementById("ldHelp").innerHTML="Please enter value, 10 characters at least";
            document.getElementById("ld").style.borderColor = "red";

        } else {
            document.getElementById("ldHelp").innerHTML="";
            document.getElementById("ld").style.borderColor = "black";
        }




        if (ttype ==="none") {
            document.getElementById("ttypeHelp").innerHTML="Please enter transaction type";
            document.getElementById("ttype").style.borderColor = "red";

        } else {
            document.getElementById("ttypeHelp").innerHTML="";
            document.getElementById("ttype").style.borderColor = "black";
        }


        if (value===""){
            document.getElementById("valueHelp").innerHTML = "The field cannot be empty";
            document.getElementById("value").style.borderColor = "red";
        }


        if (parseFloat(value) >= 10000.00 || parseFloat(value) <= -10000.00)
        {
            document.getElementById("valueHelp").innerHTML = "The maximum value entered should not be more than $10,000.00.";
            document.getElementById("value").style.borderColor = "red";
        }


    } else
    {

        var date = document.getElementById("date").value;
        var ld = document.getElementById("ld").value;
        var value = document.getElementById("value").value;
        var nValue = parseFloat(value);
        nValue = nValue.toFixed(2);
        value = nValue.toString();
        var ttype = document.getElementById("ttype").value;

        var transactionl = {transactionID: String(transactions.length + 1), date: date, transactionType: ttype, locationT: ld, value: value};
        transactions.push(transactionl);
        var tableBody = "";
        for (var i = 0; i < transactions.length; i++) {

            var locationOrDescription = transactions[i].locationT;
            var valueString = "";
            if (transactions[i].locationT.length == 0) {
                locationOrDescription = transactions[i].transactiondDescription;
            }

            if (transactions[i].value.indexOf("-") !== -1) {
                valueString = "<td class='value negative'>" + transactions[i].value + "</td>";
            }
            else {

                valueString = "<td class='value positive'>" + transactions[i].value + "</td>";
            }


            tableBody += "<tr><td>" + transactions[i].transactionID + "</td><td>" + transactions[i].date +
                "</td><td>" + transactions[i].transactionType + "</td><td>" +
                locationOrDescription
                + "</td>" + valueString + "</tr>";
        }
        document.getElementsByTagName("tbody")[0].innerHTML  = tableBody;
    }




}
