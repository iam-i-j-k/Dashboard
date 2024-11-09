import React, { createContext } from 'react'

export const DataContext = createContext()


const UserContext = ({children}) => {

    const userData = {
        username:"Irfan Jan Khan",
        age:19,
        city:"Repalle"
      }

  return (
    <div>
        <DataContext.Provider value={userData}>
            {children}
        </DataContext.Provider>
    </div>
  )
}

export default UserContext