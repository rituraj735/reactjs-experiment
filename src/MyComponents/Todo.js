import React from 'react'

export const Todo = ({todo, onDelete}) => {
    return (
        <div>
            <h4>{todo.sno}</h4>
            <h4>{todo.name}</h4>
            <button className="btn btn-sm" onClick={(()=>onDelete(todo))}>Delete</button>
        </div>
    )
}
