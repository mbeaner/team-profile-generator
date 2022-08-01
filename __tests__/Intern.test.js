const Intern = require('../lib/Intern')

describe('Intern', () => {
    describe('Initialization', () => {
        it('should create an "Intern" object', () => {
            const intern = new Intern;

            expect(typeof(intern)).toEqual('object');
        })

        it('should set school name using constructor', () => {
            const school = 'MSU';
            const intern = new Intern('Marc', 12, 'test@yahoo.com', school);

            expect(intern.school).toEqual(school);
        })
    })

    describe('getSchool', () => {
        it('should return name of school using "getSchool" method', () => {
            const school = 'MSU';
            const intern = new Intern('Marc', 12, 'test@yahoo.com', school).getSchool();

            expect(intern).toEqual(school);
        })
    })

    describe('getRole', () => {
        it('shoulde return "Intern"', () => {
            const role = 'Intern';
            const intern = new Intern('Marc', 12, 'test@yahoo.com', 'MSU').getRole();

            expect(role).toEqual('Intern');
        })
    })
})