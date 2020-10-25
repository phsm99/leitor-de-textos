const utterance = new SpeechSynthesisUtterance();
let speaking = false;

utterance.lang = "pt-BR";
utterance.rate = 2;

utterance.onend = function (event) {
	speaking = false;
}

function speak() {
	setText();
	if (!speaking) {
		speechSynthesis.speak(utterance);
		speaking = true;
	}
}

function stop() {
	speechSynthesis.cancel();
	speaking = false;
}

function pause() {
	if (speechSynthesis.speaking) {
		speechSynthesis.pause();
	}
}

function resume() {
	if (speechSynthesis.paused) {
		speechSynthesis.resume();
	}
}

function setText() {
	utterance.text = document.getElementById('text').value;
}

function setRate(event) {
	utterance.rate = event.target.value;
	document.getElementById('rangeRateText').innerText = event.target.value
}

window.onbeforeunload = function (e) {
	speechSynthesis.cancel();
};