export function appendNumberKeyObject(testObj, testDataNumberKey) {
  const timeStart = Date.now();
  for (let i = testDataNumberKey.length / 2; i < testDataNumberKey.length; i++) {
    const item = testDataNumberKey[i];
    testObj[item.id] = item;
  }
  const timeStop = Date.now();
  console.log(testObj[Math.floor(testDataNumberKey.length / 2 + Math.random() * testDataNumberKey.length / 100)]);
  return {
    'Fill obj - number key': timeStop - timeStart,
  }; 
}

export function appendNumberKeyMap(testMap, testDataNumberKey) {
  const timeStart = Date.now();
  for (let i = testDataNumberKey.length / 2; i < testDataNumberKey.length; i++) {
    const item = testDataNumberKey[i];
    testMap.set(item.id, item);
  }
  const timeStop = Date.now();
  console.log(testMap.get(Math.floor(testDataNumberKey.length / 2 + Math.random() * testDataNumberKey.length / 100)));
  return {
    'Fill map - number key': timeStop - timeStart,
  }; 
}

export function appendStringKeyObject(testObj, testDataStringKey, testStringIds) {
  const timeStart = Date.now();
  for (let i = testDataStringKey.length / 2; i < testDataStringKey.length; i++) {
    const item = testDataStringKey[i];
    testObj[item.id] = item;
  }
  const timeStop = Date.now();
  console.log(testObj[testStringIds[testDataStringKey.length / 2 + Math.floor(Math.random() * testDataStringKey.length / 100)]]);
  return {
    'Fill obj - string key': timeStop - timeStart,
  }; 
}

export function appendStringKeyMap(testMap, testDataStringKey, testStringIds) {
  const timeStart = Date.now();
  for (let i = testDataStringKey.length / 2; i < testDataStringKey.length; i++) {
    const item = testDataStringKey[i];
    testMap.set(item.id, item);
  }
  const timeStop = Date.now();
  console.log(testStringIds[testDataStringKey.length / 2 + Math.floor(Math.random() * testDataStringKey.length / 100)]);
  return {
    'Fill map - string key': timeStop - timeStart,
  }; 
}
