import React from 'react';
import { Formik, Form, Field } from 'formik';

// Assuming you have a type for your form fields
interface FormField {
  type: string;
  name: string;
  placeholder?: string;
  label: string;
}

interface DynamicFormProps {
  config: FormField[]; // Array of form field configurations
  onSubmit: (values: any) => void; // Replace 'any' with a more specific type if possible
}

const DynamicForm: React.FC<DynamicFormProps> = ({ config, onSubmit }) => {
  // Initialize form values
  const initialValues = config.reduce((values, fieldConfig) => {
    values[fieldConfig.name] = '';
    return values;
  }, {});

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        {config.map((field, index) => (
          <div key={index} className="form-field">
            <label htmlFor={field.name}>{field.label}</label>
            <Field name={field.name} type={field.type} placeholder={field.placeholder} />
          </div>
        ))}
        <button type="submit" className="submit-button">Submit</button>
      </Form>
    </Formik>
  );
};

export default DynamicForm;
