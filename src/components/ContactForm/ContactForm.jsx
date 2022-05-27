import PropTypes from 'prop-types';
import { Form, Formik, Field } from 'formik';
import s from './ContactForm.module.css';

export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = ({ name, phone }, actions) => {
    const isSuccess = onSubmit(name, phone);

    if (isSuccess) actions.resetForm();
  };

  return (
    <Formik initialValues={{ name: '', phone: '' }} onSubmit={handleSubmit}>
      <Form className={s.form}>
        <label className={s.formLabel}>
          <span className={s.formTitle}>Name</span>
          <Field
            className={s.fromInput}
            type="text"
            placeholder="Please enter contact name"
            name="name"
          />
        </label>

        <label className={s.formLabel}>
          <span className={s.formTitle}>Phone number</span>
          <Field
            className={s.fromInput}
            type="tel"
            placeholder="Please enter contact phone number"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            s
          />
        </label>

        <button className={s.formButton} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default ContactForm;
