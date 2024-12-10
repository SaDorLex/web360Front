<script>
  export default {
    data: () => ({
      items: [
        { title: 'Configuración de Programa', window: 'ConfiguracionPrograma'},
        { title: 'Perfiles', window: 'AgregarPerfil'}
      ],
    }),
  }
</script>

<template>
    <v-card>
        <v-layout>
            <v-app-bar color="white" elevation="0">
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
                <v-menu open-on-hover>
                    <template v-slot:activator="{ props }">
                        <v-btn color="black" v-bind="props">
                            Administrador
                            <span class="material-symbols-outlined">arrow_drop_down</span>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item v-for="(item, index) in items" :key="index" :value="index" @click="openWindow(item.window)">
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
                <v-menu open-on-hover>
                    <template v-slot:activator="{ props }">
                        <v-btn color="black" v-bind="props">
                            Almacen
                            <span class="material-symbols-outlined">arrow_drop_down</span>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item v-for="(item, index) in items" :key="index" :value="index">
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
                <v-menu open-on-hover>
                    <template v-slot:activator="{ props }">
                        <v-btn color="black" v-bind="props">
                            Venta
                            <span class="material-symbols-outlined">arrow_drop_down</span>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item v-for="(item, index) in items" :key="index" :value="index">
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
                <v-menu open-on-hover>
                    <template v-slot:activator="{ props }">
                        <v-btn color="black" v-bind="props">
                            Cta. Cobrar 
                            <span class="material-symbols-outlined">arrow_drop_down</span>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item v-for="(item, index) in items" :key="index" :value="index">
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-app-bar>
        </v-layout>
    </v-card>
    <div v-for="(window, index) in windows" :key="index" class="window">
        <component :is="window.component" @close="closeWindow(index)" :openWindow="openWindow"/>
    </div>
</template>

<script setup>

import { ref } from 'vue';
import ConfiguracionPrograma from './admin/ConfiguracionPrograma.vue';
import AgregarModulo from './admin/AgregarModulo.vue';
import AgregarPerfil from './admin/Perfiles.vue';

const windows = ref([]);

const components = {
    ConfiguracionPrograma,
    AgregarModulo,
    AgregarPerfil, 
}

const openWindow = (componentName) => {
    windows.value.push({
        component: components[componentName]
    })
}

const closeWindow = (index) => {
    windows.value.splice(index,1)
}
</script>