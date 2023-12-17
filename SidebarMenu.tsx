import React from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';

interface SidebarMenuProps {
  forms: { [key: string]: any }; // Replace `any` with the type of your forms configuration
  onSelectForm: (formKey: string) => void;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ forms, onSelectForm }) => {
  return (
    <Menu vertical>
      <Dropdown item text="Forms">
        <Dropdown.Menu>
          {Object.keys(forms).map(formKey => (
            <Dropdown.Item 
              key={formKey}
              onClick={() => onSelectForm(formKey)}
            >
              {formKey}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </Menu>
  );
};

export default SidebarMenu;