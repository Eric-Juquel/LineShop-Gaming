import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import classes from './PlaceOrderScreen.module.scss'
import ErrorComponent from '../../ErrorComponent'
import Spinner from '../../Spinner'
import CheckoutSteps from './CheckoutSteps'

const PlaceOrderScreen = () => {
    const cart = useSelector(state => state.cart)

    return (
        <div className={classes.container}>
            <CheckoutSteps step1 step2 step3 step4/>
            
        </div>
    )
}

export default PlaceOrderScreen
