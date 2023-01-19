import React from "react";



export default class Login extends React.Component{

    render(){
        return(
            <div className="login-form">
                <form>
                    <label>
                        <input type="text" name="username" placeholder="Username"/>
                    </label>
                    <label>
                        <input type="text" name="password" placeholder="Password"/>
                    </label>
                    <br/>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        )
    }
}