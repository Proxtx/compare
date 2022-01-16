/**
 * Compares the Start String with the End String and finds out the differences
 * @param {String} start The String that is supposed to morph into the end String
 * @param {String} end The String that Start is supposed to morph into
 * @returns A broken down Start String that can be rebuild into the end String with the rebuild function
 */
export const compare = (start, end) => {
  let result = [];
  let index = 0;
  while (index < end.length) {
    let results = [];
    for (let i in start) {
      let instanceIndex = index;
      if (start[i] == end[instanceIndex]) {
        let x;
        instanceIndex++;
        for (x = 1; x + i * 1 < start.length; x++) {
          if (!(start[i * 1 + x] == end[instanceIndex])) break;
          instanceIndex++;
        }
        if (x >= 3) {
          results.push({ segment: { s: i * 1, e: i * 1 + x }, instanceIndex });
        }
      }
    }
    if (results.length < 1) {
      if (typeof result[result.length - 1] == "string") {
        result[result.length - 1] += end[index];
      } else {
        result.push(end[index]);
      }
      index++;
    } else {
      let compareIndex = 0;
      let maxSize = 0;
      for (let i in results) {
        if (results[i].instanceIndex > maxSize) {
          maxSize = results[i].instanceIndex;
          compareIndex = i;
        }
      }
      index = results[compareIndex].instanceIndex;
      result.push(results[compareIndex].segment);
    }
  }
  return result;
};

/**
 * Rebuilds the End String from the Start String and the Result of compare
 * @param {String} start Takes the Start String from compare
 * @param {Array} compared The result of compare
 * @returns The End String
 */
export const rebuild = (start, compared) => {
  let result = "";
  for (let i in compared) {
    result +=
      typeof compared[i] == "string"
        ? compared[i]
        : start.substring(compared[i].s, compared[i].e);
  }
  return result;
};
