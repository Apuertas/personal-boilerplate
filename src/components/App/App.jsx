import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import _styles from './App.css';

const noOp = () => {};

export default class App extends Component {
  static propTypes = {
    counter: PropTypes.number,

    increment: PropTypes.func,
    decrement: PropTypes.func,

    styles: PropTypes.shape({}),
  };

  static defaultProps = {
    counter: 0,

    increment: noOp,
    decrement: noOp,

    styles: _styles,
  };

  render() {
    const { counter, increment, decrement, styles } = this.props;

    return (
      <div className={cx(styles.root)}>
        <div className={cx(styles.title)}>
          {counter}
        </div>
        <div className={cx(styles.content)}>
          <div className={cx(styles.controls)}>
            <div role="presentation" className={cx(styles.button)} onClick={increment}>+</div>
            <div role="presentation" className={cx(styles.button)} onClick={decrement}>-</div>
          </div>
        </div>
      </div>
    );
  }
}
