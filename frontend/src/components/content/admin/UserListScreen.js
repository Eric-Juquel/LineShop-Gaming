import React, {useEffect} from 'react'
import Link from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import classes from './UserListScreen.module.scss'
import Spinner from '../../Spinner'
import ErrorComponent from '../../ErrorComponent'
import {listUsers} from '../../../actions/userActions'

const UserListScreen = () => {
    const dispatch = useDispatch()

    const userList = useSelector(state => state.userList)
    const { loading, error, users} = userList

    useEffect(() => {
        dispatch(listUsers())
    },[dispatch])

    return (
        <div className={classes.container}>
            <h1>Users</h1>
            {loading ? <Spinner /> : error ? <ErrorComponent err={error}/> :
            (
                <div>UserList</div>
            )}
            
        </div>
    )
}

export default UserListScreen
