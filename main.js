
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
    "bfscript": "as you're walking sudenly you hear a women screaming \"glorious knight please help me someone burnt my house and my son is yet insidt\"",
    "choises" : {
    0: "help her imediatly",
    1: "ask for money to help her",
    2: "tell her to go away"
	},
    "afScript": {
    	0 :"you rushed throught the flames with no second thoughts to save the kid, it wasn\'t easy but you saved him. To show her gratitude the mother gave you some food to eat on your way" ,
    	1 :"shoked from you're demand, she stood still with no word then she said i have nothing everything is inside the house so you ask for her neckless. with no other option she accepts, but during all of the negotionation the roof fell down and the kid died, as she's crying you sneak away with the neckless",
    	2 :"she refused to go away and grabed to your shoulder so you punched her as you do you saw her neckless so you took it. Now the broad is crying while her son is screaming in a burning house"
    },
    "backGroundPic": "http://scalar.usc.edu/works/parallels-in-octavia-butlers-parable-of-the-sower-eugene-thackers-in-the-dust-of-this-planet/media/Burning%20medieval%20village.jpg"
  },
  {
    "eventName": "samurai",
    "bfscript": "you runned into a smurai, with no word he runned towards you for a fight, it was a vicious fight and with every swing you felt you're demise is clossing in until he sliped in the mud and droped his katana now you can kill him easily but you know if he were you he wouldn't",
    "choises" : {
    	0: "let him stand up and fight",
    	1: "break his leg and run away",
    	2: "kill him right then and there",
	},
    "afScript":{
    	0 :"after a couple more minutes of fighting you lost all your will and he won but he speared you're life for your hornable act",
    	1 :"you runned away while his cursing in japanese",
    	2 :"now that he's dead you can continue your jurney"
    },
    "backGroundPic": "https://images6.alphacoders.com/594/594668.jpg"
  },
  {
    "eventName": "fight",
    "bfscript": "you enter a bar and find two drunk man fighting the first one claims that the second stole his money but he has no evidence of such an act",
    "choises" : {
    	0: "help the first guy",
    	1: "stand up for the second guy",
    	2: "kill both",
	},
    "afScript": {
    	0 :"you demanded to see the second guy's poket and found the money he stole",
    	1 :"with no evidence the first guy had to keep calm out of fear",
    	2 :"now that both of them are dead the bar tender refuses to serve you"
    },
    "backGroundPic": "https://www.messynessychic.com/wp-content/uploads/2013/06/tavern.jpg"
  },
  {
    "eventName": "theift",
    "bfscript": "as you walk in the market you saw a theift running with an old man's walet",
    "choises" : {
    	0: "run  after him to retrive the walet",
    	1: "retrive the wallet and take the money",
    	2: "complitly ignore him",
	},
    "afScript": {
    	0 :"the old man is so greatful for you're action he gave you 4 golden coins",
    	1 :"it dosen't have that much money but it's money none of less",
    	2 :"he keeps on yelling but you dnt even care"
    },
    "backGroundPic": "https://fee.org/media/18633/medievaltrade.jpg?center=0.88167053364269143,0.53&mode=crop&height=656&widthratio=2.1341463414634146341463414634&rnd=131303490250000000"
  },
  {
    "eventName": "river",
    "bfscript": "as you lay down next to the river to take a nap you heared someone screaming .. he's being taken by the curent",
    "choises" : {
    	0: "run to him and grap his hand and pull him out",
    	1: "grap his hand and ask for money to pull him",
    	2: "ignore him the screaming calms you out any way",
	},
    "afScript": {
    	0 :"he's so greatful for you're help",
    	1 :"in disapointment he pshes you and die",
    	2 :"you enjoyed a good nap" 
    },
    "backGroundPic": "data:image/jpeg;base64,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"
  },
  {
    "eventName": "voting",
    "bfscript": "you're in a new town and they are voting for the next governor and it's a draw between a monarch that wants to kill the farmers with labor and the seconds promises to overthrow the monarchs",
    "choises" : {
    	0: "vote 2",
    	1: "vote 1",
    	2: "try to become the governor",
	},
    "afScript":{
    	0 :"the new governor started imediatly by ordering to burn all the monarchs'houses",
    	1 :"the farmers arn't really happy about this but the new governor gave you some good money for you're help",
    	2 :"you declared your self the new governor but you got outnumbered by the guards so you had to flee"
    },
    "backGroundPic": "https://cdn.britannica.com/34/152534-050-F10EF781/Leo-III-emperor-Charlemagne-December-25.jpg"
  },
  {
    "eventName": "crush wedding",
    "bfscript": "the girl you loved for years before the war is getting married",
    "choises" : {
    	0: "wish her luck and congratulate her",
    	1: "threaten to kill her for money",
    	2: "kill both of them",
	},
    "afScript": {
    	0 :"you continued on your bath with no care in the word",
    	1 :"her new husband refuses and sqaures with you but he beated him and then killed him",
    	2 :"now that she's dead you declare 'if i can't have her no one can"
    },
    "backGroundPic": "https://www.thoughtco.com/thmb/1wZU3CKHVuh0WnPK9fyP1KUip3Q=/3600x2400/filters:no_upscale():max_bytes(150000):strip_icc()/Catherine-of-Valois-463953963x-58b74a7a5f9b588080546fb5.jpg"
  },
  {
    "eventName": "dying dog",
    "bfscript": "you found a dying dog moaning on the side of the road he was clearly attacked by multiple of people",
    "choises" : {
    	0: "help it and take care of it",
    	1: "kick a couple of tie his already dying anyway",
    	2: "ignore a broken dog has no use",
	},
    "afScript": {
    	0 :"now you have a new best friend yey",
    	1 :"that was acctualy fun",
    	2 :"you keep on going with no care in the word"
    },
    "backGroundPic": "https://upload.wikimedia.org/wikipedia/commons/9/9f/Middle_Ages_rabid_dog.jpg"
  },
  {
    "eventName": "pirates",
    "bfscript": "to cross the sea to another island you boarded a ship but in the middle of the trip pirates attacked",
    "choises" : {
    	0: "you fought firiously the pirates ",
    	1: "you quickly runed to the other ship's captain and stabed him from behind to strike fear to the pirates",
    	2: "you quickly sided with the pirates and killed alot of the crew to prove loyaltie",
	},
    "afScript": {
    	0 :"you fought until they runned away",
    	1 :"with their captain wounded they were scared so your ship started to board theirs",
    	2 :"now that they trust you're one of them now"
    },
    "backGroundPic": "https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/v1555387510/shape/mentalfloss/pirates_0_0.png?itok=xg_uiQwU"
  },
  {
    "eventName": "kraken",
    "bfscript": "you took a ship to go to another island but on you're way the ship was attacked by a kraken you know you either have to fight it to death or offer a sacrifice",
    "choises" : {
    	0: "fight it to death",
    	1: "give it a beatiul women as a sacrifice",
    	2: "give it all the womens on board as a sacrifice",
	},
    "afScript": {
    	0 :"you were 60 but now only 20 and the captain is having a mental breakdown as his wife was clubed with a sail by the terrible beast",
    	1 :"the kraken took the sacrifice and left",
    	2 :"the kraken took the sacrifices and left but everyone can bear the fact they lost their loved ones thanks to you"
    },
    "backGroundPic": "https://i.redd.it/fejpd10pkhu01.jpg"
  }
]

