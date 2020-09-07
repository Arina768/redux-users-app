export const saveUserAction = (user) => ({
    type: 'save_user',
    payload: user,
});

export const changeUserAction = (user, id) => ({
    type: 'change_user',
    payload: user,
    id: id
});
