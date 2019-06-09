import React,{ Component } from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';
import Home from './routes/Home';
import TopbarContainer from './containers/TopbarContainer';
import Liquidity from './routes/Liquidity';
import './assets/scss/app.scss';
import CoinContainer from './containers/CoinContainer';

class App extends Component{
    componentDidMount(){
        this.props.fetchList();
    }
    render(){
        return(
            <BrowserRouter>
                <TopbarContainer />
                <Switch>
                    <Route path="/liquidity" render={props => <CoinContainer Component={Liquidity} />} />
                    <Route path="/" component={Home} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;