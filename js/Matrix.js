class Matrix{
    constructor(rows, columns){
        this.rows = rows;
        this.columns = columns;

        this.mat = [];
        var i;
        var j;
        for(i=0; i < rows; i++){
            this.mat[i] = [];
            for(j = 0; j < columns; j++){
                this.mat[i].push(0);
            }
        }
    }

    tostring(){
        var string = "";

        var i;
        var j;
        for(i = 0; i < this.rows; i++){
            for(j = 0; j < this.columns; j++){
                string += String(this.mat[i][j]) + " ";
            }
            string += "\n";
        }
        return string;
    }

    tohtml(div){
        var string = "";
        var table = document.createElement("table");
        var row;
        var cell;

        var i;
        var j;
        for(i = 0; i < this.rows; i++){
            row =table.insertRow(i);
            for(j = 0; j < this.columns; j++){
                cell = row.insertCell(j);
                cell.innerHTML = this.mat[i][j];
            }
        }
        div.appendChild(table);
    }

    addElement(row, column, value){
        this.mat[row-1][column-1] = value;
    }

    swapRows(row1, row2){
        var tmp;
        var i;
        for(i = 0; i < this.columns; i++){
            tmp = this.mat[row1-1][i];
            this.mat[row1-1][i] = this.mat[row2-1][i];
            this.mat[row2-1][i] = tmp;
        }
    }

    mulRow(row, scalar){
        var i;
        for(i = 0; i < this.columns; i++){
            this.mat[row-1][i] *= scalar;
        }
    }

    addMulRow(scalar, row1, row2){
        var i;
        for(i = 0; i < this.columns; i++){
            this.mat[row2-1][i] += scalar * this.mat[row1-1][i];
        }
    }
    
    add(matrixB){
        if(this.rows != matrixB.rows || this.columns != matrixB.columns){
            return null;
        }
        newMatrix = new Matrix(this.rows,this.columns);
    
        var i,j;
        for(i = 0; i<this.rows; i++){
            for(j = 0; j < this.columns; j++){
                newMatrix.mat[i][j]= this.mat[i][j]+matrixB.mat[i][j];
            }
        }
        return newMatrix;
    }

    mul(matB){
        if(this.columns != matB.rows){
            return null;
        }

        var i;
        var j;
        var k;
        var mat = new Matrix(this.rows,matB.columns);
        for(i = 0; i < this.rows; i++){
            for(j = 0; j < matB.columns; j++){
                for(k = 0; k < this.columns; k++){
                    mat.mat[i][j] += this.mat[i][k] * matB.mat[k][j];
                }
            }
        }
        return mat;
    }
    
    trace(){
        if(this.columns != this.rows){
            return(null);
        }

        var sum = 0;
        var i;
        for(i=0; i < this.rows; i++){
            sum += this.mat[i][i];
        }
        return sum;
    }
}

