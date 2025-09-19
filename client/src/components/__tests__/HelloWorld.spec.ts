import { describe, it, expect } from 'vitest'
// TODO: fix tests
import { mount } from '@vue/test-utils'
import HomeHeader from '@/components/HomeHeader.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HomeHeader, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
