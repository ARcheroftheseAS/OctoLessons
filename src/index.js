import React, {Component} from 'react'; import ReactDOM from 'react-dom'; import './index.css';
import CyberGestalt from './ARcher_IMGS/CyberGestalt.png'; import doodleKindness from './ARcher_IMGS/doodleKindness.png'; import granadagbox from './ARcher_IMGS/granadagbox.png'; import Meme from './ARcher_IMGS/Meme.png'; import iconA from './ARcher_IMGS/iconA.gif'; import iconB from './ARcher_IMGS/iconB.gif'; import iconC from './ARcher_IMGS/iconC.gif'; import iconD from './ARcher_IMGS/iconD.gif'; import iconE from './ARcher_IMGS/iconE.gif'; import iconF from './ARcher_IMGS/iconF.gif'; 

let CGScore = 0;

class Top extends Component { 
	constructor(props) {
    	super(props);
    	this.state = { 
    		ticks: 0, hex: 0, width: 0, CGDisplay: 0, togSty: false, classTog: (tog)=>{return (tog ? 'extraStyle':'');}   
    	};
  	}	
  	tick() {
    	this.setState(state => ({
    		ticks: state.ticks + 0.01,
      		hex: Number(Math.round(Math.abs(Math.sin(state.ticks))*999999)),
      		width: Math.random() * 100 + "%",
      		CGDisplay: "Score: " + CGScore,
      		togSty: !state.togSty
    	}));
	}	
	componentDidMount() {
		this.interval = setInterval(() => this.tick(), 200);
	}	
	componentWillUnmount() {
    	clearInterval(this.interval);
  	}	
  	render() { return (
		<div id = "top" className = "scene defaul"><a name = "top">
			<h1 style = {{color: "#" + this.state.hex}}> ARcher's Page, now in React! </h1>
			<hr style = {{width: this.state.width}}/>
			<table><thead></thead><tbody className = {this.state.classTog(this.state.togSty)}><tr><td>
				<hr className = "inTable tableTop"/>
				<p> Created By: ARcheroftheseAS </p>
				<input type="text" name="" placeholder="Enter Cheat Code" id = "haxInput"/>
				<button id="hax"> USE </button>
				<hr className = "inTable tableBottom"/>
			</td><td id = "col-mid">
				<img alt = "" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhZkGT6LwC-_7GE4oic4V6nvIZ0gqhY8rrlrMDv0Fi5R9DHv_r" id = "homeImg"/>
			</td><td>
				<hr className = "inTable tableTop"/>
				<button id = "mainToCG"> Color Game! </button>
				<p className = "CGScoreDisplay"> {this.state.CGDisplay} </p>
				<button id = "mainToSF" value = "disabled"> Bad SwordFight </button>
				<hr className = "inTable tableBottom"/>
			</td></tr></tbody></table>
		</a></div>
	)}
}
class SideNav extends Component { render() { return (
	<><div className = "dark" id = "navig"><table className = "blank" style = {{height: "100%"}}><tr><td valign = "top">
		<h2 height = "15vh" className = "wideBut" style = {{padding: "0", margin: "2vh 0"}}> Navigation </h2>
		<button id = "1" className = "wideBut"> Main </button>
		<button id = "2" className = "wideBut"> Who I am </button>
		<button id = "3" className = "wideBut"> What I do </button>
	    <button id = "4" className = "wideBut"> Fav. Song </button> 
	   	<button id = "5" className = "wideBut"> Gallery </button>
		<button id = "6" className = "wideBut"> Other links </button>
	</td></tr><tr><td valign = "bottom">
		<button onclick = "window.location.href='index.html';" className = "wideBut">  Return to main <br/> ↩  </button>
	</td></tr></table></div>
	<button id = "navnav"><i className="fas fa-angle-double-right"></i></button></>
)}}
class Intro extends Component { render() { return (
	<div className = "scene" id = "intro"><a name = "intro">
		<hr style = {{height: "5px"}}/>
		<table className = "showOnScroll"><thead><th colspan="3" id = "intro">
			<h2> Who I am </h2>
			<hr/>
		</th></thead><tbody className = "dark"><tr><td>
			<img alt = "" src = {iconA}/>
			<h4> Jack of [most] coding langs.</h4>
			<p className = "smol_text"> I write my HTML, CSS, JS, and a little C# and Python with the help of documentation. Yay documentation! </p>
		</td><td>
			<img alt = "" src = {iconB}/>
			<h4> Blitzkrieg student </h4>
			<p className = "smol_text"> Get assignment, finish assignment. Might as well, more time for me to do other things </p>
		</td><td>
			<img alt = "" src = {iconC}/>
			<h4> Complete F2P gamer </h4>
			<p className = "smol_text"> Haven't purchased a game or in-game items ever. I can get by without them, I'm not in a rush to win </p>
		</td></tr></tbody></table>
	</a></div>
)}}
class Likes extends Component { render() { return (
	<div id = "quetegustahacer" className = "scene dark"><a name = "quetegustahacer">
		<table className = "showOnScroll"><thead><th colspan="3">
			<h2> What I do </h2>
			<hr/>
		</th></thead><tbody><tr><td>
			<img alt = "" src = {iconD}/>
			<h4> Play </h4>
			<p className = "smol_text"> Free time? Grind time. </p>
		</td><td>
			<img alt = "" src = {iconE}/>
			<h4> Create </h4>
			<p className = "smol_text"> Put in sweat, tears (no blood, sorry), get out... whatever it ends up being. </p>
		</td><td>
			<img alt = "" src = {iconF}/>
			<h4> Watch </h4>
			<p className = "smol_text"> Entertain myself with others. My own brain can only go so far, right? </p>
		</td></tr></tbody></table>
	</a></div>
)}}
class Songs extends Component { render() { return (
	<div id = "favS" className = "scene dark"><a name = "favS">
		<table style = {{width: "85%"}} className = "blank showOnScroll"><tr><td rowspan = "3" style = {{borderRight: "5px ridge #DCFFF0"}}>
			<h2> My <br/> favorite <br/> songs </h2>
		</td><td className = "popActivate">
			<table style = {{marginRight: "0"}} className = "blank"><tbody style = {{boxShadow: "none"}}><td style = {{width: "min-content"}}>
			<iframe title = "favSong1" src="https://www.youtube.com/embed/j-2DGYNXRx0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</td><td className = "popout">
			<h4><a href = "https://youtu.be/j-2DGYNXRx0"> Rise Up </a></h4>
			<p className = "smol_text"> TheFatRat </p>
			</td></tbody></table>
		</td></tr><tr><td className = "popActivate">
			<table style = {{marginRight: "0"}} className = "blank"><tbody style = {{boxShadow: "none"}}><td style = {{width: "min-content"}}>
			<iframe title = "favSong2" src="https://www.youtube.com/embed/5fSYGKYDK5E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</td><td className = "popout">
			<h4><a href = "https://youtu.be/5fSYGKYDK5E"> Self Made </a></h4>
			<p className = "smol_text"> NEFFEX </p>
			</td></tbody></table>
		</td></tr><tr><td className = "popActivate">
			<table style = {{marginRight: "0"}} className = "blank"><tbody style = {{boxShadow: "none"}}><td style = {{width: "min-content"}}>
			<iframe title = "favSong3" src="https://www.youtube.com/embed/Mquzb5OLdd0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</td><td className = "popout">
			<h4><a href = "https://youtu.be/Mquzb5OLdd0"> Gossip </a></h4>
			<p className = "smol_text"> NEFFEX <br/> Note: sketch lyrics </p>
			</td></tbody></table>
		</td></tr></table>
	</a></div>
)}}
//de-Yellowing in Sublime
class Gallery extends Component { render() { return (
	<div id = "gallery" className = "scene dark"><a name = "gallery">
		<table className = "showOnScroll"><thead><th colspan = "4">
			<h2> <em>Computer Graphics</em>: Gallery </h2>
		</th></thead><tbody id = "imgMouseEvent"><tr>
			<td><img alt = "" src = {CyberGestalt} className = "iMEActivate"/></td>
			<td><img alt = "" src = {Meme} className = "iMEActivate"/></td>
			<td><img alt = "" src = {doodleKindness} className = "iMEActivate"/></td>
			<td><img alt = "" src = {granadagbox} className = "iMEActivate"/></td>
		</tr><tr>
			<td><img alt = "" src = "ARcher_IMGS/blank.png" className = "iMEActivate"/></td>
			<td><img alt = "" src = "ARcher_IMGS/blank.png" className = "iMEActivate"/></td>
			<td><img alt = "" src = "ARcher_IMGS/blank.png" className = "iMEActivate"/></td>
			<td><img alt = "" src = "ARcher_IMGS/blank.png" className = "iMEActivate"/></td>
		</tr></tbody></table>
		<div id = "iMEIndicator" className = "hidden dark"> Click to enlarge! </div>
		<div id = "iMETarget" className = "hidden">
			<button id = "iMEExit"><h2 style = {{display: "inline-block; width: 70%"}} > X </h2></button>
			<img alt = "" src = "ARcher_IMGS/blank.png" id = "iMEImage"/>
			<p id = "iMEDescription" style = {{color: "black"}}></p>
		</div>
	</a></div>
)}}
class Links extends Component { render() { return (
	<footer id = "communityLinks" className = "dark"><a name = "communityLinks">
		<h4> Contact me: </h4>
		<p className = "smol_text"> On Discord - ARcheroftheseAS#7712 </p>
		<p className = "smol_text"> On anything else - nah don't bother </p>
	</a></footer>
)}}
class ColorGame extends Component { render() { return (
	<div id = "colorGame" className = "screen"> 
		<h2 id = "CGTitle"> 
			The Great <br/> <span>RGB</span> <br/> Color Game 
		</h2>
		<h3> Note: made from tutorial, I do not claim credit for making this myself </h3>
		<div id = "navbar">
			<button id = "CGToMain"> Home </button>
			<button id = "refresh"> New Colors? </button>
			<span id = "display"> </span>
			<button id = "easy" className = "mode">EASY</button>
			<button id = "hard" className = "mode">HARD</button>
		</div>
		<div className = "container">
			<div className = "square float-left"></div>
			<div className = "square float-left"></div>
			<div className = "square float-left"></div>
			<div className = "square float-left"></div>
			<div className = "square float-left"></div>
			<div className = "square float-left"></div>
			<p className = "CGScoreDisplay"> Score : 0 </p>
		</div>
	</div>
)}}
//de-Yellowing in Sublime
class App extends Component { render() { return (
	<div className = "containAll">
		<div id = "main" className = "screen">
			<Top/><SideNav/><Intro/><Likes/><Songs/><Gallery/><Links/>
		</div>
		<ColorGame/>
	</div>
)}}
ReactDOM.render(<App/>, document.getElementById('root'))


