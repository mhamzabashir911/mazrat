// Handle the "No" button jumping
const noButton = document.getElementById("no-button");

noButton.addEventListener("mouseover", () => {
    // Generate random positions for the button to jump
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    noButton.style.position = "absolute";
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});

// Handle the "Yes" button fun alert
const yesButton = document.getElementById("yes-button");

yesButton.addEventListener("click", () => {
    alert("Qibla boht boht shukriya ab blkl bhi tang ni krunga kbhi bhi mn waqai boht sharminda hn! You’re real gem stay blessed always and apna khyal rkhen!");
});
