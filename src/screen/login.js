import React from 'react';
import './loginStyle.css';

export default class LoginScreen extends React.Component{
    render(){
        return(
            <div id="main_wrapper">

                <div id="main_container">

                    <div id="card_container">
                        <div id="card_container_top">
                            <div id="card_header_container">
                                <p id="card_header_text">Sign Up</p>
                            </div>
                            <div id="card_form_container">
                                <InputField placeholder="USERNAME" name="username"/>
                                <InputField placeholder="E-MAIL" name="email"/>
                                <InputField placeholder="PASSWORD" name="password"/>
                            </div>
                            <div id="card_top_end_container">
                                <div id="card_end_top">
                                    <input type="radio" name="accept" value="accept"/>
                                    <p id="terms">I agree to the -</p> <p id="terms_link"> Terms and Conditions</p>
                                </div>
                                <div id="card_end_bottom">
                                    <input type="button" name="signup" value="signup" />
                                    <p id="link_text">Already had an account?</p>
                                    <p id="login_link">Login</p>
                                </div>
                            </div>
                        </div>
                        <div id="card_container_bottom">
                            <div id="card_bottom_top">
                                <p id="card_bottom_text">Sign up with social platforms</p>
                            </div>
                            <div id="card_bottom_bottom">
                                <CircleFilled/>
                                <CircleFilled/>
                                <CircleFilled/>
                                <CircleFilled/>
                            </div>

                            <CircledTextFilled text="OR"/>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

let InputField = (props) => {
    return(
        <div id="input_field">
            <div id="input_field_circle"></div>
            <div id="input_field_input_container">
                <input type="text" name={props.name} id="input_field_input" placeholder={props.placeholder}/>
            </div>
        </div>
    );
}

let CircleFilled = () => <div id="white_circle_filled"></div>;

let CircledTextFilled = (props) => <div id="white_text_circle_filled"><p>{props.text}</p></div>;

