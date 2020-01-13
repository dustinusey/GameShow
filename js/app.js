
const keyboard = document.getElementById('qwerty');
const phraseDiv = document.getElementById('phrase');


const phrase = [
  'shooting stars',//0
  'milky way galaxy',//1
  'solar system',//2
  'pluto',//3
  'black hole',//4
  'the universe',//5
  'hubble telescope'//6
];
//HINTS
const hints = [
  'Many people love to wish upon...',//0
  'A beautiful place with a candy bar named after it!',//1
  'Our ... is home to our Sun and 9 planets!',//2
  'The smallest planet in our solar system is...',//3
  'So strong that not even light can escape from me!',//4
  'I am estimated to be about 13.8 billion years old!',//5
  'I orbit far above Earth to let you see deep into the Universe!'//6
];


// HIDES ON LOAD USING JQUERY
///////////////////////////////////////////////////
$('.gameboard-container').hide();
$('.panel-container').hide();
$('.panel-content').hide();
$('.panel-overlay').hide();
$('.win').hide();
$('.lose').hide();
$('.load').hide();

$('.hints-menu-close').hide();
$('.hints-drop-menu').hide();
$('.keyboard-menu-close').hide();
$('.keyboard-drop-menu').hide();
$('.reset-menu-close').hide();
$('.reset-drop-menu').hide();
///////////////////////////////////////////////////





// INTRO PAGE
///////////////////////////////////////////////////



// BUTTON CHANGE
$('#intro-button').on('click', function() {
    $('.header-group').fadeOut();
    window.setTimeout(function () {
        $('.gameboard-content').css('transform', 'scale(.9)');
        $('.gameboard-container').fadeIn();
    },1200)
});
$('#intro-button').on('mouseover', function() {
    if ($('#intro-button').text() == "Smart Enough?") {
        $('#intro-button').text("Let's Play");
        $('#intro-button').on('mouseout', function() {
        $('#intro-button').text("Smart Enough?");
        });
    }
})







// SIDE PANEL 
///////////////////////////////////////////////////

// SETTINGS PANEL TOGGLE OPEN/CLOSE
$('#settings').on('click', function() {
    gameboardAnimationStart();
    $('.panel-container').css('padding', '5px 15px');
    $('#settings').hide();
    $('.gameboard-content').css('transition', '1s');
    $('.gameboard-content').css('transform', 'scale(.8)');
    $('.panel-container').show();
    $('.panel-container').css('width', '300px');
    $('.panel-overlay').fadeIn();
    window.setTimeout(function() {
        $('.panel-content').fadeIn();
    },1100);
})
$('#close-window').on('click', function() {
    closePanel();
});
$('.panel-overlay').on('click', function () {
  closePanel();
});


//SIDE PANEL TOGGLES
///////////////////////////////////////////////////
// HINTS TOGGLE
$('.hints-menu-open').on('click', function() {
    $('.hints-menu-open').hide();
    $('.hints-menu-close').show();
    $('.hints-drop-menu').slideDown();
});
$('.hints-menu-close').on('click', function() {
    $('.hints-menu-close').hide();
    $('.hints-menu-open').show();
    $('.hints-drop-menu').slideUp();
});
// KEYBOARDS TOGGLE
$('.keyboard-menu-open').on('click', function() {
    $('.keyboard-menu-open').hide();
    $('.keyboard-menu-close').show();
    $('.keyboard-drop-menu').slideDown();
})
$('.keyboard-menu-close').on('click', function() {
    $('.keyboard-menu-close').hide();
    $('.keyboard-menu-open').show();
    $('.keyboard-drop-menu').slideUp();
})
// RESET GAME TOGGLE
$('.reset-menu-open').on('click', function() {
    $('.reset-menu-open').hide();
    $('.reset-menu-close').show();
    $('.reset-drop-menu').slideDown();
})
$('.reset-menu-close').on('click', function() {
    $('.reset-menu-close').hide();
    $('.reset-menu-open').show();
    $('.reset-drop-menu').slideUp();
})
///////////////////////////////////////////////////

