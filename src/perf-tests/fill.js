export function fillNumberKeyObject(testObj, testDataNumberKey) {
  const timeStart = Date.now();
  for (let i = 0; i < testDataNumberKey.length / 2; i++) {
    const item = testDataNumberKey[i];
    testObj[item.id] = item;
  }
  const timeStop = Date.now();
  console.log(testObj[Math.floor(Math.random() * testDataNumberKey.length / 2)]);
  return {
    'Fill obj - number key': timeStop - timeStart,
  }; 
}

export function fillNumberKeyMap(testMap, testDataNumberKey) {
  const timeStart = Date.now();
  for (let i = 0; i < testDataNumberKey.length / 2; i++) {
    const item = testDataNumberKey[i];
    testMap.set(item.id, item);
  }
  const timeStop = Date.now();
  console.log(testMap.get(Math.floor(Math.random() * testDataNumberKey.length / 2)));
  return {
    'Fill map - number key': timeStop - timeStart,
  }; 
}

export function fillStringKeyObject(testObj, testDataStringKey, testStringIds) {
  const timeStart = Date.now();
  for (let i = 0; i < testDataStringKey.length / 2; i++) {
    const item = testDataStringKey[i];
    testObj[item.id] = item;
  }
  const timeStop = Date.now();
  console.log(testObj[testStringIds[Math.floor(Math.random() * testDataStringKey.length / 2)]]);
  return {
    'Fill obj - string key': timeStop - timeStart,
  }; 
}

export function fillStringKeyMap(testMap, testDataStringKey, testStringIds) {
  const timeStart = Date.now();
  for (let i = 0; i < testDataStringKey.length / 2; i++) {
    const item = testDataStringKey[i];
    testMap.set(item.id, item);
  }
  const timeStop = Date.now();
  console.log(testStringIds[Math.floor(Math.random() * testDataStringKey.length / 2)]);
  return {
    'Fill map - string key': timeStop - timeStart,
  }; 
}
