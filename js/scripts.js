

var players = [
  {
    first:'Angela',
    last: 'Smith',
    position: 'Guard',
    year: 'Junior'
  },
  {
    first:'Ashley',
    last: 'Roberts',
    position: 'Guard',
    year: 'Senior'
  },
  {
    first:'Sarah',
    last: 'Spangler',
    position: 'Forward',
    year: 'Freshman'
  },
  {
    first:'Catherine',
    last: 'McAllister',
    position: 'Forward',
    year: 'Senior'
  },
  {
    first:'Haley',
    last: 'Bishop',
    position: 'Center',
    year: 'Sophomore'
  },
  {
    first:'Renee',
    last: 'Williams',
    position: 'Guard',
    year: 'Senior'
  },
  {
    first:'Jennifer',
    last: 'Olsen',
    position: 'Forward',
    year: 'Junior'
  }
];

var html ='';
function buildTable(){
  var body = document.getElementsByTagName("body")[0];
  var tbl = document.getElementById("table");
  var tblBody = document.createElement("tbody");

  // creating all cells
  for (var i = 0; i < players.length; i++) {
    // creates a table row
    var row = document.createElement("tr");

    for (var j = 0; j < 1; j++) {
      var cell = document.createElement("td");
      var cellText = document.createTextNode(players[i].first);
      cell.appendChild(cellText);
      row.appendChild(cell);
      var cell2 = document.createElement("td");
      var cellText2 = document.createTextNode(players[i].last);
      cell2.appendChild(cellText2);
      row.appendChild(cell2);
      var cell3 = document.createElement("td");
      var cellText3 = document.createTextNode(players[i].position);
      cell3.appendChild(cellText3);
      row.appendChild(cell3);
      var cell4 = document.createElement("td");
      var cellText4 = document.createTextNode(players[i].year);
      cell4.appendChild(cellText4);
      row.appendChild(cell4);
      if (players[i].year == "Senior"){
        console.log("hi");
        row.style.fontWeight="700";
      }
    }
    tblBody.appendChild(row);
  }
  tbl.appendChild(tblBody);
  body.appendChild(tbl);
}
buildTable();
/*
EXTRA CREDIT CHALLENGE (5 POINTS): Write a function that compares the list above with the list below, finds the players that made the All-State team, and displays a message with the results: "Congratulations to Springfield's 2018 North Carolina All-State honorees: ____." Display the message in a div below the table.
Hint: You need two loops, one of which will be 'nested'.*/
var allStars = [
  {
    first:'Melanie',
    last: 'Akers',
    position: 'Forward',
    school:'Johnson High School'
  },
  {
    first:'Olivia',
    last: 'Carter',
    position: 'Foward',
    school:'Providence Day School'
  },
  {
    first:'Sarah',
    last: 'Spangler',
    position: 'Forward',
    school:' Springfield High School'
  },
  {
    first:'Ursula',
    last: 'Jones',
    position: 'Guard',
    school: 'Chatham Senior High School'
  },
  {
    first:'Theresa',
    last: 'Hollinger',
    position: 'Guard',
    school: 'St. Joseph Academy'
  },
  {
    first:'Darleen',
    last: 'Lawrence',
    position: 'Guard',
    school: 'Everton High School'
  },
  {
    first:'Jennifer',
    last: 'Olsen',
    position: 'Forward',
    school: 'Springfield High School'
  }
];