//CLOSE PANEL FUNCTION
function closePanel() {
    $('.gameboard-content').css('transition', '1s');
    $('.gameboard-content').css('transform', 'scale(.9)');
    $('.panel-content').fadeOut();
    $('.panel-container').css('width', '1px');
    $('.panel-container').fadeOut(1500);
    $('.panel-container').css('padding', '0');
    $('.panel-overlay').fadeOut();
    gameboardAnimationEnd();
    window.setTimeout(function() {
        $('#settings').show();
    },1300)
}
///////////////////////////////////////////////////






///////////////////////////////////////////////////














// KEYBOARD COLORS
///////////////////////////////////////////////////

// LIGHT KEYBOARD COLOR
$('.light-key-prev').on('click', function() {
    $('.keyboard li').css('backgroundImage', 'none');
    $('.keyboard li').css('backgroundColor', 'gray');
    $('.keyboard li').css('textShadow', 'none');
    $('.keyboard li').css('color', 'black');
    removeDisabledAttr();
    $('.light-key-prev').attr('disabled', '');
    closePanel();
});
// DARK KEYBOARD COLOR
$('.dark-key-prev').on('click', function() {
    $('.keyboard li').css('backgroundImage', 'none');
    $('.keyboard li').css('backgroundColor', 'rgb(32, 38, 46)');
    $('.keyboard li').css('textShadow', '1px 1px 3px white');
    $('.keyboard li').css('color', 'white');
    removeDisabledAttr();
    $('.dark-key-prev').attr('disabled', '');
    closePanel();
})
// COLORFUL KEYBOARD COLOR
$('.color-key-prev').on('click', function() {
    $('.keyboard li').css('backgroundImage', 'linear-gradient(rgba(67, 48, 180, 0.548),rgba(248, 88, 109, 0.603)), url(images/colorkeys.jpg)');
    $('.keyboard li').css('textShadow', '1px 1px 3px white');
    $('.keyboard li').css('color', 'white');
    removeDisabledAttr();
    $('.color-key-prev').attr('disabled', '');
    closePanel();
});

///////////////////////////////////////////////////
// REMOVE DISABLED ATTR ON KEYBOARD OPTIONS
function removeDisabledAttr() {
    $('.light-key-prev').removeAttr('disabled');
    $('.dark-key-prev').removeAttr('disabled');
    $('.color-key-prev').removeAttr('disabled');
}














// GAME RESET ANIMATIONS
///////////////////////////////////////////////////
function gameboardAnimationStart(){
    $('.gameboard-content').css('transition', '1s');
    $('.gameboard-content').css('filter', 'blur(10px)');
    $('.gameboard-content').css('opacity', '6');
}
function gameboardAnimationEnd(){
    $('.gameboard-content').css('transition', 'initial');
    $('.gameboard-content').css('filter', 'blur(0px)');
    $('.gameboard-content').css('opacity', '1');
}
///////////////////////////////////////////////////




//FUNCTION TO CREATE A RANDOM NUMBER
function randomNumber(number) {
  return Math.floor(Math.random() * number );
}

var randomArrayIndex = randomNumber(phrase.length);
var newRandomArrayIndex = randomNumber(phrase.length);


// GENERATES A RANDOM PHRASE FROM PHRASE ARRAY AND STORES
// THE VALUE INTO 'randomPhase'
var randomPhrase = phrase[randomArrayIndex];
var hintForPhrase = hints[randomArrayIndex];

let newRandomPhrase = phrase[newRandomArrayIndex];
let newHintForPhrase = hints[newRandomArrayIndex];

function getNewIndex() {
let newNumber = randomNumber(phrase.length);
return newNumber;
}










// SHOW / HIDE HINTS
///////////////////////////////////////////////////
$('.hintDiv').hide();



$('#show-hint-button').on('click', function() {
closePanel();
$('.hintDiv').slideDown();
});
$('#hide-hint-button').on('click', function() {
closePanel();
$('.hintDiv').slideUp();
})

$('.hintDiv h2').text(hints[randomArrayIndex]);














// RESET GAME
///////////////////////////////////////////////////

