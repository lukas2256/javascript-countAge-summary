const lukas = {
    firstName: 'Lukas',
    lastName: 'Maksimavicius',
    birthYear: 1995,
    job: 'Student',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    calcAge: function() {
        return 2021 - this.birthYear;
    },

    getSummary: function() {
        return `${this.firstName } is a ${this.calcAge()}-year old ${this.job} and he has ${this.hasDriversLicense ? 'a':'no'} drivers license`
    }
};

// TASKS: to count age and get a summary of my information. 
console.log(lukas.calcAge());
console.log(lukas.getSummary());