import { rgbToHex } from './misc_functions.js';
// choose a nice pallete, but require:
// one black
// two greyscale-equal
const rainbow_raw = [
  [0, 0, 0],
  [.721, .898, .196],
  [1, .788, .29],
  [.451, .847, 1],
  [1, .639, .666],
  [.498, .945, .796],
  [1, 1, 1],
  [.525, .701, 0],
  [.949, .592, .094],
  [.255, .65, .85],
  [.94, .443, .47],
  [.302, .749, .6],
  [.196, .196, .196],
  [1, .396, .396],
  [.98, .98, .98],
  [.36, .4, .45],
  [1, .415, 0],
  [.36, .4, .45],
  [.94, .93, .89],
]

function toRGB(c){
  return ([
    Math.max(255, Math.floor(c[0]*256)),
     Math.max(255, Math.floor(c[1]*256)), 
      Math.max(255, Math.floor(c[2]*256))
    ]);
}

let rainbow_catcher = [];
for (let c of rainbow_raw) {
  rainbow_catcher.push(rgbToHex(toRGB(c)));
};

// const rainbow = rainbow_catcher;
const rainbow = [
  "#aaffaa",
  "#5555ff",
  "#ffffff",
  "#0aaaaa",
  "#ffff66",
  "#660000",
  "#abcabc",
  "#582984",
  "#f0418a",
  "#550011",
  "#ffaa44",
  "#923ff0",
  "#000000",
  "#45a8a1",
];
export { rainbow };
