let arr = [
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
];
export default function order () {
arr.sort((a,b) => {
return b.health - a.health 

}, 0)
    return arr
}