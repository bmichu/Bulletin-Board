import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { Link } from '@material-ui/core';
import { FaBug } from 'react-icons/fa';

import styles from './NotFound.module.scss';

const Component = ({ className }) => (
  <div className={clsx(className, styles.root)}>
    <h1 className={styles.paperCard__textError}>
      <FaBug /> 404
    </h1>
    <h1 className={styles.page}>Page not found</h1>
    <h3>We&apos;re sorry, the page you requested could not be found. Please go back to the homepage or contact us.</h3>
    <Link href='/'>
      <h2>Homepage</h2>
    </Link>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as NotFound,
  Component as NotFoundComponent,
};
