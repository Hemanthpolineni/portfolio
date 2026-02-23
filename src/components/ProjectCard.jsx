import React from 'react'

function ProjectCard({project}) {
  return (
    <div style={cardStyle}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
    </div>
  );
}

const cardStyle = {
    border : "1px solid #ddd",
    padding : "20px",
    margin : "10ox 0",
};

export default ProjectCard