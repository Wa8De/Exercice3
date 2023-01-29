


export const Add = (task) => { return { type: "Add", payload: task } }
export const Edit = (id, newName) => { return { type: "Update", payload: id, newName: newName } }
export const Delete = (id) => { return { type: "Delete", payload: id } }