//FRONTEND JAVASCRIPT
//TOOLS


const hexToRgbaConverter = (hex, alpha) => {
    const r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);
    return (alpha ? "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")" : "rgb(" + r + ", " + g + ", " + b + ")");
}
const loopPlay = (song, inputMethod) => {
	const SongID = setInterval(() => {
		song.volume = 0.1;
		song.play();
		if(inputMethod.val() === "StopSong"){
			clearInterval(SongID);
			song.pause();
		}
	}, (song.duration * 1000));
}


//MAIN

const haxBtn = document.querySelector('#hax');

haxBtn.addEventListener('click', () => {
	if (document.querySelectorAll('input')[0].value === "hax" && CGScore < 9999) {
		CGScore += 9999;
	}
});


//SCREENS


const main = document.querySelector('#main');
const colorGame = document.querySelector('#colorGame');
const mainToCG = document.querySelector('#mainToCG');
// let mainToSF = document.querySelector('#mainToSF');
const CGToMain = document.querySelector('#CGToMain');
const toggleNav = document.querySelector('#navnav');
let navState = false;
const screenSwitch = (orig, next) => {
	orig.style.display = 'none';
	next.style.display = 'block';
}
colorGame.style.display = 'none';
mainToCG.addEventListener("click", () => {
	screenSwitch(main, colorGame)
});
CGToMain.addEventListener("click", () => {
	screenSwitch(colorGame, main);
});
// mainToSF.click(() => {
// 	screenSwitch(main, SF)
// });

