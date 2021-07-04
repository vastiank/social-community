import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup, fireEvent, getByTestId } from '@testing-library/react'

import CreateForm from '../CreateForm/CreateForm'
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

test('CreateForm Render Successfull', () => {
    renderWithRedux( <CreateForm /> )
})

test('Inputs - Create User Form', () => {
    const component = renderWithRedux( <CreateForm /> )
    const inputs = component.container.querySelector('input')
    expect(inputs).toBeTruthy()
})

test('Button - Create User Form', () => {
    const component = renderWithRedux( <CreateForm /> )
    const button = component.container.querySelector('Button')
    expect(button).toBeTruthy()
})

test('Verify Create Text in button', () => {
    const component = renderWithRedux( <CreateForm />  )
    expect(component.container).toHaveTextContent('Create')
})

test('Verify Sign Up Text in button', () => {
    const component = renderWithRedux( <CreateForm />  )
    expect(component.container).toHaveTextContent('Sign Up')
})








