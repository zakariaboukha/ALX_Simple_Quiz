// Function to check the user's answer
function checkAnswer() {
    // The correct answer
    const correctAnswer = "4";
    
    // Get the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;
    
    // Get the feedback element
    const feedback = document.getElementById("feedback");
    
    // Check if userAnswer is correct and display feedback
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);

