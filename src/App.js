import React from 'react';
import "./Styles/App.css";
import HeaderContainer from "./Components/Header/HeaderContainer";
import ContentContainer from "./Components/Content/ContentContainer";
import FooterComponent from "./Components/Footer/FooterComponent";
class App extends React.Component {
  render () {
    return (
      <div className="App">
        <HeaderContainer/>
        <ContentContainer/>
        <FooterComponent/>
      </div>
    );
  }
}

export default App;