$('.monologe').append('<button id = "startScene" class = "advance"> start </button>')

var setTheScene = function() {

	var that = this
	this.index = Math.floor(Math.random() * Math.floor(this.events.length))

	$('body').html("")
	$('body').append("<div class = prompt></div>")
	$('.prompt').show()
	$('body').css('background-image','url(' + this.events[this.index].backGroundPic + ')');
	$('.prompt').append('<div class =  event id = ' + this.index + '>'+ this.events[this.index].bfscript + '</div>')
	$('.prompt').append('<button class = advance id = actionScene> next>> </button>')
	$('#actionScene').on('click',function(){
		that.actionScene()
	})
}	


var actionScene = function () {
	var that = this
	$('body').html("")
	$('body').append("<div class = choose></div>")
	$('.choose').show()
	$('body').css('background-image','url(' + this.events[this.index].backGroundPic + ')');
	$('.choose').append('<div class =  event id = ' + this.index + '> what would you do ? <br></div>')
	$('.choose').append('<div class = options ><button class = option id = good>' + this.events[this.index].choises[0] + '</button>  <button class = option id = meh>' + this.events[this.index].choises[1] + '</button>  <button class = option id = bad>' + this.events[this.index].choises[2] + '</button> </div>')

	$('#bad').on('click',function(){
		that.score += 0;
		that.afterScript(2)
	})

	$('#meh').on('click',function(){
		that.score += 5;
		that.afterScript(1)
	})

	$('#good').on('click',function(){
		that.score += 10;
		that.afterScript(0)
	})

} 

var afterScript = function(i) {
	var that = this
	$('body').html("")
	$('body').append("<div class = prompt></div>")
	$('.prompt').show()
	$('body').css('background-image','url(' + this.events[this.index].backGroundPic + ')');
	$('.prompt').append('<div class =  event id = ' + this.index + '>'+ this.events[this.index].afScript[i] + '</div>')
	$('.prompt').append('<button class = advance id = actionScene> next>> </button>')
	this.cnt++
	this.events.splice(this.index,1)
	if(this.cnt < 3){
		$('#actionScene').on('click',function(){
			that.setTheScene()
		})
	} else {
		$('#actionScene').on('click',function(){
			that.endScript()
		})
	}

}

var endScript = function(){
	var that = this 
	$('body').html("")
	$('body').css("background-image","url(https://wallpaperplay.com/walls/full/a/5/6/11249.jpg)")
	$('body').append("<div class = resultcointainer></div>")
	$('.resultcointainer').show()
	$('.resultcointainer').append("<div class =  result>"+ 'you\'ve got ' + this.score + "</div>")
	if(this.score === 0){
		$('.resultcointainer').append("<div class = result>" + 'whoah chill down Hitler, it\'s just a game' + " </div>")
	}

	if(this.score < 15 && this.score > 0){
		$('.resultcointainer').append("<div class = result>"+ 'are you acctualy trying to be bad  ? ' + "</div>")
	}

	if(this.score === 15){
		$('.resultcointainer').append("<div class = result>" + 'you\'re not a bad guy ... but you\'re not good either' + "</div>")
	}

	if(this.score > 15){
		$('.resultcointainer').append("<div class = result>"+ 'hey, you\'re a nice guy, you just need some help ' + " </div>")
	}

	if(this.score === 30){
		$('.resultcointainer').append("<div class = result>" + 'are jesus or somthing ?' + " </div>")
	}
}


function Everything (events) {
	var idk = {}
	idk.cnt = 0;
	idk.index ;
	idk.score = 0;
	idk.events = events;
	idk.setTheScene = setTheScene;
	idk.actionScene = actionScene;
	idk.afterScript = afterScript;
	idk.endScript = endScript;
	return idk;
}

$('#startScene').on('click',function (){
	var scene = Everything(events) 
	scene.setTheScene()
}) 
