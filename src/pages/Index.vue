<template>
  <div class="container">
    <div v-for="(item, index) in getInstruments()" v-bind:key="index">
      <div class="q-pa-md row items-start q-gutter-md" style="min-width: 400px">
        <q-card class="my-card" @click="alert = true, obtener(item)" style="min-width: 400px">
          <q-card-section>
            <div class="text-h6">
              {{item.name}}
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <q-dialog v-model="alert" persistent
              :maximized="maximizedToggle"
              transition-show="slide-up"
              transition-hide="slide-down">
      <q-card class="bg-primary">
        <q-bar>
          <q-space ></q-space>
          <q-btn dense flat icon="minimize" @click="maximizedToggle = false" :disable="!maximizedToggle">
            <q-tooltip v-if="maximizedToggle" content-class="bg-white text-primary"></q-tooltip>
          </q-btn>
          <q-btn dense flat icon="crop_square" @click="maximizedToggle = true" :disable="maximizedToggle">
            <q-tooltip v-if="!maximizedToggle" content-class="bg-white text-primary"></q-tooltip>
          </q-btn>
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip content-class="bg-white text-primary"></q-tooltip>
          </q-btn>
        </q-bar>
        <q-card-section>
          <div class="text-h6" v-for="(item, index) in mostrar()" v-bind:key="index">
              <div v-if=" Array.isArray(item)">
                  <div class="col">
                    <q-card style="max-width: 300px, min-width: 200px">
                      <q-card-section>
                        <div class="text-h6">{{index}}</div>
                      </q-card-section>
                      <q-separator inset />
                      <q-card-section>
                        <div v-for="(it, index2) in item" v-bind:key="index2">
                          <div v-if="typeof it === 'object'">
                            {{Object.values(it).toString()}}
                          </div>
                          <div v-else>
                            {{it}}
                          </div>
                        </div>
                      </q-card-section>
                    </q-card>
                  </div>
                <q-space/>
              </div>
          </div>
        </q-card-section>
        <q-card-section>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<style>
</style>

<script>
import { functions } from '../services/newinstrument.TARGET'
let dataObj = null
export default {
  data () {
    return {
      alert: false,
      maximizedToggle: true
    }
  },
  methods: {
    getInstruments () {
      let instruments = functions('get', null)
      return instruments
    },
    obtener (object) {
      dataObj = object
      return object
    },
    mostrar () {
      return dataObj
    }
  }
}
</script>
