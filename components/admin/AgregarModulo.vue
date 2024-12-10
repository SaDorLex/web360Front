<template>
    <div class="bg-black/[0.6] w-full h-full z-200 absolute">
        <form class="bg-white w-1/3 absolute top-[15%] left-1/3 rounded-lg">
            <div class="handle bg-blue-700 h-8 flex text-white font-bold">
                <span class="material-symbols-outlined my-auto mx-2">add_circle</span>
                <p class="my-auto mx-1">Configuración de Programa</p>
                <div class="flex ml-auto h-auto w-auto hover:bg-blue-800 cursor-pointer" title="Cerrar">
                    <span class="material-symbols-outlined my-auto" @click="close">close</span>
                </div>
            </div>
            <div class="p-2">
                <div class="bg-blue-800 gap-2 text-white font-bold px-2 py-1 grid [grid-template-columns:1fr_0.2fr]">
                    <div>Descripción</div>
                    <div>Acción</div>

                </div>
                <div class="bg-blue-500 gap-2 text-white font-bold px-2 py-2 grid [grid-template-columns:1fr_0.2fr]">
                    <input class="bg-white rounded-lg w-3/4 px-2 font-normal">
                    <button class="w-fit h-fit rounded-lg hover:bg-blue-800 flex p-0.5" title="Añadir">
                        <span class="material-symbols-outlined">add</span>
                    </button>
                </div>
            </div>
            <div class="p-2">
                <table class="w-full bg-blue-700 rounded-lg text-left">
                    <thead class="text-white uppercase text-sm font-medium">
                        <th class="px-2 py-1">Descripción</th>
                        <th class="px-2 py-1">Orden</th>
                    </thead>
                    <tbody>
                        <tr v-for="item in data.modulos" :key="item.modl_id" class="odd:bg-blue-200 even:bg-blue-300">
                            <td class="px-2 py-1">{{ item.modl_nombre }}</td>
                            <td class="px-2 py-1">{{ item.modl_orden }}</td>
                            <td class="px-2 py-1 grid grid-cols-2 w-fit gap-2">
                                <UButton icon="i-heroicons-pencil-square" size="xs" color="blue" square title="Editar">
                                </UButton>
                                <UButton icon="i-heroicons-trash" size="xs" color="blue" square title="Eliminar">
                                </UButton>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </form>
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

const { data, error, isFetching, refresh } = await useFetch('http://127.0.0.1:8000/api/modulos');

const emit = defineEmits(['close']);

const close = () => {
    emit('close')
};

</script>