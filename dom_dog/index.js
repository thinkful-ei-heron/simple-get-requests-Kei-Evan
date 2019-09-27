/* eslint-disable no-console */
function getDogImage(userInput) {
  fetch(`https://dog.ceo/api/breeds/image/random/${userInput}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson, userInput))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson, userInput) {
  let htmlString = '<h2>Look at this dog!</h2>';
  for (let i = 0; i < userInput; i++){
    console.log(responseJson.message[i]);
    htmlString += `
      <img src="${responseJson.message[i]}" class="results-img">
    `;
  }
  //replace the existing image with the new one
  $('.results').html(htmlString);
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let userInput = $('.js-user-input').val();
    getDogImage(userInput);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});