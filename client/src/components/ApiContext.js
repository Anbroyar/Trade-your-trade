import React from 'react';


export const ApiContext = React.createContext({
    user: {},
    skills: [],
    jobs: []
})

export default ApiContext;