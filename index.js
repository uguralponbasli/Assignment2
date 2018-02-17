function transaction_(transactionID, date, transactionType, locationT, value){
    this.transactionID = transactionID;
    this.date = date;
    this.transactionType = transactionType;
    this.locationT = locationT;
    this.value = value;
}


var transaction01 = {
    transactionID: "01",
    date: "12/05/17",
    transactionType: "ATM" ,
    locationT: "Kitchener",
    value: "-800 CAD",
    transactiondDescription: ""
};
var transaction02 = {
    transactionID: "02",
    date: "12/05/17",
    transactionType: "Online" ,
    locationT: "Kitchener",
    value: "-56 CAD",
    transactiondDescription: ""
};
var transaction03 = {
    transactionID: "03",
    date: "12/05/17",
    transactionType: "Transfer" ,
    locationT: "Toronto",
    value: "270 CAD",
    transactiondDescription: ""
};
var transaction04 = {
    transactionID: "04",
    date: "12/08/17",
    transactionType: "ATM" ,
    locationT: "Kitchener",
    value: "200 CAD",
    transactiondDescription: ""
};
var transaction05 = {
    transactionID: "05",
    date: "12/12/17",
    transactionType: "Transfer" ,
    locationT: "Kitchener",
    value: "-89 CAD",
    transactiondDescription: ""
};
var transaction06 = {
    transactionID: "06",
    date: "12/13/17",
    transactionType: "Deposit" ,
    locationT: "Kitchener",
    value: "1200 CAD",
    transactiondDescription: ""
};
var transaction07 = {
    transactionID: "07",
    date: "12/21/17",
    transactionType: "ATM" ,
    locationT: "Paris",
    value: "-23 CAD",
    transactiondDescription: ""
};
var transaction08 = {
    transactionID: "08",
    date: "12/26/17",
    transactionType: "Charge" ,
    locationT: "Paris",
    value: "-230 CAD",
    transactiondDescription: ""
};
var transaction09 = {
    transactionID: "09",
    date: "12/27/17",
    transactionType: "ATM" ,
    locationT: "Paris",
    value: "-780 CAD",
    transactiondDescription: ""
};
var transaction10 = {
    transactionID: "10",
    date: "12/27/17",
    transactionType: "Transfer" ,
    locationT: "Kitchener",
    value: "-99 CAD",
    transactiondDescription: ""
};
var transaction11 =  {
    transactionID: "11",
    date: "12/28/17",
    transactionType: "Transfer" ,
    locationT: "Kitchener",
    value: "78 CAD",
    transactiondDescription: ""
};
var transaction12 =  {
    transactionID: "12",
    date: "12/28/17",
    transactionType: "Online" ,
    locationT: "Kitchener",
    value: "-67 CAD",
    transactiondDescription: ""
};
var transaction13 = {
    transactionID: "13",
    date: "12/28/17",
    transactionType: "ATM" ,
    locationT: "Kitchener",
    value: "200 CAD",
    transactiondDescription: ""
};
var transaction14 = {
    transactionID: "14",
    date: "01/03/18",
    transactionType: "ATM" ,
    locationT: "",
    value: "-120 CAD",
    transactiondDescription: "Cash withdrawal"
};
var transaction15 ={
    transactionID: "15",
    date: "02/07/18",
    transactionType: "Charge" ,
    locationT: "Guelph",
    value: "-187 CAD",
    transactiondDescription: ""
};
var transaction16 = {
    transactionID: "16",
    date: "02/12/18",
    transactionType: "Online" ,
    locationT: "Kitchener",
    value: "-89 CAD",
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



function ShowTable() {


    document.getElementById("main").innerHTML = "<table id = 'transaction'><thead><tr><th>Transaction ID</th><th>Date</th>\<th>Transaction Type</th>" +
        "    <th>Location</th>" +
        "    <th>Value</th></td>" +
        "    </tr>" +
        "    </thead>" +
        "    <tbody>" +
        "    </tbody>"

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

    document.getElementsByTagName("tbody")[0].innerHTML = tableBody;


    function GoBack() {
        window.history.back();
    }
}
