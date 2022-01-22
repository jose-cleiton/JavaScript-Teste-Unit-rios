const { TestScheduler } = require('jest');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    
    // ESCREVA SEUS TESTES ABAIXO:
    // 1-Teste se productDetails é uma função.
    // 2-Teste se o retorno da função é um array.
    // 3-Teste se o array retornado pela função contém dois itens dentro.
    // 4-Teste se os dois itens dentro do array retornado pela função são objetos.
    // 5-Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    // 6-Teste se os dois productIds terminam com 123.
  });
  test('1-Teste se productDetails é uma função.', () => {
    expect(typeof productDetails).toBe('function');
  })
  test('2-Teste se o retorno da função é um array.', () => {
    expect(Array.isArray(productDetails())).toBe(true);
  })
  test('3-Teste se o array retornado pela função contém dois itens dentro.', () => {
    expect(productDetails().length).toBe(2);
  })
  test('4-Teste se os dois itens dentro do array retornado pela função são objetos.', () => {
    expect(typeof productDetails('Alcool gel', 'Máscara')).toEqual('object');
  })
  test('5-Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.', () => {
    expect(productDetails('Alcool gel', 'Máscara')[0] 
    === productDetails('Alcool gel', 'Máscara')[1]).toEqual(false)
  })
  test(' Teste se os dois productIds terminam com 123.', () => {
       expect(productDetails('Alcool gel', 'Máscara')[0].details.productId.endsWith('123')).toEqual(true);
  })
});
