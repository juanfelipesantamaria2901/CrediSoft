<template>
  <v-row v-if="items && items.length">
    <v-col
      v-for="item in items"
      :key="item.title.replace(' ', '_')"
      cols="6"
      sm="3"
    >
      <v-card height="100%" class="card">
        <v-container fluid>
          <h3>{{ item.title }}</h3>
          <v-row height="100%">
            <v-col>
              <h4
                class="grey--text text-h4 text-lg-h2 font-weight-bold lh-normal"
              >
                {{ item.summary }}
              </h4>
              <h5 class="font-weight-normal grey--text">{{ item.total }}</h5>
            </v-col>
            <v-col align-self="center" align="center">
              <v-icon size="60" :color="item.color">{{ item.icon }}</v-icon>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'CardSummary',
  data() {
    return {
      items: [
        {
          title: 'Solocitantes',
          summary: '5230',
          total: '+23% Más',
          color: 'green',
          icon: 'mdi-account-box-outline'
        },
        {
          title: 'Creditos Aprobados',
          summary: '6424',
          total: '-3% Menos',
          color: 'warning',
          icon: 'mdi-cart-plus'
        },
        {
          title: 'Creditos Rechazados',
          summary: '3920',
          total: '-10% Menos',
          color: 'red',
          icon: 'mdi-chart-areaspline'
        },
        {
          title: 'Creditos Finalizados',
          summary: '4124',
          total: '+50% Más',
          color: 'orange',
          icon: 'mdi-gesture-double-tap'
        }
      ]
    }
  }
}
</script>
