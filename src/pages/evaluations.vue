<template>
  <div style="text-align: center">
    <div v-for="(item, index) in items" v-bind:key="index" class="col">
     <q-card style ="margin-left: 24%; width: 40%; margin-bottom: 1%" @click="mounter(item)">
       <div class="row">
        <div class="col">
          <div class="row" style="margin-left: 30%;">
            <q-card-text>
              Nombre del Instrumento
            </q-card-text>
          </div>
          <div class="row" style="margin-left: 30%; margin-top: 15%">
            {{item.name}}
          </div>
        </div>
        <div class="col">
          <div class="row" style="margin-left: 30%">
            <q-card-text>
              Nivel de gamificación
            </q-card-text>
          </div>
          <q-circular-progress
          show-value
          font-size="20px"
          class="q-ma-md"
          :value="item.level"
          size="80px"
          color="primary"
          center-color="blue-1"
          >
          {{ item.level }}%
         </q-circular-progress>
        </div>
      </div>
     </q-card>
     <q-spacer/>
    </div>
    <q-dialog
      v-model="alert" persistent
      transition-show="slide-up"
      transition-hide="slide-down">
    </q-dialog>
  </div>
</template>
<script>
import { LocalStorage } from 'quasar'
export default {
  beforeMount () {
    this.start()
  },
  data () {
    return {
      token: '',
      items: [],
      filter: ''
    }
  },
  methods: {
    start () {
      this.token = LocalStorage.getItem('token')
      this.axiosInstruments()
    },
    axiosInstruments () {
      this.$axios.get('https://meejel-back.herokuapp.com/api/v1/instrument/', { headers: { Authorization: 'Bearer ' + this.token } })
        .then(res => {
          this.items = res.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    mounter (item) {
      console.log(item)
    }
  }
}
</script>
