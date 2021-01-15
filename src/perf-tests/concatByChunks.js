export function concatByChunksNumberKeyObject(testObj, testDataNumberKey) {
  const timeStart = Date.now();
  for (let i = testDataNumberKey.length / 2; i < testDataNumberKey.length; i += 100) {
    const newObj = {};
    for (let j = 0; j < 100; j++) {
      const item = testDataNumberKey[i + j];
      newObj[item.id] = item;
    }
    testObj = { ...testObj, ...newObj };
  }
  const timeStop = Date.now();
  console.log(testObj[Math.floor(testDataNumberKey.length / 2 + Math.random() * testDataNumberKey.length / 100)]);
  return {
    'Concat by chunks to obj - number key': timeStop - timeStart,
  }; 
}

export function concatByChunksNumberKeyMap(testMap, testDataNumberKey) {
  const timeStart = Date.now();
  for (let i = testDataNumberKey.length / 2; i < testDataNumberKey.length; i += 100) {
    const newMap = new Map();
    for (let j = 0; j < 100; j++) {
      const item = testDataNumberKey[i];
      newMap.set(item.id, item);
    }
    testMap = new Map([...testMap, ...newMap]);
  }
  const timeStop = Date.now();
  console.log(testMap.get(Math.floor(testDataNumberKey.length / 2 + Math.random() * testDataNumberKey.length / 100)));
  return {
    'Concat by chunks to map - number key': timeStop - timeStart,
  }; 
}

export function concatByChunksStringKeyObject(testObj, testDataStringKey, testStringIds) {
  const timeStart = Date.now();
  for (let i = testDataStringKey.length / 2; i < testDataStringKey.length; i += 100) {
    const newObj = {};
    for (let j = 0; j < 100; j++) {
      const item = testDataStringKey[i + j];
      testObj[item.id] = item;
    }
    testObj = { ...testObj, ...newObj };
  }
  const timeStop = Date.now();
  console.log(testObj[testStringIds[testDataStringKey.length / 2 + Math.floor(Math.random() * testDataStringKey.length / 100)]]);
  return {
    'Concat by chunks to obj - string key': timeStop - timeStart,
  }; 
}

export function concatByChunksStringKeyMap(testMap, testDataStringKey, testStringIds) {
  const timeStart = Date.now();
  for (let i = testDataStringKey.length / 2; i < testDataStringKey.length; i += 100) {
    const newMap = new Map();
    for (let j = 0; j < 100; j++) {
      const item = testDataStringKey[i + j];
      testMap.set(item.id, item);
    }
    testMap = new Map([...testMap, ...newMap]);
  }
  const timeStop = Date.now();
  console.log(testStringIds[testDataStringKey.length / 2 + Math.floor(Math.random() * testDataStringKey.length / 100)]);
  return {
    'Concat by chunks to map - string key': timeStop - timeStart,
  }; 
}
