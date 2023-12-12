//Placez ce fichier dans src/routes/form/.
import React from 'react';
import { TextField, Switch, FormControlLabel, Checkbox, Button } from '@mui/material';

const InputForm = () => {
  // Exemple de gestionnaire pour soumettre le formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    // Logique pour gérer la soumission du formulaire
  };

  return (
    <form onSubmit={handleSubmit} noValidate autoComplete="off">
      <TextField id="text-field" label="Text" variant="outlined" fullWidth margin="normal" />
      <TextField id="date-field" label="Date" type="date" InputLabelProps={{ shrink: true }} fullWidth margin="normal" />
      <TextField id="number-field" label="Number" type="number" fullWidth margin="normal" />
      <FormControlLabel control={<Switch name="checkedA" />} label="Boolean Switch" />
      <FormControlLabel control={<Checkbox name="checkedB" />} label="Boolean Checkbox" />
      <Button variant="contained" component="label">
        Upload File
        <input type="file" hidden />
      </Button>
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default InputForm;
