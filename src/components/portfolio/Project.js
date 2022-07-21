import React, { Component } from 'react';

class Project extends Component {
    state = {
        showInfo: false
    }

    handleInfo = () => {
        this.setState({
            showInfo:!this.state.showInfo
        })
    }


    render() {
        let {title, languagesIcons, link, resume, img} = this.props.item;
        return (
            <div className='project'>
                <div className='icons'>
                    {languagesIcons.map(icon => 
                        <i className={icon} key={icon}></i>
                    )}
                </div>
                <h3>{title}</h3>
                <img src={img} alt='/' onClick={this.handleInfo}/>
                <span className='infos' onClick={this.handleInfo}>
                    <i className='fas fa-plus-circle'></i>
                </span>

                {
                    this.state.showInfo && (
                        <div className="showInfos">
                            <div className="infosContent">
                                <div className="head">
                                    <h2>{title}</h2>
                                    <div className="sourceCode">
                                        <a href={link} rel="noopener noreferrer" className='button' target='_blank'>Code source</a>
                                    </div>
                                </div>

                                <p className="text">{resume}</p>

                                <div className="button return" onClick={this.handleInfo}>
                                    Retour
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default Project;