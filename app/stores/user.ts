import type {RegistrationFormData} from "@/types/types";
import {useAlertStore} from "@/stores/alert";

export const useUserStore = defineStore('userStore', () => {
    const user = ref({});
    const isPending = ref(false);
    const isSuccess = ref(false);
    const alert = useAlertStore()

    async function register(userData: RegistrationFormData) {
        try {
            isPending.value = true;
            await new Promise((resolve) => setTimeout(resolve, 2000));
            // This is just an example of what the real API call could look like
            // user.value = await $fetch('/api/register', {
            //   method: 'POST',
            //   body: userData,
            // });

            // Uncomment this to see how the error message is working
            // throw new Error("Forced error for testing");
            user.value = userData;
            isSuccess.value = true;
            alert.reset()
            console.log(isSuccess.value)
        } catch (error) {
            console.log(error);
            isSuccess.value = false;
            alert.show('Registration failed. Please try again.', 'danger');
        } finally {
            isPending.value = false;
        }
    }

    return {
        user,
        isPending,
        isSuccess,
        register,
    };
});