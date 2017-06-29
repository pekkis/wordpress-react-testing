import React from 'react';
import wpapi from './api';

console.log(wpapi);

const wp = getter => Component => {

  class WpWrapper extends React.Component {

    state = {
      data: undefined,
    };

    async componentWillMount() {
      wpapi()
        .then(api => getter(api))
        .then(data => {
          this.setState({
            data,
          });
        });
    }

    render() {
      const { data } = this.state;

      if (!data) {
        return false;
      }

      return (
        <Component {...this.props} data={data} />
      );
    }
  }
  return WpWrapper;
}

export default wp;
