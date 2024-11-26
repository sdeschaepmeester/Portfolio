import React from 'react';
import { Box, Button } from '@mui/material';
import CV from '../assets/CV.png';

const CVLayout: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        padding: 2,
        textAlign: 'center',
        overflowY: 'auto',
      }}
    >
      <Button
        variant="contained"
        sx={{
          marginBottom: 2,
          backgroundColor: 'success.light',
          '&:hover': {
            backgroundColor: 'success.main',
          }
        }}
        href={CV}
        download="CV_Samantha_Deschaepmeester.pdf"
      >
        Télécharger le CV
      </Button>
      <Box sx={{ width: '100%', marginBottom: 20 }}>
        <img src={CV} alt="Mon CV" style={{ width: '60%', height: '100%' }} />
      </Box>
    </Box>
  );
};

export default CVLayout;
