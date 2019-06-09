import { connect } from 'react-redux';

import { setNumber } from '../store/actions';
import Topbar from '../components/Topbar';

export default connect(null, { setNumber })(Topbar)