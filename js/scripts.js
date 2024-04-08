function sayHello(name, age) {
  const nextAge = age + 1;
  console.log(
    'Hola ' + name + ', el año que viene tendras ' + nextAge + ' años.'
  );
}

function calculateSquareArea(side) {
  console.log('Los lados del cuadrado son  ' + side * side);
}

calculateSquareArea(20);

function calculateTriangleArea(base, height) {
  console.log('la base del triangulo es ' + base * height);
}

calculateTriangleArea(20, 10);

function calculateCircleArea(area, radio) {
  console.log('el area del circulo es ' + area * radio);
}

calculateCircleArea(50, 13);

function celsiusToFahrenheit(celsius) {
  console.log(
    'el resultado de los grados fahrenheit son ' + (celsius * 1.8 + 32)
  );
}

celsiusToFahrenheit(25);

function fahrenheitToCelsius(fahrenheit) {
  console.log(
    'el resultado de los grados celsius son ' + (fahrenheit - 32) / 1.8
  );
}
fahrenheitToCelsius(77);

function totalPrice(price) {
  console.log(
    'el precio de mis zapatillas son ' + (price + (price * 21) / 100)
  );
}

totalPrice(100);

function writeMessage(name, material, size, note) {
  console.log(
    name +
      ' ha perdido una caja de ' +
      material +
      ' de tamaño. ' +
      size +
      ' centimetros' +
      ' cuando iba al ' +
      note
  );
}
writeMessage('pedro', 'pelotas', 100, 'colegio');

function calculateSquareArea(side) {
  const area = side * side;
  console.log('Los lados del cuadrado son  ' + area);
  return area;
}

function doubleArea(area) {
  console.log(area * 2);
}

function threeNumbers(one, two, three) {
  const average = (one + two + three) / 3;
  return average;
}
const finalAverage = threeNumbers(5, 10, 8);

console.log(finalAverage);

function discount(price, discount) {
  const finalPrice = price - (price * discount) / 100;
  return finalPrice;
}
const finalPrice = discount(100, 20);
console.log(finalPrice);

function twoWords(perro, gato) {
  const finalWords = perro + '-' + gato;
  return finalWords;
}
const finalWords = twoWords('boby', 'luna');
console.log(finalWords);

function measures(kilometros) {
  const finalMeasures = kilometros * 1000;
  return finalMeasures;
}
const finalMeasures = measures(50);
console.log(finalMeasures);

function hours(horas) {
  const finalHours = horas * 60;
  return finalHours;
}
const finalHours = hours(126);

console.log(finalHours + ' segundos');

function nameAndAge(name, age) {
  if (age >= 18) {
    console.log('Hola ' + name + ' eres mayor de edad.');
  } else if (age <= 18) {
    console.log('Hola ' + name + ' eres menor de edad.');
  }
}
nameAndAge(`pedro`, 25);

function twoNumbers(oneNumber, twoNumber) {
  if (oneNumber > twoNumber) {
    console.log(oneNumber + ' es mayor.');
  } else {
    console.log(twoNumber + ' es mayor');
  }
}
twoNumbers(36, 55);

function numberPositive(numberPositive) {
  if (numberPositive > 0) {
    console.log(numberPositive + ' positivo');
  } else if (numberPositive < 0) {
    console.log(numberPositive + ' es negativo');
  } else if (numberPositive === 0) {
    console.log(numberPositive + ' es 0');
  }
}

numberPositive(56);

function notes(noteOne, noteTwo, noteTrhee) {
  const media = (noteOne + noteTwo + noteTrhee) / 3;

  if (media < 5) {
    console.log(media + ' es suspenso');
  } else if (media > 5) {
    console.log(media + ' es aprobado');
  } else if (media > 8) {
    console.log(media + ' es matricula de honor');
  }
}

notes(2, 7, 9);

function threeNumers(numberOne, numberTwo, numberThree) {
  if (numberOne > numberTwo && numberOne > numberThree) {
    console.log(numberOne + ' es el mas mayor');
  } else if (numberTwo > numberOne && numberTwo > numberThree) {
    console.log(numberTwo + ' es el mas mayor');
  } else if (numberThree > numberOne && numberThree > numberTwo) {
    console.log(numberThree + ' es el mas mayor');
  }
}

threeNumers(20, 34, 33);

function division(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    console.log(number + ' es divisible por 3 y 5');
  } else if (number % 5 === 0) {
    console.log(number + ' es divisible por 5');
  } else if (number % 3 === 0) {
    console.log(number + ' es divisible por 3');
  }
}
division(20);

function numberWhole(number) {
  if (number % 2 === 0) {
    console.log(number + ' es par');
  } else {
    console.log(number + ' es impar');
  }
}
numberWhole(26);
