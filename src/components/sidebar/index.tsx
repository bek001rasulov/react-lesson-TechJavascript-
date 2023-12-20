import React, {useEffect, useState} from 'react';
import {useStyles} from "./styles";
import {
    ChevronLeftOutlined,
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
import {ISidebarProps} from "../../common/types/sidebar";

const SidebarComponent: React.FC<ISidebarProps> = ({isNoneMobile, drawerWidth, isOpen, setIsOpen}: ISidebarProps): JSX.Element => {
    const [active, setActive] = useState('')
    const classes = useStyles()
    const location = useLocation()
    const navigate = useNavigate()
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    useEffect(() => {
        setActive(location.pathname)
    }, [location.pathname])


    return (

                <Drawer
                    anchor='left'
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                    variant='persistent'
                    sx={{
                        width: isOpen ? drawerWidth : 0,
                        '& .MuiDrawer-paper': {
                            color: theme.palette.secondary.main,
                            backgroundColor: theme.palette.primary.main,
                            boxSizing: 'border-box',
                            width: isOpen ? drawerWidth : 0
                        },
                        transition: 'all 0.225s'
                    }}
                >
                    <Box className={classes.navBlock}>
                        <Box>
                            <FlexBetween>
                                <Box className={classes.brand}>
                                    <img src={Logo} alt="logo"/>
                                    <Typography
                                        variant="h1"
                                        className={classes.brandTitle}
                                    >
                                        Demo
                                    </Typography>
                                </Box>
                                {isNoneMobile && (
                                    <IconButton onClick={() => setIsOpen(!isOpen)}>
                                        <ChevronLeftOutlined/>
                                    </IconButton>
                                )}
                            </FlexBetween>
                        </Box>
                        <List className={classes.navList}>
                            {
                                navMenu.map((element) => {
                                    return (
                                        <ListItem key={element.id} >
                                            <ListItemButton className={active === element.path ? `${classes.navItem} ${classes.active}` : classes.navItem} onClick={() => navigate(`${element.path}`)} >
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
                    <Box width='100%'>
                        <List>
                            <ListItem>
                                <ListItemButton className={classes.navItem}>
                                    <ListItemIcon>
                                        <LogoutOutlined/>
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography>Logout</Typography>
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Box>
                </Drawer>

    );
};

export default SidebarComponent;