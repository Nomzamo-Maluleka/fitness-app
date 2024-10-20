const exercises = [
    "10 Push-ups",
    "15 Jumping Jacks",
    "20 Squats",
    "30-second Plank",
    "15 Burpees",
    "20 Lunges",
    "10 Mountain Climbers"
];

document.getElementById('generateExercise').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * exercises.length);
    document.getElementById('exerciseDisplay').textContent = exercises[randomIndex];
});

// Daily Workout Tracker
const workoutList = document.getElementById('workoutList');
document.getElementById('addWorkout').addEventListener('click', () => {
    const exercise = document.getElementById('exercise').value;
    const reps = document.getElementById('reps').value;

    if (exercise && reps) {
        const li = document.createElement('li');
        li.textContent = `${exercise} - ${reps} reps`;
        workoutList.appendChild(li);

        document.getElementById('exercise').value = '';
        document.getElementById('reps').value = '';
    }
});

// Motivational Quotes
const quotes = [
    "You are stronger than you think!",
    "Push yourself, because no one else is going to do it for you.",
    "The body achieves what the mind believes.",
    "Success starts with self-discipline.",
    "Your limitation—it's only your imagination.",
    "Don’t stop when you’re tired. Stop when you’re done."
];

document.getElementById('newQuote').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quoteDisplay').textContent = quotes[randomIndex];
});
