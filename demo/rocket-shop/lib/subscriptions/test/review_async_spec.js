var assert                = require('assert');
var ReviewProcess         = require('../processes/review_async');
var MembershipApplication = require('../models/membership_application');

var sinon = require('sinon');


describe('The Review Process', function () {

    describe('Receiving a valid application', function () {
        var decision;
        var validApp = new MembershipApplication({
            first: 'Test',
            last: 'User',
            email: 'test@test.com',
            age: 30,
            height: 66,
            weight: 180
        });
        var review = new ReviewProcess();


        before(function (done) {

            review.processApplication(validApp, function (err, result) {
                decision = result;
                done();
            });
        });

        it('returns success', function () {
            assert(decision.success, decision.message);
        });


        it.skip('ensures the application is valid', function () {
            assert(validationSpy.called);
        });
        it.skip('selects a mission', function () {
            assert(roleAvailableSpy.called);
        });
        it.skip('ensures a role exists', function () {
            assert(roleAvailableSpy.called);
        });
        it.skip('ensures role compatibility', function () {
            assert(roleCompatibleSpy.called);
        });
    });
});