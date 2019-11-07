<template>
  <div class="container">
    <q-sapacer></q-sapacer>
    <div row justify-center wrap xs12>
            <q-table
              title="Instrummentos"
              :columns="columns"
              :data="items"
              row-key="name"
              :filter="filter"
              binary-state-sort
              :rows-per-page-options="[50,100,200]"
              rows-per-page-label="Items por página"
            >
            <template v-slot:top-right>
              <q-input outlined v-model="filter" placeholder="Buscar" >
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
            </template>
            <q-tr slot="body" slot-scope="props" :props="props">
              <q-td>{{props.row.name}}</q-td>
              <q-td>
                <q-btn outlined @click="alert = true, obtener(props.row)">
                  Consultar
                </q-btn>
              </q-td>
            </q-tr>
            </q-table>
    </div>
    <q-dialog v-model="alert" persistent
              transition-show="slide-up"
              transition-hide="slide-down">
      <q-card>
        <q-bar>
          <q-space ></q-space>
          <q-btn dense flat icon="minimize" @click="maximizedToggle = false" :disable="!maximizedToggle">
            <q-tooltip v-if="maximizedToggle" content-class="bg-white text-primary">Minimizar</q-tooltip>
          </q-btn>
          <q-btn dense flat icon="crop_square" @click="maximizedToggle = true" :disable="maximizedToggle">
            <q-tooltip v-if="!maximizedToggle" content-class="bg-white text-primary">Maximizar</q-tooltip>
          </q-btn>
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip content-class="bg-white text-primary">Cerrar</q-tooltip>
          </q-btn>
        </q-bar>
        <q-card-section>
          <div v-if="dataObj != null"><div class="text-h6" style="text-align: center">{{dataObj['name']}}</div></div>
        </q-card-section>
        <q-card-section>
          <q-tabs v-model="tab" class="text-teal">
            <div class="text-h6" v-for="(item, index) in dataObj" v-bind:key="index">
                <div v-if=" Array.isArray(item)">
                    <q-tab :label="index" :name="index" />
                </div>
            </div>
          </q-tabs>
          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="Reglas">
              <div v-if="dataObj != null">
                <div v-for="(item, index) in dataObj['Reglas']" v-bind:key="index">
                  {{item.Rname}}
                </div>
              </div>
              <div v-else>
                No data
              </div>
            </q-tab-panel>
            <q-tab-panel name="Objetivos">
              <div v-if="dataObj != null">
                <div v-for="(item, index) in dataObj['Objetivos']" v-bind:key="index">
                  {{item.Oname}}
                </div>
              </div>
              <div v-else>
                No data
              </div>
            </q-tab-panel>
            <q-tab-panel name="Roles">
              <div v-if="dataObj != null">
                <div v-for="(item, index) in dataObj['Roles']" v-bind:key="index">
                  {{item.Roname}}
                </div>
              </div>
              <div v-else>
                No data
              </div>
            </q-tab-panel>
            <q-tab-panel name="Pasos">
              <div v-if="dataObj != null">
                <div v-for="(item, index) in dataObj['Pasos']" v-bind:key="index">
                  {{item.Sname}}
                </div>
              </div>
              <div v-else>
                No data
              </div>
            </q-tab-panel>
            <q-tab-panel name="Materiales">
              <div v-if="dataObj != null">
                <div v-for="(item, index) in dataObj['Materiales']" v-bind:key="index">
                  {{item.Maname}}
                </div>
              </div>
              <div v-else>
                No data
              </div>
            </q-tab-panel>
          </q-tab-panels>
        </q-card-section>
      </q-card>
    </q-dialog>
    {{clean()}}
  </div>
</template>

<style>
.card {
  padding: 15px;
}
</style>

<script>
// import { functions } from '../services/newinstrument.TARGET'
import { LocalStorage } from 'quasar'
let dataObj = null
export default {
  beforeMount () {
    this.start()
  },
  data () {
    return {
      alert: false,
      maximizedToggle: true,
      items: {},
      token: '',
      filter: '',
      columns: [
        { name: 'name', label: 'Nombre', field: row => row.name, align: 'left' },
        { label: 'Acciones', align: 'left' }
      ],
      tab: 'one',
      dataObj
    }
  },
  methods: {
    start () {
      this.token = LocalStorage.getItem('token')
      this.axiosInstruments()
    },
    obtener (object) {
      this.dataObj = object
    },
    mostrar () {
      return dataObj
    },
    axiosInstruments () {
      let tkn = this.token
      this.$axios.get('https://meejel-back.herokuapp.com/api/v1/instrument/', { headers: { Authorization: 'Bearer ' + tkn } })
        .then(res => {
          this.items = res.data
          console.log(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    clean () {
      this.items.forEach(element => {
        console.log(element)
      })
    }
  }
}
</script>
