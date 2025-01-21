// create a footer and add it to the body
const footer = document.createElement("footer");
const body = document.querySelector("body");
body.appendChild(footer);

// add a copyright to the footer
const today = new Date();
const thisYear = today.getFullYear();
const copyright = document.createElement("p");
copyright.innerHTML = `Natalia Novikova &copy; ${thisYear}`;
footer.appendChild(copyright);

// add skills section
const skills = [
  "JavaScript",
  "HTML",
  "CSS",
  "GITHUB",
  "Excel",
  "MATLAB",
  "SPSS",
  "Python Anaconda",
  "SQL",
];
const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");
for (let i = 0; i < skills.length; i++) {
  let skill = document.createElement("li");
  skill.innerHTML = skills[i];
  skillsList.appendChild(skill);
}

// create remove button
const removeButton = document.createElement("button");
removeButton.innerText = "remove";
removeButton.type = "button";
removeButton.addEventListener("click", (e) => {
  const entry = removeButton.parentNode;
  entry.remove();
  if (messageList.childElementCount === 0) {
    messageSelection.style.display = "none";
  }
});

// add message form submit
const messageForm = document.querySelector("form");
messageForm.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const name = e.target.userName.value;
  const email = e.target.userEmail.value;
  const message = e.target.userMessage.value;

  console.log("Name: ", name);
  console.log("Email: ", email);
  console.log("message: ", message);

  // display messages in list
  const messageSection = document.getElementById("messages");
  const messageList = messageSection.querySelector("ul");
  const newMessage = document.createElement("li");
  newMessage.innerHTML = `<a href = "mailto:${email}"> ${name} </a> <span>wrote: ${message}<span>`;
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);
}

