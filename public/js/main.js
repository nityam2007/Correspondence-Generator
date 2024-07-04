document
  .getElementById("correspondence-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const sender = document.getElementById("sender").value;
    const recipient = document.getElementById("recipient").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    fetch("/generate_text", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sender, recipient, subject, message }),
    })
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("generated-text").innerText = data.text;
      })
      .catch((error) => {
        console.error("Error:", error);
        document.getElementById("generated-text").innerText =
          "An error occurred. Please try again.";
      });
  });
