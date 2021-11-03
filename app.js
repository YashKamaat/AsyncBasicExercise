// ASYNC BASICS EXERCISE
//=======================================
// 1
let name1 = "Luke Skywalker";
function lukeName() {
  console.log(`Question 1`);
  console.log(name1);
}
function luke(name1, callback) {
    setTimeout(() => {
        callback(name1)
    }, 1000);
}
luke(`Mark Hamill`, n => {
    console.log(n);
});
lukeName();
//===================================
// 2
let name2 = "Han Solo";
function hanGuy() {
  console.log(`Q 2`);
  console.log(name2);
}
function han(name2) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(name2);
          }, 2000);
    });
}
han(`Harrison Ford`).then(n => console.log(n));
hanGuy();
//======================================
// 3
let name3 = "Leia Organa";
console.log(`Q 3`);
console.log(name3);

function leia(name3){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(name3);
          }, 3000);
    });
}
async function leiaLeia() {
    console.log(await leia(`Carrie Fisher`));
}
leiaLeia();
//=========================================
//BONUS
// 4
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('First Promise')
    }, 2000);
  });
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Second Promise')
    }, 3000);
  });
  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Third Promise')
    }, 4000);
  });
Promise.all([p1, p2, p3]).then((arr) =>{
    console.log(arr);
})