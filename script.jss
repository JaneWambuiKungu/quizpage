document.addEventListener("DOMContentLoaded", function () {
  const quizForm = document.getElementById("quiz-form");
  const quizResults = document.getElementById("quiz-results");

  quizForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const totalQuestions = 6; // Total number of questions
    let score = 0;

    // Get selected answers
    const selectedAnswers = {
      question1: document.querySelector('input[name="question1"]:checked').value,
      question2: document.querySelector('input[name="question2"]:checked').value,
      question3: document.querySelector('input[name="question3"]:checked').value,
      question4: document.querySelector('input[name="question4"]:checked').value,
      question5: document.querySelector('input[name="question5"]:checked').value,

    };

    // Check answers and calculate the score
    if (selectedAnswers.question1 === "2") {
      score += 2;
    }
    if (selectedAnswers.question2 === "3") {
      score += 2;
    }
    if (selectedAnswers.question3 === "2") {
      score += 4;
    }
    if (selectedAnswers.question4 === "2") {
      score += 2;
    }
    if (selectedAnswers.question5 === "3") {
      score += 2;
    }
    if (selectedAnswers.question6 === "1") {
      score += 2;
    }

    // Calculate the percentage
    const percentage = (score / (totalQuestions * 2)) * 100;

    // Display the score
    let resultMessage = "";
    if (percentage > 80) {
      resultMessage = "Congratulations! You have excellently passed.";
    } else if (percentage >= 50) {
      resultMessage = "You have fairly passed. Keep it up!";
    } else {
      resultMessage = "You have scored poorly. You need to retake the test.";
    }

    quizResults.innerHTML = `<p>Your Score: ${score} out of ${totalQuestions * 2}</p>`;
    quizResults.innerHTML += `<p>Percentage: ${percentage.toFixed(2)}%</p>`;
    quizResults.innerHTML += `<p>${resultMessage}</p>`;
  });
});
