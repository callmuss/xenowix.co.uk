// Settings for Xenowix buttons
const buttonSettings = {
    text: "Click Me!",
    color: "#4CAF50",
    textColor: "#ffffff",
    size: "20px"
};

// Apply settings to the button
window.onload = () => {
    const btn = document.getElementById("mainButton");
    btn.innerText = buttonSettings.text;
    btn.style.backgroundColor = buttonSettings.color;
    btn.style.color = buttonSettings.textColor;
    btn.style.fontSize = buttonSettings.size;
};
