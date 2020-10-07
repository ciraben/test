export {
  chooseFrom,
  d,
  getRandomColorHex,
  getRandomInt,
  hexToRGB,
  isInViewport,
  rgbToHex,
  toGrayscale,
};

function chooseFrom(array) {
  const perchance = 1 / array.length;
  const seed = Math.random();
  for (let i=0; i<array.length; i++) {
    if (seed < (i + 1) * perchance) {
      return (array[i]);
    }
  }
  return (array[array.length - 1]);
}

function d(x) {
  //roll a die
  let sign = 1; //allows negative dmg/heal effects
  x = Math.floor(x);
  if (x < 0) {
    x = -x;
    sign = -1;
  }
  if (x < 1) {
    return 0;
  } else if (x < 2) {
    return sign;
  };
  return((Math.floor(Math.random() * x) + 1) * sign);
}

function getRandomColorHex() {
  return (rgbToHex([getRandomInt(0, 256), getRandomInt(0, 256), getRandomInt(0, 256)]));
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
  //max exclusive, min inclusive
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

// https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb#5624139
// function hexToRGB(hex) {
//     var bigint = parseInt(hex, 16);
//     var r = (bigint >> 16) & 255;
//     var g = (bigint >> 8) & 255;
//     var b = bigint & 255;

//     return [r, g, b];
// }
// https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb#5624139

// https://stackoverflow.com/posts/39077686/revisions
function hexToRGB(hex) {
  return hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
             ,(m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g)
    .map(x => parseInt(x, 16));
}

/*!
 * Determine if an element is in the viewport
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}    elem The element
 * @return {Boolean}      Returns true if element is in the viewport
 */
// found on https://vanillajstoolkit.com/helpers/isinviewport/
// is broken for now.
function isInViewport(elem) {
	var distance = elem.getBoundingClientRect();
	return (
		distance.top >= 0 &&
		distance.left >= 0 &&
		distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		distance.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

//https://stackoverflow.com/questions/13070054/convert-rgb-strings-to-hex-in-javascript
function rgbToHex(rgb){
  let r = rgb[0];
  let g = rgb[1];
  let b = rgb[2];
  r = parseInt(r).toString(16);
  r = (r.length===1) ? "0"+r : r;
  g = parseInt(g).toString(16);
  g = (g.length===1) ? "0"+g : g;
  b = parseInt(b).toString(16);
  b = (b.length===1) ? "0"+b : b;
  return ('#' + r + g + b);
}

function toGrayscale(h) {
  const rgb = hexToRGB(h);
  const mean = (rgb[0] + rgb[1] + rgb[2]) / 3;
  return rgbToHex([mean, mean, mean]);
  // return "#ff0000";
}



