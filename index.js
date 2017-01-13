/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/

'use strict';

const Alexa = require('alexa-sdk');
const moment = require('moment');
const badiDate = require('./lib/badi/badiDate.js');

const APP_ID = 'amzn1.ask.skill.bbf6d4ac-53c8-4c84-a784-32b6c81b55e3';
const badiDatesOfMonth = {
  '1': '1st',
  '2': '2nd',
  '3': '3rd',
  '4': '4th',
  '5': '5th',
  '6': '6th',
  '7': '7th',
  '8': '8th',
  '9': '9th',
  '10': '10th',
  '11': '11th',
  '12': '12th',
  '13': '13th',
  '14': '14th',
  '15': '15th',
  '16': '16th',
  '17': '17th',
  '18': '18th',
  '19': '19th'
}

const handlers = {
    'LaunchRequest': function() {
      this.emit(':ask', `
        Allow-wob-ha! What are you interested to find out from the Bahá'í
        calendar? For example, you can check when the date the next feast falls
        on or the next holy day.`, `Please say that again?`
      );
    },

    'GetTodayIntent': function() {
      const today = moment(),
            badiToday = badiDate(today);
      this.emit(':tellWithCard', `
        Today is the ${badiDatesOfMonth[badiToday.format('d').toString()]} day
        of the month of ${badiToday.format('MML')} of the year
        ${badiToday.format('y')}`
      );
    },

    'GetNextFeastIntent': function() {
      const today = moment(),
            currentBahaiMonth = badiDate(today).badiMonth();
      let newBahaiMonth = false,
          curDay = today,
          prevDay = curDay.clone(),
          newBadiDay = curDay.clone();

      while (!newBahaiMonth) {
        prevDay = curDay.clone();
        curDay.add(1, 'day');
        newBadiDay = badiDate(curDay);
        newBahaiMonth = newBadiDay.badiMonth() > currentBahaiMonth;
      }
      this.emit(':tellWithCard', `
        The next Bahá'í month, ${newBadiDay.format('MML')}, starts at sunset on
        ${prevDay.format('dddd MMMM Do YYYY')}`
      );
    },

    'GetNextHolyDay': function() {
      let day = moment(),
          badiDay = badiDate(day);

      while (!badiDay.holyDayNumber()) {
        badiDay = badiDate(day.add(1, 'day'));
      }
      this.emit(':tellWithCard', `
        The next Bahá'í Holy Day is ${badiDay.holyDay()} and starts at sunset on
        ${day.subtract(1, 'day').format('dddd MMMM Do YYYY')}`
      );
    },

    'AMAZON.HelpIntent': function() {
      this.emit(':tellWithCard', `
        You can query the Bahá'í Calendar for the date of the next feast,
        the next holy day, or today's date. Additional features will be added
        over time. Thank you for using the Bahá'í Calendar skill.`
      );
    }
};

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
