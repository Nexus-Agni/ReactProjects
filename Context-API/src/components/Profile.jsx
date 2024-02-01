import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

// function Profile() {
//     const {user} = useContext(UserContext)

//     if (!user) {
//         return <div>Please Login</div>
//     }
//     else{
//         return (
//             <div>Welcome {user.username}</div>
//           )
//     }
// }

function Profile() {
    const {user} = useContext(UserContext)

    if (!user || !user.username) {
        return <div className='w-[60%] mx-auto p-8 rounded-lg my-4 '>Please Login</div>
    }
    else{
        return (
            <div className='w-[60%] mx-auto p-8 rounded-lg my-4 '>Welcome {user.username}</div>
          )
    }
}

export default Profile