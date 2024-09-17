// // 'use strict';

// // const btn = document.querySelector('.btn-country');
// // const countriesContainer = document.querySelector('.countries');

// // ///////////////////////////////////////
// // // API URL
// const renderCountry = function (data, className = '') {
//   const html = ` <article class="country ${className}">
//   <img class="country__img" src="${data.flags.svg}" />
//   <div class="country__data">
//     <h3 class="country__name">${data.name.common}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>${(+data.population / 1000000).toFixed(
//       1
//     )}M people</p>
//     <p class="country__row"><span>${
//       Object.values(data.languages)[0]
//     }</span> Language</p>
//     <p class="country__row"><span>${
//       Object.values(data.currencies)[0].name
//     }</span> Currency</p>
//   </div>
// </article>`;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
// };
// const getcountrydataAndNeighbour = function (country) {
//   const apiUrl = `https://restcountries.com/v3.1/name/${country}`;

//   const request = new XMLHttpRequest();
//   request.open('GET', apiUrl);
//   request.send();

//   request.addEventListener('load', function () {
//     if (request.status === 200) {
//       const data = JSON.parse(this.responseText)[0];
//       console.log(data);
//       renderCountry(data);

//       ///NeighbourCountry

//       const neighbour = data.borders?.[0];
//       console.log(neighbour);

//       const apiUrl2 = `https://restcountries.com/v3.1/alpha/${neighbour}`;

//       const request2 = new XMLHttpRequest();
//       request2.open('GET', apiUrl2);

//       request2.send();

//       request2.addEventListener('load', function () {
//         if (request2.status === 200) {
//           const dataN = JSON.parse(this.responseText)[0];
//           console.log(dataN);
//           renderCountry(dataN, 'neighbour');
//         }
//       });
//     } else {
//       console.error(`Failed to fetch data: ${request.status}`);
//     }
//   });

//   request.addEventListener('error', function () {
//     console.error('Network error occurred');
//   });
// };
// // getcountrydataAndNeighbour('usa');

// // //callbackl
// // //Fetch and promise

// // const request=fetch('https://restcountries.com/v3.1/alpha/usa');
// // console.log(request)
// //Promise container for a future value

// //1.-> Pending before the future value is available
// //2.-> Settled Task has finished
// ////3. -> Fulfilled or Rejected

// //Build Promise and then consume
// //Fetch api returns promise
const getJSON = function (url, errorM = 'Something went wrong') {
  // console.log(url);
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorM} ${response.status}`);
    return response.json();
  });
};

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
// };
// const getCountryData = function (country) {
//   const request = getJSON(
//     `https://restcountries.com/v3.1/name/${country}`,
//     'country not found'
//   )
//     .then(data => {
//       renderCountry(data[0]);

//       //Country2
//       const neighbour = data[0]?.borders[0];

//       if (!neighbour) throw new Error('No Neighbour');
//       const apiUrl2 = `https://restcountries.com/v3.1/alpha/${neighbour}`;
//       return getJSON(apiUrl2, 'Country not found');
//     })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => renderError(`Something went Wrong ${err.message}`))
//     .finally(() => {
//       countriesContainer.style.opacity = '1';
//     });
// };

// // btn.addEventListener('click', function () {
// //   // getCountryData('usa');

// //   whereAMI(52.508, 13.381);
// // });
// // const getPosition = function () {
// //   return new Promise(function (resolve, reject) {
// //     // navigator.geolocation.getCurrentPosition(
// //     //   position => resolve(position),
// //     //   err => reject(err)
// //     // );
// //     navigator.geolocation.getCurrentPosition(resolve, reject);
// //   });
// // };
// // const whereAMI = function () {
// //   const lat=0;
// //   const lng=0;
// //   getPosition().then(pos => {
// //     const { latitude, longitude } = pos.coords;
// //   });

