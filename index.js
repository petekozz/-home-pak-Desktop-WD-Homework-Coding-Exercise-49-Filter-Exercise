const validUserNames = usernames => {
    return usernames.filter (name => name.length < 10)
};