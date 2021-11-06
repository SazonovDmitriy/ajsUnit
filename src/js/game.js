export default function order (arr) {
    arr.sort((a,b) => {
        return b.health - a.health 
    }, 0);
    return arr
}