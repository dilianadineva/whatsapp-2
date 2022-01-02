const getRecipientEmail = (users, userLoggedIn) => {
// if(users){console.log("aaa", users)}
    return users?.filter(userToFilter => userToFilter !== userLoggedIn?.email)[0]
}

export default getRecipientEmail