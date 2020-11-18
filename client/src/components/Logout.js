import React from 'react';
import { Form, Field } from 'react-final-form';

const renderInput = ({ input, meta }) => (
  <input {...input} type="text" error={meta.error} />
)

const onSubmit = values => {
  alert(JSON.stringify(values));
};

const FinalForm = () => (
  <Form
    onSubmit={onSubmit}
    render={({handleSubmit}) => (
      <div>
        <h2>Final Form</h2>
        <form onSubmit={handleSubmit}>
          <Field
            name="customer=id"
            component={renderInput}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
  )}
  />
);

export default FinalForm;
