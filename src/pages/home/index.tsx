import React, {FC, useCallback, useEffect, useMemo, useRef} from 'react';
import {useAppDispatch, useAppSelector} from "../../utils/hook";
import {getFavoriteAssets} from "../../store/thunks/assets";
import {Box, Grid} from "@mui/material";
import {useStyles} from "./styles";
import {AreaChart} from "../../components/charts/area-chart";
import TrendUp from "../../assets/images/chart/trend-up.svg";
import TrendDown from "../../assets/images/chart/trend-down.svg";
import {LineChart} from "../../components/charts/line-chart";
import {IChartData, ISingleAsset} from "../../common/types/assets";

const Home: FC = (): JSX.Element => {
    const favoriteAssets: IChartData[] = useAppSelector(state => state.assets.favoriteAssets)
    const dispatch = useAppDispatch()
    const fetchDataRef = useRef(false)
    const classes = useStyles()

    const favoriteAssetName = useMemo(() => ['bitcoin', 'ethereum'], [])
    const filteredArray = favoriteAssets.filter((value, index, self) => {
         return index === self.findIndex((t) => t.name === value.name)
    })

    const fetchData = useCallback((data: string[]) => {
        data.forEach((item) => {
            dispatch(getFavoriteAssets(item))
        })
    }, [dispatch])

    useEffect(() => {
        if (fetchDataRef.current) return
        fetchDataRef.current = true
        fetchData(favoriteAssetName)
    }, [favoriteAssetName, fetchData])

    const renderFavoriteBlock = filteredArray.map((item: IChartData) => {

        const currentPrice: any = item.singleAsset.map((item: ISingleAsset) => item.current_price)
        const changePrice: any = item.singleAsset.map((item: ISingleAsset) => item.price_change_percentage_24h)

        return (
            <Grid item lg={6} md={6} xs={12} key={item.name}>
                <Grid container className={classes.topCardItem}>
                    <Grid item lg={6} md={6} xs={12}>
                        <h3 className={classes.assetName}>{item.name}</h3>
                        <div className={classes.itemDetails}>
                            <h3 className={classes.cardPrice}>${currentPrice}</h3>
                            <p className={`${classes.priceTrend} ${changePrice > 0 ? classes.trendUp : classes.trendDown}`}>
                                <img src={changePrice > 0 ? TrendUp : TrendDown} width={24} alt="trend"/>
                                <span>{Number(changePrice).toFixed(2)}%</span>
                            </p>
                        </div>

                    </Grid>
                    <Grid item lg={6} md={6} xs={12} className={classes.cardChart}>
                        <AreaChart data={item?.price_chart_data}/>
                    </Grid>
                </Grid>
            </Grid>
        )
    })
    return (
        <Box className={classes.root}>
            <Grid container spacing={2} className={classes.areaChart}>
                {renderFavoriteBlock}
            </Grid>
            <Grid container className={classes.lineChartBlock}>
                <Grid item xs={12} sm={12} lg={12}>
                    {filteredArray.length && <LineChart data={filteredArray}/>}
                </Grid>
            </Grid>
        </Box>
    );
};

export default Home;