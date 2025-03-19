import {useAlertStore} from "~/stores/alert";
import type {UserData} from "~/utils/userSchema";

export const useUserStore = defineStore('userStore', () => {
    const user = ref<UserData | null>(null);
    const isPending = ref<boolean>(false);
    const isSuccess = ref<boolean>(false);
    const alert = useAlertStore()

    const router = useRouter()

    function reset(): void {
        user.value = null
        isPending.value = false;
        isSuccess.value = false;
    }

    async function register(userData: UserData): Promise<void> {
        try {
            isPending.value = true;
            await new Promise((resolve) => setTimeout(resolve, 2000));
            // This is just an example of what the real API call could look like
            // user.value = await $fetch<UserData>('/api/register', {
            //   method: 'POST',
            //   body: userData,
            // });

            // Uncomment this to see how the API error handling is working
            // throw new Error("Forced error for testing");
            user.value = userData;
            isSuccess.value = true;
            alert.reset();
            await router.push('/registration/success')
        } catch (error) {
            isSuccess.value = false;
            const errorMessage = error instanceof Error ? error.message : "an unknown error has occured"
            alert.show(`Registration failed.${errorMessage}. Please try again.`, 'danger');
        } finally {
            isPending.value = false;
        }
    }

    return {
        user,
        isPending,
        isSuccess,
        register,
        reset,
    };
});