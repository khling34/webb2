let randomNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
  const input = document.getElementById("userGuess").value.trim();
  const userNumber = parseInt(input);
  const resultDiv = document.getElementById("result");

  if (isNaN(userNumber) || userNumber < 1 || userNumber > 10) {
    resultDiv.innerHTML = "❗ Vui lòng nhập số từ 1 đến 10.";
    return;
  }

  if (userNumber === randomNumber) {
    resultDiv.innerHTML = `<span style="color: green; font-weight: bold;"> Chính xác! Bạn đã đoán đúng số ${randomNumber}.</span>`;
  } else {
    resultDiv.innerHTML = `<span style="color: red;">Sai rồi, thử lại nhé!</span>`;
  }
}