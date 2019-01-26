function trace(){
    var rows = parseInt(document.getElementById('rows').value);
    var columns =parseInt(document.getElementById('columns').value);

    var input1 = document.getElementById("input1");
    var answer = document.getElementById("answer");

    var inputA = [];

    var i;
    var j;
    var h2;
    var divA;

    removeChildNodes(input1);
    removeChildNodes(answer);

    h2 = document.createElement("h2");
    h2.appendChild(document.createTextNode("Matrix:"));
    input1.appendChild(h2);

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

    var button = document.createElement("button");
    button.appendChild(document.createTextNode("Submit"));
    button.id = "second";
    answer.appendChild(button);
    button.onclick = function(){
        removeChildNodes(answer);
        var matA = newMatrix(inputA,rows,columns);
        answer.appendChild(document.createTextNode("Trace  of matrix: " + matA.trace().asString()));
    }
}