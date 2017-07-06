import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const propTypes = {
  controlId: PropTypes.string,
  isValid: PropTypes.bool,
  validationState: PropTypes.oneOf(['success', 'warning', 'error'])
};

const defaultProps = {
  controlId: undefined,
  isValid: undefined,
  validationState: undefined
};

const childContextTypes = {
  formGroup: React.PropTypes.object.isRequired
};

class FormGroup extends React.Component {
  getChildContext() {
    const { controlId, validationState } = this.props;
    return {
      formGroup: {
        controlId,
        validationState
      }
    };
  }

  render() {

    const { validationState, className, children, controlId, isValid, ...props } = this.props;
    const classes = classNames('form-group', {
      [`has-${validationState}`]: !!validationState,
      'has-success': !validationState && isValid,
      'has-error': !validationState && isValid === false
    }, className);

    return (
      <div
        {...props}
        className={classes}
      >
        {children}
      </div>
    );
  }

}

FormGroup.propTypes = propTypes;
FormGroup.defaultProps = defaultProps;
FormGroup.childContextTypes = childContextTypes;

export default FormGroup;
