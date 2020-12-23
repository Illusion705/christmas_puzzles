const startButton = document.querySelector(".start-button");
const sectionWelcome = document.querySelector(".section-welcome");
const title = document.querySelector("title");
const asciiTableBody = document.querySelector(".ascii-table-body");
const sectionPuzzle1 = document.querySelector(".section-puzzle1");

const asciiCharacters = ["NUL", "SOH", "STX", "ETX", "EOT", "ENQ", "ACK", "BEL", "BS", "TAB", "LF", "VT", "FF", "CR", "SO", "SI", "DLE", "DC1", "DC2", "DC3", "DC4", "NAK", "SYN", "ETB", "CAN", "EM", "SUB", "ESC", "FS", "GS", "RS", "US", "Space", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "<", "=", ">", "?", "@", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "[", "\\", "]", "^", "_", "`", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","{", "|", "}", "~", "DEL"]

startButton.onclick = function() {
    //creates ascii table
    sectionWelcome.style.display = "none";
    sectionPuzzle1.style.display = "flex";
    title.innerHTML = "Christmas Puzzle - Puzzle #1";
    for (i = 0; i < 127; i++) {
        //creates table row
        let row = document.createElement("tr");
        //creates decimal data
        let data = document.createElement("td");
        let text = document.createTextNode(i.toString())
        data.appendChild(text)
        row.appendChild(data);
        //creates hexidecimal data
        data = document.createElement("td");
        text = document.createTextNode(i.toString(16))
        data.appendChild(text)
        row.appendChild(data);
        //creates octal data
        data = document.createElement("td");
        text = document.createTextNode(i.toString(8))
        data.appendChild(text)
        row.appendChild(data);
        //creates character data
        data = document.createElement("td");
        text = document.createTextNode(asciiCharacters[i])
        data.appendChild(text)
        row.appendChild(data);  
        //appends to tbody 
        asciiTableBody.appendChild(row);
    }

    //creates Christmas trees
    const treeOrder = 01101100011010010110011101101000011101000111001100001010;
}