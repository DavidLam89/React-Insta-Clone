import React from 'react';

const authenticate = App => LoginPage =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        userLoggedIn: false
      };
    }

    componentDidMount() {
      if (!localStorage.getItem('user')) {
        this.setState({ userLoggedIn: false });
      } else {
        this.setState({ userLoggedIn: true });
      }
    }

    render() {
      if (this.state.userLoggedIn) return <App />;
      return <LoginPage />;
    }
  };

export default authenticate;