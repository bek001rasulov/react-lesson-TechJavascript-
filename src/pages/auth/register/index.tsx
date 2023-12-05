import React from 'react';
import {Box, TextField, Typography} from "@mui/material";
import {IPropsRegister} from "../../../common/types/auth";
import {useStyles} from "./styles";
import AppLoadingButton from "../../../components/loading-button";


const RegisterPage: React.FC<IPropsRegister> = ({navigate, register, errors, loading}: IPropsRegister): JSX.Element => {

    const classes = useStyles()
    return (
        <>
                <Typography variant="h2" textAlign='center' fontSize={32}>Регистрация</Typography>
                <Typography variant="body1" marginBottom={3} textAlign='center'>Введите данные для регистрации</Typography>
                <Box width='100%' marginBottom="10px">
                        <TextField
                            fullWidth={true}
                            margin={'normal'}
                            label="Name"
                            variant="outlined"
                            placeholder="Введите ваше имя"
                            error={errors.name ? true : false}
                            helperText={errors.name ? errors.name.message : ""}
                            {...register('name')}
                        />
                        <TextField
                            fullWidth={true}
                            margin={'normal'}
                            label="Username"
                            variant="outlined"
                            placeholder="Введите ваш username"
                            error={errors.username ? true : false}
                            helperText={errors.username ? errors.username.message : ""}
                            {...register('username')}
                        />
                        <TextField
                            fullWidth={true}
                            margin={'normal'}
                            label="Email"
                            variant="outlined"
                            placeholder="Введите ваш email"
                            error={errors.email ? true : false}
                            helperText={errors.email ? errors.email.message : ""}
                            {...register('email')}
                        />
                        <TextField
                            type={"password"}
                            fullWidth={true}
                            margin={'normal'}
                            label="Password"
                            variant="outlined"
                            placeholder="Введите ваш пароль"
                            error={errors.password ? true : false}
                            helperText={errors.password ? errors.password.message : ""}
                            {...register('password')}
                        />
                        <TextField
                            type={"password"}
                            fullWidth={true}
                            margin={'normal'}
                            label="Password"
                            variant="outlined"
                            placeholder="Повторите ваш пароль"
                            error={errors.confirmPassword ? true : false}
                            helperText={errors.confirmPassword ? errors.confirmPassword.message : ""}
                            {...register('confirmPassword')}
                        />
                </Box>

                <AppLoadingButton loading={loading} type="submit" variant="contained">Регистрация</AppLoadingButton>
                <Typography marginTop="10px" variant="body1">
                        У вас есть аккаунт? <span className={classes.incitingText} onClick={() => navigate('/login')}>Авторизация</span>
                </Typography>
        </>
    );
};

export default RegisterPage;