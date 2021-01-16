import { ref, watch, onMounted } from 'vue'
export const useAumentar = () => {

const numero = ref(0)
const aumentar = () => {
    numero.value ++
}
watch(numero, () => {
    if(numero.value == 2){
        console.log('Dos')
    }
})
const posts = ref([])
onMounted(async() => {
    const rest = await fetch('https://jsonplaceholder.typicode.com/posts')
    posts.value = await res.json()
})

return {numero, aumentar,posts}
}
