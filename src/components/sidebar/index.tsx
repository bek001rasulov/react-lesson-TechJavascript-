import React, {useEffect, useState} from 'react';
import {useStyles} from "./styles";
import {
    HomeOutlined,
    ChevronLeftOutlined,
    ChevronRightOutlined,
    AutoGraphOutlined,
    MenuBookOutlined,
    SettingsOutlined,
    LogoutOutlined
} from '@mui/icons-material';
import {useLocation, useNavigate} from "react-router-dom";
import {Box, Drawer, IconButton, Typography, useTheme} from "@mui/material";
import FlexBetween from "../flex-between";

const SidebarComponent = ({isNoneMobile, drawerWidth, isOpen, setIsOpen}: any) => {
    const [active, setActive] = useState('')
    const classes = useStyles()
    const location = useLocation()
    const navigate = useNavigate()
    const theme = useTheme()

    useEffect(() => {
        setActive(location.pathname.substring(1))
    }, [location.pathname])


    return (
        <Box component='nav'>
            {isOpen && (
                <Drawer
                    anchor='left'
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                    variant='persistent'
                    sx={{
                        width: drawerWidth,
                        '& .MuiDrawer-paper': {
                            color: theme.palette.secondary.main,
                            backgroundColor: theme.palette.primary.main,
                            boxSizing: 'border-box',
                            width: drawerWidth
                        }
                    }}
                >
                    <Box width='100%'>
                        <Box>
                            <FlexBetween>
                                <Box display='flex' alignItems='center' gap='10px'>
                                    <Typography>Demo</Typography>
                                </Box>
                                {!isNoneMobile && (
                                    <IconButton onClick={() => setIsOpen(!isOpen)}>
                                        <ChevronLeftOutlined/>
                                    </IconButton>
                                )}
                            </FlexBetween>
                        </Box>
                    </Box>
                </Drawer>
            )}
        </Box>
    );
};

export default SidebarComponent;