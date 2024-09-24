import React from 'react';
import ProjectOne from './Project1.png';
import ProjectTwo from './Project2.png';

const projects = [
    { id: 1, title: 'Project 1', description: 'I created a 3D model of this cat character with animations', image: ProjectOne },
    { id: 2, title: 'Project 2', description: 'Worked on a small game. I was in charge of creating the enemies, boss, health, items, melee and spells', image: ProjectTwo},
    { id: 3, title: 'Project 3', description: 'Something', iamge: 'Nothing' }
];

const Project = () => {
    return (
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -40%)' }}>
            <h1>Projects</h1>
            {projects.map(project => (
                <div key={project.id}>
                    <img src={project.image} alt={project.title} width="75" height="75" />
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Project;