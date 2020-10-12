function Sunset() {

    let bldgHeight1 = parseInt(document.getElementById("userInput1").value);
    let bldgHeight2 = parseInt(document.getElementById("userInput2").value);
    let bldgHeight3 = parseInt(document.getElementById("userInput3").value);
    let bldgHeight4 = parseInt(document.getElementById("userInput4").value);
    let bldgHeight5 = parseInt(document.getElementById("userInput5").value);

    let bldgArray = [bldgHeight1, bldgHeight2, bldgHeight3, bldgHeight4, bldgHeight5];


    let highestBldg = 0
    let outputArrayThatCanSeeSun = []


    for (i = 0; i < bldgArray.length; i++) {

        if (bldgArray[i] > highestBldg) {

            outputArrayThatCanSeeSun.push(bldgArray[i]);
            highestBldg = bldgArray[i];

        }
    }
    document.getElementById("output1").innerHTML = `${outputArrayThatCanSeeSun.length} building(s) can see the sun. The buildings that can see the sun are: ${outputArrayThatCanSeeSun} . `;
}