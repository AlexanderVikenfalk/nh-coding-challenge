import {it, expect, describe, beforeEach} from "vitest";
import {mount, VueWrapper} from "@vue/test-utils";

import Index from './index.vue';

describe('Index Page', () => {
    let wrapper: VueWrapper;

    beforeEach(async () => {
        wrapper = mount(Index);

    })
    it('can mount the component', async () => {
        expect(wrapper.html()).toContain('Non reachable index mock page.')
    })
})