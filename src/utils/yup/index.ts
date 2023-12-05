import * as yup from "yup";
import {AppErrors} from "../../common/errors";

export const LoginSchema = yup.object().shape({
    email: yup.string().required(AppErrors.RequiredField).email(AppErrors.InvalidEmail),
    password: yup.string().required(AppErrors.RequiredField).min(8, AppErrors.minLength),
})

export const RegisterSchema = yup.object().shape({
    email: yup.string().required(AppErrors.RequiredField).email(AppErrors.InvalidEmail),
    password: yup.string().required(AppErrors.RequiredField).min(8, AppErrors.minLength),
    confirmPassword: yup.string().required(AppErrors.RequiredField).min(8, AppErrors.minLength),
    name: yup.string().required(AppErrors.RequiredField),
    username: yup.string().required(AppErrors.RequiredField)
})