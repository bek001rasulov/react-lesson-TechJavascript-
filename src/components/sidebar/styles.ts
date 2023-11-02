import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";
import {tokens} from "../../theme";

export const useStyles = makeStyles((theme:Theme) => {
    const colors = tokens(theme.palette.mode)
    return (
        {
            brand: {
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '30px 15px',
                cursor: 'pointer',
            },
            brandTitle: {
                color: `${theme.palette.mode === 'dark' ? colors.white.DEFAULT : colors.black.DEFAULT}`
            },
            navBlock: {
                width: '100%',
                borderBottom: `1px solid ${colors.borderColor}`
            },
            navList: {
                marginBottom: '55px !important',
            },
            navItem: {
                borderRadius: '4px !important',
                '& .MuiSvgIcon-root': {
                    color: `${colors.secondary.DEFAULT}`
                },
                '&:hover' : {
                    backgroundColor: '#1900D5 !important',
                    color: '#fff',
                    borderRadius: '4px',
                    '& .MuiSvgIcon-root': {
                        color: `${colors.white.DEFAULT}`
                    }
                }
            },
            active: {
                '& .MuiSvgIcon-root':{
                  color: `${colors.white.DEFAULT}`
                },
                backgroundColor: '#1900D5 !important',
                color: '#fff !important',
                borderRadius: '4px'
            }
        }
    )

})