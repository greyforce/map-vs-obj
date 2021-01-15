export function randomGetNumberKeyObject(testObj, count) {
  const results = [];
  const timeStart = Date.now();
  for (let i = 0; i < count; i++) {
    const data = testObj[Math.floor(Math.random() * count)];
    results.push({ data });
  }
  const timeStop = Date.now();
  console.log(results[Math.floor(Math.random() * count)]);
  return {
    'Random get obj - number key': timeStop - timeStart,
  }; 
}

export function randomGetNumberKeyMap(testMap, count) {
  const results = [];
  const timeStart = Date.now();
  for (let i = 0; i < count; i++) {
    const data = testMap.get(Math.floor(Math.random() * count));
    results.push({ data });
  }
  const timeStop = Date.now();
  console.log(results[Math.floor(Math.random() * count)]);
  return {
    'Random get map - number key': timeStop - timeStart,
  }; 
}

export function randomGetStringKeyObject(testObj, count, testStringIds) {
  const results = [];
  const timeStart = Date.now();
  for (let i = 0; i < count; i++) {
    const data = testObj[testStringIds[Math.floor(Math.random() * count)]];
    results.push({ data });
  }
  const timeStop = Date.now();
  console.log(results[Math.floor(Math.random() * count)]);
  return {
    'Random get obj - string key': timeStop - timeStart,
  }; 
}

export function randomGetStringKeyMap(testMap, count, testStringIds) {
  const results = [];
  const timeStart = Date.now();
  for (let i = 0; i < count; i++) {
    const data = testMap.get(testStringIds[Math.floor(Math.random() * count)]);
    results.push({ data });
  }
  const timeStop = Date.now();
  console.log(results[Math.floor(Math.random() * count)]);
  return {
    'Random get map - string key': timeStop - timeStart,
  }; 
}
