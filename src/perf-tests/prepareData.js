export function seedTestStringIds(count) {
  const TEST_STRING_IDS = [];
  const timeStart = Date.now();
  for (let i = 0; i < count; i++) {
    TEST_STRING_IDS.push(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
  }
  const timeStop = Date.now();
  return {
    name: 'Seed test string ids',
    data: TEST_STRING_IDS,
    duration: timeStop - timeStart,
  };
}

export function seedTestDataNumberKey(count) {
  const TEST_DATA_NUMBER = [];
  const timeStart = Date.now();
  for (let i = 0; i < count; i++) {
    TEST_DATA_NUMBER.push({
      id: i,
      info: Math.random().toString(36).substring(2, 15),
    });
  }
  const timeStop = Date.now();
  return {
    name: 'Seed test data (number key)',
    data: TEST_DATA_NUMBER,
    duration: timeStop - timeStart,
  };
}

export function seedTestDataStringKey(count, testStringIds) {
  const TEST_DATA_STRING = [];
  const timeStart = Date.now();
  for (let i = 0; i < count; i++) {
    TEST_DATA_STRING.push({
      id: testStringIds[i],
      info: Math.random().toString(36).substring(2, 15),
    });
  }
  const timeStop = Date.now();
  return {
    name: 'Seed test data (string key)',
    data: TEST_DATA_STRING,
    duration: timeStop - timeStart,
  };
}
