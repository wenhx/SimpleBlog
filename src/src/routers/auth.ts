import express from "express";
import * as authService from "../services/authServices";
import consts from "../consts";
import { SignedInResult } from "../services/signedInResult";

const router = express.Router();

router.get('/signin', (req, res) => {
    res.render('auth/signin.ejs', { message: req.flash(consts.errorMessageKey) });
});

router.post('/signin', async (req, res) => {
    let userName = req.body.userName;
    const password = req.body.password;
    if (userName && password) {
        userName = userName.trim();
        console.log(`user: ${userName} attempts to sign in, password: ${password}`);
        const result = await authService.signIn(userName, password);
        if (result.result == SignedInResult.Succeeded) {
            req.session.user = result.user;
            res.redirect('/'); 
            return;
        }
        else
        {
            switch (result.result) {
                case SignedInResult.NoUserNameOrPassword:
                case SignedInResult.PasswordIncorrect:
                case SignedInResult.UserNotFound:
                    req.flash(consts.errorMessageKey, "User Name or Password incorrect.");
                    break;
                default:
                    req.flash(consts.errorMessageKey, "Something went wrong. Please try again later.");
                    break;
            }
        }
    } else {
        req.flash(consts.errorMessageKey, "please input user name and password");
    }

    res.redirect('/auth/signin');
});

export default router;