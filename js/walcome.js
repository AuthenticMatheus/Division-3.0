document.addEventListener("DOMContentLoaded", () => {
    const welcomeMessage = document.getElementById("welcome-message");
    const division = document.getElementById("division");
    welcomeMessage.classList.add("visible");
    setTimeout(() => {
      division.classList.add("orange-text");
    }, 1000);
    setTimeout(() => {
      welcomeMessage.classList.remove("visible");
    }, 3000);
    setTimeout(() => {
      division.classList.remove("orange-text");
    }, 3000);
  });
