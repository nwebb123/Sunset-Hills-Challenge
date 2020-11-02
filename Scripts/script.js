
//Clear Button
function clearIt() {
    document.getElementById("userInput1").value = "";
    document.getElementById("userInput2").value = "";
    document.getElementById("userInput3").value = "";
    document.getElementById("userInput4").value = "";
    document.getElementById("userInput5").value = "";
    Sunset();
}



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
    document.getElementById("output1").innerHTML = `${outputArrayThatCanSeeSun.length} building(s) can see the sun. The buildings that can see the sun are: ${outputArrayThatCanSeeSun}. `;

   


    //Bar Chart Section
    var ctx = document.getElementById("myChart").getContext('2d');

    //Grabbing user input for building heights 
    let b1 = parseInt(document.getElementById("userInput1").value);
    let b2 = parseInt(document.getElementById("userInput2").value);
    let b3 = parseInt(document.getElementById("userInput3").value);
    let b4 = parseInt(document.getElementById("userInput4").value);
    let b5 = parseInt(document.getElementById("userInput5").value);

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Building 1", "Building 2", "Building 3", "Building 4", "Building 5"],
            datasets: [{
                //label: '# of Votes',
                data: [b1, b2, b3, b4, b5],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }



    });

   

}