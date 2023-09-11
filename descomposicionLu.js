
function definirMatrixA() {
    var A = [[],[],[]];
    var max = 10;
    var min = -10;
    for(var i=0; i<3 ;i++) {
        for(var j=0; j<3; j++) {
            A[i][j] = Math.floor(Math.random()*(max-min+1))+min;
        }
    }
    return A;
}

function descomponerLu(A) {
    var L = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
    var U = [[],[],[]];
    
    for (var i = 0; i < 3; i++) {
        for (var k = i; k < 3; k++) {
            var sum = 0;
            for (var j = 0; j < i; j++)
                sum += (L[i][j] * U[j][k]);
            U[i][k] = A[i][k] - sum;
        }
        for (var k = i; k < 3; k++) {
            if (i == k)
                L[i][i] = 1;
            else {
                var sum = 0;
                for (var j = 0; j < i; j++)
                    sum += (L[k][j] * U[j][i]);
                L[k][i] = (A[k][i] - sum) / U[i][i];
            }
        }
    }
    
    return [L, U];
}

var A = definirMatrixA();
var LU = descomponerLu(A);
var L = LU[0];
var U = LU[1];

console.log("Matrix A:");
console.log(A);
console.log("Matrix L:");
console.log(L);
console.log("Matrix U:");
console.log(U);

/*const mensaje = "No se puede seguir con la descomposición Lu"

const L = [[],[],[]]
for(var i=0; i<3 ;i++){
    var row = ""
    for(var j=0; j<3; j++){
         i!=j ? L[i,j]=0: L[i,j]=1
        row += L[i,j] + " "
    }
    console.log(row +"\n");
    
}
function definirMatrixA()
{
    var A = [[],[],[]]
for(var i=0; i<3 ;i++)
    {
        var row = ""
        var max = 10
        var min = -10
    for(var j=0; j<3; j++)
        {
         A[i][j] = Math.floor(Math.random()*(max-min+1))+min
         row += A[i][j] + " "
        }
        console.log(row +"\n");
    
    }
    return A
}
function hallarDeterminante()
{   
    var det = A[0][0] * (A[1][1] * A[2][2] - A[2][1] * A[1][2]) - A[0][1] * (A[1][0] * A[2][2] - A[1][2] * A[2][0]) + A[0][2] * (A[1][0] * A[2][1] - A[1][1] * A[2][0]);
    return det;
}
function descomponerLu(){
    while(A[1][0] != 0 && A[2][0] != 0){
        if((A[0][0]>0 && A[1][0]>0))
        { 
            A[i][j] -= A[i][j]/A[i][j]
        }
       

    }
}


var A = definirMatrixA()
hallarDeterminante(A) = 0 ? console.log(mensaje) : descomponerLu(A) */