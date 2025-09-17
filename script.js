
fetch('questions.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('quiz-container');
    data.forEach((q, index) => {
      const box = document.createElement('div');
      box.className = 'question-box';

      const question = document.createElement('p');
      question.textContent = `${index + 1}. ${q.question}`;
      box.appendChild(question);

      q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.textContent = opt;
        btn.onclick = () => {
          const feedback = box.querySelector('.feedback');
          const example = box.querySelector('.example');
          feedback.textContent = opt === q.correct ? '✔️ 正確' : '❌ 錯誤';
          example.style.display = 'block';
        };
        box.appendChild(btn);
      });

      const feedback = document.createElement('div');
      feedback.className = 'feedback';
      box.appendChild(feedback);

      const example = document.createElement('div');
      example.className = 'example';
      example.style.display = 'none';
      const link = document.createElement('a');
      link.href = q.example.link;
      link.target = '_blank';
      link.textContent = q.example.text;
      example.appendChild(link);
      box.appendChild(example);

      container.appendChild(box);
    });
  });
