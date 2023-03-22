

/* 
-----------------
Código de entrada
-----------------
*/

function validarCampoTexto() {
  var campo = document.getElementById("a");
  var valor = campo.value;

  if (isNaN(valor) || valor < 0) {
    // Mostrar un mensaje de error
    campo.setCustomValidity("El valor a debe ser un número positivo mayor o igual a 0.");
  } else {
    // El valor es válido
    campo.setCustomValidity("");
  }
}

function validarCampoTexto1() {
  var campo = document.getElementById("c");
  var campo1 = document.getElementById("a");
  var valor1 = campo.value;
  var valor2 = campo1.value;

  if (isNaN(valor1) || valor1 > valor2 && valor1 > 0) {
    // Mostrar un mensaje de error
    campo.setCustomValidity("El valor de c debe ser menor al valor de a");
  } else {
    // El valor es válido
    campo.setCustomValidity("");
  }
}

function validarCampoTexto2() {
  var campo = document.getElementById("a");
  var valor = campo.value;

  if (isNaN(valor) || valor <= 0) {
    // Mostrar un mensaje de error
    campo.setCustomValidity("El valor a debe ser un número positivo mayor a 0.");
  } else {
    // El valor es válido
    campo.setCustomValidity("");
  }
}


const formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", function(event) {
      event.preventDefault();

      const a = parseInt(document.getElementById("a").value);
      const c = parseInt(document.getElementById("c").value);
      const d = parseInt(document.getElementById("d").value);

      
            /* 
            ----------------------------------
            Código de operaciones de conjuntos
            ----------------------------------
            */

            //Método de potencia
            function potenciaConjunto(U) {
              let potencia = []; // Inicializamos con conjunto vacío
              const cantidadSubconjuntos = 2 ** U.length; // Cantidad de subconjuntos
            
              for (let i = 0; i < cantidadSubconjuntos; i++) {
                let subconjunto = [];
                const binario = i.toString(2).padStart(U.length, '0'); // Convertimos a binario y rellenamos con ceros a la izquierda
            
                for (let j = 0; j < U.length; j++) {
                  if (binario[j] === '1') { // Si el bit es 1, agregamos el elemento de U al subconjunto
                    subconjunto.push(U[j]);
                  }
                }
            
                potencia.push("{"+subconjunto+"}");
              }
            
              return potencia;
            }
            


            // Método para quitar las repeticiones
            Array.prototype.quitarRepetidos = function() {
                let resultado = [];
                this.miFilter((elemento) => {
                  if (resultado.indexOf(elemento) === -1) {
                    resultado.push(elemento);
                    return true;
                  }
                  return false;
                });
                return resultado;
              };

            Array.prototype.diferencia = function(otroConjunto) {
            return this.filter(elemento => !otroConjunto.includes(elemento));
            }
              
            // Método para instersectar dos conjuntos  
            Array.prototype.miInter = function(otroConjunto) {
            return this.miFilter(elemento => otroConjunto.includes(elemento));
            }
            
            // Método para sacar el complemento
            Array.prototype.miComplemento = function(otroConjunto) {
                let conjuntoDiferencia = this.diferencia(otroConjunto);
                let conjuntoComplemento = otroConjunto.diferencia(this);
                return conjuntoDiferencia.miConcat(conjuntoComplemento).quitarRepetidos();
              }
              
            // Método para unir dos conjuntos
            Array.prototype.miConcat = function (otroConjunto) {
                return this.concat(otroConjunto).quitarRepetidos();
              };
              
            // Método para filtrar los elementos de un conjunto
            Array.prototype.miFilter = function (condicion) {
            let resultado = [];
            for (let i = 0; i < this.length; i++) {
                if (condicion(this[i])) {
                resultado.push(this[i]);
                }
            }
            return resultado;
            };
              
            /* 
            -------------------
            Código de conjuntos
            -------------------
            */


            //Funciones para crear conjuntos
            function CrearU(a) {
                let conjunto = [];
                for (let i = -a; i <= a; i++) {
                  conjunto.push(i);
                }
                return conjunto;
              }
              
              function CrearA(U) {
                return U.filter(numero => numero % 2 === 0 || numero < 0 && numero % 2 === 0);
              }
              
              function CrearB(c) {
                let conjunto = [];
                for (let i = 1; i <= c; i++) {
                  conjunto.push(i);
                }
                return conjunto;
              }
              
              function CrearC(U, d) {
                return U.filter(i => i % d === 0);
              }

              
            /* 
            ----------------
            Código de salida
            ----------------
            */
              
            //Imprimimos conjuntos  
            let conjuntoU = CrearU(a);
            console.log("El conjunto U: {"+ conjuntoU+"}"); 

            let conjuntoImpares = CrearA(conjuntoU);
            console.log("El conjunto A: {"+ conjuntoImpares+"}"); 

            let conjuntoB = CrearB(c);
            console.log("El conjunto B: {"+ conjuntoB+"}"); 

            let conjuntoDivisibles = CrearC(conjuntoU, d);
            console.log("El conjunto C: {"+ conjuntoDivisibles+"}"); 

            // let unionAB = conjuntoImpares.miConcat(conjuntoB);
            // console.log("El unionAB: "+ unionAB);

            // let AnB = conjuntoImpares.miInter(conjuntoB);
            // console.log("El interAB: "+AnB);

            // let Ac = conjuntoImpares.miComplemento(conjuntoU);
            // console.log("El complemento A: "+Ac);

            //Primera operacion
            let parte11 = conjuntoImpares.miConcat(conjuntoB).miComplemento(conjuntoU);
            let parte21 = conjuntoImpares.miConcat(conjuntoDivisibles).miComplemento(conjuntoU);

            let Oper1 = parte11.miInter(parte21);
            console.log("(AUB)c n (AUC)c: {"+Oper1+"}");


            //Segunda operacion
            let Oper2 = conjuntoImpares.miInter(conjuntoB).miInter(conjuntoDivisibles).miComplemento(conjuntoU);
            console.log("(AnBnC)c: {"+Oper2+"}");

            //Tercera operacion
            let parte12 = conjuntoImpares.miInter(conjuntoB).miComplemento(conjuntoU);
            let parte22 = conjuntoImpares.miInter(conjuntoDivisibles).miComplemento(conjuntoU);

            let Oper3 = parte12.miConcat(parte22);
            console.log("(AnB)c U (AnC)c: {"+Oper3+"}");

            //Operación potencia
            let potencia = potenciaConjunto(conjuntoU);
            console.log("Potencia del universo = {"+ potencia+"}")
            let tamano = potencia.length;
            console.log(tamano);
            let potencia1 = potenciaConjunto(Oper1);
            console.log("Potencia 1 = {"+ potencia1+"}")
            let tamano1 = potencia1.length;
            console.log(tamano1);
            let potencia2 = potenciaConjunto(Oper2);
            console.log("Potencia 2 = {"+ potencia2+"}")
            let tamano2 = potencia2.length;
            console.log(tamano2);
            let potencia3 = potenciaConjunto(Oper3);
            console.log("Potencia 3 = {"+ potencia3+"}")
            let tamano3 = potencia3.length;
            console.log(tamano3);
            


    });


