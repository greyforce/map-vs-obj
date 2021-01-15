export function concatNumberKeyObject(testObj, testDataNumberKey) {
  const timeStart = Date.now();
  const newObj = {};
  for (let i = testDataNumberKey.length / 2; i < testDataNumberKey.length; i++) {
    const item = testDataNumberKey[i];
    newObj[item.id] = item;
  }
  testObj = { ...testObj, ...newObj };
  const timeStop = Date.now();
  console.log(testObj[Math.floor(testDataNumberKey.length / 2 + Math.random() * testDataNumberKey.length / 100)]);
  return {
    'Concat to obj - number key': timeStop - timeStart,
  }; 
}

export function concatNumberKeyMap(testMap, testDataNumberKey) {
  const timeStart = Date.now();
  const newMap = new Map();
  for (let i = testDataNumberKey.length / 2; i < testDataNumberKey.length; i++) {
    const item = testDataNumberKey[i];
    newMap.set(item.id, item);
  }
  testMap = new Map([...testMap, ...newMap]);
  const timeStop = Date.now();
  console.log(testMap.get(Math.floor(testDataNumberKey.length / 2 + Math.random() * testDataNumberKey.length / 100)));
  return {
    'Concat to map - number key': timeStop - timeStart,
  }; 
}

export function concatStringKeyObject(testObj, testDataStringKey, testStringIds) {
  const timeStart = Date.now();
  const newObj = {};
  for (let i = testDataStringKey.length / 2; i < testDataStringKey.length; i++) {
    const item = testDataStringKey[i];
    testObj[item.id] = item;
  }
  testObj = { ...testObj, ...newObj };
  const timeStop = Date.now();
  console.log(testObj[testStringIds[testDataStringKey.length / 2 + Math.floor(Math.random() * testDataStringKey.length / 100)]]);
  return {
    'Concat to obj - string key': timeStop - timeStart,
  }; 
}

export function concatStringKeyMap(testMap, testDataStringKey, testStringIds) {
  const timeStart = Date.now();
  const newMap = new Map();
  for (let i = testDataStringKey.length / 2; i < testDataStringKey.length; i++) {
    const item = testDataStringKey[i];
    testMap.set(item.id, item);
  }
  testMap = new Map([...testMap, ...newMap]);
  const timeStop = Date.now();
  console.log(testStringIds[testDataStringKey.length / 2 + Math.floor(Math.random() * testDataStringKey.length / 100)]);
  return {
    'Concat to map - string key': timeStop - timeStart,
  }; 
}
