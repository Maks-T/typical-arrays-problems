
exports.min = function min (array) {
  if (!array) return 0;
  if (!Array.isArray(array)) return 0;
  if (array.length==0) return 0;

  let min_value = 0;
  for (let i=0; i<array.length; i++) {
    min_value =  min_value<array[i] ?  min_value : array[i];  
  }
  return min_value;
}

exports.max = function max (array) {
  if (!array) return 0;
  if (!Array.isArray(array)) return 0;
  if (array.length==0) return 0;

  let max_value = 0;
  for (let i=0; i<array.length; i++) {
    max_value =  max_value>array[i] ?  max_value : array[i];  
  }
  return max_value;
}

exports.avg = function avg (array) {
  if (!array) return 0;
  if (!Array.isArray(array)) return 0;
  if (array.length==0) return 0;
  
  let sum = 0;
  for (let i=0; i<array.length; i++) {
   sum += array[i];  
  }
  return sum/array.length;
}
