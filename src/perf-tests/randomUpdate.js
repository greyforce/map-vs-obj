export function randomUpdateNumberKeyObject(testObj, count) {
  const timeStart = Date.now();
  for (let i = 0; i < count; i++) {
    const index = Math.floor(Math.random() * count);
    const item = testObj[index];
    testObj[index] = { ...item, info: item.info + Math.random().toString(36).substring(2, 5) };
  }
  const timeStop = Date.now();
  console.log(testObj[Math.floor(Math.random() * count)]);
  return {
    'Random update obj - number key': timeStop - timeStart,
  }; 
}

export function randomUpdateNumberKeyMap(testMap, count) {
  const timeStart = Date.now();
  for (let i = 0; i < count; i++) {
    const index = Math.floor(Math.random() * count);
    const item = testMap.get(index);
    testMap.set(index, { ...item, info: item.info + Math.random().toString(36).substring(2, 5) });
  }
  const timeStop = Date.now();
  console.log(testMap.get(Math.floor(Math.random() * count)));
  return {
    'Random update map - number key': timeStop - timeStart,
  }; 
}

export function randomUpdateStringKeyObject(testObj, count, testStringIds) {
  const timeStart = Date.now();
  for (let i = 0; i < count; i++) {
    const index = testStringIds[Math.floor(Math.random() * count)];
    const item = testObj[index];
    testObj[index] = { ...item, info: item.info + Math.random().toString(36).substring(2, 5) };
  }
  const timeStop = Date.now();
  console.log(testObj[testStringIds[Math.floor(Math.random() * count)]]);
  return {
    'Random update obj - string key': timeStop - timeStart,
  }; 
}

export function randomUpdateStringKeyMap(testMap, count, testStringIds) {
  const timeStart = Date.now();
  for (let i = 0; i < count; i++) {
    const index = testStringIds[Math.floor(Math.random() * count)];
    const item = testMap.get(index);
    testMap.set(index, { ...item, info: item.info + Math.random().toString(36).substring(2, 5) });
  }
  const timeStop = Date.now();
  console.log(testMap.get(testStringIds[Math.floor(Math.random() * count)]));
  return {
    'Random update map - string key': timeStop - timeStart,
  }; 
}
