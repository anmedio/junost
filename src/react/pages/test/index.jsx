import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Loader from '~/components/ui/loader';

// Test data
import config from './config';

class TestPage extends Component {
  static propTypes = {
    routes: PropTypes.objectOf(PropTypes.string).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.loadData();
  }

  // Эмуляция загрузки данных
  loadData() {
    const parent = this;
    const { routes } = this.props;

    console.log(`TestPage: Emulate request to ${routes.someRequest}`);
    setTimeout(function() {
      parent.setState({
        data: config.data,
        loading: false,
      });
    }, 1000);
  }

  prepareElements() {
    const { data } = this.state;

    const items = data.map(i => {
      return <p key={i}>{`Element #${i}`}</p>;
    });

    return items;
  }

  render() {
    const { loading } = this.state;

    // Loading, show loader
    if (loading) return <Loader />;

    // Loaded, show content
    return (
      <React.Fragment>
        <h1>🛠 TestPage</h1>
        {this.prepareElements()}
      </React.Fragment>
    );
  }
}

export default TestPage;
