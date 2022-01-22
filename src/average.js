/*
 **1- A função average recebe um array (tamanho variável)
   e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (array) => {
  let totalElementosArray=0
  let atual;
  let tamanhoArray = array.length;
  let mediaAritimeticaArray = 0;
  if (array.length === 0) {
    return undefined;
  }

  for(let i in array){
    atual = array[i];
    
    if (typeof atual !== 'number') {
      return undefined;
    }    
    totalElementosArray += atual;
  }
     mediaAritimeticaArray =  totalElementosArray/tamanhoArray;
  return Math.round(mediaAritimeticaArray);
};

 








  // add your implementation here


module.exports = average