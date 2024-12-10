<template>
    <div class="bg-white absolute w-[1080px] top-1/4 left-1/4 rounded-lg" ref="draggable">
        <div class="handle bg-blue-700 h-8 cursor-move flex text-white font-bold">
            <UIcon name="i-heroicons-building-office" class="w-6 h-6 my-auto px-4" />
            <p class="my-auto mx-1">Agregar Nueva Empresa</p>
            <div class="flex ml-auto h-auto w-auto hover:bg-blue-800 cursor-pointer" title="Cerrar">
                <span class="material-symbols-outlined my-auto">close</span>
            </div>
        </div>
        <form @submit.prevent="agregarEmpresa" class="p-2 w-full font-semibold text-gray-600">
            <div class="py-2 grid grid-cols-12 gap-2">
                <label class="col-span-1 text-center">Código:*</label>
                <input v-model="formData.empr_id"
                    class=" col-span-1 text-black font-normal px-1 border-[1.5px] border-solid border-gray-400 rounded-lg transition-colors focus:outline-none focus:bg-blue-200"
                    type="text" required>
                <label class="col-span-2 text-center">Razón Social:*</label>
                <input v-model="formData.empr_social"
                    class="col-span-8 uppercase text-black font-normal px-1 border-[1.5px] border-solid border-gray-400 rounded-lg transition-colors focus:outline-none focus:bg-blue-200"
                    type="text" required>
            </div>
            <div class="py-2 grid grid-cols-12 gap-2">
                <label class="col-span-2 text-center">Nomb. Comerc:*</label>
                <input v-model="formData.empr_nomb"
                    class="col-span-2 text-black font-normal px-1 border-[1.5px] border-solid border-gray-400 rounded-lg transition-colors focus:outline-none focus:bg-blue-200"
                    type="text" required>
                <label class="col-span-2 text-center">Nomb. Abrev:*</label>
                <input v-model="formData.empr_abrev"
                    class="col-span-1 text-black font-normal px-1 border-[1.5px] border-solid border-gray-400 rounded-lg transition-colors focus:outline-none focus:bg-blue-200"
                    type="text" required>
                <label class="col-span-1 text-center">R.U.C:*</label>
                <input v-model="formData.empr_ruc"
                    class="col-span-2 text-black font-normal px-1 border-[1.5px] border-solid border-gray-400 rounded-lg transition-colors focus:outline-none focus:bg-blue-200"
                    type="text" required>
                <label class="col-span-1 text-center">Tipo:*</label>
                <select v-model="formData.empr_tipo"
                    class="appearance-auto col-span-1 text-black font-normal border-[1.5px] border-gray-400 border-solid rounded-lg transition-colors focus:outline-none focus:bg-blue-200"
                    type="text">
                    <option selected disabled hidden>---</option>
                    <option value="1">Empresa</option>
                    <option value="2">Tienda</option>
                </select>
            </div>
            <div class="py-2 grid grid-cols-12 gap-2">
                <label class="col-span-1 text-center">Ubicación:*</label>
                <select v-model="formData.empr_ubic"
                    class="appearance-auto text-black col-span-3 font-normal px-2 border-[1.5px] border-gray-400 border-solid rounded-lg transition-colors focus:outline-none focus:bg-blue-200">
                    <option selected disabled hidden>---</option>
                    <option v-for="item in lstDep" :key="item.depa_id" :value="item.depa_id">{{
                        item.depa_nomb }}</option>
                </select>
                <label class="col-span-1 text-center">Dirección:*</label>
                <input v-model="formData.empr_direcc"
                    class="col-span-6 text-black font-normal px-1 border-[1.5px] border-solid border-gray-400 rounded-lg transition-colors focus:outline-none focus:bg-blue-200"
                    type="text">
            </div>
            <div class="py-2 grid grid-cols-12 gap-2">
                <label class="col-span-1 text-center">Teléfono:*</label>
                <input v-model="formData.empr_telf"
                    class="col-span-2 text-black font-normal px-1 border-[1.5px] border-solid border-gray-400 rounded-lg transition-colors focus:outline-none focus:bg-blue-200"
                    type="text">
                <label class="col-span-2 text-center">Lst. Precios:</label>
                <select
                    class="appearance-auto col-span-4 text-black font-normal px-2 border-[1.5px] border-gray-400 border-solid rounded-lg transition-colors focus:outline-none focus:bg-blue-200"
                    type="text">
                    <option>--Todos--</option>
                    <option>TIENDA TAL</option>
                </select>
            </div>
            <div class="py-2 grid grid-cols-12 gap-2">
                <label class="col-span-1 text-center">Dir. Fiscal:</label>
                <input
                    class="col-span-1 text-black font-normal px-1 border-[1.5px] border-solid rounded-lg bg-yellow-200"
                    type="text" disabled>
                <input
                    class="col-span-10 text-black font-normal px-1 border-[1.5px] border-solid  border-gray-400 rounded-lg transition-colors focus:outline-none focus:bg-blue-200"
                    type="text">
            </div>
            <div class="py-2 grid grid-cols-12 gap-2">
                <label class="col-span-1 text-center">Series:</label>
                <input v-model="formData.empr_seriedoc"
                    class="col-span-1 text-black font-normal px-1 border-[1.5px] border-solid border-gray-400 rounded-lg transition-colors focus:outline-none focus:bg-blue-200"
                    type="text">
                <label class="col-span-1 text-center">Grupo:</label>
                <input v-model="formData.empr_grupo"
                    class="col-span-1 text-black font-normal px-1 border-[1.5px] border-solid border-gray-400 rounded-lg transition-colors focus:outline-none focus:bg-blue-200"
                    type="text">
                <label class="col-span-2 text-center">Sede Principal:</label>
                <select v-model="formData.empr_sede"
                    class="appearance-auto col-span-1 text-black font-normal px-2 border-[1.5px] border-gray-400 border-solid rounded-lg transition-colors focus:outline-none focus:bg-blue-200"
                    type="text">
                    <option value="SI">Si</option>
                    <option value="NO">No</option>
                </select>
                <label class="col-span-2 text-center">Fecha Inventario:</label>
                <input v-model="formData.empr_fecinvIns"
                    class="col-span-2 text-black font-normal px-1 border-[1.5px] border-solid border-gray-400 rounded-lg transition-colors focus:outline-none focus:bg-blue-200"
                    type="date">
            </div>
            <div class="py-2 grid grid-cols-12 gap-2">
                <label class="col-span-1 text-center">Usuario:</label>
                <input v-model="formData.empr_correouser"
                    class="col-span-2 text-black font-normal px-1 border-[1.5px] border-solid border-gray-400 rounded-lg transition-colors focus:outline-none focus:bg-blue-200"
                    type="text">
                <label class="col-span-2 text-right">Contraseña:</label>
                <input v-model="formData.empr_passuser"
                    class="col-span-2 text-black font-normal px-1 border-[1.5px] border-solid border-gray-400 rounded-lg transition-colors focus:outline-none focus:bg-blue-200"
                    type="text">
            </div>
            <div class="py-2">
                <div class="text-black bg-amber-200 w-fit text-center px-2 py-1 uppercase rounded-lg mx-5">Cuentas
                    Bancarias</div>
            </div>
            <div class="py-2 grid grid-cols-10">
                <label class="col-span-2 text-center">N° de Cuenta 1:</label>
                <input v-model="formData.empr_ctabanca1"
                    class="col-span-7 text-black font-normal px-1 border-[1.5px] border-solid border-gray-400 rounded-lg transition-colors focus:outline-none focus:bg-blue-200"
                    type="text">
            </div>
            <div class="py-2 grid grid-cols-10">
                <label class="col-span-2 text-center">N° de Cuenta 2:</label>
                <input v-model="formData.empr_ctabanca2"
                    class="col-span-7 text-black font-normal px-1 border-[1.5px] border-solid border-gray-400 rounded-lg transition-colors focus:outline-none focus:bg-blue-200"
                    type="text">
            </div>
            <div class="py-2 grid grid-cols-10">
                <label class="col-span-2 text-center">N° de Cuenta 3:</label>
                <input v-model="formData.empr_ctabanca3"
                    class="col-span-7 text-black font-normal px-1 border-[1.5px] border-solid border-gray-400 rounded-lg transition-colors focus:outline-none focus:bg-blue-200"
                    type="text">
            </div>
            <div class="flex justify-end">
                <UButton type="submit" color="blue" icon="ic:baseline-save" :loading="loading">Guardar</UButton>
            </div>
        </form>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
const { get, post } = useApi();

const draggable = ref(null);
let lstDep = ref(['']);

let loading = ref(false);
const formData = ref({
    empr_id: '',
    empr_social: '',
    empr_nomb: '',
    empr_abrev: '',
    empr_ruc: '',
    empr_tipo: '',
    empr_ubic: '',
    empr_direcc: '',
    empr_telf: '',
    empr_seriedoc: '',
    empr_grupo: '',
    empr_sede: '',
    empr_fecinvIns: '',
    empr_correouser: '',
    empr_passuser: '',
    empr_ctabanca1: '',
    empr_ctabanca2: '',
    empr_ctabanca3: '',
})

onMounted(() => {
    $(draggable.value).draggable({ handle: '.handle' });
    getDept();
});

const getDept = async () => {
    try {
        const data = await get('/departamentos');
        lstDep.value = data.departamentos;
    } catch (error) {
        console.error(error);
    }
}

const agregarEmpresa = async () => {
    loading.value = true;
    try {
        await post('/empresas', formData.value);
    } catch (error) {
        console.error(error);
    } finally {
        loading.value = false;
    }
}


//Cerrar ventanas

const emit = defineEmits(['close']);

const close = () => {
    emit('close')
}
</script>