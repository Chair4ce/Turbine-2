/// <reference path="../steps.d.ts" />

Feature('Main Page');

Scenario ('should see some data from a graphQL request', (I) => {
    I.amOnPage('/');
    I.see("DGS-1");
});
