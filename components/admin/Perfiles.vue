<template>
    <div class="bg-white absolute top-1/4 left-1/4 rounded-lg" ref="draggable">
        <div class="handle bg-blue-700 h-8 cursor-move flex text-white font-bold">
            <span class="material-symbols-outlined my-auto mx-2">person</span>
            <p class="my-auto mx-1">Perfiles</p>
            <div class="flex ml-auto h-auto w-auto hover:bg-blue-800 cursor-pointer" title="Cerrar">
                <span class="material-symbols-outlined my-auto" @click="close">close</span>
            </div>
        </div>
        <div class="p-2">
            <form @submit.prevent="addItem"
                class="grid gap-2 [grid-template-columns:0.2fr_1fr_0.1fr] bg-blue-300 p-2 rounded-lg">
                <div class="[grid-column:1/-1] uppercase text-black font-bold">Crear Nuevo Perfil:</div>
                <div class="my-auto">Nombre:</div>
                <div class="my-auto"><input v-model="formData.name" class="bg-white w-full rounded-lg px-2" type="text"
                        name="nombre" required></div>
                <div v-if="!loading">
                    <UButton type="submit" icon="i-heroicons-plus" size="sm" color="blue" square variant="solid"
                        @click="submitForm" title="Agregar Perfil">
                    </UButton>
                </div>
                <div v-else>
                    <UButton type="submit" icon="i-heroicons-plus" size="sm" color="blue" square variant="solid"
                        @click="submitForm" loading>
                    </UButton>
                </div>
            </form>
        </div>
        <div class="p-2">
            <table class="w-full bg-blue-700 rounded-lg text-left">
                <thead class="text-white uppercase text-sm font-medium">
                    <th class="px-2 py-1">Nombre</th>
                    <th class="px-2 py-1">Estado</th>
                    <th class="px-2 py-1">Acciones</th>
                </thead>
                <tbody>
                    <tr v-for="item in items" :key="item.perf_id" class="odd:bg-blue-200 even:bg-blue-300">
                        <td class="px-2 py-1">{{ item.perf_nomb }}</td>
                        <td v-if="item.perf_estado === 1" class="px-2 py-1 text-green-600">Activo</td>
                        <td v-else="item.perf_estado === 9" class="px-2 py-1 text-red-600">Inactivo</td>
                        <td class="px-2 py-1 grid grid-cols-2 w-fit gap-2">
                            <UButton icon="i-heroicons-pencil-square" size="xs" color="blue" square title="Editar">
                            </UButton>
                            <UButton :disabled="item.perf_estado === 9 ? true : false" icon="i-heroicons-no-symbol" size="xs" color="red" square title="Suspender" @click="suspenderItem(item.perf_id)">
                            </UButton>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
const { get, post } = useApi();

const draggable = ref(null);



let items = ref([]);
const newItem = ref('');
let loading = ref(false)
const formData = ref({
    name: '',
})

const fetchItems = async () => {
    try {
        const data = await get('/perfiles');
        items.value = data.perfiles;
    } catch (error) {
        console.error(error);
    }
}

const addItem = async () => {
    loading.value = true;
    try {
        await post('/perfiles', {
            nombre: formData.value.name,
        });
        formData.value.name = '';
        await fetchItems();
    } catch (error) {
        console.error(error);
    } finally {
        loading.value = false;
    }
}

const suspenderItem = async (id) => {
    try{
        await post('/perfiles/suspender',{
            id: id,
        });
        await fetchItems();
    }catch (error) {
        console.log(error);
    }
}

onMounted(() => {
    fetchItems();
    $(draggable.value).draggable({ handle: '.handle' });
});

const emit = defineEmits(['close']);

const close = () => {
    emit('close')
}
</script>