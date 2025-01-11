const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('#footer');
const copyright = document.createElement('p');
copyright.innerHTML = `Natalia Novikova &copy; ${thisYear}`;
footer.appendChild(copyright);

// add skills section
const skills = ['JavaScript', 'HTML', 'CSS', 'GITHUB', 'Excel', 'MATLAB', 'SPSS', 'Python Anaconda', 'SQL']
const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector('ul');
for (let i = 0; i <skills.length; i++){
    let skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill)
}