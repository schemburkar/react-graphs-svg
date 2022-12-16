import { describe, expect, test } from '@jest/globals';
import { getDateItems, getNumericItems } from '../src/helpers'


test('getDateItems returns dates within the start and end date (both inclusive)', () => {
  const start = '2022-11-14T00:00:00', end = '2022-11-23T00:00:00';
  const dates = getDateItems(new Date(start), new Date(end), 'day', 2);
  expect(dates.length).toBe(6);
  expect(dates[0]).toStrictEqual(new Date('2022-11-14T00:00:00'));
  expect(dates[1]).toStrictEqual(new Date('2022-11-16T00:00:00'));
  expect(dates[2]).toStrictEqual(new Date('2022-11-18T00:00:00'));
  expect(dates[3]).toStrictEqual(new Date('2022-11-20T00:00:00'));
  expect(dates[4]).toStrictEqual(new Date('2022-11-22T00:00:00'));
  expect(dates[5]).toStrictEqual(new Date('2022-11-24T00:00:00'));
});


test('getNumericItems returns dates within the start and end number (both inclusive)', () => {
  const start = 10, end = 15;
  const numbers = getNumericItems(start, end, 2);
  expect(numbers.length).toBe(4);
  expect(numbers[0]).toStrictEqual(10);
  expect(numbers[1]).toStrictEqual(12);
  expect(numbers[2]).toStrictEqual(14);
  expect(numbers[3]).toStrictEqual(16);
});


test('getNumericItems returns dates within the start and end number (both inclusive)', () => {
  const start = 10, end = 12;
  const numbers = getNumericItems(start, end, 2);
  expect(numbers.length).toBe(2);
  expect(numbers[0]).toStrictEqual(10);
  expect(numbers[1]).toStrictEqual(12);
});

