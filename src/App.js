import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Route, withRouter } from 'react-router-dom';
import UsersContainer from './Components/Users/UsersContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import LoginPage from './Components/Login/Login';
import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import { compose } from 'redux';
import Preloader from './Components/common/Preloader/Preloader';
import store from './redux/redux-store';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { withSuspens } from './Components/Hoc/withSuspens';

//import ProfileContainer from './Components/Profile/ProfileContainer';
// import DialogsContainer from './Components/Dialogs/DialogsContainer';
const DialogsContainer = React.lazy(() =>
  import('./Components/Dialogs/DialogsContainer')
);
const ProfileContainer = React.lazy(() =>
  import('./Components/Profile/ProfileContainer')
);

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={withSuspens(DialogsContainer)} />
          <Route
            path="/profile/:userId?"
            render={withSuspens(ProfileContainer)}
          />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <LoginPage />} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const SamuraiJSApp = (props) => {
  return (
    <HashRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  );
};
export default SamuraiJSApp;
