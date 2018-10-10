import { connect } from 'react-redux';

import { increment, decrement } from '../actions/counter';
import App from '../components/App/App';

const mapStateToProps = (state) => {
  const { counter } = state;
  return { counter };
};

export default connect(mapStateToProps, { increment, decrement })(App);
