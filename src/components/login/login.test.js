import {fireEvent, render, screen} from "@testing-library/react";
import Login from "./Login";


test('Initial conditions', () => {
    render(<Login/>)

    const btnLogin = screen.getByRole('button', {name: 'Login'})
    expect(btnLogin).toBeEnabled()
    expect(btnLogin).toHaveStyle({backgroundColor: 'darkcyan'})

    const cbxRememberMe = screen.getByRole('checkbox', {name: 'Remember Me'})
    expect(cbxRememberMe).toBeEnabled()

})

test('Login button click then disable checkbox(rememberMe) and change its backgroundColor to grey', () => {
    render(<Login/>)

    const btnLogin = screen.getByRole('button', {name: 'Login'})
    fireEvent.click(btnLogin)
    expect(btnLogin).toHaveStyle({backgroundColor: 'grey'})
w
    const cbxRememberMe = screen.getByRole('checkbox', {name: 'Remember Me'})
    expect(cbxRememberMe).not.toBeEnabled()
})