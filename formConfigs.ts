// formAConfig.ts

interface FormField {
  type: string;
  name: string;
  label: string;
  options?: { key: string; text: string; value: string }[];
}

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
];
