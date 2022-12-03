                                  //DZ_15

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
function randomIntFromInterval(min, max) {
    
    return Math.floor(Math.random() * (max - min + 1) + min)
}


  function generateKey(length,characters) {
      let str = []
      const arr = characters.split('')

      for(let i = 0; i <= length; i++) {
          const rndInt = randomIntFromInterval(0, arr.length)
          console.log(i,rndInt)
          str.push(arr[rndInt]);
      }
      return str.join("");
  }
const key = generateKey(16, characters);
console.log(key);



