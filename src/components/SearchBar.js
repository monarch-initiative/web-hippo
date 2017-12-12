import React, { Component } from 'react';
import { Form, Select, Button } from 'semantic-ui-react';
import queryString from 'query-string';

class SearchBar extends Component {
  state = {
    genes: '',
    condition: 'OR'
  };
  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => {
    const searchCriteria = queryString.stringify(this.state);
    this.props.history.push('/query?' + searchCriteria);
    this.props.onSearch && this.props.onSearch(searchCriteria);
  };

  componentDidMount() {
    if (this.props.location.search) {
      const parsed = queryString.parse(this.props.location.search);
      const { genes, condition } = parsed;
      if (genes && condition) {
        this.setState({ genes, condition });
      }
    }
  }

  render() {
    const conditionOptions = [
      { key: 'any', text: 'Any', value: 'OR' },
      { key: 'all', text: 'All', value: 'AND' }
    ];
    const { loading } = this.props;
    return (
      <div style={{ marginBottom: 64 }}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            fluid
            name="genes"
            size="big"
            loading={loading}
            placeholder="Search for genes..."
            value={this.state.genes}
            onChange={this.handleChange}
          >
            <input />
            <Select
              name="condition"
              compact
              options={conditionOptions}
              value={this.state.condition}
              onChange={this.handleChange}
            />
            <Button loading={loading} type="submit" icon="search" />
          </Form.Input>
        </Form>
      </div>
    );
  }
}

export default SearchBar;