const hashes = ["top", "intro", "quetegustahacer", "favS", "gallery", "communityLinks"];
for (let i = 0; i < 6; i++){
	let butLoc = '' + (i + 1);
	document.getElementById(butLoc).addEventListener("click", () => {window.location.hash = hashes[i]});
}

const popTables = document.querySelectorAll(".popActivate");
popTables.forEach((Val) => {
	Val.addEventListener("mouseover", () => {
		Val.querySelector(".popout").style.width = "30%";
	});
	Val.addEventListener("mouseout", () => {
		Val.querySelector(".popout").style.width = "0";
	});
});

const imgHoverer = document.querySelector("#iMEIndicator");
const imgDisplayer = document.querySelector("#iMETarget");
const imgActive = document.querySelector("#iMEImage");
const imgExit = document.querySelector("#iMEExit");
const displayImgs = document.querySelectorAll(".iMEActivate");
const imgDescribers = ["Gestalt illustration for Granada Cybersecurity, made of simple but hopefully effective shapes.",
		    "Attempt at a meme using a World of Tanks image. Please view it as it is: one of my first ever graphics creations >///<",
		    "Google Doodle entry for the theme \"Kindness\", depicted are chicks (simple, can't do complicated effectively) doing letious acts of kindness.",
		    "Mock cereal box smeared full of Granada-themed imagery, created with multiple images slapped together using Adobe's 3D effects.",
		    "",
		    "",
		    "",
		    ""];
