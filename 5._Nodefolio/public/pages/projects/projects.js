fetch("/api/projects")
.then(response => response.json())
.then(( projects ) => {
    const projectsWrapperDiv = document.getElementById("projects-wrapper");
    projects.map(project => { 
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project-element")
        projectDiv.innerHTML = `
            <h3>${(project.title)}</h3>
            <p>Category:  ${(project.category)}</p>
            <p>Technologies:  ${(project.technologies)}</p>
            <p>Link:<a href="https://${project.links}"></p>
        `;
        
        projectsWrapperDiv.appendChild(projectDiv);

    });
});
