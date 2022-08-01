const Engineer = require('../lib/Engineer')

describe('Engineer', () => {
    describe('Initialization', () => {
        it('should create an "Engineer" object', () => {
            const engineer = new Engineer;

            expect(typeof(engineer)).toEqual('object');
        })

        it('should set github using constructor', () => {
            const github = 'mbeaner';
            const engineer = new Engineer('Marc', 12, 'test@yahoo.com', github);

            expect(engineer.github).toEqual(github);
        })
    })

    describe('getGithub', () => {
        it('should return Github user name using "getGithub" method', () => {
            const github = 'mbeaner'
            const engineer = new Engineer('Marc', 12, 'test@yahoo.com', github).getGithub();

            expect(engineer).toEqual(github);
        })
    })

    describe('getRole', () => {
        it('shoulde return "Engineer"', () => {
            const role = 'Engineer';
            const employee = new Engineer('Marc', 12, 'test@yahoo.com', 'mbeaner').getRole();

            expect(role).toEqual('Engineer');
        })
    })
})