import { connect } from "react-redux";
import MessageCreationForm, {formName} from "../components/message_creation_form";
import { sendMessage} from '../actions/send_message';
import {v1 as generateUniqueId} from 'uuid';
import * as moment from "moment";
import {reduxForm} from 'redux-form';

export const validateUsername = ({username = ""}) => {
  if (username === "") {
    return {username: "Please enter username"};
  }
  return {};
};

export const validateMessage = ({text = ""}) => {
  if (text === "") {
    return {text: "Please enter message"};
  }
  return {};
};

export const validate = values =>
  Object.assign({}, validateUsername(values), validateMessage(values));

const MessageCreationFormContainer =  reduxForm({
  validate,
  form: formName
})(MessageCreationForm);

const onSubmit = (values) => {
  return sendMessage({
    ...values,
    id: generateUniqueId(),
    time: moment.utc()
  });
};

export default connect(
  () => ({}),
  { onSubmit } //actions
)(MessageCreationFormContainer);

