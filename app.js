// ASYNC BASICS EXERCISE
//=======================================
// 1
/*let name1 = "Luke Skywalker";
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
lukeName(); */
let name1 = "Luke Skywalker";

function lukeName() {
  console.log(`Q 1`);
  console.log(name1);
}
 function luke(n, callback) {
      setTimeout(() => {
       name1 = n;
        callback();
      }, 1000);
     }
     luke(`Mark Hamill`, lukeName);
//===================================
// 2
let name2 = "Han Solo";

function hanName() {
  console.log(`Q 2`);
  console.log(name2);
}
function han(n) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        name2 = n;
        resolve();
      }, 2000);
    });
  }
  han(`Harrison Ford`)
    .then(hanName);
//======================================
// 3
let name3 = "Leia Organa";
console.log(`Q 3`);
console.log(name3);

function leia(name3){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            name3 = n;
            resolve();
          }, 3000);
    });
}
async function leiaLeia() {
    await leia(`Carrie Fisher`);
 leia();
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

  //Waits until the longest (Time Wise) Promise is complete before it runs the ".then" (AKA Callback function)
  Promise.all([p1, p2, p3])
  //The value passed in for the "values" parameter are the values returned from each of the Promises still inside an array
  .then((values) => console.log(values));
