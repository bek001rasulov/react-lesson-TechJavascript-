import React, {useEffect, useRef} from 'react';
import {useAppDispatch, useAppSelector} from "../../utils/hook";
import {getFavoriteAssets} from "../../store/thunks/assets";

const Home = () => {
    const favoriteAssets = useAppSelector(state => state.assets.favoriteAssets)
    const dispatch = useAppDispatch()
    const fetchDataRef = useRef(false)

    const favoriteAssetName = ['bitcoin', 'ethereum']

    const fetchData = (data: string[]) => {
        data.forEach((item) => {
            dispatch(getFavoriteAssets(item))
        })
    }

    console.log('ASSETS', favoriteAssets)

    useEffect(() => {
        if (fetchDataRef.current) return
        fetchDataRef.current = true
        fetchData(favoriteAssetName)
    }, [])

    return (
        <div>
            <h1>This is a Homepage</h1>
        </div>
    );
};

export default Home;