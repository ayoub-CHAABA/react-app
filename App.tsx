import React, { useState } from 'react';
import SidebarMenu from './SidebarMenu';
import DynamicForm from './DynamicForm';
import OutputPage from './OutputPage';
import formConfigs from './formConfigs';

function App() {
  const [currentFormKey, setCurrentFormKey] = useState<string | null>(null);
  const [formData, setFormData] = useState<any | null>(null);  // Replace 'any' with a specific type

  const handleSelectForm = (formKey: string) => {
    setCurrentFormKey(formKey);
    setFormData(null);  // Reset form data on form change
  };

  const handleSubmit = (values: any) => {
    setFormData(values);  // Replace 'any' with a specific type
  };

  return (
    <div className="App">
      <SidebarMenu forms={formConfigs} onSelectForm={handleSelectForm} />
      {!formData && currentFormKey && (
        <DynamicForm config={formConfigs[currentFormKey]} onSubmit={handleSubmit} />
      )}
      {formData && <OutputPage data={formData} />}
    </div>
  );
}

export default App;
