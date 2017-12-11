import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('<Button />', () => {
  test('should have text \'Buy\'', () => {
    const button = shallow(<Button color="yellow">Buy</Button>);
    expect(button.render().text()).toEqual('Buy');
  });
  test('should be a button', () => {
    const button = shallow(<Button/>);
    expect(button.render().is('button')).toEqual(true);
  });
  test('should be a link', () => {
    const button = shallow(<Button href="/"/>);
    expect(button.render().is('a')).toEqual(true);
  });
});
