import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import _styles from './App.css';

export default class App extends Component {
  static propTypes = {
    title: PropTypes.string,
    styles: PropTypes.shape({}),
  };

  static defaultProps = {
    title: 'Hello React!',
    styles: _styles,
  };

  render() {
    const { styles, title } = this.props;

    return (
      <div className={cx(styles.root, styles.container)}>
        {title}
      </div>
    );
  }
}
