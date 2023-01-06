<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="12">
        <h1 class="title-page">Hola Bienvenido a CrediSoft</h1>
        <CardSummary />
        <v-row>
          <v-col cols="12" lg="4">
            <v-card height="100%">
              <v-card-title>Creditos solicitados</v-card-title>
              <v-card-text>
                <p>
                  Grafico de solicitudes por tipo de credito en el mes actual
                  se representa con cantidades de solicitantes y creditos aprobados,
                  los creditos rechazados no son tomados en cuenta
                </p>
                <client-only placeholder="Loading...">
                  <DoughnutChart
                    :chart-data="doughChartData"
                    :chart-options="doughChartOptions"
                    :height="430"
                  />
                </client-only>
                <v-row>
                  <v-col cols="9">
                    <p>
                      Si busca un acercamiento sobre todos los creditos del año puede ver una historico y tambien
                      realizar sus propios analisis con métricas establecidas por la compañia
                    </p></v-col
                  >
                  <v-col cols="3">
                    <v-btn type="submit" color="primary" small tile
                      >Ver Más</v-btn
                    ></v-col
                  ></v-row
                >
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" lg="8">
            <v-card height="100%" light>
              <v-card-title>Ciudades donde mas creditos se solicitaron</v-card-title>
              <v-card-text>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                  nihil corporis rem iste! Doloribus magni doloremque inventore
                  natus consectetur corporis debitis nemo numquam explicabo esse
                  iusto maxime.
                </p>
                <client-only placeholder="Loading...">
                  <LineChart
                    :chart-options="lineChartOptions"
                    :chart-data="lineChartData"
                    :chart-id="`chartId`"
                    :width="300"
                    :height="400"
                    :styles="{
                      margin: '1rem auto',
                      backgroundColor: 'rgba(255,255,255, .85)',
                      padding: '.75rem'
                    }"
                  />
                </client-only>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                  nihil corporis rem iste! Doloribus magni doloremque inventore
                  natus consectetur corporis debitis nemo numquam explicabo esse
                  iusto maxime.
                </p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="8">
            <v-card height="100%" class="card">
              <v-container fluid>
                <h3 class="title-page">
                  Calendario de cierres, inicios y actividades
                </h3>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                  nihil corporis rem iste! Doloribus magni doloremque inventore
                  natus consectetur corporis debitis nemo numquam explicabo esse
                  iusto maxime.
                </div>
                <v-calendar class="my-6"></v-calendar>
              </v-container>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card height="100%" class="card">
              <v-container>
                <h3 class="title-page">Notificaciones</h3>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                  nihil corporis rem iste! Doloribus magni doloremque inventore
                  natus consectetur corporis debitis nemo numquam explicabo esse
                  iusto maxime.
                </div>
                <v-container fluid>
                  <v-row no-gutters>
                    <v-col cols="2" align-self="center" align="center">
                      <v-avatar color="primary">
                        <span class="white--text font-weight-bold">AS</span>
                      </v-avatar>
                    </v-col>
                    <v-col cols="10">
                      <blockquote class="blockquote grey--text body-1 px-3">
                        <div class="mb-1">
                          Mensaje de notificacion de un solicitante o de administracion
                        </div>
                        <cite class="font-weight-thin"
                          >- Any Sanders. Cliente</cite
                        >
                      </blockquote>
                    </v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col cols="9">
                      <blockquote
                        class="blockquote grey--text body-1 px-3 text-right"
                      >
                        <div class="mb-1">
                          Mensaje de notificacion de un solicitante o de administracion
                        </div>
                        <cite class="font-weight-thin"
                          >- Carol Violas. Gestor de ventas</cite
                        >
                      </blockquote>
                    </v-col>
                    <v-col cols="3" align-self="center" align="center">
                      <v-avatar color="green">
                        <span class="white--text font-weight-bold">CV</span>
                      </v-avatar>
                    </v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col cols="2" align-self="center" align="center">
                      <v-avatar color="info">
                        <span class="white--text font-weight-bold">NM</span>
                      </v-avatar>
                    </v-col>
                    <v-col cols="10">
                      <blockquote class="blockquote grey--text body-1 px-3">
                        <div class="mb-1">
                          Mensaje de notificacion de un solicitante o de administracion
                        </div>
                        <cite class="font-weight-thin"
                          >- Naomi Malone. Director Administrativo</cite
                        >
                      </blockquote>
                    </v-col>
                  </v-row>
                </v-container>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <Footer />
  </v-container>
</template>

<script>
import CardSummary from '@/components/Card/Summary.vue'
export default {
  name: 'IndexPage',
  components: {
    CardSummary
  },
  data() {
    return {
      doughChartData: {
        labels: ['Credito Poliza Hogar', 'Credito Poliza Vida', 'Credito Poliza Auto', 'Creditos otros', 'Credito  Estudios', 'Creditos Publicos'],
        datasets: [
          {
            label: 'Visualization',
            data: [72, 131, 12, 3, 4, 55],
            backgroundColor: [
              'rgba(20, 255, 0, 0.85)',
              'rgba(200, 5, 0, 0.85)',
              'rgba(10, 220, 0, 0.85)',
              'rgba(2, 100, 0, 0.85)',
              'rgba(20, 55, 0, 0.85)',
              'rgba(120, 155, 0, 0.85)'
            ],
            borderColor: 'rgba(100, 155, 0, 1)',
            borderWidth: 0
          }
        ]
      },
      doughChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        offset: 8,
        radius: 160,
        spacing: 4,
        hoverOffset: 32,
        hoverBorderWidth: 1,
        weight: 0
      },
      lineChartData: {
        labels: [
          'Ene',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dic'
        ],
        datasets: [
          {
            label: 'Mes de Enero',
            backgroundColor: '#ff0099',
            borderColor: '#ff0099',
            borderWidth: '0',
            borderJoinStyle: 'round',
            data: [40, 39, 10, 40, 39, 80, 40, 30, 10, 20, 30, 40]
          },
          {
            label: 'Mes de Febrero',
            backgroundColor: '#ff9900',
            borderColor: '#ff9900',
            borderWidth: '0',
            borderJoinStyle: 'round',
            data: [20, 9, 80, 90, 29, 58, 80, 20, 30, 40, 55, 75]
          },
          {
            label: 'Mes de Marzo',
            backgroundColor: '#999999',
            borderColor: '#999999',
            borderWidth: '0',
            borderJoinStyle: 'round',
            data: [10, 24, 42, 50, 69, 10, 20, 70, 89, 45, 35, 42]
          }
        ]
      },
      lineChartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  head() {
    return {
      title: 'Homepage - Nuxtify Admin Dashboard Template by dykraf.com',
      description:
        'A Collection of Templates in Nuxtify Admin Template Dashboard by dykraf.com'
    }
  }
}
</script>
