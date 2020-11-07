import React from 'react';
import '../styles/App.css';
import MainView, {SiteData} from "./MainView";
import client from "../apolloClient";
import {gql} from "@apollo/client";
import SiteModel from "../store/site/SiteModel";
import {FETCH_SITES} from "../store/site/Queries/FETCH_SITES";

class App extends React.Component {
state = {data: [] as SiteModel[], loading: null, errors: null}

componentDidMount() {
  client.query({
    query: FETCH_SITES
  }).then(response => this.setState({
    data: response.data.sites,
    loading: response.data.loading,
    errors: response.data.errors
  } ))

}

  render() {

    function onSubmit() {
      console.log("Click!!!")
    }

    return (
        <div data-testid="app" className="App">
      <MainView onSubmit={onSubmit} data={this.state.data} loading={this.state.loading} errors={this.state.errors}> </MainView>
    </div>
    )
  }
}


export default App;
