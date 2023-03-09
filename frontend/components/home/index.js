import { Box, Toolbar, Typography } from '@mui/material';
import HomeCarousel from './homecarousel';
export default function HomeComponent() {
    return (
        <Box component="main" sx={{ p: 3 }}>
            <Toolbar />
            <HomeCarousel />
        </Box>
    )
}   