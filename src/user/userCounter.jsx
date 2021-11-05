import React from 'react'
import { userSlice } from './userSlice'
import { useSelector } from 'react-redux'
import { list_map } from './userSlice'

export default function UserCounter() {

    const users = useSelector(list_map)

    return (
        <div>
            Contador de Usuários: {users.length}
        </div>
    )
}