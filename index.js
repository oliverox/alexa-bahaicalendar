/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/

'use strict';

const Alexa = require('alexa-sdk');
const moment = require('moment');
const badiDate = require('./lib/badi/badiDate.js');

const APP_ID = undefined;
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
    'GetTodayIntent': function() {
      const today = moment(),
            badiToday = badiDate(today);
      this.emit(':tellWithCard', 'Today is the ' + badiDatesOfMonth[badiToday.format('d').toString()] + ' day of the month of ' + badiToday.format('MML') + ' of the year ' + badiToday.format('y') + ' of the Bahai era');
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
      this.emit(':tellWithCard', 'The next Baha\'i month, ' + newBadiDay.format('MML') + ', starts at sunset on ' + prevDay.format('dddd MMMM Do YYYY'));
    },

    'GetNextHolyDay': function() {
      let day = moment(),
          badiDay = badiDate(day);

      while (!badiDay.holyDayNumber()) {
        badiDay = badiDate(day.add(1, 'day'));
      }
      this.emit(':tellWithCard', 'The next Baha\'i Holy Day is ' + badiDay.holyDay() + ' and starts at sunset on ' + day.subtract(1, 'day').format('dddd MMMM Do YYYY'));
    }
};

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
