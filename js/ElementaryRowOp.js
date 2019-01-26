function elementaryRow(){
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
        submit();
    }

    function submit(matA = 0){
        removeChildNodes(answer);
        var div;
        if(matA == 0){
            var matA = newMatrix(inputA,rows,columns);
        }
        matA.tohtml(answer);

        div = document.createElement("div");
        answer.appendChild(div);
        button = document.createElement("button");
        button.appendChild(document.createTextNode("Swap Rows"));
        div.appendChild(button);

        //Swap
        button.onclick = function(){
            removeChildNodes(div);
            inputs = [];
            //Row 1
            inputs.push(document.createElement("input"));
            div.appendChild(document.createTextNode("Swap row:"));
            div.appendChild(inputs[0]);
            //Row 2
            inputs.push(document.createElement("input"));
            div.appendChild(document.createTextNode("With:"));
            div.appendChild(inputs[1]);

            button = document.createElement("button");
            button.appendChild(document.createTextNode("Submit"))
            div.appendChild(button);
            button.onclick = function(){
                elemRow(1, matA, inputs);
            }
        }

        //Multiply row by scalar
        div = document.createElement("div");
        answer.appendChild(div);
        button = document.createElement("button");
        button.appendChild(document.createTextNode("Row multiplication"));
        div.appendChild(button);

        button.onclick = function(){
            removeChildNodes(div);
            inputs = [];
            //Scalar
            inputs.push(document.createElement("input"));
            div.appendChild(document.createTextNode("Scalar: "));
            div.appendChild(inputs[0]);
            //Row
            inputs.push(document.createElement("input"));
            div.appendChild(document.createTextNode("Row: "));
            div.appendChild(inputs[1]);

            button = document.createElement("button");
            button.appendChild(document.createTextNode("Submit"))
            div.appendChild(button);
            button.onclick = function(){
                elemRow(2, matA, inputs);
            }
        }

        //Add product of row to other row
        div = document.createElement("div");
        answer.appendChild(div);
        button = document.createElement("button");
        button.appendChild(document.createTextNode("Add product of row to other"));
        div.appendChild(button);

        button.onclick = function(){
            removeChildNodes(div);
            inputs = [];
            //Scalar
            inputs.push(document.createElement("input"));
            div.appendChild(document.createTextNode("Add:"));
            div.appendChild(inputs[0]);
            //Row 1
            inputs.push(document.createElement("input"));
            div.appendChild(document.createTextNode("times row: "));
            div.appendChild(inputs[1]);
            //Row 2
            inputs.push(document.createElement("input"));
            div.appendChild(document.createTextNode("to: "));
            div.appendChild(inputs[2]);

            button = document.createElement("button");
            button.appendChild(document.createTextNode("Submit"))
            div.appendChild(button);
            button.onclick = function(){
                elemRow(3, matA, inputs);
            }
        }
        div = document.createElement("div");
        answer.appendChild(div);
        button = document.createElement("button");
        button.appendChild(document.createTextNode("Regret Operation"));
        div.appendChild(button);
        button.onclick = function() {
            matA.regret();
            submit(matA);
        }
    }

    function elemRow(type, matrix, inputs){
        switch(type){
            case 1:
                var row1 = parseInt(inputs[0].value);
                var row2 = parseInt(inputs[1].value);
                matrix.swapRows(row1, row2);
                break;
            case 2:
                var scalar = parseString(inputs[0].value);
                var row = parseInt(inputs[1].value);
                matrix.mulRow(row,scalar);
                break;
            case 3:
                var scalar = parseString(inputs[0].value);
                var row1 = parseInt(inputs[1].value);
                var row2 = parseInt(inputs[2].value);
                matrix.addMulRow(scalar, row1, row2);
                break;
        }
        submit(matA = matrix);
    }
}