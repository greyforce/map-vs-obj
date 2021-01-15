export function seqUpdateForLoopNumberKeyObject(testObj, count) {
  const timeStart = Date.now();
  for (let i = 0; i < count; i++) {
    const index = i;
    const item = testObj[index];
    testObj[index] = { ...item, info: item.info + Math.random().toString(36).substring(2, 5) };
  }
  const timeStop = Date.now();
  console.log(testObj[Math.floor(Math.random() * count)]);
  return {
    'Sequential update (for loop) obj - number key': timeStop - timeStart,
  }; 
}

export function seqUpdateForLoopNumberKeyMap(testMap, count) {
  const timeStart = Date.now();
  for (let i = 0; i < count; i++) {
    const index = i;
    const item = testMap.get(index);
    testMap.set(index, { ...item, info: item.info + Math.random().toString(36).substring(2, 5) });
  }
  const timeStop = Date.now();
  console.log(testMap.get(Math.floor(Math.random() * count)));
  return {
    'Sequential update (for loop) map - number key': timeStop - timeStart,
  }; 
}

export function seqUpdateForLoopStringKeyObject(testObj, count, testStringIds) {
  const timeStart = Date.now();
  for (let i = 0; i < count; i++) {
    const index = testStringIds[i];
    const item = testObj[index];
    testObj[index] = { ...item, info: item.info + Math.random().toString(36).substring(2, 5) };
  }
  const timeStop = Date.now();
  console.log(testObj[testStringIds[Math.floor(Math.random() * count)]]);
  return {
    'Sequential update (for loop) obj - string key': timeStop - timeStart,
  }; 
}

export function seqUpdateForLoopStringKeyMap(testMap, count, testStringIds) {
  const timeStart = Date.now();
  for (let i = 0; i < count; i++) {
    const index = testStringIds[i];
    const item = testMap.get(index);
    testMap.set(index, { ...item, info: item.info + Math.random().toString(36).substring(2, 5) });
  }
  const timeStop = Date.now();
  console.log(testMap.get(testStringIds[Math.floor(Math.random() * count)]));
  return {
    'Sequential update (for loop) map - string key': timeStop - timeStart,
  }; 
}
