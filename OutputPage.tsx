//Placez ce fichier dans src/routes/form/.
import React from 'react';
import { Typography, Button } from '@mui/material';

const OutputPage = () => {
  // Exemple de texte et de bouton de téléchargement
  const handleDownload = () => {
    // Logique pour gérer le téléchargement d'un fichier
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Output Text Here
      </Typography>
      <Button variant="contained" onClick={handleDownload}>
        Download
      </Button>
    </div>
  );
};

export default OutputPage;
