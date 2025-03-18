export const useAlertStore = defineStore('alert', () => {
    const message = ref('')
    const showAlert = ref(false)
    const variant = ref('default')

    function show(newMessage: string, newVariant: string = 'default') {
        message.value = newMessage
        variant.value = newVariant
        showAlert.value = true
    }

    function reset() {
        message.value = ''
        variant.value = ''
        showAlert.value = false
    }

    return {
        message,
        showAlert,
        variant,
        show,
        reset,
    }
})