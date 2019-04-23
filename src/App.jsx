import React, { Component, lazy, Suspense } from "react";
import Axios from "axios";
import { Switch, Route } from "react-router-dom";
import history from "./history";
import style from "./App.module.css";

const Search = lazy(() => import("./Search/Search"));
const List = lazy(() => import("./List/List"));
const DetailInfo = lazy(() => import("./DetailInfo/DetailInfo"));

class App extends Component {
  state = {
    input: "",
    data: [],
    movie: []
  };
  getInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  getId = id => {
    let film = this.state.data.find(el => el.show.id === +id);
    console.log(film);
    this.setState({
      movie: film.show
    });
    history.push("/list/detail-info");
  };

  getData = e => {
    e.preventDefault();
    let input = this.state.input;
    Axios.get(`https://api.tvmaze.com/search/shows?q=${input}`)
      .then(res => {
        console.log(res.data);
        this.setState({
          data: res.data
        });
        history.push("/list");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className={style.main}>
        <Switch>
          <Suspense fallback={<p>Loading...</p>}>
            <Route
              exact
              path="/"
              render={() => (
                <Search
                  input={this.state.input}
                  getInput={this.getInput}
                  getData={this.getData}
                />
              )}
            />
            <Route
              exact
              path="/list"
              render={() => (
                <List
                  data={this.state.data}
                  getId={this.getId}
                />
              )}
            />
            <Route
              path="/list/detail-info"
              render={() => <DetailInfo movie={this.state.movie} />}
            />
          </Suspense>
        </Switch>
      </div>
    );
  }
}

export default App;
