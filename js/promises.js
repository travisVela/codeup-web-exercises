'use strict';
$().ready(function() {
// function wait(time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`You'll see this after ${time / 1000} seconds!`)
//         }, time)
//     })
//         .then((data) => console.log(data))
//         .catch(() => console.log('Failed :( '));
// }
//
// console.log(wait(2000));
// console.log(wait(5000));


// fetch('https://api.github.com/users', {headers: {'Authorization': 'token ' + gitHubToken}});

function gitHub(username) {
    return new Promise((resolve, reject) => {
        resolve('Success!');
        reject('Failure');
        fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `token${gitHubToken}`}})
            .then(data => {
                return(data.json());
            })
            .then((data) => {
                console.log(`Last commit of ${username}: ${data[0].created_at}`);
                $('#git').html(`<p> ${username}'s last commit on: ${data[0].created_at} </p>`);
                return `Last commit of ${username}: ${data[0].created_at}`


            })
    })
}
gitHub('travisVela').then((data) => console.log(data));

});