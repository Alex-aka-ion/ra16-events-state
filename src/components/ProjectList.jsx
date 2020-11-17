import React, {Component} from "react";
import './ProjectList.css';

class ProjectList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { projects } = this.props;
        const pixelHeight = projects.length*130;

        return <div className="projects" style={{height:pixelHeight}}>
            {projects.map((project, index) =>
                <div key={index} className="project">
                    <img src={project.img} alt={project.category}/>
                </div>
            )}
        </div>
    }
}

export default ProjectList;
