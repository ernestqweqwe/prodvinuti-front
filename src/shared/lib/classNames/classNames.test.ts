import { classNames } from './classNames';

describe('classNames', () => {
    test('With only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('With aditional class', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
    });

    test('With mods', () => {
        const expected = 'someClass class1 class2 hovered scrollbale';
        expect(
            classNames('someClass', { hovered: true, scrollbale: true }, ['class1', 'class2']),
        ).toBe(expected);
    });

    test('With mods false', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(
            classNames('someClass', { hovered: true, scrollbale: false }, ['class1', 'class2']),
        ).toBe(expected);
    });

    test('With mods undefined', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(
            classNames('someClass', { hovered: true, scrollbale: undefined }, ['class1', 'class2']),
        ).toBe(expected);
    });
});
