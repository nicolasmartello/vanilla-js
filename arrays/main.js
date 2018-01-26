'use strict'

var fruits = [];

setFruitslist();


function setFruitslist() {
  // populate the array spying the content of the DOM
  var $list = document.querySelectorAll('ul li a');
  for (var i = 0; i < $list.length; i++) {
    fruits.push($list[i].innerText);
  }
}

function recursiveBinarySearch(item, list, lower, highest) {
  var middle = ( highest === lower ) ? lower : parseInt((highest - lower) / 2 + lower, 10);
  const middleValue = list[middle].toLowerCase();
  const itemValue = item.toLowerCase();

  
  if ( middleValue === itemValue ) return middle;
  if (lower > highest) return null;

  if (middleValue > itemValue) {
    return recursiveBinarySearch(item, list, lower, middle - 1);
  } else {
    return recursiveBinarySearch(item, list, middle + 1, highest);
  }
}

function searchFruit(valToSeach) {
  var recursiveIndex = recursiveBinarySearch(
    valToSeach,
    fruits,
    0,
    fruits.length
  ),
  linearIndex = fruits.findIndex(function (element) {
    return element.toLowerCase() === valToSeach.toLowerCase();
  });
  
  if (recursiveIndex !== null)
    alert(`the element ${fruits[recursiveIndex]} its in the position ${recursiveIndex + 1 }`);
  else
    alert('Not found the fruit');

  // linear search using "findeIndex" array internal method.
  console.log(`linear search result: the element its in the position ${linearIndex + 1}`);
}