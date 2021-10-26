export default function order (arr) {
    arr = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
      ];
      arr.sort((a, b) => {
        if (b.health - a.health) {
          return 1;
        }
      }) // Пробовал так реализовать, не вышло
      return arr
}