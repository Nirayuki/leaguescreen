import React from 'react';
import twitch from '../assets/twitch.png';
import logo from '../assets/logo.png';
import apple from '../assets/apple.svg';
import facebook from '../assets/facebook.svg';
import google from '../assets/google.svg';
import right from '../assets/right-arrow.svg';
import '../style/login.css';

export default function Login() {
    return (
        <div>
            <div className="splash">
                <img src={twitch} alt="twitch" />
            </div>
            <div className="login_container">
                <div className="login">

                    <img src={logo} alt="logo" />
                    <h2>Fazer Login</h2>

                    <div className="username">
                        <input type="text" placeholder="NOME DE USUÁRIO"></input>
                        <input type="password" placeholder="SENHA"></input>
                    </div>

                    <div className="social_media">
                        <div className="btn_face"><img src={facebook} /></div>
                        <div className="btn_google"><img src={google} /></div>
                        <div className="btn_apple"><img src={apple} /></div>
                    </div>

                    <div className="checklogin">
                        <label>
                            <input type="checkbox"></input>
                            <span>Manter Login</span>
                        </label>
                    </div>
                </div>
            </div>

        </div>
    )
}