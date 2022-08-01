import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        languages: [
            {id: 1, value: "R", xp:8.8},
            {id: 2, value: "Python", xp:7},
            {id: 3, value: "SQL", xp:7},
            {id: 4, value: "Pyspark", xp:6.5},
        ],
        
        Tools: [
            {id: 1, value: "Shiny", xp:8.5},
            {id: 2, value: "Pentaho", xp:7},
            {id: 3, value: "Power BI", xp:5.5},
            {id: 4, value: "Django", xp:5.2},
        ]
    }
    render() {
        let {languages, Tools} = this.state;

        return (
            <div className="knowledges">
                <ProgressBar 
                    data={languages}
                    className="languagesDisplay"
                    title="langages"
                />
                <ProgressBar 
                    data={Tools}
                    className="ToolsDisplay"
                    title="Outils"
                />
            </div>
        );
    }
}

export default Languages;
