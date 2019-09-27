function getDogImage(userInput) {
  fetch(`https://dog.ceo/api/breed/${userInput}/images/random`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson, userInput))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson, userInput) {
  if (responseJson.status === 'error'){
    $('.results').html(
      '<h2>Your breed does not exist!</h2>'
    );
  } else {
    $('.results').html(
      `<h2>Look at this ${userInput}!</h2>
      <img src="${responseJson.message}" class="results-img">`
    );
    //display the results section
    $('.results').removeClass('hidden');
    }
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