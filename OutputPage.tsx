import React from 'react';

interface OutputPageProps {
  data: any;  // Replace 'any' with the specific type of your form data
}

const OutputPage: React.FC<OutputPageProps> = ({ data }) => {
  return (
    <div>
      <h2>Form Submission</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default OutputPage;
