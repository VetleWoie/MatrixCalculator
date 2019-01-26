function multiplication(){
    var rowsA = parseInt(document.getElementById('rowsA').value);
    var columnsA =parseInt(document.getElementById('columnsA').value);
    var rowsB = parseInt(document.getElementById('rowsB').value);
    var columnsB =parseInt(document.getElementById('columnsB').value);

    if(columnsA != rowsB){
        alert("Columns of matrix A must equal rows of matrix B");
        location.reload();
    }

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

    for(i = 0; i < rowsA; i++){
        inputA[i] = [];
        divA = document.createElement("div");
        input1.appendChild(divA);
        for(j = 0; j < columnsA; j++){
            inputA[i].push(document.createElement("input"));
            inputA[i][j].type="text";
            divA.appendChild(inputA[i][j]);
        }
    }

    for(i = 0; i < rowsB; i++){
        inputB[i] = [];
        divB = document.createElement("div");
        input2.appendChild(divB);
        for(j = 0; j < columnsB; j++){
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
        var matA = newMatrix(inputA,rowsA,columnsA);
        var matB = newMatrix(inputB,rowsB,columnsB);
        var matC = matA.mul(matB);
        matC.tohtml(answer);
    
        console.log(matC.tostring());
    }
}