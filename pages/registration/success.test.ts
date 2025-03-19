import {VueWrapper, mount, RouterLinkStub} from "@vue/test-utils";
import {createTestingPinia} from '@pinia/testing';
import {it, expect, describe, beforeEach, afterEach, vi} from "vitest";
import {useUserStore} from '../../stores/user';
import SuccessPage from './success.vue';

describe('Success Page', () => {
    let wrapper: VueWrapper;
    let userStoreMock: ReturnType<typeof useUserStore>;

    beforeEach(async () => {
        const pinia = createTestingPinia({
            initialState: {
                userStore: {
                    user: {
                        email: "test@test.com",
                        receiveNewsletter: true
                    },

                }
            }
        });
        userStoreMock = useUserStore();

        wrapper = mount(SuccessPage, {
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
        userStoreMock.reset();
    });
    it('shows registration successful text', () => {
        expect(wrapper.find('h1').text()).toBe('Registration Successful');
    });

    it('displays welcome text for user email', async () => {
        await wrapper.vm.$nextTick();
        expect(wrapper.find('h4').text()).toBe('Welcome, test@test.com')
    });

    it('displays newsletter text if suers opted in', async () => {
        await wrapper.vm.$nextTick();
        expect(wrapper.find('p').text()).toBe('Thank you for subscribing to our newsletter!')
    });

});