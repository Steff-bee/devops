const { calcular } = require('../src/Calculadora');

describe('Testes para a função calcular()', () => {
  test('Deve somar dois números', () => {
    const resultado = calcular(2, 3, '+');
    expect(resultado).toBe(5);
  });

  test('Deve subtrair dois números', () => {
    const resultado = calcular(5, 3, '-');
    expect(resultado).toBe(2);
  });

  test('Deve multiplicar dois números', () => {
    const resultado = calcular(2, 3, '*');
    expect(resultado).toBe(6);
  });

  test('Deve dividir dois números', () => {
    const resultado = calcular(6, 3, '/');
    expect(resultado).toBe(2);
  });

  test('Não deve permitir divisão por zero', () => {
    const resultado = calcular(6, 0, '/');
    expect(resultado).toBe('Divisão por zero');
  });

  test('Deve retornar erro para operador inválido', () => {
    const resultado = calcular(6, 3, '%');
    expect(resultado).toBe('Operação inválida');
  });
});
