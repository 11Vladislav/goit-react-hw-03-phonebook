import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import { StyledForm, Input  } from './ContactForm.styled';
import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.string().required(),
});

const initialValues = {
    name: '',
    number: '',
    id : nanoid(),
}

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

    handleSubmit = (values, {resetForm}) => {
        this.props.onAddContact(values);
        resetForm();
    }

    render() {
        return (
            <Formik initialValues={initialValues}
                validationSchema={schema}
                onSubmit={this.handleSubmit}
                autoComplete='off'>
                <StyledForm>
                    <label htmlFor="name">Name
                        <Input name="name" type="text"/>
                        <ErrorMessage name="name" component="div" />
                    </label>
                    <label htmlFor="name">Number
                        <Input name="number" type="tel" />
                        <ErrorMessage name="number" component="div" />
                    </label>    
                        <button type="submit">Add contact</button>
                    </StyledForm>
            </Formik>
        );
    }
}

export default ContactForm;

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  onSubmit: PropTypes.func,
}