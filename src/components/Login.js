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

                    <center>

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

                        <div className="send_btn">
                            <img src={right} />
                        </div><br />

                        <a href="https://recovery.riotgames.com/pt-br?region=BR1">NÃO CONSEGUE INICIAR SESSÃO?</a><br/>
                        <a href="https://signup.br.leagueoflegends.com/pt/signup/index">CRIAR CONTA</a>
                    </center>
                </div>
            </div>

        </div>
    )
}