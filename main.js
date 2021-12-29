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
      result.push(end[index]);
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
