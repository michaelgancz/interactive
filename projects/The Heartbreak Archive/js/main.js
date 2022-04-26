
// load the airtable library
var Airtable = require('airtable');

// configure the site to point to your Airtable
var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyvozUiDblogC3Of'
});
var base = Airtable.base('applmuDb6G6H7htfi');

// set up a blank array for all your rows
const rows = [];

// this line of code says to get all the info from AirTable
// put your table name in the quotes
base('Entries').select({
    // If you want to sort the records, include that here:
    //  sort: [
    //     {field: 'Title', direction: 'asc'}
    // ],
}).eachPage(gotPageofRows, gotAllRows);

// Here, we're going to get batches of rows from the airtable, 
// and add each row to our rows array.
function gotPageofRows(records, fetchNextPage) {
    console.log("gotPageofRows()");
    rows.push(...records);
    fetchNextPage();
}

// once we've got all rows in our array, the following code runs.
function gotAllRows(err) {
    console.log("gotAllRows()");
    if (err) {
        console.log("Error loading rows");
        console.error(err);
        return;
    }
    consoleLogRows();

    //chooseRow picks a random row to display
    var rand = 0;
    rand = Math.floor(Math.random() * rows.length);
    console.log("Number of rows", rows.length);
    console.log("Row chosen", rand);

    // here, we want to show a single random row, 
    // which happens with the showRow function.
    showRow(rows[rand]);
}

var index = 0;

// consoleLogRows simply logs each row to the console, 
// so you can see it's data and fields.
function consoleLogRows() {
    console.log("consoleLogRows()");
    rows.forEach((row) => {
        console.log("Row:", row);
    });
}

// showRows is what puts the content onto the HTML page.
// it only displays a single row.
function showRow(row) {

    console.log("showRow()");
    console.log("Approved?", row.fields.Approved);

    // const slide = document.getElementById("slide");
    //slide.style.backgroundColor = row.fields.Color;
    //const div = document.getElementById("slide-text");
    //slide.innerHTML = row.fields.Name;

    const image = document.createElement("img");
    image.src = row.fields.Icon[0].url;
    image.id = "entry";

    if (row.fields.Approved == true) {
        document.body.appendChild(image);
    }
    else {
        newRand = Math.floor(Math.random() * rows.length);
        console.log("Number of rows", rows.length);
        console.log("Row chosen", newRand);
        showRow(rows[newRand]);
    }

    if (click == false) {
        image.style.display = "none";
        html.style.display = "none";
    }
    else {
        image.style.display = "block";
        image.style.margin = "auto";
        let html = "<br> <br> <br> <button onClick='window.location.reload();'> Refresh Page </button>";
        image.insertAdjacentHTML("afterend", html);
    }
}


// This sets up an event.
// When you click on a slide, you replace the content with the message
// form the next row. 
// Some additional logic ensures that when you reach the last row,
// you loop back to the beginning.
//document.getElementById("img").addEventListener("click", () => {
//    console.log(index);
//    if (index < rows.length - 1) {
//        index = index + 1;
//        showRow(rows[index]);
//    } else {
//        index = 0;
//        showRow(rows[index]);
//    }
//})

var click = false;
var clicks = 0;
function clickTest() {
    if (clicks == 0) {
        console.log("click!");
        click = true;
        gotAllRows();
        click = false;
    }
    clicks = 1;
    document.getElementById("spiel").style.display = "none";
    document.getElementById("myFrame").style.display = "none";
    document.getElementById("frame").style.display = "none";
    document.getElementById("refresh").style.display = "block";
}
