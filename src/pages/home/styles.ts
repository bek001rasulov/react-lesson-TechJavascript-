import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";
import {tokens} from "../../theme";

export const useStyles = makeStyles((theme: Theme) => {
    const colors = tokens(theme.palette.mode)
    return {
        root: {
            flexGrow: 1,
            padding: '32px'
        },
        areaChart: {
          marginBottom: 18
        },
        topCardItem: {
            backgroundColor: `${theme.palette.mode === 'light' ? colors.primary.DEFAULT : colors.primary[600]}`,
            padding: '20px 16px',
            minHeight: 185,
            border: `1px solid ${colors.borderColor}`,
            borderRadius: 12
        },
        cardChart: {
            display: 'flex',
            '& canvas' : {
                alignSelf: 'flex-end'
            }
        },
        assetName: {
            fontSize: 25,
            fontWeight: 600,
            lineHeight: '30px',
            textTransform: 'capitalize'
        },
        itemDetails: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            paddingBottom: '35px',
            height: '100%'
        },
        cardPrice: {
            fontSize: 32,
            fontWeight: 700,
            lineHeight: '48px'
        },
        priceTrend: {
            display: 'flex',
            alignItems: 'center',
            alignSelf: 'flex-start',
            gap: '4px',
            padding: '4px 8px',
            marginTop: '8px',
            borderRadius: 4,
            color: `${colors.secondary.DEFAULT}`,
            fontWeight: 400,
            fontSize: 18,
            lineHeight: '21px',
        },
        trendUp: {
            backgroundColor: '#a9ffa7',
            color: '#037400'
        },
        trendDown: {
            backgroundColor: '#ffa7a7',
            color: '#740000'
        },
        lineChartBlock: {
            backgroundColor: `${theme.palette.mode === 'light' ? colors.primary.DEFAULT : colors.primary[600]}`,
            padding: '20px 16px',
            minHeight: 270,
            border: `1px solid ${colors.borderColor}`,
            borderRadius: 12,
        }
    }
})