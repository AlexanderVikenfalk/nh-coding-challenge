import {it, expect, describe, beforeEach} from "vitest";
import {mount, VueWrapper} from "@vue/test-utils";

import Login from './Login.vue';

describe('Login Page', () => {
    let wrapper: VueWrapper;

    beforeEach(async () => {
        wrapper = mount(Login);

    })
    it('renders the header', async () => {
        const header = wrapper.find('h1');
        expect(header.exists()).toBe(true);
        expect(header.text()).toBe('Login Mock');
    });

})