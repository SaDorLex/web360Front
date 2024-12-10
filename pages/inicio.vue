<script setup>
import fondo from '~/assets/img/loginback.jpg'
import { ref } from 'vue';

const sedes = ref('Seleccionar Sede');
</script>
<template>
    <div class="w-screen h-screen bg-cover absolute flex" :style="{ backgroundImage: `url(${fondo})` }">
        <div class="bg-black/50 mx-auto my-[5%] h-fit rounded-xl px-[4vw] py-[2vw]">
            <form>
                <div class="w-fit mx-auto text-[2vw] my-5">BIENVENIDO</div>
                <div class="flex mx-auto w-fit my-5">
                    <div class="w-[50px] h-[50px] bg-lime-500 flex rounded-s-lg">
                        <UIcon name="i-heroicons-users" class="w-8 h-8 m-auto" />
                    </div>
                    <div class="flex">
                        <input type="text" class="bg-white w-[285px] px-2 focus:outline-none text-[1.25vw] rounded-e-lg"
                            placeholder="Usuario">
                    </div>
                </div>
                <div class="flex mx-auto w-fit my-5">
                    <div class="w-[50px] h-[50px] bg-lime-500 flex rounded-s-lg">
                        <UIcon name="i-heroicons-key" class="w-8 h-8 m-auto" />
                    </div>
                    <div class="flex">
                        <input type="password" class="bg-white w-[285px] px-2 focus:outline-none text-[1.25vw] rounded-e-lg"
                            placeholder="Contraseña">
                    </div>
                </div>
                <div class="flex mx-auto w-fit my-5">
                    <div class="w-[50px] h-[50px] bg-lime-500 flex rounded-s-lg">
                        <UIcon name="i-heroicons-building-office" class="w-8 h-8 m-auto" />
                    </div>
                    <div class="flex">
                        <select v-model="sedes"
                            class="bg-white px-2 w-[285px] focus:outline-none text-[1.25vw] rounded-e-lg">
                            <option selected hidden>Seleccionar Sede</option>
                        </select>
                    </div>
                </div>
                <div>
                    <button
                        class="bg-lime-500 w-full text-[1.1vw] font-bold rounded-lg px-1 py-1.5 transition-all duration-300 ease-linear hover:bg-lime-700">INGRESAR</button>
                </div>
            </form>
        </div>
    </div>
</template>