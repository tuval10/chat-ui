import React, {Component} from 'react'
import {Field, change, untouch} from 'redux-form';
import PropTypes from "prop-types";
export const formName = 'MessageCreationForm';

const inputComponent = (field) => {
  let {
    meta: {touched, error: fieldError},
    type,
    placeholder,
    input,
  } = field;
  const error = touched ? fieldError : "";
  const errorClass = (error ? "error-text" : "");
  return (
    <div className={"text-field-container " + input.name}>
      <input type={type} placeholder={placeholder} {...input} />
      <span className={errorClass}>{error}</span>
    </div>
  );
};

class MessageCreationForm extends Component {
  onSubmit(values) {
    this.props.dispatch(change(formName, 'text', ''));
    this.props.dispatch(untouch(formName, 'text'));
    this.props.onSubmit(values);
  }

  render() {
    let {handleSubmit, pristine, submitting} = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}
            className="form-container">
        <div className="fields-container">
          <Field
            name="username"
            component={inputComponent}
            type="text"
            placeholder="Your nickname..."
          />
          <Field
            name="text"
            component={inputComponent}
            type="text"
            placeholder="Add a message..."
          />
        </div>
        <div className="send-container">
            <button type="submit" className="send-button brand-bg-color"
                    disabled={pristine || submitting}>
              Send
            </button>
        </div>
      </form>
    );
  }
}

MessageCreationForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  validate: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired
};

export default MessageCreationForm;