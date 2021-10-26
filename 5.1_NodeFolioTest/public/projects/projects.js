fetch("/api/projects")
.then(response => response.json())
.then(({ projects }) => {
    // todo group the projects by category

    // asignment show the projects on the page (Chronological based on array index)
    const projectsWrapperDiv = document.getElementById("projects-wrapper")
    console.log(projectsWrapperDiv)

    projects.map(project => {
        const titleElement = document.createElement("h3")
        titleElement.innerText = project.name
        
        projectsWrapperDiv.appendChild(titleElement)
    })
})