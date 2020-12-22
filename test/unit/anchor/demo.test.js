import { mount } from '@vue/test-utils';

// unit test for component in examples.

const props = {
  mocks: {
    $route: {
      path: 'http://example.com',
    },
  },
};

describe('Anchor', () => {
  it('base demo works fine', () => {
    const demo = require('@/examples/anchor/demos/base.vue').default;
    const wrapper = mount(demo, props);
    expect(wrapper.element).toMatchSnapshot();
  });
  it('bounds demo works fine', () => {
    const demo = require('@/examples/anchor/demos/nested.vue').default;
    const wrapper = mount(demo, props);
    expect(wrapper.element).toMatchSnapshot();
  });
  it('target demo works fine', () => {
    const demo = require('@/examples/anchor/demos/target.vue').default;
    const wrapper = mount(demo, props);
    expect(wrapper.element).toMatchSnapshot();
  });
});