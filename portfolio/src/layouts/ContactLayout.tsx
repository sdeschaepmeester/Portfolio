import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const ContactLayout: React.FC = () => {
  return (
    <Box sx={{ padding: 2, maxWidth: 600, margin: 'auto' }}>
      <Typography variant="h4" gutterBottom>
        Contactez-moi
      </Typography>
      <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField label="Nom" variant="outlined" required />
        <TextField label="Email" variant="outlined" required type="email" />
        <TextField label="Message" variant="outlined" multiline rows={4} required />
        <Button type="submit" variant="contained" color="primary">
          Envoyer
        </Button>
      </Box>
    </Box>
  );
};

export default ContactLayout;
