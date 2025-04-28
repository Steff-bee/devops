function calcular(num1, num2, operador) {
  let resultado;

  switch (operador) {
    case '+':
      resultado = num1 + num2;
      break;
    case '-':
      resultado = num1 - num2;
      break;
    case '*':
      resultado = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        resultado = 'Divisão por zero';
      } else {
        resultado = num1 / num2;
      }
      break;
    default:
      resultado = 'Operação inválida';
  }

  return resultado;
}

module.exports = { calcular };
