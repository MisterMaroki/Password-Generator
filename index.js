const generateBtn = document.getElementById("generate-btn");
const slotOne = document.getElementById("slot-one");
const slotTwo = document.getElementById("slot-two");
const slotThree = document.getElementById("slot-three");
const slotFour = document.getElementById("slot-four");
const lengthEl = document.getElementById("password-length");
const slots = document.getElementsByClassName("slot");
const chars =
	"0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let generated = false;

let passwordLength = 10;
function fitPasses() {
	if (passwordLength > 19) {
		slotOne.style.fontSize = "0.7rem";
		slotTwo.style.fontSize = "0.7rem";
		slotThree.style.fontSize = "0.7rem";
		slotFour.style.fontSize = "0.7rem";
	} else if (passwordLength < 19) {
		slotOne.style.fontSize = "1rem";
		slotTwo.style.fontSize = "1rem";
		slotThree.style.fontSize = "1rem";
		slotFour.style.fontSize = "1rem";
	}
}
function incrementLen() {
	if (passwordLength < 28) {
		passwordLength += 1;

		lengthEl.innerText = passwordLength;
		fitPasses();
	}
}
function decrementLen() {
	if (passwordLength > 1) {
		passwordLength -= 1;

		lengthEl.innerText = passwordLength;
		fitPasses();
	}
}

function genPass() {
	let password = "";
	for (let i = 0; i < passwordLength; i++) {
		let randomNumber = Math.floor(Math.random() * chars.length);
		password += chars[randomNumber];
	}
	return password;
}

generateBtn.addEventListener("click", function () {
	generated = true;

	slotOne.textContent = genPass();
	slotTwo.textContent = genPass();
	slotThree.textContent = genPass();
	slotFour.textContent = genPass();
});
