class Matrix{
    constructor(rows, columns){
        this.rows = rows;
        this.columns = columns;

        this.mat = [];
        this.op = [];
        var i;
        var j;
        for(i=0; i < rows; i++){
            this.mat[i] = [];
            for(j = 0; j < columns; j++){
                this.mat[i].push(new Rational(0,1));
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
                cell.innerHTML = this.mat[i][j].asString();
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
        this.op.push([1,row1,row2]);
        for(i = 0; i < this.columns; i++){
            tmp = this.mat[row1-1][i];
            this.mat[row1-1][i] = this.mat[row2-1][i];
            this.mat[row2-1][i] = tmp;
        }
    }

    mulRow(row, scalar){
        var i;
        this.op.push([2,row, scalar]);
        for(i = 0; i < this.columns; i++){
            this.mat[row-1][i] = this.mat[row-1][i].mul(scalar);
            this.mat[row-1][i].short();
        }
    }

    addMulRow(scalar, row1, row2){
        var i;
        this.op.push([3,scalar,row1, row2]);
        for(i = 0; i < this.columns; i++){
            this.mat[row2-1][i] = this.mat[row2-1][i].add(this.mat[row1-1][i].mul(scalar));
            this.mat[row2-1][i].short();
        }
    }

    regret(){
        var op = this.op.pop();
        switch(op[0]){
            case 1:
                this.swapRows(op[1],op[2]);
                break;
            case 2:
                this.mulRow(op[1], op[2].inverse());
                break;
            case 3:
                op[1].denominator *= -1;
                this.addMulRow(op[1],op[2],op[3]);
                break;
            default:
                return;
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
                newMatrix.mat[i][j]= this.mat[i][j].add(matrixB.mat[i][j]);
                newMatrix.mat[i][j].short();
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
                    mat.mat[i][j] = mat.mat[i][j].add(this.mat[i][k].mul(matB.mat[k][j]));
                }
            }
        }
        return mat;
    }
    
    trace(){
        if(this.columns != this.rows){
            return(null);
        }

        var sum = new Rational(0,1);
        var i;
        for(i=0; i < this.rows; i++){
            sum = sum.add(this.mat[i][i]);
        }
        sum.short();
        return sum;
    }
}

