import React from 'react';
import Section from './Section';
import { shallow } from 'enzyme';

describe('Section Component Test', () => {
    it('render successfully', () => {
        shallow(<Section/>);
    });
});