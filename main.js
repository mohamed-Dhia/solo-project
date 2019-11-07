
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
    "backGroundPic": "https://i.pinimg.com/originals/49/df/93/49df93c9996e7c80736724c2cea3b897.jpg"
  }
]

function setTheScene() {
	// $('body').html("")
	//$('body').css({'background-image':'url(' + events[0].backGroundPic + ')','background-size':'100% 100%','background-repeat':'no-repeat','height' : '800px'})
	// $('body').css('background-image','url(https://i.pinimg.com/originals/49/df/93/49df93c9996e7c80736724c2cea3b897.jpg)')
	$('body').css('background-image','url(' + events[0].backGroundPic + ')');
	$('.prompt').append('<div class =  event id = ' + 0 + '>'+ events[0].bfscript + '</div>').css('background-repeat',)
}	

$('button').on('click',setTheScene)