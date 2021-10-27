import order from "../game.js";

test('order check', () => {
    const expected = [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
      ];
    const recevied = order();
    expect(recevied).toEqual(expected);
});