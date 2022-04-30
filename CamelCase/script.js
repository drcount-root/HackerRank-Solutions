const camelcase = function (s) {
  const temp = s.split("");
  let counter = 0;
  for (let i = 0; i < temp.length; i++) {
    if (temp[i].charCodeAt(0) <= 90) counter++;
  }
  return counter + 1;
};

console.log(camelcase("saveChangesInTheEditor"));
