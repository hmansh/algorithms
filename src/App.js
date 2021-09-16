import React from 'react';
import "./Styles/App.css";
import HeaderContainer from "./Components/Header/HeaderContainer";
import ContentContainer from "./Components/Content/ContentContainer";
import FooterComponent from "./Components/Footer/FooterComponent";
import { BrowserRouter as Router } from 'react-router-dom';
import Data from './Constants/ApplicationData';
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data : [],
    }
    this.handleUpvote = this.handleUpvote.bind(this);
  }

  componentDidMount(){
    this.setState({ data: Data });
  }

  handleUpvote(uid){
    const companies = this.state.data.map(company => {
      if (company.uid === uid){
        return Object.assign({}, company, {
          upvotes: ++company.upvotes,
        })
      } return company;
    });
    this.setState({ data: companies });
  }

  render () {
    return (
      <div className="App">
        <Router >
          <HeaderContainer/>
          <ContentContainer data={this.state.data} handleUpvote={this.handleUpvote}/>
          <FooterComponent/>
        </Router>
      </div>
    );
  }
}

export default App;
