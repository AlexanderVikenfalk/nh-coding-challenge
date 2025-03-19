export const useAlertStore = defineStore('alert', () => {

    type Variant = 'default' | 'danger'

    const message = ref<string>('')
    const showAlert = ref<boolean>(false)
    const variant = ref<Variant>('default')

    function show(newMessage: string, newVariant: Variant = 'default'): void {
        message.value = newMessage
        variant.value = newVariant
        showAlert.value = true
    }

    function reset(): void {
        message.value = ''
        variant.value = 'default'
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