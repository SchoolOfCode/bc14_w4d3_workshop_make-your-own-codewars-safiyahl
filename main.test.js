import {test, expect} from "@jest/globals";
import {getDaysBetweenDates} from "./main.js";
// moment is a library  that checks if a date is entered in the correct format of YYYY-MM-DD. 
const moment = require('moment');


test("getDaysBetweenDates function exists", () => {
  expect(getDaysBetweenDates).toBeDefined();
});
// Ensure the function returns the correct number of days between two dates
test("getDaysBetweenDates function returns the number of days between two dates", () => {
  expect(getDaysBetweenDates("2023-04-09", "2023-04-21")).toBe(12);
});

//write a test that expects todays date to be in the correct formal way of (yyyy-mm-dd)
test('Check if date is in YYYY-MM-DD format', () => {
    const date = '2023-04-09';
    const expectedFormat = 'YYYY-MM-DD';
    // Use moment.js to parse the date string and format it
    const formattedDate = moment(date, expectedFormat).format(expectedFormat);
    // Use Jest's expect function to make assertions
    expect(formattedDate).toBe(date);
  });
  


