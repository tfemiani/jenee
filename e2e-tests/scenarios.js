'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  // TODO add a 'home' page and update this test
  it('should automatically redirect to /viewJira when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/viewJira");
  });


  describe('viewJira', function() {

    beforeEach(function() {
      browser.get('index.html#!/viewJira');
    });


    it('should render viewJira when user navigates to /viewJira', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view Jira/);
    });

  });


  describe('viewMeeting', function() {

    beforeEach(function() {
      browser.get('index.html#!/viewMeeting');
    });


    it('should render viewMeeting when user navigates to /viewMeeting', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view Meeting/);
    });

  });
});
