import React, {useContext} from 'react';
import {Box, Grid, IconButton, InputBase, useTheme} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from '@mui/icons-material/Search';
import {useAppSelector} from "../../utils/hook";
import {ColorModeContext} from "../../theme";
import {useStyles} from "./styles";

const TopBarComponent = () => {
    const theme = useTheme()
    const colorMode: any = useContext(ColorModeContext)
    const classes = useStyles()
    const user = useAppSelector((state) => state.auth.user)

    console.log(user)

    return (
        <Box className={classes.root}>
            <Grid>Welcome</Grid>
            <Box display="flex">
                <Grid className={classes.iconBlock} onClick={colorMode.toggleColorMode}>
                    <IconButton className={classes.themeIcon}>
                        {theme.palette.mode === 'dark' ? <DarkModeIcon/> : <LightModeIcon/>}
                    </IconButton>
                    <IconButton>
                        <NotificationsNoneIcon/>
                    </IconButton>
                </Grid>
                <Grid className={classes.searchBlock}>
                    <IconButton className={classes.searchIcon}>
                        <SearchIcon/>
                    </IconButton>
                    <InputBase className={classes.searchInput} placeholder="Поиск"/>
                </Grid>
            </Box>
        </Box>
    );
};

export default TopBarComponent;