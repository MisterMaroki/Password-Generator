const generateBtn = document.getElementById("generate-btn");
const slotOne = document.getElementById("slot-one");
const slotTwo = document.getElementById("slot-two");
const slotThree = document.getElementById("slot-three");
const slotFour = document.getElementById("slot-four");
const slots = document.getElementsByClassName("slot");
const chars =
	"0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let generated = false;
let passwordLength = 9;

generateBtn.addEventListener("click", function () {
	generated = true;
	var password = "";
	var passwordTwo = "";
	var passwordThree = "";
	var passwordFour = "";

	for (let i = 0; i <= passwordLength; i++) {
		let randomNumber = Math.floor(Math.random() * chars.length);
		password += chars.substring(randomNumber, randomNumber + 1);
	}
	slotOne.textContent = password;
});
