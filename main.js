
function factoryEvents(eventName,bfscript,lawfulChoice,neutralChoice,chaoticChoice,afScript,backGroundPic) {
	return {
		eventName : eventName,
		bfscript : bfscript,
		lawfulChoice : lawfulChoice,
		neutralChoice : neutralChoice,
		chaoticChoice : chaoticChoice,
		afScript : afScript,
		backGroundPic : backGroundPic
	};
}


function addEvents(event){
	events.push(event);
}

var events = [
  {
    "eventName": "burninghouse",
    "bfscript": "as you're walking sudenly you hear a women screaming \"glorious knight plz help me someone burnt my house and my baby is still inside\"",
    "lawfulChoice": "help her imediatly",
    "neutralChoice": "ask for money to help her",
    "chaoticChoice": "tell to f off",
    "afScript": "what ever you did it was terrible",
    "backGroundPic": "http://scalar.usc.edu/works/parallels-in-octavia-butlers-parable-of-the-sower-eugene-thackers-in-the-dust-of-this-planet/media/Burning%20medieval%20village.jpg"
  }
]

function setTheScene() {
	$('body').html("")
	$('body').append("<div class = prompt></div>")
	$('.prompt').show()
	//$('body').css({'background-image':'url(' + events[0].backGroundPic + ')','background-size':'100% 100%','background-repeat':'no-repeat','height' : '800px'})
	// $('body').css('background-image','url(https://i.pinimg.com/originals/49/df/93/49df93c9996e7c80736724c2cea3b897.jpg)')
	$('body').css('background-image','url(' + events[0].backGroundPic + ')');
	$('.prompt').append('<div class =  event id = ' + 0 + '>'+ events[0].bfscript + '</div>')
	$('.prompt').append('<button class = advance id = actionScene> next>> </button>')
	$('#actionScene').on('click',actionScene)
}	

$('#startScene').on('click',setTheScene)

function actionScene() {
	$('body').html("")
	$('body').append("<div class = choose></div>")
	$('.choose').show()
	$('body').css('background-image','url(' + events[0].backGroundPic + ')');
	$('.choose').append('<div class =  event id = ' + 0 + '> what would you do ? <br></div>')
	$('.choose').append('<div><button class = option >' + events[0].lawfulChoice + '</button>  <button class = option >' + events[0].neutralChoice + '</button>  <button class = option >' + events[0].chaoticChoice + '</button> </div>')
	$('.option').on('click',afterScript)
} 

function afterScript() {
	$('body').html("")
	$('body').append("<div class = prompt></div>")
	$('.prompt').show()
	//$('body').css({'background-image':'url(' + events[0].backGroundPic + ')','background-size':'100% 100%','background-repeat':'no-repeat','height' : '800px'})
	// $('body').css('background-image','url(https://i.pinimg.com/originals/49/df/93/49df93c9996e7c80736724c2cea3b897.jpg)')
	$('body').css('background-image','url(' + events[0].backGroundPic + ')');
	$('.prompt').append('<div class =  event id = ' + 0 + '>'+ events[0].afScript + '</div>')
	$('.prompt').append('<button class = advance id = actionScene> next>> </button>')
}