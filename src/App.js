import 'antd/dist/antd.css'
import HeaderView from './MovieComponent/Header/Header'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Screen from './MovieComponent/Screen';
import AllCart from './MovieComponent/TotalCart/AllCart';
import Footer from './MovieComponent/Footer/Footer'


function App() {
  return (
    <div>
       <Router>
        <HeaderView />
        <Switch>
          <Route path="/cart" exact component={AllCart} />
          <Route path="/" exact component={Screen} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;