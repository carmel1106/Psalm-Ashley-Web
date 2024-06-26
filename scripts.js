document.addEventListener("DOMContentLoaded", function() {
    const projectList = document.getElementById('project-list');

    const projects = [
        { title: 'Project 1', description: 'Description of project 1.' },
        { title: 'Project 2', description: 'Description of project 2.' },
        { title: 'Project 3', description: 'Description of project 3.' }
    ];

    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');
        
        const projectTitle = document.createElement('h3');
        projectTitle.textContent = project.title;
        
        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;
        
        projectDiv.appendChild(projectTitle);
        projectDiv.appendChild(projectDescription);
        projectList.appendChild(projectDiv);
    });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted!');
});
