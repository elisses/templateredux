import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { list_map, userActions } from './userSlice'

export default function UserRegistry() {
    //Sem redux
    //const [new_user, setNew_user] = useState(''),
    //  [users, setUsers] = useState([])

    //com redux
    const [new_user, setNew_user] = useState(''),
        users = useSelector(list_map),
        dispatch = useDispatch()

    //  function add() {
    //      setUsers([new_user, ...users])
    //      setNew_user('')
    //  }

    //Com redux
    function add() {
        dispatch(userActions.add(new_user))
        setNew_user('')
    }

    return (
        <div className='user'>
            <h2>Registro de Usuários</h2>
            <input type='text' value={new_user} onChange={(ev) => setNew_user(ev.target.value)} />
            <button onClick={() => add()}>Adicionar...</button>
            <ul>
                {users.map((user, index) => <li key={index} >{user}</li>)}
            </ul>
        </div>
    )
}