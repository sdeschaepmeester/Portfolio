import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import Header from '../components/Header';
import background from '../assets/background.png';
import CursorEffect from '../components/CursorEffect';

const Home: React.FC = () => {
    const location = useLocation();
    const [hoverText, setHoverText] = useState<string>('');

    const handleHover = (text: string) => {
        setHoverText(text);
    };

    return (
        <div style={{
            overflow: 'hidden',
            overflowX: 'hidden',
            overflowY: 'hidden',
        }}>
            <Header onHover={handleHover} />
            {location.pathname === '/' && (
                <>
                    <CursorEffect />
                    <Box
                        sx={{
                            width: '100%',
                            height: 'calc(100vh - 80px)',
                            backgroundImage: `url(${background})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
                    />
                    <Box sx={{
                        position: 'absolute',
                        top: '33%',
                        left: '60%',
                        transform: 'translate(-50%, -50%) rotate(1deg)',
                    }}>
                        {hoverText && (
                            <Typography variant="h6" sx={{ color: 'grey' }}>
                                {hoverText}
                            </Typography>
                        )}
                    </Box>
                </>
            )}
            <Outlet />
        </div>
    );
};

export default Home;