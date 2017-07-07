import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TableExample from '../../../src/screens/DashboardForm';

describe('tests TableExample', () => {
  it('renders TableExample component', () => {
  const component = shallow(
    <TableExample
    />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
