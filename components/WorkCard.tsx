import React from 'react';

const WorkCard = ({
    id,
    title,
    description,
    technologies,
    githubLink,
    demoLink,
    demoImagePath
                  }) => {
    return (
        <div className="grid grid-cols-2">
            <div className="border">
                <div className="links">
                    <a href={githubLink} target="_blank">G</a>

                    <a href={demoLink} target="_blank">T</a>
                </div>

                <h4>{title}</h4>

                <p>{description}</p>

                <p>
                    {technologies && technologies.map((technology, index) => (
                        <span key={index}>{technology}</span>
                    ))}
                </p>
            </div>
            
            <div className="border"></div>
        </div>
    );
};

export default WorkCard;