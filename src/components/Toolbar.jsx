import React, { Component } from "react";
import './Toolbar.css';

class Toolbar extends Component {
    render() {
        const {filters, selected, onSelectFilter} = this.props;

        return <ul>
            {filters.map((filterName,index) =>
                <li key={index} className={filterName === selected? 'selected' : ''} onClick={() => onSelectFilter(filterName)}>
                    {filterName}
                </li>)}
        </ul>;
    }
}

export default Toolbar;
