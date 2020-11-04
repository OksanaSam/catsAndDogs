import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Cat from './Cat';

Enzyme.configure({ adapter: new EnzymeAdapter() });

 /**
  * Factory function to create a ShallowWrapper for the Cat component.
  * @function setup
  * @param {object} props - Component props specific to this setup.
  * @returns {ShallowWrapper}
  */
 const setup = (props={}) => {
  return shallow(<Cat { ...props }/>)
}


/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test!
 * 
 */
const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}

test('renders without error', () => {
    const wrapper = setup().dive();
    const catComponent = findByTestAttr(wrapper, 'component-cat');
    expect(catComponent.length).toBe(1);
  });