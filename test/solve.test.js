const test = require('ava').default;

const findCoordinates = require('../src/solve.js').findCoordinates;

const puzzle = [
  'FIJIOALIAMJD',
  'ADJIOSDLAJDC',
  'AFDSUNNYRJOA',
  'JIFNASBJTNSF',
  'JASNAFDNICES',
  'DAOBEUFCNDJS',
];

const keywords = {
  horizontal: [
    'LIAM',
    'SUNNY',
    'ICE',
  ],
  vertical: [
    'MARTIN',
  ],
};

test('horizontal word on first line', t => {
  const result = findCoordinates(puzzle, ['LIAM']);
  const expected = [
    {
      keyword: 'LIAM',
      start: { x: 6, y: 0},
      end:   { x: 9, y: 0},
    },
  ];
  t.deepEqual(result, expected);
});

test('multiple horizontal words', t => {
  const result = findCoordinates(puzzle, keywords.horizontal);
  const expected = [{
    keyword: 'LIAM',
    start: {x: 6, y: 0},
    end: {x: 9, y: 0},
  }, {
    keyword: 'SUNNY',
    start: {x: 3, y: 2},
    end: {x: 7, y: 2},
  }, {
    keyword: 'ICE',
    start: {x: 8, y: 4},
    end: {x: 10, y: 4},
  }];

  t.deepEqual(result, expected);
});
