"use strict";

const staircase = function (n) {
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "#".repeat(i));
  }
};

console.log(staircase(5));
