export function getNumberKeyObject(testObj, count) {
  const results = [];
  const timeStart = Date.now();
  for (let i = 0; i < count; i++) {
    const first = testObj[Math.floor(Math.random() * count / 100)];
    const middle = testObj[Math.floor(count / 2 + Math.random() * count / 100)];
    const last = testObj[Math.floor(count - 1 - Math.random() * count / 100)];
    results.push({ first, middle, last });
  }
  const timeStop = Date.now();
  console.log(results[Math.floor(Math.random() * count)]);
  return {
    'Get first/middle/last obj - number key': timeStop - timeStart,
  }; 
}

export function getNumberKeyMap(testMap, count) {
  const results = [];
  const timeStart = Date.now();
  for (let i = 0; i < count; i++) {
    const first = testMap.get(Math.floor(Math.random() * count / 100));
    const middle = testMap.get(Math.floor(count / 2 + Math.random() * count / 100));
    const last = testMap.get(Math.floor(count - 1 - Math.random() * count / 100));
    results.push({ first, middle, last });
  }
  const timeStop = Date.now();
  console.log(results[Math.floor(Math.random() * count)]);
  return {
    'Get first/middle/last map - number key': timeStop - timeStart,
  }; 
}

export function getStringKeyObject(testObj, count, testStringIds) {
  const results = [];
  const timeStart = Date.now();
  for (let i = 0; i < count; i++) {
    const first = testObj[testStringIds[Math.floor(Math.random() * count / 100)]];
    const middle = testObj[testStringIds[Math.floor(count / 2 + Math.random() * count / 100)]];
    const last = testObj[testStringIds[Math.floor(count - 1 - Math.random() * count / 100)]];
    results.push({ first, middle, last });
  }
  const timeStop = Date.now();
  console.log(results[Math.floor(Math.random() * count)]);
  return {
    'Get first/middle/last obj - string key': timeStop - timeStart,
  }; 
}

export function getStringKeyMap(testMap, count, testStringIds) {
  const results = [];
  const timeStart = Date.now();
  for (let i = 0; i < count; i++) {
    const first = testMap.get(testStringIds[Math.floor(Math.random() * count / 100)]);
    const middle = testMap.get(testStringIds[Math.floor(count / 2 + Math.random() * count / 100)]);
    const last = testMap.get(testStringIds[Math.floor(count - 1 - Math.random() * count / 100)]);
    results.push({ first, middle, last });
  }
  const timeStop = Date.now();
  console.log(results[Math.floor(Math.random() * count)]);
  return {
    'Get first/middle/last map - string key': timeStop - timeStart,
  }; 
}
