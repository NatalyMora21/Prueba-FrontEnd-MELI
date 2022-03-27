import React from 'react'
import {createStore} from 'redux'


export const itemReducer = (state=[], action) => {

    switch(action.type){
        case "LIST-NOTE" : {

            return (action.payload)
        }

        case "FILTER-NOTE" : {
            return (action.payload)
        }

        default:
            return state

    }

}

