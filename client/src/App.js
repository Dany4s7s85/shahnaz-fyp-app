import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home.js";
import About from "./About.js";
import Room from "./RoomOrder.js";
import foodDetail from "./FoodDetail.js";
import roomDetail from "./RoomDetail.js";
import Food from "./FoodOrder.js";
import Features from "./Features.js";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/aboutus" component={About} />
        <Route path="/room" component={Room} />
        <Route path="/detail" component={foodDetail} />
        <Route path="/detail2" component={roomDetail} />
        <Route path="/food" component={Food} />
        <Route path="/features" component={Features} />
      </Switch>
    </div>
  );
}

export default App;
