<template>
<div class="row">
  <div class="col-12">
    <div class="q-gutter-md">
      <q-select v-model="model" :options="Object.keys(makeOptions())" label="Instrumento" class="text-center" ></q-select>
    </div>
  </div>
  <div class="q-pa-md col-12" style="max-width: 500px;">
    <q-toggle  v-model="principles['Orientacion']" label='Orientacion' class="q-mb-md" />
        <q-slide-transition>
          <div v-show="principles['Orientacion']">
              <q-list>
                <q-item-label header>Reglas</q-item-label>
                <div class="row" v-for="(item, index) in returnRules(selected())" v-bind:key="index">
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="arrayRules" :val="index" :label="Object.values(item)"/>
                    </q-item>
                </div>
                <q-item-label header>Objetivos</q-item-label>
                <div class="row" v-for="(item, index) in returnObj(selected())" v-bind:key="index">
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="arrayObjectives" :val="index" :label="Object.values(item)"/>
                    </q-item>
                </div>
                <q-item-label header>Roles</q-item-label>
                <div class="row" >
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="rols1"  label="Roles"/>
                    </q-item>
                </div>
                <q-item-label header>Metas</q-item-label>
                <q-item tag="label" v-ripple>
                        <q-checkbox v-model="mat1"  label="Metas"/>
                    </q-item>
                <q-item-label header>Pasos</q-item-label>
                <q-item tag="label" v-ripple>
                        <q-checkbox v-model="step1"  label="pasos"/>
                    </q-item>
              </q-list>
          </div>
        </q-slide-transition>
    <q-toggle  v-model="principles['Elementos persuasivos']" label='Elementos persuasivos' class="q-mb-md" />
        <q-slide-transition>
          <div v-show="principles['Elementos persuasivos']">
              <q-list>
                <q-item-label header>Reglas</q-item-label>
                <div class="row" v-for="(item, index) in returnRules(selected())" v-bind:key="index">
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="arrayRules2" :val="index" :label="Object.values(item)"/>
                    </q-item>
                </div>
                <q-item-label header>Objetivos</q-item-label>
                <div class="row" v-for="(item, index) in returnObj(selected())" v-bind:key="index">
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="arrayObjectives2" :val="index" :label="Object.values(item)"/>
                    </q-item>
                </div>
                <q-item-label header>Roles</q-item-label>
                <div class="row" >
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="rols2"  label="Roles"/>
                    </q-item>
                </div>
                <q-item-label header>Metas</q-item-label>
                <q-item tag="label" v-ripple>
                        <q-checkbox v-model="mat2"  label="Metas"/>
                    </q-item>
                <q-item-label header>Pasos</q-item-label>
                <q-item tag="label" v-ripple>
                        <q-checkbox v-model="step2"  label="pasos"/>
                    </q-item>
              </q-list>
          </div>
        </q-slide-transition>
    <q-toggle  v-model="principles['Orientacion de aprendizaje']" label='Orientacion de aprendizaje' class="q-mb-md" />
        <q-slide-transition>
          <div v-show="principles['Orientacion de aprendizaje']">
              <q-list>
                <q-item-label header>Reglas</q-item-label>
                <div class="row" v-for="(item, index) in returnRules(selected())" v-bind:key="index">
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="arrayRules3" :val="index" :label="Object.values(item)"/>
                    </q-item>
                </div>
                <q-item-label header>Objetivos</q-item-label>
                <div class="row" v-for="(item, index) in returnObj(selected())" v-bind:key="index">
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="arrayObjectives3" :val="index" :label="Object.values(item)"/>
                    </q-item>
                </div>
                <q-item-label header>Roles</q-item-label>
                <div class="row" >
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="rols3"  label="Roles"/>
                    </q-item>
                </div>
                <q-item-label header>Metas</q-item-label>
                <q-item tag="label" v-ripple>
                        <q-checkbox v-model="mat3"  label="Metas"/>
                    </q-item>
                <q-item-label header>Pasos</q-item-label>
                <q-item tag="label" v-ripple>
                        <q-checkbox v-model="step3"  label="pasos"/>
                    </q-item>
              </q-list>
          </div>
        </q-slide-transition>
  </div>
  <div class="col-12"></div>
  <q-btn color="primary" label="Evaluar"  class="q-ml-sm"/>
</div>
</template>

<script>
import { functions } from '../services/newinstrument.TARGET'
export default {
  data () {
    return {
      principles: {
        'Orientación': false,
        'Elementos persuasivos': false,
        'Orientacion de aprendizaje': false,
        'Recompensas basadas en logros': false,
        'Logros adaptables': false,
        'Factores de diversion': false,
        'Transformador': false,
        'Orientado al bienestar': false,
        'Genera investigacion': false,
        'Basado en el conocimiento': false
      },
      arrayRules: [],
      arrayRules2: [],
      arrayRules3: [],
      arrayRules4: [],
      arrayRules5: [],
      arrayRules6: [],
      arrayRules7: [],
      arrayRules8: [],
      arrayRules9: [],
      arrayRules10: [],
      arrayObjectives: [],
      arrayObjectives2: [],
      arrayObjectives3: [],
      arrayObjectives4: [],
      arrayObjectives5: [],
      arrayObjectives6: [],
      arrayObjectives7: [],
      arrayObjectives8: [],
      arrayObjectives9: [],
      arrayObjectives10: [],
      rols1: false,
      rols2: false,
      rols3: false,
      rols4: false,
      rols5: false,
      rols6: false,
      rols7: false,
      rols8: false,
      rols9: false,
      rols10: false,
      step1: false,
      step2: false,
      step3: false,
      step4: false,
      step5: false,
      step6: false,
      step7: false,
      step8: false,
      step9: false,
      step10: false,
      mat1: false,
      mat2: false,
      mat3: false,
      mat4: false,
      mat5: false,
      mat6: false,
      model: null
    }
  },
  methods: {
    getInstruments () {
      let instruments = functions('get', null)
      return instruments
    },
    makeOptions () {
      let instruments = functions('get', null)
      let obj = {}
      instruments.forEach(element => {
        obj[element.name] = element.id
      })
      return obj
    },
    selected () {
      let item = this.makeOptions()[this.model]
      return item
    },
    returnRules (id) {
      let algo = null
      this.getInstruments().forEach(element => {
        if (element.id === id) {
          algo = element.Reglas
        }
      })
      return algo
    },
    returnObj (id) {
      let algo = null
      this.getInstruments().forEach(element => {
        if (element.id === id) {
          algo = element.Objetivos
        }
      })
      return algo
    }
  }
}
</script>
