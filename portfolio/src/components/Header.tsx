import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

interface HeaderProps {
  onHover: (text: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onHover }) => {
  const messages = [
    {
      id: "presentation",
      message: "Présentation de mon parcours."
    },
    {
      id: "cv",
      message: "Mon CV téléchargeable."
    },
    {
      id: "projects",
      message: "Mes projets personnels."
    },
    {
      id: "contact",
      message: "Mes informations de contact."
    },
  ];

  const getMessage = (id: string) => {
    const message = messages.find((item) => item.id === id);
    return message ? message.message : '';
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'success.main', paddingY: 1 }}>
      <Toolbar>
        <IconButton edge="start" component={Link} to="/" sx={{ marginRight: 2 }}>
          <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{ height: 50, width: 50, borderRadius: '50%' }}
          />
        </IconButton>

        <Typography
          component={Link} to="/"
          variant="h6"
          sx={{ flexGrow: 1, fontWeight: 'normal', textDecoration: "none", color: "white" }}
        >
          Samantha Deschaepmeester
        </Typography>

        <Button
          color="inherit"
          component={Link}
          to="/presentation"
          onMouseEnter={() => onHover(getMessage('presentation'))}
          onMouseLeave={() => onHover('')}
        >
          Présentation
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/projects"
          onMouseEnter={() => onHover(getMessage('projects'))}
          onMouseLeave={() => onHover('')}
        >
          Projets
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/cv"
          onMouseEnter={() => onHover(getMessage('cv'))}
          onMouseLeave={() => onHover('')}
        >
          CV
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/contact"
          onMouseEnter={() => onHover(getMessage('contact'))}
          onMouseLeave={() => onHover('')}
        >
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;