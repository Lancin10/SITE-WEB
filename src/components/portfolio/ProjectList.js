import React, { Component } from 'react';
import { projectsData } from '../../data/portfolioData'
import Project from './Project';


class ProjectList extends Component {
    state = {
        projects:projectsData,
        radios: [
            {id:1, value: "Python"},
            {id:2, value: "RShiny"},
            {id:3, value: "Dataviz"},
            {id:4, value: "BI"},
            {id:5, value: "ETL"},
        ],
        selectedRadio:"",
    };
    handleRadio = (event) => {
        let radio = event.target.value;
        this.setState({selectedRadio: radio});
    }
    
    render() {
        let {projects, radios, selectedRadio} = this.state;
        let selectedProjects = projects
        if (selectedRadio!=="") {
            selectedProjects = projects.filter(item => item.languages.includes(selectedRadio));
        }
        return (
            <div className="portfolioContent">
                <ul className="radioDisplay">
                    {
                        radios.map((radio) => {
                            return (
                                <li key={radio.id}>
                                <input 
                                    type="radio"
                                    name="radio"
                                    value={radio.value}
                                    id={radio.value}
                                    checked={radio.value === selectedRadio}
                                    onChange={this.handleRadio}
                                />
                                <label htmlFor={radio.value}>{radio.value}</label>
                            </li>
                            )
                        }
                        )
                    }
                </ul>
                <div className="projects">
                    {
                        selectedProjects
                        .map(item => {
                            return (
                                <Project 
                                    key={item.id}
                                    item={item}

                                />
                            )
                        }) 
                    }
                </div>
            </div>
        );
    }
}

export default ProjectList;
