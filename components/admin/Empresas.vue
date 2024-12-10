<template>
    <div class="bg-white w-[60%] absolute top-1/4 left-1/4 rounded-lg" ref="draggable">
        <div class="handle bg-blue-700 h-8 cursor-move flex text-white font-bold">
            <UIcon name="i-heroicons-building-office" class="w-6 h-6 my-auto px-4" />
            <p class="my-auto mx-1">Empresas</p>
            <div class="flex ml-auto h-auto w-auto hover:bg-blue-800 cursor-pointer" title="Cerrar">
                <span class="material-symbols-outlined my-auto">close</span>
            </div>
        </div>
        <div class="p-2 pb-0 flex gap-2">
            <UButton color="blue" icon="i-heroicons-document-check">Nuevo</UButton>
        </div>
        <div class="p-2">
            <table class="w-full bg-blue-700 rounded-lg text-left">
                <thead class="text-white uppercase text-sm font-medium">
                    <th class="px-2 py-1">ID</th>
                    <th class="px-2 py-1">Razón Social</th>
                    <th class="px-2 py-1">Nomb. Com.</th>
                    <th class="px-2 py-1">Abrev.</th>
                    <th class="px-2 py-1">RUC</th>
                    <th class="px-2 py-1">Grupo</th>
                    <th class="px-2 py-1">Dirección</th>
                    <th class="px-2 py-1">Estado</th>
                    <th class="px-2 py-1">Acciones</th>
                </thead>
                <tbody v-if="isLoading">
                    <tr class="bg-white">
                        <td class="px-2 py-1" colspan="9">
                            <div class="flex flex-col">
                                <UButton class="mx-auto" color="blue" variant="link" size="xl" loading></UButton>
                                <label class="text-blue-400 uppercase font-bold mx-auto">Cargando...</label>
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <tr v-for="item in lstEmpresas" class="odd:bg-blue-200 even:bg-blue-300">
                        <td class="px-2 py-1">{{ item.empr_id }}</td>
                        <td class="px-2 py-1">{{ item.empr_social }}</td>
                        <td class="px-2 py-1">{{ item.empr_nomb }}</td>
                        <td class="px-2 py-1">{{ item.empr_abrev }}</td>
                        <td class="px-2 py-1">{{ item.empr_ruc }}</td>
                        <td class="px-2 py-1">{{ item.empr_grupo }}</td>
                        <td class="px-2 py-1">{{ item.empr_direcc }}</td>
                        <td class="px-2 py-1">{{ item.empr_estado === 1 ? 'Activo' : 'Inactivo' }}</td>
                        <td class="px-2 py-1 flex gap-1">
                            <UButton icon="ic:baseline-edit" color="blue" title="Editar"></UButton>
                            <UButton icon="ic:baseline-close" color="blue" title="Suspender"></UButton>
                            <UButton color="blue" title="Facturación Electróncia">
                                
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

const sunat = ref('/assets/img/sunat.svg');

const draggable = ref(null);
const isLoading = ref(false);
const lstEmpresas = ref(['']);

onMounted(() => {
    $(draggable.value).draggable({ handle: '.handle' });
    getEmpresas();
});

const getEmpresas = async () => {
    isLoading.value = true;
    try{
        const data = await get('/empresas');
        lstEmpresas.value = data.empresas;
    }catch(error){
        console.error(error);
    }finally{
        isLoading.value = false;
    }
}
</script>