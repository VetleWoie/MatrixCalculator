function buttonPush(){
    matA = new Matrix(2,2);
    console.log(matA);
    matA.addElement(1,1,1);
    matA.addElement(1,2,2);
    matA.addElement(2,1,3);
    matA.addElement(2,2,4);

    matB = new Matrix(2,2);
    matB.addElement(1,1,1);
    matB.addElement(1,2,2);
    matB.addElement(2,1,3);
    matB.addElement(2,2,4);

    matC = matA.add(matB);
    console.log(matC);
    console.log(matA.trace());
}