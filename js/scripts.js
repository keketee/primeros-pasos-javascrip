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

function hours (horas){
  const finalHours = horas * 60;
  return finalHours;
}
 const finalHours = hours(126)

 console.log(finalHours + ' segundos')