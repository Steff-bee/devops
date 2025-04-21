function calcular() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operador = document.getElementById('operador').value;
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
        resultado = num2 !== 0 ? num1 / num2 : 'Divisões por zero';
        break;
      default:
        resultado = 'Essa operação é invalida';
    }
  
    document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
  }
  