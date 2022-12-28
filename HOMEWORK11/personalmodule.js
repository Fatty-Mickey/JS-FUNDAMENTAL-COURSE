const userName = () => {
    const os = require('os');
    return os.userInfo().username
};

const greetings = () => {
    const hours = new Date().getHours();
    if (hours >= 23 && hours < 5) {
        return `Good night ${userName()}`
    } else if (hours >= 5 && hours < 11) {
        return `Good morning ${userName()}`
    } else if (hours >= 11 && hours < 17) {
        return `Good afternoon ${userName()}`
    } else {
        return `Good evening ${userName()}`
    } 
}

module.exports = {
    greetings: greetings    
}