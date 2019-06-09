import { connect } from 'react-redux';
import { fetchList } from '../store/actions';
import App from './../App';

export default connect(null, { fetchList })(App)