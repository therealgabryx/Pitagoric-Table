document.write('<h2 style="text-align:left">Tavola Pitagorica<h2>');

var base = 10;
var numbers = [];

for (let i = 1; i <= base; i++) {
  numbers.push(i);
}

document.write('<p><table class="table">');
document.write('<tr><td id="operator">x</td>');

for (let i = 0; i < numbers.length; i++) {
  document.write('<td id="tabHead">' + numbers[i] + '</td>');
}
document.write('</tr>');

for (let i = 0; i < numbers.length; i++) {
  document.write('<tr><td id="tabHead">' + numbers[i]);
  for (let j = 0; j < numbers.length; j++) {
    document.write('<td id="tabElem">' + numbers[i] * numbers[j] + '</td>');
  }
  document.write('</tr>');
}
document.write('</table></p>');