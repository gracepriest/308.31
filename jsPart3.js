function split(string, delimiter){

    let line = []
    let tempLine =""
    
    for(let i = 0; i < string.length; i++)
    {
        if(i == (string.length - 1) && string[i] != delimiter)
            {
                tempLine+= string[i]
                line.push(tempLine)
                tempLine =""
            }
        else if(string[i] != delimiter)
        {
            tempLine += string[i]
        }
        
        else{
            line.push(tempLine)
            tempLine =""
        }
       
    }
   // document.write(line)
    return line
}

function toString(string){
    let tempLine = ""
    for(const line of string)
    {   
        tempLine += line  + ","
    }
    return tempLine
}

let content = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"

let row = split(content, "\n")
let cell = split(toString(row), ",")

// 
let table = document.getElementById("mainTable")
let thead = document.createElement("thead")
thead.classList.add("table-dark")

let tr = document.createElement("tr");

//header
let headerCell1 = document.createElement("th");
headerCell1.textContent = cell[0];
let headerCell2 = document.createElement("th");
headerCell2.textContent = cell[1];
let headerCell3 = document.createElement("th");
headerCell3.textContent = cell[2];
let headerCell4 = document.createElement("th");
headerCell4.textContent = cell[3];

tr.appendChild(headerCell1);
tr.appendChild(headerCell2);
tr.appendChild(headerCell3);
tr.appendChild(headerCell4);
thead.appendChild(tr);

// Append the thead to the table
table.appendChild(thead);

let tbody = document.createElement("tbody")
let tr2 = document.createElement("tr");
let td1 = document.createElement("td")
let td2 = document.createElement("td")
let td3 = document.createElement("td")
let td4 = document.createElement("td")

td1.textContent = cell[4]
td2.textContent = cell[5]
td3.textContent = cell[6]
td4.textContent = cell[7]

tr2.appendChild(td1)
tr2.appendChild(td2)
tr2.appendChild(td3)
tr2.appendChild(td4)

let tr3 = document.createElement("tr");
let td5 = document.createElement("td")
let td6 = document.createElement("td")
let td7 = document.createElement("td")
let td8 = document.createElement("td")

td5.textContent = cell[8]
td6.textContent = cell[9]
td7.textContent = cell[10]
td8.textContent = cell[11]

tr3.appendChild(td5)
tr3.appendChild(td6)
tr3.appendChild(td7)
tr3.appendChild(td8)

let tr4 = document.createElement("tr");
let td9 = document.createElement("td")
let td10 = document.createElement("td")
let td11 = document.createElement("td")
let td12 = document.createElement("td")

td9.textContent = cell[12]
td10.textContent = cell[13]
td11.textContent = cell[14]
td12.textContent = cell[15]

tr4.appendChild(td9)
tr4.appendChild(td10)
tr4.appendChild(td11)
tr4.appendChild(td12)

let tr5 = document.createElement("tr");
let td13 = document.createElement("td")
let td14 = document.createElement("td")
let td15 = document.createElement("td")
let td16 = document.createElement("td")

td13.textContent = cell[16]
td14.textContent = cell[17]
td15.textContent = cell[18]
td16.textContent = cell[19]

tr5.appendChild(td13)
tr5.appendChild(td14)
tr5.appendChild(td15)
tr5.appendChild(td16)
//add to body
tbody.appendChild(tr2)
tbody.appendChild(tr3)
tbody.appendChild(tr4)
tbody.appendChild(tr5)
table.appendChild(tbody)

document.write("</table>")
