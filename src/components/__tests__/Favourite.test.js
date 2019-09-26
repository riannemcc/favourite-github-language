import React from 'react';
import { render } from '../enzyme';
import Favourite from './Favourite';

describe('Favourite', () => {

    it('renders the users favourite language', () => {
        const repoLanguages = ['ruby', 'ruby', 'java', 'java']
        const username = "riannemcc"
        const wrapper = render(<Repo languages={repoLanguages} />);

        expect(wrapper.contains(<h3>Fave language:</h3>))
    })
})