npm install react-dropzone

npm install react-dropzone semantic-ui-react
import React from 'react';
import { Formik, Form, Field, useField } from 'formik';
import { Dropdown } from 'semantic-ui-react';
import { DropzoneArea } from 'react-dropzone';

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

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="form-field">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
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
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </div>
  );
};

const CustomCheckbox = ({ label, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <div className="form-field">
      <label className="checkbox-label">
        <input {...field} type="checkbox" />
        {label}
      </label>
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </div>
  );
};

const CustomFileUpload = ({ label, ...props }) => {
  const [field, , helpers] = useField(props);
  return (
    <div className="form-field">
      <label>{label}</label>
      <DropzoneArea
        {...props}
        onDrop={(files) => helpers.setValue(files)}
      />
    </div>
  );
};

const DynamicForm: React.FC<DynamicFormProps> = ({ config, onSubmit }) => {
  const initialValues = config.reduce((values, fieldConfig) => {
    values[fieldConfig.name] = fieldConfig.type === 'checkbox' ? false : '';
    return values;
  }, {});

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        {config.map((field, index) => {
          switch (field.type) {
            case 'text':
              return <CustomInput key={index} {...field} />;
            case 'dropdown':
              return <CustomDropdown key={index} {...field} />;
            case 'boolean':
              return <CustomCheckbox key={index} {...field} />;
            case 'file':
              return <CustomFileUpload key={index} {...field} />;
            default:
              return null;
          }
        })}
        <button type="submit" className="submit-button">Submit</button>
      </Form>
    </Formik>
  );
};

export default DynamicForm;