// //   const api = `https://geocode.xyz/${lat},${lng}?geoit=json`;
// //   fetch(api)
// //     .then(res => {
// //       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
// //       return res.json();
// //     })
// //     .then(data => {
// //       console.log(data['country']);
// //       return fetch(`https://restcountries.com/v3.1/name/${data['country']}`);
// //     })
// //     .then(response => {
// //       if (!response.ok) throw new Error(`Country not found ${response.status}`);
// //       return response.json();
// //     })
// //     .then(data => {
// //       console.log(data);
// //       renderCountry(data[0]);
// //     })
// //     .catch(err => renderError(`Something went wrong ${err}`))
// //     .finally(() => (countriesContainer.style.opacity = '1'));
// // };
// // whereAMI(52.508, 13.381);

// console.log('Start');
// setTimeout(() => console.log('0 sec'), 0);
// Promise.resolve('Resolved 1').then(res => console.log(res));

// console.log('Test end');

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery Draw happening');
//   setTimeout(function () {
//     //Asyn behaviour
//     if (Math.random() >= 0.5) {
//       resolve('You won lottery');
//     } else {
//       reject(new Error(`Try again`));
//     }
//   }, 2000);
// });
// lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));
// // console.log();

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
// wait(4)
//   .then(() => {
//     console.log('Waited for 2 seconds');
//     return wait(1);
//   })
//   .then(() => console.log('waited for 1 second'));
// Promise.resolve('abc').then(res => console.log(res));
// Promise.reject(new Error('Problem!')).catch(x => console.log(x));

// const imgCoontainer = document.querySelector('.images');
// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;
//     img.addEventListener('load', function () {
//       imgCoontainer.append(img);
//       resolve(img);
//     });
//     img.addEventListener('error', function () {
//       reject(new Error('Image not found'));
//     });
//   });
// };
// createImage('img/img-1.jpg')
//   .then(img => {
//     console.log('Image 1 resolved');
//   })
//   .catch(err => console.log(err));

//Async await
// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAMI = async function () {
//   try {
//     const pos = await getPosition();

//     const { latitude, longitude } = pos.coords;
//     const api = `https://geocode.xyz/${latitude},${longitude}?geoit=json`;
//     const resGeo = await fetch(api);
//     const dataGeo = await resGeo.json();
//     console.log(dataGeo);
//     const res = await fetch(
//       `https://restcountries.com/v3.1/name/${dataGeo['country']}`
//     );
//     const data = await res.json();
//     renderCountry(data[0]);
//     return 'You are in hell';
//   } catch (err) {
//     console.log(err);
//   }
// };
// // whereAMI().then(city => console.log(city));
// (async function () {
//   try {
//     const city = await whereAMI();
//   } catch (err) {
//     console.log(err);
//   }
//   console.log('Finished');
// })();

const get3Countries = async function (c1, c2, c3) {
  try {
    const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
    Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);

    console.log(data.map(d => d[0].capital()));
  } catch (err) {
    console.error(err);
  }
};
get3Countries('usa', 'pakistan', 'usa');

//Promise.race

(async function () {
  const res = await Promise.race([]);
  getJSON(`https://restcountries.com/v3.1/name/italy`),
    getJSON(`https://restcountries.com/v3.1/name/usa`),
    getJSON(`https://restcountries.com/v3.1/name/pakistan`);
})();
Promise.race([
  getJSON(`https://restcountries.com/v3.1/name/italy`),
  timeout(0.2),
])
  .then(res => console.log(res[0]))
  .catch(err => console.log(cl));

Promise.allSettled([
  Promise.reslove('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another'),
]).then(err => console.log(err));

//Promise.all
//Promise.allSettled
//Promise.any
///////////////////////////////////////Challenge 3
const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', function () {
      imgCoontainer.append(img);
      resolve(img);
    });
    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

const loadPause = async function () {
  try {
    let img = await createImage('img/img-1.jpg');
    console.log('Img 1 loaded');
    wait(2);
    img.style.display = none;
    img = await createImage('img/img-2.jpg');
    console.log('Img 2 loaded');
    wait(2);
    img.style.display = none;
  } catch (err) {
    console.error(err);
  }
};

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    const imgEl = await Promise.all(imgs);
    imgEl.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.log(err);
  }
};
