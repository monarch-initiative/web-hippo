import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';

class SearchBar extends Component {
  render() {
    const { loading } = this.props;
    return (
      <div style={{ marginBottom: 64 }}>
        <Input
          fluid
          size="big"
          loading={loading}
          icon="search"
          placeholder="Search for genes..."
        />
      </div>
    );
  }
}

export default SearchBar;
