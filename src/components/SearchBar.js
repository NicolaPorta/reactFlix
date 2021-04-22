import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        }
    }

    changeText = (event) => {
        this.setState({
            searchText: event.target.value
        })
        this.props.onSearchMovie(event.target.value); //comment for test onClickChange function
    }

    onClickChange = (event) => {
        event.preventDefault();
        if(this.state.searchText !== '') {
            this.props.onSearchMovie(this.state.searchText)
            this.props.clickScrolling();
        }
    }

    render() {
        return(
            <form className="form-group d-flex mr-5 mb-0">
                <input  type="text" className="form-control mr-2" placeholder="Search" 
                        value={this.state.searchText}
                        onChange={this.changeText}/>
                <button className="btn btn-dark" onClick={this.onClickChange}>Search</button>
            </form>
        )
    }
}

export default SearchBar;