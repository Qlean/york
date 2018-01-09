import React from 'react';
import { shallow } from 'enzyme';
import Text from '../Text';

describe('<Text />', () => {
  test('should match snapshot with default props', () => {
    const text = shallow(<Text>Test</Text>);
    expect(text).toHaveStyleRule('color', '#222222');
    expect(text).toHaveStyleRule('font-weight', '500');
    expect(text).toHaveStyleRule('font-size', '16px');
    expect(text).toHaveStyleRule('line-height', '25px');
    expect(text).toHaveStyleRule('font-family', 'MuseoSansCyrl');
    expect(text).toMatchSnapshot();
  });
  test('should have text \'Test\'', () => {
    const text = shallow(<Text>Test</Text>);
    expect(text.render().text()).toEqual('Test');
    expect(text).toMatchSnapshot();
  });
  test('should have color #123456', () => {
    const text = shallow(<Text color="#123456">Test</Text>);
    expect(text).toHaveStyleRule('color', '#123456');
    expect(text).toMatchSnapshot();
  });
  test('should have green (#20A052) from york-core colors', () => {
    const text = shallow(<Text color="green">Test</Text>);
    expect(text).toHaveStyleRule('color', '#20A052');
    expect(text).toMatchSnapshot();
  });
  test('should have font-size 20px and line-height 30px', () => {
    const text = shallow(<Text fontSize="20" lineHeight={30}>Test</Text>);
    expect(text).toHaveStyleRule('font-size', '20px');
    expect(text).toHaveStyleRule('line-height', '30px');
    expect(text).toMatchSnapshot();
  });
  test('should have bold font', () => {
    const text = shallow(<Text font="bold">Test</Text>);
    expect(text).toHaveStyleRule('font-weight', '700');
    expect(text).toHaveStyleRule('font-family', 'MuseoSansCyrl');
    expect(text).toMatchSnapshot();
  });
  test('should have light font', () => {
    const text = shallow(<Text font="light">Test</Text>);
    expect(text).toHaveStyleRule('font-weight', '300');
    expect(text).toHaveStyleRule('font-family', 'MuseoSansCyrl');
    expect(text).toMatchSnapshot();
  });
});
