import React, {useContext} from 'react';
import {AppBar, Box, Grid, IconButton, InputBase, Toolbar, Typography, useTheme} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from '@mui/icons-material/Search';
import {useAppSelector} from "../../utils/hook";
import {ColorModeContext} from "../../theme";
import {useStyles} from "./styles";
import FlexBetween from "../flex-between";
import {MenuOutlined} from "@mui/icons-material";
import {ITopBarProps} from "../../common/types/top-bar";

const TopBarComponent: React.FC<ITopBarProps> = ({isOpen, setIsOpen}: ITopBarProps): JSX.Element => {
    const theme = useTheme()
    const colorMode: any = useContext(ColorModeContext)
    const classes = useStyles()
    const user = useAppSelector((state) => state.auth.user)


    return (

        <AppBar className={classes.root} position="static">
            <Toolbar className={classes.toolbar}>
                <Grid>
                    <FlexBetween>
                        <MenuOutlined className={classes.menuIcon} onClick={() => setIsOpen(!isOpen)}/>
                        <Typography>Welcome Alex</Typography>
                    </FlexBetween>

                </Grid>
                <Box display="flex" alignItems="center">
                    <Grid className={classes.iconBlock} >
                        <IconButton className={classes.themeIcon} onClick={colorMode.toggleColorMode}>
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
            </Toolbar>
        </AppBar>
    );
};

export default TopBarComponent;