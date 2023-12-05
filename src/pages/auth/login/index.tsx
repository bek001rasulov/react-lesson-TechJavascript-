import React from 'react';
import {Box, TextField, Typography} from "@mui/material";
import {IPropsLogin} from "../../../common/types/auth";
import {useStyles} from "./styles";
import AppLoadingButton from "../../../components/loading-button";

const LoginPage: React.FC<IPropsLogin> = ({navigate, register, errors, loading}: IPropsLogin): JSX.Element => {
    const classes = useStyles()
    return (
        <>
            <Typography variant="h2" textAlign='center' fontSize={32}>Авторизация</Typography>
            <Typography variant="body1" marginBottom={3} textAlign='center'>Введите ваш логин и пароль</Typography>
            <Box width='100%' marginBottom="10px">
                <TextField
                    error={errors.email ? true : false}
                    fullWidth={true}
                    margin={'normal'}
                    label="Email"
                    variant="outlined"
                    placeholder="Введите ваш email"
                    helperText={errors.email ? `${errors.email.message}` : ""}
                    {...register('email')}
                />
                <TextField
                    error={errors.password ? true : false}
                    type="password"
                    fullWidth={true}
                    margin={'normal'}
                    label="Password"
                    variant="outlined"
                    placeholder="Введите ваш пароль"
                    helperText={errors.password ? `${errors.password.message}` : ""}
                    {...register('password')}
                />
            </Box>

            <AppLoadingButton loading={loading} type="submit" variant="contained">Войти</AppLoadingButton>
            <Typography marginTop="10px" variant="body1">
                У вас нет аккаунта? <span className={classes.incitingText} onClick={() => navigate('/register')}>Регистрация</span>
            </Typography>

        </>
    );
};

export default LoginPage;