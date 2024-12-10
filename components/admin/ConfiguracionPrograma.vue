<template>
    <div class="absolute w-2/5 bg-white h-auto pb-5 rounded-lg z-20 left-1/4 top-1/4" ref="draggable">
        <div class="handle bg-blue-700 h-8 cursor-move flex text-white font-bold">
            <span class="material-symbols-outlined my-auto mx-2">settings</span>
            <p class="my-auto mx-1">Configuración de Programa</p>
            <div class="flex ml-auto h-auto w-auto hover:bg-blue-800 cursor-pointer" title="Cerrar">
                <span class="material-symbols-outlined my-auto" @click="close">close</span>
            </div>
        </div>
        <div v-if="isFetching">
            Cargando...
        </div>
        <div v-else class="px-2 py-4">
            <table class="w-full bg-blue-700 rounded-lg text-left">
                <thead class="text-white uppercase text-sm font-medium">
                    <th class="px-2 py-1">Descripción</th>
                    <th class="px-2 py-1">Orden</th>
                    <th class="px-2 py-1">Acción</th>
                </thead>
                <tbody>
                    <tr v-for="item in data.modulos" :key="item.modl_id" class="odd:bg-blue-200 even:bg-blue-300">
                        <td class="px-2 py-1">{{ item.modl_nombre }}</td>
                        <td class="px-2 py-1">{{ item.modl_orden }}</td>
                        <td class="px-2 py-1">
                            <UButton icon="i-heroicons-pencil-square" size="xs" color="blue" square>
                            </UButton>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="px-2 grid gap-2 grid-cols-3 w-fit">
            <UButton icon="i-heroicons-arrow-path" color="blue" @click="updateData">Actualizar</UButton>
            <UButton icon="i-heroicons-plus-circle" color="blue" @click="openWindow('AgregarModulo')">Añadir Módulo</UButton>
            <UButton icon="i-heroicons-plus-circle" color="blue">Añadir Programa</UButton>
        </div>
    </div>
    
</template>

<script setup>
import { onMounted, ref } from 'vue';

const draggable = ref(null);

onMounted(() => {
    $(draggable.value).draggable({ handle: '.handle' });
});

const columns = [{
    key: 'modl_nombre',
    label: 'Descripción'
}, {
    key: 'modl_orden',
    label: 'Orden',
}, {
    key: 'accion',
    label: 'Editar'
}]

const {data, error, isFetching, refresh} = await useFetch('http://127.0.0.1:8000/api/modulos');

const emit = defineEmits(['close']);

defineProps(['openWindow']);

const updateData = async () => {
    const {data: updateData} = await refresh();
}

const close = () => {
    emit('close')
}


</script>