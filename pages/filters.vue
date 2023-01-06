<template>
  <v-row>
    <v-col class="text-center">
      <h1 class="title-page">Tablas</h1>
      <v-col class="text-left">
        <h2 class="title-page-sub">Tablas de datos con solicitudes credito Hogar</h2>
        <v-data-table
          :headers="headers"
          :items="desserts"
          :items-per-page="5"
          class="elevation-1"
          light
        ></v-data-table>
      </v-col>
      <v-container fluid>
        <v-row>
          <v-col cols="12" md="6" align="left">
            <h2 class="title-page-sub">Solicitudes Poliza Autos</h2>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Name</th>
                    <th class="text-left">Monto</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in desserts" :key="item.name">
                    <td>{{ item.name }}</td>
                    <td>{{ item.monto }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-col>
          <v-col cols="12" md="6" align="left">
            <h2 class="title-page-sub">Solicitudes Credito</h2>
            <v-simple-table light>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Name</th>
                    <th class="text-left">Monto</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in desserts" :key="item.name">
                    <td>{{ item.name }}</td>
                    <td>{{ item.monto }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-col>
        </v-row>
      </v-container>
      <v-col class="text-left">
        <h2 class="title-page-sub">Tabla de Datos solicitudes Credito Vida</h2>
        <v-card>
          <v-card-title>
            Filtrar
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Buscar"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="desserts"
            :search="search"
            dark
          ></v-data-table>
        </v-card>
      </v-col>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'TablesPage',
  data() {
    return {
      search: '',
      headers: [
        {
          text: 'Nombre solicitante',
          align: 'start',
          sortable: false,
          value: 'name'
        },
        { text: 'Monto', value: 'monto' },
        { text: 'Puntaje Crediticio', value: 'fat' },
        { text: 'Numero de Pagos', value: 'carbs' },
        { text: 'Veces en mora', value: 'protein' },
        { text: 'Progreso de Credito', value: 'iron' }
      ],
      desserts: [
        {
          name: 'Grace Smiht',
          monto: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%'
        },
        {
          name: 'Abruee Mckoquick',
          monto: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%'
        },
        {
          name: 'Eclair Richards',
          monto: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%'
        },
        {
          name: 'Artur Morgan',
          monto: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%'
        },
        {
          name: 'John Marston',
          monto: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%'
        },
        {
          name: 'Jack Martin',
          monto: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%'
        },
        {
          name: 'Cristian Gutiérrez',
          monto: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%'
        },
        {
          name: 'Elizabeth Olsten',
          monto: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%'
        },
        {
          name: 'Donut',
          monto: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%'
        },
        {
          name: 'Jame Morgan',
          monto: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%'
        }
      ]
    }
  }
}
</script>
