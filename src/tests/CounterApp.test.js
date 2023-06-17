import React from 'react'
import CounterApp from '../CounterApp';
import { shallow } from 'enzyme';

describe('Test in CounterApp.test.js', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
    wrapper.find('button').at(1).simulate('click');
  })

  test('should subtract 1 to the count', () => { 

    wrapper.find('button').at(0).simulate('click');

    const countOutput = wrapper.find('h2').text().trim();

    expect(countOutput).toBe('-1');

  });

  test('should add 1 to the count', () => { 

    wrapper.find('button').at(2).simulate('click');

    const countOutput = wrapper.find('h2').text().trim();

    expect(countOutput).toBe('1');

  });
});