$('#reset-menu-button').on('click', function() {
    keyboardRefresh();
    closePanel();
    gameboardAnimationStart();
    
    $('.gameboard-content').css('filter', 'blur(30px)');

        window.setTimeout(function() {
            $('.gameboard-container').fadeOut(500);
        },700);
        window.setTimeout(function () {
            $('.gameboard-content').fadeIn();
            $('.load').fadeIn(2000);
        },600);
        window.setTimeout(function () {
            gameboardAnimationEnd();
            $('.load').fadeOut();
            $('.gameboard-container').delay(2000).fadeIn(1000);
            restartGame();
        },1200);
    
})

function keyboardRefresh() {
  if ( $('.keyboard li').hasClass('clickedWrong') || $('.keyboard li').hasClass('clickedCorrect') ) {
    $('.keyboard li').removeClass('clickedWrong');
    $('.keyboard li').removeClass('clickedCorrect')
    $('.keyboard li').removeAttr('disabled');
  }
}
///////////////////////////////////////////////////




















// WIN / LOSE BUTTONS
///////////////////////////////////////////////////



$('.lose button').on('click', function() {
    keyboardRefresh();
    restartGame();
    $('.lose').fadeOut();
    $('.load').fadeIn();
    window.setTimeout(function() {
        $('.load').fadeOut();
        $('.gameboard-container').fadeIn();
    },1200)
});

$('.win button').on('click', function() {
    keyboardRefresh();
    restartGame();
    $('.win').fadeOut();
    $('.load').fadeIn();
    window.setTimeout(function() {
        $('.load').fadeOut();
        $('.gameboard-container').fadeIn();
    },1200)
})






///////////////////////////////////////////
//            GAME FUNCTIONALITY         //
///////////////////////////////////////////


//DISPLAYING THE PHRASE
showPhrase(splitPhrase());








var incorrectClick = 0;
var correctClick = 0;
const lettersInPhrase = document.querySelectorAll('.letter').length;
const numberOfLettersShown = document.querySelectorAll('.show').length;
const ol = document.querySelector('.orderedlist');


function checkLetter(pressedButton) {
  const phraseLetters = document.querySelectorAll('.letter');
  let matchingLetter;
  phraseLetters.forEach( (element) => {
    if (element.innerHTML.toUpperCase() === pressedButton) {
      element.classList.add('show');
      matchingLetter = element.innerHTML;
    }
  });

  if (matchingLetter) {
    let keyboardClick = event.target;
    keyboardClick.classList.add('clickedCorrect');
    keyboardClick.classList.remove('clickedWrong');
    return matchingLetter;
  } else {
    console.log('no-match')
    return null;
  }
};

function winnerWinnerChickenDinner() {
  if ($('.letter').length === $('.show').length) {
      $('.win').fadeIn();
      $('.gameboard-container').fadeOut();
    } else if (incorrectClick == 5) {
      $('.popup').hide();
      gameboardAnimationEnd();
      $('.lose').css('display', 'flex');
      $('.gameboard-container').fadeOut();
      
    }
};



keyboard.addEventListener('click', function() {
  const keyboardClick = event.target;
  if (keyboardClick.tagName === 'LI') {
    keyboardClick.classList.add('clickedWrong');
    keyboardClick.setAttribute('disabled', '');
    let keyText = keyboardClick.textContent;
    const checkLetterResult = checkLetter(keyText);

    if (checkLetterResult === null) {
      heartImg = document.querySelectorAll('.orderedlist img');
      for ( var i = 0; i<= heartImg.length; i += 1 ) {
        heartImg[0].classList.add('no-life');
        score1Animation();
      }
      
      incorrectClick += 1;
      var position = incorrectClick - 1;
      if ( incorrectClick == 2 ) {
        heartImg[position].classList.add('no-life');
        score2Animation();
      } else
      if ( incorrectClick == 3 ) {
        heartImg[position].classList.add('no-life');
        score3Animation();
      } else
      if ( incorrectClick == 4 ) {
        heartImg[position].classList.add('no-life');
        score4Animation();
      } else
      if ( incorrectClick == 5 ) {
        heartImg[position].classList.add('no-life');
        $('.gameboard-container').hide();
        $('.lose').fadeIn();
      }
    }
  }
winnerWinnerChickenDinner();
});

/////////////////////////////////////////
// FUNCTIONS FOR SCORE ANIMATIONS
/////////////////////////////////////////

