import {useState} from "react";


const Login = () => {
    const [login, setLogin] = useState({
        login: false,
        bgColor: 'darkcyan',
        text: 'Login',
        userName: " ",
    })


    return(
        <div>
            <span>{login.userName}</span>
            <br/>
            <button style={{backgroundColor: login.bgColor}}
                onClick={() => setLogin({
                    login: true, bgColor: 'grey', text:'Logout', userName: 'Haoyang'
                })}
            >
                {login.text}
            </button>

            <label htmlFor='rememberMe'>Remember Me</label>
            <input type="checkbox" id='rememberMe'
                defaultChecked={true}
                   disabled={login.login}
            />
        </div>
    )
}

export default Login