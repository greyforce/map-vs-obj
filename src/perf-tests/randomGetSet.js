export function randomGetSetNumberKeyObject(testObj, count) {
  const timeStart = Date.now();
  for (let i = 0; i < count; i++) {
    const indexGet = Math.floor(Math.random() * count);
    const indexSet = Math.floor(Math.random() * count);
    const data = testObj[indexGet];
    testObj[indexSet] = { ...data };
  }
  const timeStop = Date.now();
  console.log(testObj[Math.floor(Math.random() * count)]);
  return {
    'Random get/set obj - number key': timeStop - timeStart,
  }; 
}

export function randomGetSetNumberKeyMap(testMap, count) {
  const timeStart = Date.now();
  for (let i = 0; i < count; i++) {
    const indexGet = Math.floor(Math.random() * count);
    const indexSet = Math.floor(Math.random() * count);
    const data = testMap.get(indexGet);
    testMap.set(indexSet, { ...data });
  }
  const timeStop = Date.now();
  console.log(testMap.get(Math.floor(Math.random() * count)));
  return {
    'Random get/set map - number key': timeStop - timeStart,
  }; 
}

export function randomGetSetStringKeyObject(testObj, count, testStringIds) {
  const timeStart = Date.now();
  for (let i = 0; i < count; i++) {
    const indexGet = testStringIds[Math.floor(Math.random() * count)];
    const indexSet = testStringIds[Math.floor(Math.random() * count)];
    const data = testObj[indexGet];
    testObj[indexSet] = { ...data };
  }
  const timeStop = Date.now();
  console.log(testObj[testStringIds[Math.floor(Math.random() * count)]]);
  return {
    'Random get/set obj - string key': timeStop - timeStart,
  }; 
}

export function randomGetSetStringKeyMap(testMap, count, testStringIds) {
  const timeStart = Date.now();
  for (let i = 0; i < count; i++) {
    const indexGet = testStringIds[Math.floor(Math.random() * count)];
    const indexSet = testStringIds[Math.floor(Math.random() * count)];
    const data = testMap.get(indexGet);
    testMap.set(indexSet, { ...data });
  }
  const timeStop = Date.now();
  console.log(testMap.get(testStringIds[Math.floor(Math.random() * count)]));
  return {
    'Random get/set map - string key': timeStop - timeStart,
  }; 
}
