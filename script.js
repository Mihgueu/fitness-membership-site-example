
  function borderButtonByAbout() {
    var button = document.querySelector('button');
    button.classList.add('destaque');
    setTimeout(function() {
      button.classList.remove('destaque');
    }, 800);
  }

function joinBlur() {
  var totalBlur = document.getElementById('totalBlur');
  totalBlur.classList.add('blur');
  totalBlur.classList.remove('not_blur');
  }

function leaveBlur() {
  var totalBlur = document.getElementById('totalBlur');
  totalBlur.classList.add('not_blur');
  totalBlur.classList.remove('blur');
}

function seeAbout() {
  var totalBlur = document.getElementById('totalBlur');
  totalBlur.classList.add('blur');
  totalBlur.classList.remove('not_blur');
  var aboutDiv = document.getElementById('about');
  aboutDiv.classList.add('not_hidden');
  aboutDiv.classList.remove('hidden_about');
}

function hiddenAbout() {
  var totalBlur = document.getElementById('totalBlur');
  totalBlur.classList.add('not_blur');
  totalBlur.classList.remove('blur');
  var aboutDiv = document.getElementById('about');
  aboutDiv.classList.add('hidden_about');
  aboutDiv.classList.remove('not_hidden');
}