import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';

const ProjectsLayout: React.FC = () => {
  const projects = [
    { title: 'Projet 1', description: 'Description du projet 1', image: '/images/project1.png' },
    { title: 'Projet 2', description: 'Description du projet 2', image: '/images/project2.png' },
  ];

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Mes Projets
      </Typography>
      <Grid container spacing={2}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography variant="h6">{project.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
              <Button size="small" sx={{ margin: 1 }} variant="contained" color="primary">
                Voir plus
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectsLayout;