const imgDescriber = document.querySelector("#iMEDescription");
let imgPopped = false;
displayImgs.forEach((Img, Ind) => {
	Img.addEventListener("mouseenter", () => {
		if (!imgPopped){
			imgActive.setAttribute("src", Img.getAttribute("src"))
			imgHoverer.classList.remove("hidden");
			imgDescriber.innerText = imgDescribers[Ind];
		}
	});
	Img.addEventListener("mouseout", () => {
		if (!imgPopped){
			imgActive.setAttribute("src", "ARcher_IMGS/blank.png");
			imgHoverer.classList.add("hidden");
			imgDescriber.innerText = "";
		}
	});
	Img.addEventListener("click", () => {
		if (!imgPopped){
			imgHoverer.classList.add("hidden");
			imgPopped = true;
			imgDisplayer.classList.remove("hidden");
		}
	});
});
imgExit.addEventListener("click", () => {
	if(imgPopped){
		imgPopped = false;
		imgDisplayer.classList.add("hidden");
	}
});
//have span follow mouse
window.onload = () => {
        let mouseGetx = 0;
        let mouseGety = 0;
    // On mousemove use event.clientX and event.clientY to set the location of the div to the location of the cursor:
        window.addEventListener('mousemove', (event) => {
        	mouseGetx = event.clientX;
        	mouseGety = event.clientY;                    
        	if ( typeof mouseGetx !== 'undefined' ){
        		imgHoverer.style.left = mouseGetx + "px";
                imgHoverer.style.top = (mouseGety + 20) + "px";
        	}
        }, false);
}

