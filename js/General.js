function newMatrix(inputMatrix, rows, columns){
    var i,j;
    var matrix = new Matrix(rows, columns);
    for(i = 0; i < rows; i++){
        for(j = 0; j < columns; j++){
            matrix.mat[i][j] = new Rational(parseInt(inputMatrix[i][j].value),1);
        }
    }
    return matrix;
}

function removeChildNodes(container){
    while(container.hasChildNodes()){
        container.removeChild(container.lastChild);
    }
}

function parseString(string){
    var fraction = 1;
    var i;
    for(i = 0; i < string.length -1; i++){
        if(string[i] == '/'){
            fraction = 0
            break;
        }
    }
    if(fraction == 1){
        return new Rational(parseInt(string),1);
    }else{
        return new Rational(parseInt(string.substring(0,i)),parseInt(string.substring(i+1)));
    }
}