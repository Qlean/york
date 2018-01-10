import React from 'react';
import { shallow } from 'enzyme';
import Text from '../Text';

describe('<Text />', () => {
  test('should have text \'Test\'', () => {
    const text = shallow(<Text>Test</Text>);
    expect(text.render().text()).toEqual('Test');
    expect(text.render()).toMatchSnapshot();
  });
  test('should have color #123456', () => {
    const text = shallow(<Text color="#123456">Test</Text>);
    expect(text).toHaveStyleRule('color', '#123456');
    expect(text.render()).toMatchSnapshot();
  });
  test('should have green (#20A052) from york-core colors', () => {
    const text = shallow(<Text color="green">Test</Text>);
    expect(text).toHaveStyleRule('color', '#20A052');
    expect(text.render()).toMatchSnapshot();
  });
  test('should have font-size 20px and line-height 30px', () => {
    const text = shallow(<Text fontSize={20} lineHeight={30}>Test</Text>);
    expect(text).toHaveStyleRule('font-size', '20px');
    expect(text).toHaveStyleRule('line-height', '30px');
    expect(text.render()).toMatchSnapshot();
  });
  test('should have bold font', () => {
    const text = shallow(<Text fontWeight={700}>Test</Text>);
    expect(text).toHaveStyleRule('font-weight', '700');
    expect(text).toHaveStyleRule('font-family', 'MuseoSansCyrl');
    expect(text.render()).toMatchSnapshot();
  });
  test('should have light font', () => {
    const text = shallow(<Text fontWeight={300}>Test</Text>);
    expect(text).toHaveStyleRule('font-weight', '300');
    expect(text).toHaveStyleRule('font-family', 'MuseoSansCyrl');
    expect(text.render()).toMatchSnapshot();
  });
  test('should have default text2 preset', () => {
    const text = shallow(<Text>Test</Text>);
    expect(text).toHaveStyleRule('color', '#222222');
    expect(text).toHaveStyleRule('font-weight', '500');
    expect(text).toHaveStyleRule('font-size', '16px');
    expect(text).toHaveStyleRule('line-height', '25px');
    expect(text).toHaveStyleRule('font-family', 'MuseoSansCyrl');
    expect(text.render()).toMatchSnapshot();
  });
  test('should have ph1 preset', () => {
    const text = shallow(<Text preset="ph1">Test</Text>);
    expect(text).toHaveStyleRule('color', '#222222');
    expect(text).toHaveStyleRule('font-weight', '700');
    expect(text).toHaveStyleRule('font-size', '70px');
    expect(text).toHaveStyleRule('line-height', '75px');
    expect(text).toHaveStyleRule('font-family', 'MuseoSansCyrl');
    expect(text.render()).toMatchSnapshot();
  });
  test('should have ph2 preset', () => {
    const text = shallow(<Text preset="ph2">Test</Text>);
    expect(text).toHaveStyleRule('color', '#222222');
    expect(text).toHaveStyleRule('font-weight', '700');
    expect(text).toHaveStyleRule('font-size', '60px');
    expect(text).toHaveStyleRule('line-height', '65px');
    expect(text).toHaveStyleRule('font-family', 'MuseoSansCyrl');
    expect(text.render()).toMatchSnapshot();
  });
  test('should have ph3 preset', () => {
    const text = shallow(<Text preset="ph3">Test</Text>);
    expect(text).toHaveStyleRule('color', '#222222');
    expect(text).toHaveStyleRule('font-weight', '700');
    expect(text).toHaveStyleRule('font-size', '50px');
    expect(text).toHaveStyleRule('line-height', '55px');
    expect(text).toHaveStyleRule('font-family', 'MuseoSansCyrl');
    expect(text.render()).toMatchSnapshot();
  });
  test('should have h1 preset', () => {
    const text = shallow(<Text preset="h1">Test</Text>);
    expect(text).toHaveStyleRule('color', '#222222');
    expect(text).toHaveStyleRule('font-weight', '700');
    expect(text).toHaveStyleRule('font-size', '40px');
    expect(text).toHaveStyleRule('line-height', '45px');
    expect(text).toHaveStyleRule('font-family', 'MuseoSansCyrl');
    expect(text.render()).toMatchSnapshot();
  });
  test('should have h2 preset', () => {
    const text = shallow(<Text preset="h2">Test</Text>);
    expect(text).toHaveStyleRule('color', '#222222');
    expect(text).toHaveStyleRule('font-weight', '700');
    expect(text).toHaveStyleRule('font-size', '30px');
    expect(text).toHaveStyleRule('line-height', '35px');
    expect(text).toHaveStyleRule('font-family', 'MuseoSansCyrl');
    expect(text.render()).toMatchSnapshot();
  });
  test('should have h3 preset', () => {
    const text = shallow(<Text preset="h3">Test</Text>);
    expect(text).toHaveStyleRule('color', '#222222');
    expect(text).toHaveStyleRule('font-weight', '700');
    expect(text).toHaveStyleRule('font-size', '25px');
    expect(text).toHaveStyleRule('line-height', '30px');
    expect(text).toHaveStyleRule('font-family', 'MuseoSansCyrl');
    expect(text.render()).toMatchSnapshot();
  });
  test('should have h4 preset', () => {
    const text = shallow(<Text preset="h4">Test</Text>);
    expect(text).toHaveStyleRule('color', '#222222');
    expect(text).toHaveStyleRule('font-weight', '700');
    expect(text).toHaveStyleRule('font-size', '20px');
    expect(text).toHaveStyleRule('line-height', '25px');
    expect(text).toHaveStyleRule('font-family', 'MuseoSansCyrl');
    expect(text.render()).toMatchSnapshot();
  });
  test('should have text1 preset', () => {
    const text = shallow(<Text preset="text1">Test</Text>);
    expect(text).toHaveStyleRule('color', '#222222');
    expect(text).toHaveStyleRule('font-weight', '500');
    expect(text).toHaveStyleRule('font-size', '20px');
    expect(text).toHaveStyleRule('line-height', '30px');
    expect(text).toHaveStyleRule('font-family', 'MuseoSansCyrl');
    expect(text.render()).toMatchSnapshot();
  });
  test('should have link preset', () => {
    const text = shallow(<Text preset="link">Test</Text>);
    expect(text).toHaveStyleRule('color', '#222222');
    expect(text).toHaveStyleRule('font-weight', '700');
    expect(text).toHaveStyleRule('font-size', '15px');
    expect(text).toHaveStyleRule('line-height', '25px');
    expect(text).toHaveStyleRule('text-transform', 'uppercase');
    expect(text).toHaveStyleRule('font-family', 'MuseoSansCyrl');
    expect(text.render()).toMatchSnapshot();
  });
  test('should have caption1 preset', () => {
    const text = shallow(<Text preset="caption1">Test</Text>);
    expect(text).toHaveStyleRule('color', '#222222');
    expect(text).toHaveStyleRule('font-weight', '500');
    expect(text).toHaveStyleRule('font-size', '14px');
    expect(text).toHaveStyleRule('line-height', '20px');
    expect(text).toHaveStyleRule('font-family', 'MuseoSansCyrl');
    expect(text.render()).toMatchSnapshot();
  });
  test('should have caption2 preset', () => {
    const text = shallow(<Text preset="caption2">Test</Text>);
    expect(text).toHaveStyleRule('color', '#222222');
    expect(text).toHaveStyleRule('font-weight', '500');
    expect(text).toHaveStyleRule('font-size', '12px');
    expect(text).toHaveStyleRule('line-height', '15px');
    expect(text).toHaveStyleRule('font-family', 'MuseoSansCyrl');
    expect(text.render()).toMatchSnapshot();
  });
  test('should reassign h1 preset parameters', () => {
    const text = shallow(<Text fontSize={7} lineHeight={10} fontWeight={300} preset="h1">Test</Text>);
    expect(text).toHaveStyleRule('color', '#222222');
    expect(text).toHaveStyleRule('font-weight', '300');
    expect(text).toHaveStyleRule('font-size', '7px');
    expect(text).toHaveStyleRule('line-height', '10px');
    expect(text).toHaveStyleRule('font-family', 'MuseoSansCyrl');
    expect(text.render()).toMatchSnapshot();
  });
  test('should remove link preset uppercase transform', () => {
    const text = shallow(<Text preset="link" textTransform="none">Test</Text>);
    expect(text).toHaveStyleRule('color', '#222222');
    expect(text).toHaveStyleRule('font-weight', '700');
    expect(text).toHaveStyleRule('font-size', '15px');
    expect(text).toHaveStyleRule('line-height', '25px');
    expect(text).toHaveStyleRule('text-transform', 'none');
    expect(text).toHaveStyleRule('font-family', 'MuseoSansCyrl');
    expect(text.render()).toMatchSnapshot();
  });
});
