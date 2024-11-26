import React from 'react';
import { Box, Typography } from '@mui/material';

const PresentationLayout: React.FC = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Bienvenue !
      </Typography>
      <Typography variant="body1">
        Voici une présentation de mon portfolio. Explorez mes projets et mon parcours.
      </Typography>
    </Box>
  );
};

export default PresentationLayout;
