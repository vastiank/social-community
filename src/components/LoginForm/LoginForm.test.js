import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup, fireEvent, getByTestId } from '@testing-library/react'
import LoginForm from './LoginForm'
import { Provider } from 'react-redux'
import {prettyDOM} from '@testing-library/dom'


import {createStore} from 'redux'

afterEach(cleanup)

const startingState = {}

function reducer( state = startingState, action ) {
    switch (action.type){
        default:
            return state;
    }

}

function renderWithRedux(component, 
    {initialState, store = createStore(reducer, initialState)} = {}
) {
    return {
        ...render(<Provider store={store}> {component} </Provider>)
    }
}

test('LoginForm Render Successfull', () => {
    renderWithRedux( <LoginForm /> )
})



test('Inputs - Login Form', () => {
    const component = renderWithRedux( <LoginForm />  )
    const inputs = component.container.querySelector('input')
    expect(inputs).toBeTruthy()
    console.log(prettyDOM(inputs))
})

test('Button - Login Form', () => {
    const component = renderWithRedux( <LoginForm />  )
    const button = component.container.querySelector('Button')
    expect(button).toBeTruthy()
    console.log(prettyDOM(button))
})

test('Verify Go Text in button', () => {
    const component = renderWithRedux( <LoginForm />  )
    expect(component.container).toHaveTextContent('Go')
})

test('Verify Log In Text in button', () => {
    const component = renderWithRedux( <LoginForm />  )
    expect(component.container).toHaveTextContent('Log In')
})






