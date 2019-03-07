import { Greeting } from '../index';

test('Greeting Function Test', () => {
  expect(Greeting('Kikit')).toBe('Hello Kikit');
});
