import React, {Component} from "react";
import './ProjectList.css';

class ProjectList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="projects">
            {this.props.projects.map((project, index) =>
                <div key={index} className="project">
                    <img src={project.img} alt={project.category}/>
                </div>
            )}
        </div>
    }
}

export default ProjectList;
