export function seqUpdateForEachNumberKeyObject(testObj, testDataNumberKey) {
  const timeStart = Date.now();
  testDataNumberKey.forEach(item => {
    testObj[item.id] = { ...item, info: item.info + Math.random().toString(36).substring(2, 5) };
  });
  const timeStop = Date.now();
  console.log(testObj[Math.floor(Math.random() * testDataNumberKey.length)]);
  return {
    'Sequential update (forEach) obj - number key': timeStop - timeStart,
  }; 
}

export function seqUpdateForEachNumberKeyMap(testMap, testDataNumberKey) {
  const timeStart = Date.now();
  testDataNumberKey.forEach(item => {
    testMap.set(item.id, { ...item, info: item.info + Math.random().toString(36).substring(2, 5) });
  });
  const timeStop = Date.now();
  console.log(testMap.get(Math.floor(Math.random() * testDataNumberKey.length)));
  return {
    'Sequential update (forEach) map - number key': timeStop - timeStart,
  }; 
}

export function seqUpdateForEachStringKeyObject(testObj, testDataStringKey, testStringIds) {
  const timeStart = Date.now();
  testDataStringKey.forEach(item => {
    testObj[item.id] = { ...item, info: item.info + Math.random().toString(36).substring(2, 5) };
  });
  const timeStop = Date.now();
  console.log(testObj[testStringIds[Math.floor(Math.random() * testDataStringKey.length)]]);
  return {
    'Sequential update (forEach) obj - string key': timeStop - timeStart,
  }; 
}

export function seqUpdateForEachStringKeyMap(testMap, testDataStringKey, testStringIds) {
  const timeStart = Date.now();
  testDataStringKey.forEach(item => {
    testMap.set(item.id, { ...item, info: item.info + Math.random().toString(36).substring(2, 5) });
  });
  const timeStop = Date.now();
  console.log(testMap.get(testStringIds[Math.floor(Math.random() * testDataStringKey.length)]));
  return {
    'Sequential update (forEach) map - string key': timeStop - timeStart,
  }; 
}
