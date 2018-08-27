import React, { Component } from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import Table from "./Table";


class App extends Component {
  render() {
    return (
      <div className="App">
        <DataProvider endpoint="api/lead/" render={data => <Table data={data} />} />
      </div>
    );
  }
}

export default App;