$('.score1').hide();
$('.score2').hide();
$('.score3').hide();
$('.score4').hide();
$('.score5').hide();

// SCORE ANIMATION 1
function score1Animation() {
  $('.score1').fadeIn();
  $('.score1').css('top', '0px');
  window.setTimeout(function() {
    $('.score1 p').css('opacity', '0')
  },300)
  window.setTimeout(function() {
    $('.score1').fadeOut();
  },1200);
}

// SCORE ANIMATION 2
function score2Animation() {
  $('.score2').fadeIn();
  $('.score2').css('top', '0px');
  window.setTimeout(function() {
    $('.score2 p').css('opacity', '0')
  },300)
  window.setTimeout(function() {
    $('.score2').fadeOut();
  },1200);
}

// SCORE ANIMATION 3
function score3Animation() {
  $('.score3').fadeIn();
  $('.score3').css('top', '0px');
  window.setTimeout(function() {
    $('.score3 p').css('opacity', '0')
  },300)
  window.setTimeout(function() {
    $('.score3').fadeOut();
  },1200);
}

// SCORE ANIMATION 4       
function score4Animation() {
  $('.score4').fadeIn();
  $('.score4').css('top', '0px');
  window.setTimeout(function() {
    $('.score4 p').css('opacity', '0')
  },300)
  window.setTimeout(function() {
    $('.score4').fadeOut();
  },1200);
}

// RESET THE SCORE ANIMATION FUNCTION
function resetScoreAnimations() {
  $('.score1').css('top', '600px');
  $('.score1 p').css('opacity', '1');

  $('.score2').css('top', '600px');
  $('.score2 p').css('opacity', '1');

  $('.score3').css('top', '600px');
  $('.score3 p').css('opacity', '1');

  $('.score4').css('top', '600px');
  $('.score4 p').css('opacity', '1');
}
/////////////////////////////////////////////





$('.popup').hide();
// POP UP MENU START
/////////////////////////////////////////////
$('.keyboard li').on('click', function() {
  let target = event.target;
  if ( target.hasAttribute('disabled') ) {
      $('.popup').fadeIn();
      gameboardAnimationStart();
  }
})
$('.popup button').on('click', function() {
  //incorrectClick -= 1;
  $('.popup').fadeOut();
  gameboardAnimationEnd();
})
// POP UP MENU END
/////////////////////////////////////////////












//FUNCTION THAT SPLITS THE PHRASE
function splitPhrase() {
  let split = randomPhrase.toString().split("");
  return split;
}

// FUNCTION THAT ADDS EACH SPLIT ITEM INTO LIs
// AND SHOWS THE PHRASE ONSCREEN
function showPhrase(array) {
    let ul = phraseDiv.firstElementChild;
    array.forEach((element) => {
    let li = document.createElement('li');
    li.textContent = element;
        if (element == ' ') {
          li.className = 'space';
        } else {
          li.className = 'letter'
        }
      ul.appendChild(li);
})}








/////////////////////////////////
////////// END OF CODE //////////
///// GAME RESTART BELOW ////////
/////////////////////////////////






// RESTART GAME FUNCTION 
// FUNCTION THAT RESETS EVERYTHING AND RESTARTS THE GAME
function restartGame() {
  resetScoreAnimations();
  incorrectClick = 0;
  let refreshIndex = randomNumber(phrase.length);
  $('.hintDiv h2').text(hints[refreshIndex]);
  phraseDiv.removeChild(phraseDiv.firstElementChild);
  let createUl = document.createElement('ul');
  phraseDiv.appendChild(createUl);
  let ul = phraseDiv.firstElementChild;
  phrase[refreshIndex].toString().split("").forEach((element) => {
    let li = document.createElement('li');
    li.textContent = element;
    if (element == ' ') {
      li.className = 'space';
    } else {
      li.className = 'letter';
    }
    ul.appendChild(li);
    $('.gameboard-content h1').text('The Universe As You Know It');
    if ( $(".orderedlist li img").hasClass('no-life') ){
         $('.orderedlist li img').removeClass('no-life');
    }
    incorrectLetter = 0;
    correctLetter = 2;
  })
}


