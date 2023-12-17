// formAConfig.ts
// Define the structure of a single form field
export interface FormField {
  type: string; // The type of the form field (e.g., 'text', 'dropdown', 'date', etc.)
  name: string; // The name of the field (used as a key)
  label: string; // The label of the field (displayed on the form)
  options?: Option[]; // Optional: Used for dropdown fields to define the dropdown options
}

// Define the structure of a dropdown option
export interface Option {
  key: string; // Unique key for each option
  text: string; // Text to be displayed
  value: string; // The value of the option
}

// Define a type for the forms configuration
export type FormsConfig = { [formName: string]: FormField[] };

// Example configuration for Form A
export const formAConfig: FormField[] = [
  {
    type: 'text',
    name: 'indexName',
    label: 'Index Name',
  },
  {
    type: 'dropdown',
    name: 'scope',
    label: 'Scope',
    options: [
      { key: 'option1', text: 'Option 1', value: 'option1' },
      { key: 'option2', text: 'Option 2', value: 'option2' },
      // Add more options as needed
    ],
  },
  {
    type: 'date',
    name: 'startDate',
    label: 'Start Date',
  },
  {
    type: 'date',
    name: 'endDate',
    label: 'End Date',
  },
  // Add more fields as needed
];

// You can add more form configurations here, similar to formAConfig
