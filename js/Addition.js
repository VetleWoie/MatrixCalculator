
function newMatrix(inputMatrix, rows, columns){
    var i,j;
    var matrix = new Matrix(rows, columns);
    for(i = 0; i < rows; i++){
        for(j = 0; j < columns; j++){
            matrix.mat[i][j] = parseInt(inputMatrix[i][j].value);
        }
    }
    return matrix;
}

function removeChildNodes(container){
    while(container.hasChildNodes()){
        container.removeChild(container.lastChild);
    }
}


function addition(){
    var rows = parseInt(document.getElementById('rows').value);
    var columns =parseInt(document.getElementById('columns').value);

    var input1 = document.getElementById("input1");
    var input2 = document.getElementById("input2");
    var answer = document.getElementById("answer");

    var inputA = [];
    var inputB = [];

    var i;
    var j;
    var h2;
    var divA;
    var divB;

    removeChildNodes(input1);
    removeChildNodes(input2);
    removeChildNodes(answer);

    h2 = document.createElement("h2");
    h2.appendChild(document.createTextNode("Matrix A:"));
    input1.appendChild(h2);

    h2 = document.createElement("h2");
    h2.appendChild(document.createTextNode("Matrix B:"));
    input2.appendChild(h2);

    for(i = 0; i < rows; i++){
        inputA[i] = [];
        divA = document.createElement("div");
        input1.appendChild(divA);
        for(j = 0; j < columns; j++){
            inputA[i].push(document.createElement("input"));
            inputA[i][j].type="text";
            divA.appendChild(inputA[i][j]);
        }
    }

    for(i = 0; i < rows; i++){
        inputB[i] = [];
        divB = document.createElement("div");
        input2.appendChild(divB);
        for(j = 0; j < columns; j++){
            inputB[i].push(document.createElement("input"));
            inputB[i][j].type="text";
            divB.appendChild(inputB[i][j]);
        }
    }

    var button = document.createElement("button");
    button.appendChild(document.createTextNode("Submit"));
    button.id = "second";
    answer.appendChild(button);
    button.onclick = function(){
        removeChildNodes(answer);
        var matA = newMatrix(inputA,rows,columns);
        var matB = newMatrix(inputB,rows,columns);
        var matC = matA.add(matB);
        matC.tohtml(answer);
    
        console.log(matC.tostring());
    }
}