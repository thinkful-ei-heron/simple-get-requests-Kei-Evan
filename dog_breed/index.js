/* eslint-disable no-console */
function getDogImage(userInput) {
  fetch(`https://dog.ceo/api/breeds/image/random/${userInput}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson, userInput))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson, userInput) {
  for (let i = 0; i < userInput; i++){
    console.log(responseJson.message[i]);
  }
  //replace the existing image with the new one
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  );
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage(7);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});