const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('Initialization', () => {
        it('Should instantiate when called with new key word', () => {
            const employee = new Employee();
            expect(typeof(employee)).toEqual('object')
        });

        it('should set name using constructor', () => {
            const name = 'Marc'
            const employee = new Employee(name);
            expect(employee.name).toEqual(name)
        })
        it('should set id using constructor', () => {
            const id = 12;
            const employee = new Employee('Marc', id);

            expect(employee.id).toEqual(id);
        })
        it('should set email using constructor', () => {
            const email = 'test@yahoo.com';
            const employee = new Employee('Marc', 12, email);

            expect(employee.email).toEqual(email);
        })
    });

    describe('getName', () => {
        it('should return name', () => {
            const name = 'Marc';
            const employee = new Employee(name, 12, 'test@yahoo.com').getName()

            expect(employee).toEqual(name)
        })
    });

    describe('getId', () => {
        it('should return Id', () => {
            const id = 12;
            const employee = new Employee('Marc', id).getId()

            expect(employee).toEqual(id)
        })
    });

    describe('getEmail', () => {
        it('should return email', () => {
            const email = 'test@yahoo.com';
            const employee = new Employee('Marc', 12, email).getEmail()

            expect(employee).toEqual(email)
        })
    });

    describe('getRole', () => {
        it('shoulde return Employee', () => {
            const role = 'Employee'
            const employee = new Employee('Marc', 12, 'test@yahoo.com').getRole()

            expect(role).toEqual('Employee')
        })
    })
})