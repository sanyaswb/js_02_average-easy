const average = require('./index');

test('Функция должна вернуть число', () => {
	const type = typeof average(14, 17, 11);

	expect(type).toBe('number');
});

test('Тест. firstDay: 14, secondDay: 17, thirdDay: 11', () => {
	const res = average(14, 17, 11);

	expect(res).toBe(14);
});

test('Тест. firstDay: 51, secondDay: 24, thirdDay: 42', () => {
	const res = average(51, 24, 42);

	expect(res).toBe(39);
});

test('Тест. firstDay: 1, secondDay: 4, thirdDay: 1', () => {
	const res = average(1, 4, 1);

	expect(res).toBe(2);
});

test('Тест. firstDay: 66, secondDay: 42, thirdDay: 45', () => {
	const res = average(66, 42, 45);

	expect(res).toBe(51);
});