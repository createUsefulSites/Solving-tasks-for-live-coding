const obj = { a: { d: { h: 4 }, e: 2 }, b: 1, c: { f: { g: 3, k: {} } } };

console.log(addLevels(obj));

function addLevels(obj, level = 1) {
  obj.level = level;
  for (let item in obj) {
    if (typeof obj[item] === 'object') addLevels(obj[item], (level += 1));
  }

  return obj;
}
