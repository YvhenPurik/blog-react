import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync }) => (
    console.log(value),
    
 <div>
    <button onClick={onIncrement}>Increment</button>{' '}
    <button onClick={onDecrement}>Decrement</button>{' '}
    <button onClick={onIncrementAsync}>Increment after 1 second</button>
    <hr />
    <div>Clicked: {value.counter} times</div>
  </div>
);

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    value: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => dispatch({ type: 'INCREMENT' }),
    onDecrement: () => dispatch({ type: 'DECREMENT' }),
    onIncrementAsync: () => {
      dispatch({ type: 'INCREMENT_ASYNNC' });
      dispatch({ type: 'log_out' });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
