import React, { Component } from 'react';

class Searchbar extends Component{
    render(){
        return(
            <form className="form-inline my-2 my-lg-0">
				<input className="form-control mr-sm-2" type="text" placeholder="search"></input>
				<button className="btn btn-outline-info my-2 my-sm-0" type="submit" style={{ color : '#82CAFA', outlineColor:'#82CAFA'}}>Search</button>
			</form>
        );
    }
}

export default Searchbar