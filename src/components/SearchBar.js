import React from "react";

class SearchBar extends React.Component {
  state = { keyword: "" };
  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.keyword);
  };
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Search Video</label>
            <input
              type="text"
              value={this.state.keyword}
              onChange={e => this.setState({ keyword: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
