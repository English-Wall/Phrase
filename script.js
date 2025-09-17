
function checkAnswer(button, result) {
  const feedback = button.parentElement.querySelector('.feedback');
  const example = button.parentElement.querySelector('.example');
  feedback.innerText = result === 'O' ? '✔️ 正確' : '❌ 錯誤';
  example.style.display = 'block';
}
