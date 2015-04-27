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
        //var spy = sinon.spy(validApp, 'emailIsValid');

        var validationSpy     = sinon.spy();
        var missionSpy        = sinon.spy();
        var roleAvailableSpy  = sinon.spy();
        var roleCompatibleSpy = sinon.spy();



        before(function (done) {
            review.on('validated', validationSpy);
            review.on('mission-selected', missionSpy);
            review.on('role-available', roleAvailableSpy);
            review.on('role-compatible', roleCompatibleSpy);

            review.processApplication(validApp, function (err, result) {
                decision = result;
                done();
            });
        });

        it('returns success', function () {
            assert(decision.success, decision.message);
        });

        //it('validates email', function () {
        //    assert(validApp.emailIsValid.called);
        //});

        it('ensures the application is valid', function () {
            assert(validationSpy.called);
        });
        it('selects a mission', function () {
            assert(roleAvailableSpy.called);
        });
        it('ensures a role exists', function () {
            assert(roleAvailableSpy.called);
        });
        it('ensures role compatibility', function () {
            assert(roleCompatibleSpy.called);
        });







    });
});