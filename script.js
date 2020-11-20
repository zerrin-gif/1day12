//Choose a random color
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];
const hexColors =[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const body = document.querySelector('body');
const h1 = document.querySelector('h1');
button1.onclick = () => {
  var colorIndex = Math.floor(Math.random()* colors.length);
body.style.backgroundColor = colors[colorIndex]; 
};
document.getElementById('button1').addEventListener('click', button1);
const colorHex = () => {
  return  Math.floor(Math.random()*hexColors.length);
}
button2.onclick = () => {
  const colorCode = `${hexColors[colorHex()]}${hexColors[colorHex()]}${hexColors[colorHex()]}${hexColors[colorHex()]}${hexColors[colorHex()]}${hexColors[colorHex()]}`;
  document.body.style.backgroundColor = '#' + colorCode; 
  h1.innerHTML = '#' + colorCode;
  
  let reverseColor = colorCode.split("").reverse().join("");
console.log(reverseColor);
h1.style.color = "#" + reverseColor;
};
