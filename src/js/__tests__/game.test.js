import order from "../game.js";

test('order check', () => {
  let testArr = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
];
  const expected = [
      {name: 'маг', health: 100},
      {name: 'лучник', health: 80},
      {name: 'мечник', health: 10},
    ];
  const recevied = order(testArr);
  expect(recevied).toEqual(expected);
});