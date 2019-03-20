'use strict';



const promise1 = new Promise((resolve, reject) => {
    let num = Math.random();
    console.log(`\nPromise 1 \n========`);
    console.log(`the random number is: ${num}`);
    if (num > .5) {
        resolve();
    } else {
        reject()
    }
})
    .then(() => console.log('resolved :)'))
    .catch(() => console.log('rejected :('));

function makeRequest() {
    console.log(`\nPromise 2 \n=======`)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.random();
            if (num > .5) {
                resolve(`The random number is: ${num}`);
            } else {
                reject('Network Connection Error!')
            }
        }, 1500)
    })
    .then(data => console.log('Promise resolved!', data))
    .catch(error => console.log('Promise rejected!', error));
}
const request = makeRequest();
console.log(request);


// fetch('https://api.github.com/users/travisVela')
//     .then(data => {
//         let info = data.json();
//         console.log(info)})
//     .catch(error => console.log(error));
//extra

