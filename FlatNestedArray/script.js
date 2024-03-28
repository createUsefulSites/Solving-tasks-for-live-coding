function flattenArray(arr) {
  const resArr = [];

  for (let item of arr) {
    if (typeof item === 'object') resArr.push(...helper(item));
    else resArr.push(item);
  }
  console.log('resArr: ', resArr);
}

function helper(arr, resArr = []) {
  for (let item of arr) {
    if (typeof item === 'object') helper(item, resArr);
    else resArr.push(item);
  }
  return resArr;
}

const nestedArray = [1, [2, [3, [1, 2, [10]], 4], 5], 6];
flattenArray(nestedArray);
