const generateBtn = document.getElementById("generate-btn");
const slotOne = document.getElementById("slot-one");
const slotTwo = document.getElementById("slot-two");
const slotThree = document.getElementById("slot-three");
const slotFour = document.getElementById("slot-four");
const slots = document.getElementsByClassName("slot");
const chars =
	"0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let generated = false;

generateBtn.addEventListener("click", function () {
	generated = true;

	let passwordLength = 9;

	function genPass() {
		let password = "";
		for (let i = 0; i < passwordLength; i++) {
			let randomNumber = Math.floor(Math.random() * chars.length);
			password += chars[randomNumber];
		}
		return password;
	}
	slotOne.textContent = genPass();
	slotTwo.textContent = genPass();
	slotThree.textContent = genPass();
	slotFour.textContent = genPass();
});