toggleNav.addEventListener("click", () => {
	document.querySelector("i").classList.toggle('fa-angle-double-left');
	document.querySelector("i").classList.toggle('fa-angle-double-right');
	if (!navState) {
		document.querySelector( "#navig" ).style.width = '15%';
		toggleNav.style.left = '16%';
	}
	else {
		document.querySelector( "#navig" ).style.width = '0';
		toggleNav.style.left = '1%';
	} 
	navState = !navState;
});

//check if div is scrolled into view
const halfScrolledIntoView = (el) => {
    	let elemTop = el.getBoundingClientRect().top;
    	let halfVisible = (1.2 * elemTop) < window.innerHeight;
    	return halfVisible;
}
window.onscroll = () => {
	document.querySelectorAll(".showOnScroll").forEach((elem) => {
		if(halfScrolledIntoView(elem)){
			elem.classList.add("isVisible");
		}
	});
}
// COLOR GAME CODE (MADE FROM TUTORIAL, NOT ORIGINAL IM SORRY)

const CGScoreDisplays = document.querySelectorAll(".CGScoreDisplay");
const generateColors = (num) => {
	let ar = [];
	for (let i = 0; i < num; i++) {
		ar.push("rgb(" + Math.floor(Math.random()*256) + ", " + Math.floor(Math.random()*256) + ", " + Math.floor(Math.random()*256) + ")");
	}
	return ar;
};
const refreshButton = document.querySelector('#refresh');
let colors = generateColors(6);
const colorDisplay = document.querySelector('span');
const squares = document.getElementsByClassName('square');
const CGTitle = document.querySelector('#CGTitle');
let win = false;
const randPick = () => {
	return colors[Math.floor(Math.random() * colors.length)];
};
let goalColor = randPick();
const message = document.querySelector('#display');
const changeColors = () => {
	for (let i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = goalColor;
	}
	CGTitle.style.backgroundColor = goalColor.replace(')', ', 0.55)').replace('rgb', 'rgba');
};
const hardButton = document.querySelector('#hard');
const easyButton = document.querySelector('#easy');
const modeButtons = document.querySelectorAll(".mode");
let numSquares = 6;
const reset = () => {
	colors = generateColors(numSquares);
	goalColor = randPick();
	colorDisplay.textContent = goalColor;
	message.textContent = " ";
	CGTitle.style.backgroundColor = "rgba(0, 0, 0, 0)";
	for (let i = 0; i < squares.length; i++) {
		squares[i].style.display = "block";
		colors[i] ? squares[i].style.backgroundColor = colors[i] : squares[i].style.display = "none";
	}
	if (win === false) {
		CGScore = Math.floor(CGScore / 10);
		CGScoreDisplays[1].textContent = "Score : " + CGScore;
	}
	else {
		win = false;
	}
};

for (let i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener('click', () => {
		hardButton.classList.remove('selected');
		easyButton.classList.remove('selected');
		this.classList.add('selected');
		this === modeButtons[0] ? numSquares = 3 : numSquares = 6;
		reset();
	});
}
refreshButton.addEventListener('click', () => {
	reset();
	this.textContent = "New Colors?"
});
colorDisplay.textContent = goalColor;
hardButton.classList.add('selected');
for (let i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener('click', (event) => {
		let clickedColor = this.style.backgroundColor;
		if (goalColor === clickedColor) {
			message.textContent = "You've found it!";
			if (win === false) {
				numSquares > 3 ? CGScore += 2 : CGScore += 1;	
			}
			changeColors();
			refreshButton.textContent = "Play Again?"
			win = true;
		}
		else {
			this.style.backgroundColor = "rgba(0, 0, 0, 0)";
			message.textContent = "Try Again."
			if (CGScore > 0) {
				CGScore --;
			}
		}
		CGScoreDisplays[1].textContent = "Score : " + CGScore;
	})
}