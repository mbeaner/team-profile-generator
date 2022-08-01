const Manager = require('../lib/Manager')

describe('Manager', () => {
    describe('Initialization', () => {
        it('should create an "Manager" object', () => {
            const manager = new Manager;

            expect(typeof(manager)).toEqual('object');
        })

        it('should set office number using constructor', () => {
            const officeNumber = '12345';
            const manager = new Manager('Marc', 12, 'test@yahoo.com', officeNumber);

            expect(manager.officeNumber).toEqual(officeNumber);
        })
    })

    describe('getOfficeNumber', () => {
        it('should return office number using "getOfficeNumber" method', () => {
            const officeNumber = '12345';
            const manager = new Manager('Marc', 12, 'test@yahoo.com', officeNumber).getOfficeNumber();

            expect(manager).toEqual(officeNumber);
        })
    })

    describe('getRole', () => {
        it('shoulde return "Manager"', () => {
            const role = 'Manager';
            const manager = new Manager('Marc', 12, 'test@yahoo.com', '12345').getRole();

            expect(role).toEqual('Manager');
        })
    })
})