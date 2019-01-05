import React, { Suspense, lazy, Component } from "react";
import "./App.scss";
const Routes = lazy(() => import("./Routes"));
class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div className="App">
        <Suspense fallback={<div>...Loading</div>}>
          <Routes />
        </Suspense>
      </div>
    );
  }
}

export default App;
