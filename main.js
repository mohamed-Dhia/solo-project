
function factoryEvents(eventName,bfscript,lawfulChoice,neutralChoice,chaoticChoice,afScript,backGroundPic) {
	return {
		eventName : eventName,   // just used these two to create my somewhat giant data source 
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
    "backGroundPic": "https://multifiles.pressherald.com/uploads/sites/2/2019/03/661962-Skow-fire-river.jpg"
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
    "backGroundPic": "https://www.thoughtco.com/thmb/5iO-o6EWiR32frpyweaEWw8iof4=/1600x1084/filters:fill(auto,1)/Louis_XIV_wedding-5c6b44b446e0fb00019172f3.jpg"
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

$('.monologe').append('<button id = "startScene" class = "advance"> start </button>') // appending the first button to star

var setTheScene = function() { // this function displays a random staring scene

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


var actionScene = function () { // this function sets the were you can choose your actions
	var that = this
	$('body').html("")
	$('body').append("<div class = choose></div>")
	$('.choose').show()
	$('body').css('background-image','url(' + this.events[this.index].backGroundPic + ')');
	$('.choose').append('<div class =  event id = ' + this.index + '> what would you do ? <br></div>')
	$('.choose').append('<div class = options ><button class = option id = good>' + this.events[this.index].choises[0] + '</button>  <button class = option id = meh>' + this.events[this.index].choises[1] + '</button>  <button class = option id = bad>' + this.events[this.index].choises[2] + '</button> </div>')

	$('#bad').on('click',function(){ // each button changes the path
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

var afterScript = function(i) { //this function displays a msg according to your choice
	this.limit = 3; // this shoul have been taken from a button on the beggining but i had no time
	var that = this
	$('body').html("")
	$('body').append("<div class = prompt></div>")
	$('.prompt').show()
	$('body').css('background-image','url(' + this.events[this.index].backGroundPic + ')');
	$('.prompt').append('<div class =  event id = ' + this.index + '>'+ this.events[this.index].afScript[i] + '</div>') // displays the appropriate msg 
	$('.prompt').append('<button class = advance id = actionScene> next>> </button>')
	this.cnt++
	this.events.splice(this.index,1)
	if(this.cnt < this.limit){
		$('#actionScene').on('click',function(){
			that.setTheScene()
		})
	} else {
		$('#actionScene').on('click',function(){
			that.endScript()
		})
	}

}

var endScript = function(){ // this function displays the score with the msg 
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
		$('.resultcointainer').append("<div class = result>"+ 'are you acctualy trying to be bad ? because you\'re pretty good at it ' + "</div>")
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


function AllMethodes (events) { // using oop makes everything easier 
	var main = {}
	main.cnt = 0;
	main.index ;
	main.score = 0;
	main.limit;
	main.events = events;
	main.setTheScene = setTheScene;
	main.actionScene = actionScene;
	main.afterScript = afterScript;
	main.endScript = endScript;
	return main;
}

$('#startScene').on('click',function (){ // to start the hole thing
	var scene = Everything(events) 
	scene.setTheScene()
}) 
