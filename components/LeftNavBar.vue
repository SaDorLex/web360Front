<script>
export default {
    data: () => ({
        open: ['Administrador', 'Almacen'],
        administrador: [
            ['Empresas'],
            ['Perfiles'],
            ['Usuarios'],
            ['Clientes/Proveedores'],
            ['Direccion Punto Partida'],
            ['Zona de Ventas'],
            ['Condiciones de Venta'],
            ['Motivos de Transporte'],
            ['Motivos de Movimiento'],
            ['Tipos de Cambio'],
        ],
        almacen: [
            ['Grupo'],
        ],
    }),
}
</script>
<template>
    <v-card>
        <v-layout>
            <v-navigation-drawer expand-on-hover rail>
                <v-list>
                    <v-list-item prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
                        subtitle="sandra_a88@gmailcom" title="Sandra Adams"></v-list-item>
                </v-list>

                <v-divider></v-divider>

                <v-list v-model:opened="open">
                    <v-list-group value="Administrador">
                        <template v-slot:activator="{ props }">
                            <v-list-item v-bind="props" prepend-icon="mdi-account-circle" title="Administrador"></v-list-item>
                        </template>

                        <v-list-item v-for="([title], i) in administrador" :key="i" prepend-icon="mdi-account-circle"
                                :title="title" :value="title"></v-list-item>
                    </v-list-group>
                </v-list>
                <v-list v-model:opened="open">
                    <v-list-group value="Almacen">
                        <template v-slot:activator="{ props }">
                            <v-list-item v-bind="props" prepend-icon="mdi-account-circle" title="Almacen"></v-list-item>
                        </template>

                        <v-list-item v-for="([title], i) in almacen" :key="i" prepend-icon="mdi-account-circle"
                                :title="title" :value="title"></v-list-item>
                    </v-list-group>
                </v-list>
                <v-list v-model:opened="open">
                    <v-list-group value="Venta">
                        <template v-slot:activator="{ props }">
                            <v-list-item v-bind="props" prepend-icon="mdi-account-circle" title="Venta"></v-list-item>
                        </template>

                        <v-list-item v-for="([title], i) in venta" :key="i" prepend-icon="mdi-account-circle"
                                :title="title" :value="title"></v-list-item>
                    </v-list-group>
                </v-list>
                <v-list v-model:opened="open">
                    <v-list-group value="CtaCobrar">
                        <template v-slot:activator="{ props }">
                            <v-list-item v-bind="props" prepend-icon="mdi-account-circle" title="Cta. Cobrar"></v-list-item>
                        </template>

                        <v-list-item v-for="([title], i) in ctaCobrar" :key="i" prepend-icon="mdi-account-circle"
                                :title="title" :value="title"></v-list-item>
                    </v-list-group>
                </v-list>

            </v-navigation-drawer>
        </v-layout>
    </v-card>
</template>
