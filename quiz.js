function checkAnswer() {
    const correctAnswer = "4"; // The correct answer
    
    // Get the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked');
    
    if (userAnswer) {
        // Compare user answer with the correct answer
        const feedbackElement = document.getElementById('feedback');
        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
            feedbackElement.style.color = "green";
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
            feedbackElement.style.color = "red";
        }
    } else {
        alert("Please select an answer before submitting.");
    }
}

// Add event listener to submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
