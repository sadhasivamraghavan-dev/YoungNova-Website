function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function sendMessage() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let msg = document.getElementById("msg");

  if (name === "" || email === "" || message === "") {
    msg.innerText = "Please fill all fields";
    msg.style.color = "red";
  } else {
    msg.innerText = "Message sent successfully (demo)";
    msg.style.color = "cyan";
  }
}
