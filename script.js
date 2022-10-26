//initialized
function q(x,y){x ? a = document.querySelectorAll(y) : a = document.querySelector(y);return a}
var con1 = q(false,'.con1');
var con2 = q(false,'.con2');
var btn1 = q(false,'.btn1');
var btn2 = q(false,'.btn2');
var modal = q(false,'.modal');
var modalImg = q(false,'.modalImg');
var show = true;
var sequence = 0;
var mess1 = q(false,'.mess1');
con2.style.display = 'none'
con1.style.height = window.innerHeight + "px"
con2.style.height = window.innerHeight + "px"
var timing = 4000
modalSwitch(false);
//function
function submit(){
	var pass = q(false,'.inputPass')
	if(pass.value == "niknik"){
		con1.style.display = 'none'
		con2.style.display = 'flex'
		playMessages()
	}else{
		alert('Mali yun mahal nakalimutan mo na ba?');
	}
}
function modalSwitch(x,y,z,a,b){
	if(x){
		if(y){
			modal.style.position = 'relative';
			modal.style.top  = '0';
			modal.style.left  = '0';
			changeModalMess(z)
			modalImg.style.display = 'none';
			if(a){
				modalImg.style.display = 'block'
				modalImg.src = b
			}
		}
		modal.style.display = 'flex';
	}else{
		modal.style.display = 'none';
		modalImg.style.display = 'none';
	}
}
function changeModalMess(x){
	var mess = q(false,'.mess');
	mess.childNodes[1].textContent = x;
}
btn1.addEventListener('click',function(){
	modalSwitch(false,false,'');
	if(sequence == 0){
		sequence += 1;
		modalSwitch(true,true,'Yeyyyy 23 kana Mahal ko 🎂🥳🎉',true,'cake1.jpg');
	}else if(sequence == 1){
		sequence += 1;
		playMessages1()
	}else if(sequence == 2){
		sequence += 1;
		modalSwitch(true,true,'Will you stay by my side? 😎');
	}else if(sequence == 3){
		sequence += 1;
		modalSwitch(true,true,'Will you be more open to me?');
	}else if(sequence == 4){
		sequence += 1;
		modalSwitch(true,true,'Will you marry me? 😊😍');
	}else if(sequence == 5){
		sequence += 1;
		modalSwitch(true,true,'Are you sure? 😔');
	}else if(sequence == 6){
		setTimeout(function(){
			mess1.style.opacity = '1'
			mess1.style.animation = 'expandFade 2s forwards'
			mess1.textContent = "THANK YOU AND ILOVEYOU 😊😍"
		},timing)
		setTimeout(function(){
			mess1.style.opacity = '1'
			mess1.textContent = "HAPPY BIRTHDAY MAHAL ENJOY YOUR DAY 😊😍"
		},timing*2)
	}
})
btn2.addEventListener('click',function(){
	height =  window.innerHeight - 232;
	width = window.innerWidth - 284;
	ran1 = Math.floor(Math.random() * height) + 'px';
	ran2 = Math.floor(Math.random() * width) + 'px';
	modal.style.position = 'absolute';
	modal.style.top = ran1;
	modal.style.left = ran2;
})
btn2.addEventListener('mouseover',function(){
	height =  window.innerHeight - 232;
	width = window.innerWidth - 284;
	ran1 = Math.floor(Math.random() * height) + 'px';
	ran2 = Math.floor(Math.random() * width) + 'px';
	modal.style.position = 'absolute';
	modal.style.top = ran1;
	modal.style.left = ran2;
})
list1 = ['Hmm? Hello Mahal ko ❤😊😍','HAPPYYYYY BIRTHDAY MAHAL KO!']
list2a = ['SORRY','I AM SORRY 🥲']
list2 = ['Maikli lang tong message ko sayo, siguro hahaha 🤣','Kaya sana basahin mo till the end 😒','May sasabihin lang ako sayo','Kaya siguro maikli lang ito 😄','Kase lagi ko naman sinasabi sayo ang maraming bagay','Mahal na mahal na mahal kita!! 😊😍','Thank you, Unang una. Unang hirit Charizzz langs hahaha 🤣','Sa pag stay up until now. I know I am not perfect','But you choose to stay no matter what my ugali is','Kahit alam ko nasasaktan kita 🥲']
list3 = ['Sorry ha, I will always make bawi nalang','Sorry sa pag kukulang ko 🥲','By spending the rest of my life with you 😊😍','Kahit maging mahirap okay lang kase','Masaya ako pag nandiyan ka sa aking tabi 😎','You always make me happy kahit by simple things','Kaya I am always thankful sayo 😎']
list3a = ['THANK YOU 😄']
list4 = ['Mahaba pa ang tatahakin natin mahal','We still have our lifetime to spend together','Just hold my hand, stand by my side please','I am your partner, In happiness and sadness','I know nagiging makulit ako just to ask you what you feels 🥲','Kahit alam kong mali yun kase gusto ko malaman more about you','I wanna know para mas maintindihan kita lalo','Para di tayo mag away ng madalas','I wanna stay long for you','If you dont have a reason to live isipin mo ko 🥲','Am i not enough reason to you? 🥲','Well It hurts me a lot lalo pag na pa overthink ako 🥲','Myself telling me na i let go ka and do what you want 🥲','kase feeling ko I am just being to selfish and hurting you more 🥲','Sorry if nasasaktan ka lalo dahil sakin pero gusto talaga kita magstay 😊😍','So I can try to take all your pain and you can live happily 😊😍']
list4a = ['WHY ? 🥲🥲']
list5 = ['Cause your are the most precious thing in this world for me 😊😍','I can live without you but Without you am I still my self?','I am miserable for sure 🥲','Do you call that a living? 🥲','Do you want me to be like that?','Thats why if you wanna go take me with you wherever it is basta kasama ka','I LOVE YOU AS ALWAYS  AND I WILL LOVE YOU FOREVER 😍','STAY WITH ME AND LETS WALK THROUGH THIS LETS FIGHT TOGETHER','Your strong so lend me your strength and I can be your shield 😍','Ikaw sa offence ako sa defence hahaha','ILOVEYOU MAHAL ALWAYS OKAY? 😍','Don\'t doubt my love cause my heart and myself is always yours 😊😍']
list5a = ['SINCERELY YOURS','NIKNIK']
function createMess1(x){
	x.forEach(function(item,i){
		setTimeout(function(){
			mess1.style.animation = 'expandFade 2s forwards'
			mess1.textContent = x[i]
			mess1.style.opacity = '1'
		},timing*(i+1))
		setTimeout(function(){
			mess1.style.opacity = '0'
		},timing*(i+1.8))
	})
}
function createMess(x){
	x.forEach(function(item,i){
		if(i == 0){
			mess1.style.opacity = '1'
			mess1.textContent = x[i]
			setTimeout(function(){
				mess1.style.opacity = '0'
			},timing*(i+1.8))
		}else{
			setTimeout(function(){
				mess1.style.opacity = '1'
				mess1.textContent = x[i]
			},timing*(i+1))
			setTimeout(function(){
				mess1.style.opacity = '0'
			},timing*(i+1.8))
		}
	})
}
async function playMessages(){
	mess1.style.opacity = '0'
	createMess(list1);
	await setTimeout(function(){
		modalSwitch(true,true,'Blow the candle! 🎂🥳🎉',true,'cake2.jpg')
	},timing*3)
}
async function playMessages1(){
	createMess(list2)
	await setTimeout(function(){
		playMessages1a()
	},timing*10)
}
async function playMessages2(){
	createMess(list3)
	await setTimeout(function(){
		playMessages2a()
	},timing*7)
}
async function playMessages3(){
	createMess(list4)
	await setTimeout(function(){
		playMessages3a()
	},timing*15)
}
async function playMessages4(){
	createMess(list5)
	await setTimeout(function(){
		playMessages4a()
	},timing*12)
}
async function playMessages1a(){
	createMess1(list2a)
	await setTimeout(function(){
		mess1.style.animation = ''
		mess1.style.letterSpacing = '0px'
	},timing*3)
	await setTimeout(function(){
		playMessages2()
	},timing*3)
}
async function playMessages2a(){
	createMess1(list3a)
	await setTimeout(function(){
		mess1.style.animation = ''
		mess1.style.letterSpacing = '0px'
	},timing*2)
	await setTimeout(function(){
		playMessages3()
	},timing*2)
}
async function playMessages3a(){
	createMess1(list4a)
	await setTimeout(function(){
		mess1.style.animation = ''
		mess1.style.letterSpacing = '0px'
	},timing*2)
	await setTimeout(function(){
		playMessages4()
	},timing*2)
}
async function playMessages4a(){
	createMess1(list5a)
	await setTimeout(function(){
		mess1.style.animation = ''
		mess1.style.letterSpacing = '0px'
	},timing*3)
	await setTimeout(function(){
		modalSwitch(true,true,'WANT TO ANSWER MY QUESTION?');
	},timing*4)
}
