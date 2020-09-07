const defaultState = {
    list: []
}

export const usersListReduser = (state = defaultState, action) => {
    switch (action.type) {
        case 'save_user': {
            return {
                list: [...state.list, action.payload]
            }
        }
        case 'change_user': {
            for (let i in state.list) {
                if (state.list[i].id === action.id) {
                    state.list[i] = action.payload;
                    return state
                }
            }
        }
    }

    return state
}