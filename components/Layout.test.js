/* eslint-env mocha */

import { expect } from 'chai';
import { render } from 'enzyme';
import Layout from './Layout';

describe('Layout', () => {
  it('renders children correctly', () => {
    const wrapper = render(
      <Layout>
        <div className="child" />
      </Layout>,
    );

    expect(wrapper.find('div.child').length).to.equal(1);
  });
});
