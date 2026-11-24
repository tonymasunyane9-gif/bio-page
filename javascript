const projects = [
    { title: "Bio Page", description: "My first HTML and CSS page." },
    { title: "Responsive Nav", description: "A flexbox nav bar that adapts." },
    { title: "Grid Gallery", description: "Cards laid out with CSS Grid." },
    { title: "Contact Form", description: "A form with validation." }
];

const grid = document.querySelector("#projectsGrid");
 
projects.forEach(function (project) {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = "<h3>" + project.title + "</h3><p>" + project.description + "</p>";
  grid.appendChild(card);
});
const form = document.querySelector("#contactForm");
const message = document.querySelector("#formMessage");
 
form.addEventListener("submit", function (event) {
  event.preventDefault();
 
  const name = document.querySelector("#tony").value.trim();
  const text = document.querySelector("#hi").value.trim();
 
  if (name === "" || text.length < 10) {
    message.textContent = "tony welcome to my webpage.";
    return;
  }
 
  message.textContent = "Thanks, " + name + "! Your message was received.";
  form.reset();
});
