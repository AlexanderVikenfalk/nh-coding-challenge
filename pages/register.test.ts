import {it, expect, describe, beforeEach, afterEach, vi} from "vitest";
import {createTestingPinia} from '@pinia/testing';
import {useAlertStore} from '../stores/alert';
import {mount, VueWrapper} from "@vue/test-utils";

import Register from './Register.vue';


describe('Register Page', () => {
    let wrapper: VueWrapper;
    let alertStoreMock: ReturnType<typeof useAlertStore>;

    beforeEach(async () => {
        const pinia = createTestingPinia();
        alertStoreMock = useAlertStore();

        wrapper = mount(Register, {
            global: {
                plugins: [pinia],
                components: {
                    NuxtLink: {
                        template: '<a :href="to"><slot /></a>',
                        props: ['to'],
                    },
                },
            },
        });
    });

    afterEach(() => {
        vi.clearAllMocks();
        alertStoreMock.reset();
    });
    it('can mount the component', async () => {
        expect(wrapper.html()).toContain('Register')
    })

    it('renders the header', async () => {
        const header = wrapper.find('h1');
        expect(header.exists()).toBe(true);
        expect(header.text()).toBe('Create Nord Account');
    });

    it('displays an error banner', async () => {
        let banner = wrapper.find('provet-banner');
        expect(banner.exists()).toBe(false);

        alertStoreMock.message = "Error test";
        alertStoreMock.variant = "Danger";
        alertStoreMock.showAlert = true;
        await wrapper.vm.$nextTick();

        banner = wrapper.find('provet-banner');

        expect(banner.exists()).toBe(true);
        expect(banner.attributes('variant')).toBe('Danger');
        expect(banner.text()).toBe('Error test');
    });
})