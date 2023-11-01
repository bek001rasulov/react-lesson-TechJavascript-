import React from 'react';
import {Button, TextField, Typography} from "@mui/material";
import {IPropsRegister} from "../../../common/types/auth";


const RegisterPage: React.FC<IPropsRegister> = ({navigate, register, errors}: IPropsRegister): JSX.Element => {
    return (
        <>
            <Typography variant="h2" fontFamily='Poppins' textAlign='center'>Регистрация</Typography>
            <Typography variant="body1" marginBottom={3} fontFamily='Poppins' textAlign='center'>Введите данные для регистрации</Typography>
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
                type="password"
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
                type="password"
                fullWidth={true}
                margin={'normal'}
                label="Password"
                variant="outlined"
                placeholder="Повторите ваш пароль"
                error={errors.confirmPassword ? true : false}
                helperText={errors.confirmPassword ? errors.confirmPassword.message : ""}
                {...register('confirmPassword')}
            />
            <Button type="submit" sx={{fontFamily: "Poppins", marginBlock: 2, width: "60%" }} variant="contained">Регистрация</Button>
            <Typography variant="body1" sx={{fontFamily:'Poppins'}}>У вас есть аккаунт? <span className="incitingText" onClick={() => navigate('/login')}>Авторизация</span></Typography>
        </>
    );
};

export default RegisterPage;