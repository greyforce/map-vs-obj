export function randomDeleteNumberKeyObject(testObj, count) {
  const timeStart = Date.now();
  for (let i = 0; i < count / 2; i++) {
    const index = Math.floor(Math.random() * count);
    delete testObj[index];
  }
  const timeStop = Date.now();
  console.log(testObj[Math.floor(Math.random() * count)]);
  return {
    'Random delete obj - number key': timeStop - timeStart,
  }; 
}

export function randomDeleteNumberKeyMap(testMap, count) {
  const timeStart = Date.now();
  for (let i = 0; i < count / 2; i++) {
    const index = Math.floor(Math.random() * count);
    testMap.delete(index);
  }
  const timeStop = Date.now();
  console.log(testMap.get(Math.floor(Math.random() * count)));
  return {
    'Random delete map - number key': timeStop - timeStart,
  }; 
}

export function randomDeleteStringKeyObject(testObj, count, testStringIds) {
  const timeStart = Date.now();
  for (let i = 0; i < count / 2; i++) {
    const index = testStringIds[Math.floor(Math.random() * count)];
    delete testObj[testStringIds[index]];
  }
  const timeStop = Date.now();
  console.log(testObj[testStringIds[Math.floor(Math.random() * count)]]);
  return {
    'Random delete obj - string key': timeStop - timeStart,
  }; 
}

export function randomDeleteStringKeyMap(testMap, count, testStringIds) {
  const timeStart = Date.now();
  for (let i = 0; i < count / 2; i++) {
    const index = testStringIds[Math.floor(Math.random() * count)];
    testMap.delete(testStringIds[index]);
  }
  const timeStop = Date.now();
  console.log(testMap.get(testStringIds[Math.floor(Math.random() * count)]));
  return {
    'Random delete map - string key': timeStop - timeStart,
  }; 
}
