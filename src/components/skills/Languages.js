import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        languages: [
            {id: 1, value: "Python", xp:8.5},
            {id: 2, value: "R", xp:8},
            {id: 3, value: "SQL", xp:8},
            {id: 4, value: "Pyspark", xp:6.5},
        ],
        
        Tools: [
            {id: 1, value: "RShiny", xp:8},
            {id: 3, value: "Power BI", xp:7.5},
            {id: 2, value: "Pentaho", xp:7.5},
            {id: 4, value: "Streamlit", xp:6.5},
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
