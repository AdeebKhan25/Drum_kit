a = document.querySelectorAll("button");
for(var i = 0;i < 7;i++){
	a[i].addEventListener("click", function(){
			var buttonclicked = this.innerHTML;
			sound(buttonclicked);
			showanimation(buttonclicked);
	});
}

document.addEventListener("keydown", function(event){
	sound(event.key);
	showanimation(event.key);
});
	
function sound(key){
		switch(key){
		case "w":
				var crash = new Audio('sounds/crash.mp3');
				crash.play();
				break;
		case "a":
				var kick = new Audio('sounds/kick.mp3');
				kick.play();
				break;
		case "s":
				var snare = new Audio('sounds/snare.mp3');
				snare.play();
				break;
		case "d":
				var tom_1 = new Audio('sounds/tom-1.mp3');
				tom_1.play();
				break;
		case "j":
				var tom_2 = new Audio('sounds/tom-2.mp3');
				tom_2.play();
				break;
		case "k":
				var tom_3 = new Audio('sounds/tom-3.mp3');
				tom_3.play();
				break;
		case "l":
				var tom_4 = new Audio('sounds/tom-4.mp3');
				tom_4.play();
				break;
		default:
				alert("Sorry, 😔😔😔, You clicked wrong key.....!!!");
			
}
}

function showanimation(keyvalue){
	var newKey = "." + keyvalue;
	var classselected = document.querySelector(newKey);
	classselected.classList.add("pressed");
	setTimeout(function(){
		classselected.classList.remove("pressed");
	},100)
}
