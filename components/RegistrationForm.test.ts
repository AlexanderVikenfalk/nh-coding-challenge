import {VueWrapper, mount} from "@vue/test-utils";
import {createTestingPinia} from '@pinia/testing';
import {useUserStore} from '../stores/user';
import {it, expect, describe, beforeEach, afterEach, vi} from "vitest";
import RegistrationForm from './RegistrationForm.vue';

describe('Registration Form', () => {
    let wrapper: VueWrapper;
    let userStoreMock: ReturnType<typeof useUserStore>;

    beforeEach(async () => {
        const pinia = createTestingPinia();
        userStoreMock = useUserStore();

        wrapper = mount(RegistrationForm, {
            global: {
                plugins: [pinia],
            },
        });
    });
    afterEach(() => {
        vi.clearAllMocks();
        userStoreMock.reset();
    });

    it('can mount the component', () => {
        expect(wrapper.html()).toContain('Register');
    });


    it('toggles password visibility when button is clicked', async () => {
        const passwordInput = wrapper.find('provet-input[name="password"]');
        const toggleButton = wrapper.find('provet-input[name="password"] provet-button');

        expect(passwordInput.attributes('type')).toBe('password');
        await toggleButton.trigger('click');
        expect(passwordInput.attributes('type')).toBe('text');
        await toggleButton.trigger('click');
        expect(passwordInput.attributes('type')).toBe('password');
    });

    it('shows loading spinner when form has pending state', async () => {
        userStoreMock.isPending = true;
        await wrapper.vm.$nextTick();

        const submitButton = wrapper.find('provet-button[type="submit"]');
        expect(submitButton.attributes('aria-label')).toBe('Loading');
        expect(submitButton.attributes('disabled')).toBeDefined();
        expect(wrapper.find('provet-spinner').exists()).toBe(true);
    });

    it('should not display register text in the submit button', async () => {
        userStoreMock.isPending = true;
        await wrapper.vm.$nextTick();

        const submitButton = wrapper.find('provet-button[type="submit"]');
        expect(submitButton.findAll('span').some(span => span.text() === 'Register')).toBe(false);
    });

    describe('Inputs', () => {
        it('renders email input with correct attributes', () => {
            const emailInput = wrapper.find('provet-input[name="email"]');
            expect(emailInput.exists()).toBe(true);
            expect(emailInput.attributes('type')).toBe('email');
            expect(emailInput.attributes('label')).toBe('Email');
            expect(emailInput.attributes('required')).toBeDefined();
            expect(emailInput.attributes('autocomplete')).toBe('email');
        });

        it('renders password input with correct attributes', () => {
            const passwordInput = wrapper.find('provet-input[name="password"]');
            expect(passwordInput.exists()).toBe(true);
            expect(passwordInput.attributes('type')).toBe('password');
            expect(passwordInput.attributes('label')).toBe('Password');
            expect(passwordInput.attributes('hint')).toBe('Has to be at least 6 characters');
            expect(passwordInput.attributes('required')).toBeDefined();
            expect(passwordInput.attributes('autocomplete')).toBe('off');
        });

        it('renders confirm password input with correct attributes', () => {
            const confirmPasswordInput = wrapper.find('provet-input[name="confirmPassword"]');
            expect(confirmPasswordInput.exists()).toBe(true);
            expect(confirmPasswordInput.attributes('type')).toBe('password');
            expect(confirmPasswordInput.attributes('label')).toBe('Confirm Password');
            expect(confirmPasswordInput.attributes('required')).toBeDefined();
            expect(confirmPasswordInput.attributes('autocomplete')).toBe('off');
        });

        it('renders receive newsletter checkbox with correct attributes', () => {
            const receiveNewsletter = wrapper.find('provet-checkbox[name="receiveNewsletter"]');
            expect(receiveNewsletter.exists()).toBe(true);
            expect(receiveNewsletter.attributes('type')).toBe('checkbox');
            expect(receiveNewsletter.attributes('label')).toBe('I would like to receive product updates and announcements');
        });
    });
});
