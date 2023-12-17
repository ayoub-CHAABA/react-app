import React from 'react';
import { Formik, Form, Field, useField } from 'formik';
import { Dropdown } from 'semantic-ui-react';

interface FormField {
  type: string;
  name: string;
  label: string;
  options?: { key: string; text: string; value: string }[];
}

interface DynamicFormProps {
  config: FormField[];
  onSubmit: (values: any) => void;
}

// Custom input components
const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="form-field">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

const CustomDropdown = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <div className="form-field">
      <label>{label}</label>
      <Dropdown
        {...props}
        value={field.value}
        onChange={(_, data) => helpers.setValue(data.value)}
        onBlur={() => helpers.setTouched(true)}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

// DynamicForm component
const DynamicForm: React.FC<DynamicFormProps> = ({ config, onSubmit }) => {
  const initialValues = config.reduce((values, fieldConfig) => {
    values[fieldConfig.name] = '';
    return values;
  }, {});

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {formik => (
        <Form>
          {config.map((field, index) => {
            switch (field.type) {
              case 'text':
                return <CustomInput key={index} {...field} />;
              case 'dropdown':
                return <CustomDropdown key={index} {...field} />;
              case 'date':
                return <CustomInput key={index} type="date" {...field} />;
              default:
                return null;
            }
          })}
          <button type="submit" className="submit-button">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default DynamicForm;
