import React, {useEffect, useState} from 'react';
import {useStyles} from "./styles";
import {
    ChevronLeftOutlined,
    ChevronRightOutlined,
    LogoutOutlined
} from '@mui/icons-material';
import {useLocation, useNavigate} from "react-router-dom";
import {
    Box,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton, ListItemIcon,
    ListItemText,
    Typography,
    useTheme
} from "@mui/material";
import FlexBetween from "../flex-between";
import {navMenu} from "../../common/mocks/navigate";
import {tokens} from "../../theme";
import Logo from "../../assets/images/sidebar/logo.svg";

const SidebarComponent = ({isNoneMobile, drawerWidth, isOpen, setIsOpen}: any) => {
    const [active, setActive] = useState('')
    const classes = useStyles()
    const location = useLocation()
    const navigate = useNavigate()
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

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
                                <Box className={classes.brand}>
                                    <img src={Logo} alt="logo"/>
                                    <Typography
                                        variant="h1"
                                        color={theme.palette.mode === 'dark' ? colors.white.DEFAULT : colors.black.DEFAULT}
                                    >
                                        Demo
                                    </Typography>
                                </Box>
                                {!isNoneMobile && (
                                    <IconButton onClick={() => setIsOpen(!isOpen)}>
                                        <ChevronLeftOutlined/>
                                    </IconButton>
                                )}
                            </FlexBetween>
                        </Box>
                        <List>
                            {
                                navMenu.map((element) => {
                                    return (
                                        <ListItem key={element.id}>
                                            <ListItemButton onClick={() => navigate(`${element.path}`)}>
                                                <ListItemIcon>
                                                    {element.icon}
                                                </ListItemIcon>
                                                <ListItemText>
                                                    <Typography variant="body1">{element.name}</Typography>
                                                </ListItemText>
                                            </ListItemButton>
                                        </ListItem>
                                    )
                                })
                            }
                        </List>
                    </Box>
                </Drawer>
            )}
        </Box>
    );
};

export default SidebarComponent;