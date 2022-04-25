const sequences = [
  {
    id: 1,
    name: 'Sequence 1',
    tracks: [
      {
        id: 1,
        instrument: 'Kick',
        pattern: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
      },
      {
        id: 2,
        instrument: 'hats',
        pattern: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      },
    ],
  },
  {
    id: 2,
    name: 'Sequence 2',
    tracks: [
      {
        id: 1,
        instrument: 'Kick',
        pattern: [1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
      },
      {
        id: 3,
        instrument: 'Snare',
        pattern: [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
      },
      {
        id: 2,
        instrument: 'hats',
        pattern: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      },
    ],
  },
  {
    id: 3,
    name: 'Sequence 3',
    tracks: [
      {
        id: 1,
        instrument: 'Kick',
        pattern: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
      },
      {
        id: 2,
        instrument: 'Closed Hat',
        pattern: [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0],
      },
    ],
  },
];

export default sequences;
