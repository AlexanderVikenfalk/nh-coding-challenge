export default defineNuxtRouteMiddleware((to, from) => {
    const user = useUserStore();
    if (!user.isSuccess) {
        return navigateTo("/register");
    }
});