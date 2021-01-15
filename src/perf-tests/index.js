import { seedTestStringIds, seedTestDataNumberKey, seedTestDataStringKey } from './prepareData';
import { fillNumberKeyObject, fillNumberKeyMap, fillStringKeyObject, fillStringKeyMap } from './fill';
import { appendNumberKeyObject, appendNumberKeyMap, appendStringKeyObject, appendStringKeyMap } from './append';
import { concatNumberKeyObject, concatNumberKeyMap, concatStringKeyObject, concatStringKeyMap } from './concat';
import { concatByChunksNumberKeyObject, concatByChunksNumberKeyMap, concatByChunksStringKeyObject, concatByChunksStringKeyMap } from './concatByChunks';
import { getNumberKeyObject, getNumberKeyMap, getStringKeyObject, getStringKeyMap } from './get';
import { seqUpdateForEachNumberKeyObject, seqUpdateForEachNumberKeyMap, seqUpdateForEachStringKeyObject, seqUpdateForEachStringKeyMap } from './seqUpdateForEach';
import { seqUpdateForLoopNumberKeyObject, seqUpdateForLoopNumberKeyMap, seqUpdateForLoopStringKeyObject, seqUpdateForLoopStringKeyMap } from './seqUpdateForLoop';
import { randomUpdateNumberKeyObject, randomUpdateNumberKeyMap, randomUpdateStringKeyObject, randomUpdateStringKeyMap } from './randomUpdate';
import { randomGetNumberKeyObject, randomGetNumberKeyMap, randomGetStringKeyObject, randomGetStringKeyMap } from './randomGet';
import { randomGetSetNumberKeyObject, randomGetSetNumberKeyMap, randomGetSetStringKeyObject, randomGetSetStringKeyMap } from './randomGetSet';
import { seqDeleteNumberKeyObject, seqDeleteNumberKeyMap, seqDeleteStringKeyObject, seqDeleteStringKeyMap } from './seqDelete';
import { randomDeleteNumberKeyObject, randomDeleteNumberKeyMap, randomDeleteStringKeyObject, randomDeleteStringKeyMap } from './randomDelete';

export function perfTests() {
  const objNumber = {};
  const mapNumber = new Map();
  
  const objString = {};
  const mapString = new Map();
  
  const TEST_COUNT = 30000;
  
  const { data: testStringIds } = seedTestStringIds(TEST_COUNT);
  const { data: testDataNumberKey } = seedTestDataNumberKey(TEST_COUNT);
  const { data: testDataStringKey } = seedTestDataStringKey(TEST_COUNT, testStringIds);
  
  return {
    'Fill obj and map data (initial 50%)': {
      ...fillNumberKeyObject(objNumber, testDataNumberKey),
      ...fillNumberKeyMap(mapNumber, testDataNumberKey),
      ...fillStringKeyObject(objString, testDataStringKey, testStringIds),
      ...fillStringKeyMap(mapString, testDataStringKey, testStringIds),
    },
    // 'Append obj and map data (append rest 50%)': {
    //   ...appendNumberKeyObject(objNumber, testDataNumberKey),
    //   ...appendNumberKeyMap(mapNumber, testDataNumberKey),
    //   ...appendStringKeyObject(objString, testDataStringKey, testStringIds),
    //   ...appendStringKeyMap(mapString, testDataStringKey, testStringIds),
    // },
    // 'Concat to obj and map data (append rest 50%)': {
    //   ...concatNumberKeyObject(objNumber, testDataNumberKey),
    //   ...concatNumberKeyMap(mapNumber, testDataNumberKey),
    //   ...concatStringKeyObject(objString, testDataStringKey, testStringIds),
    //   ...concatStringKeyMap(mapString, testDataStringKey, testStringIds),
    // },
    'Concat by chunks to obj and map data (append rest 50%)': {
      ...concatByChunksNumberKeyObject(objNumber, testDataNumberKey),
      ...concatByChunksNumberKeyMap(mapNumber, testDataNumberKey),
      ...concatByChunksStringKeyObject(objString, testDataStringKey, testStringIds),
      ...concatByChunksStringKeyMap(mapString, testDataStringKey, testStringIds),
    },
    'Get first/middle/last obj and map data': {
      ...getNumberKeyObject(objNumber, TEST_COUNT),
      ...getNumberKeyMap(mapNumber, TEST_COUNT),
      ...getStringKeyObject(objString, TEST_COUNT, testStringIds),
      ...getStringKeyMap(mapString, TEST_COUNT, testStringIds),
    },
    'Sequential update (forEach via item => item.id) obj and map data': {
      ...seqUpdateForEachNumberKeyObject(objNumber, testDataNumberKey),
      ...seqUpdateForEachNumberKeyMap(mapNumber, testDataNumberKey),
      ...seqUpdateForEachStringKeyObject(objString, testDataStringKey, testStringIds),
      ...seqUpdateForEachStringKeyMap(mapString, testDataStringKey, testStringIds),
    },
    'Sequential update (for loop) obj and map data': {
      ...seqUpdateForLoopNumberKeyObject(objNumber, TEST_COUNT),
      ...seqUpdateForLoopNumberKeyMap(mapNumber, TEST_COUNT),
      ...seqUpdateForLoopStringKeyObject(objString, TEST_COUNT, testStringIds),
      ...seqUpdateForLoopStringKeyMap(mapString, TEST_COUNT, testStringIds),
    },
    'Random update obj and map data': {
      ...randomUpdateNumberKeyObject(objNumber, TEST_COUNT),
      ...randomUpdateNumberKeyMap(mapNumber, TEST_COUNT),
      ...randomUpdateStringKeyObject(objString, TEST_COUNT, testStringIds),
      ...randomUpdateStringKeyMap(mapString, TEST_COUNT, testStringIds),
    },
    'Random get obj and map data': {
      ...randomGetNumberKeyObject(objNumber, TEST_COUNT),
      ...randomGetNumberKeyMap(mapNumber, TEST_COUNT),
      ...randomGetStringKeyObject(objString, TEST_COUNT, testStringIds),
      ...randomGetStringKeyMap(mapString, TEST_COUNT, testStringIds),
    },
    'Random get/set obj and map data': {
      ...randomGetSetNumberKeyObject(objNumber, TEST_COUNT),
      ...randomGetSetNumberKeyMap(mapNumber, TEST_COUNT),
      ...randomGetSetStringKeyObject(objString, TEST_COUNT, testStringIds),
      ...randomGetSetStringKeyMap(mapString, TEST_COUNT, testStringIds),
    },
    'Sequential delete obj and map data': {
      ...seqDeleteNumberKeyObject(objNumber, TEST_COUNT),
      ...seqDeleteNumberKeyMap(mapNumber, TEST_COUNT),
      ...seqDeleteStringKeyObject(objString, TEST_COUNT, testStringIds),
      ...seqDeleteStringKeyMap(mapString, TEST_COUNT, testStringIds),
    },
    'Random delete obj and map data': {
      ...randomDeleteNumberKeyObject(objNumber, TEST_COUNT),
      ...randomDeleteNumberKeyMap(mapNumber, TEST_COUNT),
      ...randomDeleteStringKeyObject(objString, TEST_COUNT, testStringIds),
      ...randomDeleteStringKeyMap(mapString, TEST_COUNT, testStringIds),
    },
  };
}
