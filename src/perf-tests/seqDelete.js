export function seqDeleteNumberKeyObject(testObj, count) {
  const timeStart = Date.now();
  for (let i = 0; i < count / 2; i++) {
    delete testObj[i];
  }
  const timeStop = Date.now();
  console.log(testObj[Math.floor(Math.random() * count)]);
  return {
    'Sequantial delete obj - number key': timeStop - timeStart,
  }; 
}

export function seqDeleteNumberKeyMap(testMap, count) {
  const timeStart = Date.now();
  for (let i = 0; i < count / 2; i++) {
    testMap.delete(i);
  }
  const timeStop = Date.now();
  console.log(testMap.get(Math.floor(Math.random() * count)));
  return {
    'Sequantial delete map - number key': timeStop - timeStart,
  }; 
}

export function seqDeleteStringKeyObject(testObj, count, testStringIds) {
  const timeStart = Date.now();
  for (let i = 0; i < count / 2; i++) {
    delete testObj[testStringIds[i]];
  }
  const timeStop = Date.now();
  console.log(testObj[testStringIds[Math.floor(Math.random() * count)]]);
  return {
    'Sequantial delete obj - string key': timeStop - timeStart,
  }; 
}

export function seqDeleteStringKeyMap(testMap, count, testStringIds) {
  const timeStart = Date.now();
  for (let i = 0; i < count / 2; i++) {
    testMap.delete(testStringIds[i]);
  }
  const timeStop = Date.now();
  console.log(testMap.get(testStringIds[Math.floor(Math.random() * count)]));
  return {
    'Sequantial delete map - string key': timeStop - timeStart,
  }; 
}
