<template>
<div class="row">
  <div class="col-12">
    <div class="q-gutter-md">
      <q-select v-model="model" :options="Object.keys(makeOptions())" label="Instrumento" class="text-center" ></q-select>
    </div>
  </div>
  <div class="q-pa-md col-12" style="max-width: 80%; margin-left: 12%">
    <div class="row">
      <div class="col">
        <q-toggle  v-model="principles['Orientacion']" label='Orientacion' class="q-mb-md" />
        <q-slide-transition>
          <div v-show="principles['Orientacion']">
              <q-list>
                <q-item-label header>Reglas</q-item-label>
                <div class="row" v-for="(item, index) in returnRules(selected())" v-bind:key="index">
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="arrayRules" :val="item.id" :label="item.Rname"/>
                    </q-item>
                </div>
                <q-item-label header>Objetivos</q-item-label>
                <div class="row" v-for="(item, index) in returnObj(selected())" v-bind:key="index">
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="arrayObjectives" :val="item.id" :label="item.Oname"/>
                    </q-item>
                </div>
                <q-item-label header>Roles</q-item-label>
                <div class="row" >
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="rols[0]"  label="Roles"/>
                    </q-item>
                </div>
                <q-item-label header></q-item-label>
                <q-item tag="label" v-ripple>
                        <q-checkbox v-model="mat[0]"  label="Materiales"/>
                    </q-item>
                <q-item-label header>Pasos</q-item-label>
                <q-item tag="label" v-ripple>
                        <q-checkbox v-model="steps[0]"  label="Pasos"/>
                    </q-item>
              </q-list>
          </div>
        </q-slide-transition>
      </div>
      <div class="col">
        <q-toggle  v-model="principles['Elementos persuasivos']" label='Elementos persuasivos' class="q-mb-md" />
        <q-slide-transition>
          <div v-show="principles['Elementos persuasivos']">
              <q-list>
                <q-item-label header>Reglas</q-item-label>
                <div class="row" v-for="(item, index) in returnRules(selected())" v-bind:key="index">
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="arrayRules2" :val="index" :label="item.Rname"/>
                    </q-item>
                </div>
                <q-item-label header>Objetivos</q-item-label>
                <div class="row" v-for="(item, index) in returnObj(selected())" v-bind:key="index">
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="arrayObjectives2" :val="index" :label="item.Oname"/>
                    </q-item>
                </div>
                <q-item-label header>Roles</q-item-label>
                <div class="row" >
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="rols[1]"  label="Roles"/>
                    </q-item>
                </div>
                <q-item-label header>Materiales</q-item-label>
                <q-item tag="label" v-ripple>
                        <q-checkbox v-model="mat[1]"  label="Materiales"/>
                    </q-item>
                <q-item-label header>Pasos</q-item-label>
                <q-item tag="label" v-ripple>
                        <q-checkbox v-model="steps[1]"  label="Pasos"/>
                    </q-item>
              </q-list>
          </div>
        </q-slide-transition>
      </div>
      <div class="col">
        <q-toggle  v-model="principles['Orientacion de aprendizaje']" label='Orientacion de aprendizaje' class="q-mb-md" />
        <q-slide-transition>
          <div v-show="principles['Orientacion de aprendizaje']">
              <q-list>
                <q-item-label header>Reglas</q-item-label>
                <div class="row" v-for="(item, index) in returnRules(selected())" v-bind:key="index">
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="arrayRules3" :val="index" :label="item.Rname"/>
                    </q-item>
                </div>
                <q-item-label header>Objetivos</q-item-label>
                <div class="row" v-for="(item, index) in returnObj(selected())" v-bind:key="index">
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="arrayObjectives3" :val="index" :label="item.Oname"/>
                    </q-item>
                </div>
                <q-item-label header>Roles</q-item-label>
                <div class="row" >
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="rols[2]"  label="Roles"/>
                    </q-item>
                </div>
                <q-item-label header>Materiales</q-item-label>
                <q-item tag="label" v-ripple>
                        <q-checkbox v-model="mat[2]"  label="Materiales"/>
                    </q-item>
                <q-item-label header>Pasos</q-item-label>
                <q-item tag="label" v-ripple>
                        <q-checkbox v-model="steps[2]"  label="Pasos"/>
                    </q-item>
              </q-list>
          </div>
        </q-slide-transition>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <q-toggle  v-model="principles['Recompensas basadas en logros']" label='Recompensas basadas en logros' class="q-mb-md" />
        <q-slide-transition>
          <div v-show="principles['Recompensas basadas en logros']">
              <q-list>
                <q-item-label header>Reglas</q-item-label>
                <div class="row" v-for="(item, index) in returnRules(selected())" v-bind:key="index">
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="arrayRules4" :val="index" :label="item.Rname"/>
                    </q-item>
                </div>
                <q-item-label header>Objetivos</q-item-label>
                <div class="row" v-for="(item, index) in returnObj(selected())" v-bind:key="index">
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="arrayObjectives4" :val="index" :label="item.Oname"/>
                    </q-item>
                </div>
                <q-item-label header>Roles</q-item-label>
                <div class="row" >
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="rols[3]"  label="Roles"/>
                    </q-item>
                </div>
                <q-item-label header>Materiales</q-item-label>
                <q-item tag="label" v-ripple>
                        <q-checkbox v-model="mat[3]"  label="Materiales"/>
                    </q-item>
                <q-item-label header>Pasos</q-item-label>
                <q-item tag="label" v-ripple>
                        <q-checkbox v-model="steps[3]"  label="Pasos"/>
                    </q-item>
              </q-list>
          </div>
        </q-slide-transition>
      </div>
      <div class="col">
        <q-toggle  v-model="principles['Logros adaptables']" label='Logros adaptables' class="q-mb-md" />
        <q-slide-transition>
          <div v-show="principles['Logros adaptables']">
              <q-list>
                <q-item-label header>Reglas</q-item-label>
                <div class="row" v-for="(item, index) in returnRules(selected())" v-bind:key="index">
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="arrayRules5" :val="index" :label="item.Rname"/>
                    </q-item>
                </div>
                <q-item-label header>Objetivos</q-item-label>
                <div class="row" v-for="(item, index) in returnObj(selected())" v-bind:key="index">
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="arrayObjectives5" :val="index" :label="item.Oname"/>
                    </q-item>
                </div>
                <q-item-label header>Roles</q-item-label>
                <div class="row" >
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="rols[4]"  label="Roles"/>
                    </q-item>
                </div>
                <q-item-label header>Materiales</q-item-label>
                <q-item tag="label" v-ripple>
                        <q-checkbox v-model="mat[4]"  label="Materiales"/>
                    </q-item>
                <q-item-label header>Pasos</q-item-label>
                <q-item tag="label" v-ripple>
                        <q-checkbox v-model="steps[4]"  label="Pasos"/>
                    </q-item>
              </q-list>
          </div>
        </q-slide-transition>
      </div>
      <div class="col">
        <q-toggle  v-model="principles['Factores de diversion']" label='Factores de diversion' class="q-mb-md" />
        <q-slide-transition>
          <div v-show="principles['Factores de diversion']">
              <q-list>
                <q-item-label header>Reglas</q-item-label>
                <div class="row" v-for="(item, index) in returnRules(selected())" v-bind:key="index">
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="arrayRules6" :val="index" :label="item.Rname"/>
                    </q-item>
                </div>
                <q-item-label header>Objetivos</q-item-label>
                <div class="row" v-for="(item, index) in returnObj(selected())" v-bind:key="index">
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="arrayObjectives6" :val="index" :label="item.Oname"/>
                    </q-item>
                </div>
                <q-item-label header>Roles</q-item-label>
                <div class="row" >
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="rols[5]"  label="Roles"/>
                    </q-item>
                </div>
                <q-item-label header>Materiales</q-item-label>
                <q-item tag="label" v-ripple>
                        <q-checkbox v-model="mat[5]"  label="Materiales"/>
                    </q-item>
                <q-item-label header>Pasos</q-item-label>
                <q-item tag="label" v-ripple>
                        <q-checkbox v-model="steps[5]"  label="Pasos"/>
                    </q-item>
              </q-list>
          </div>
        </q-slide-transition>
      </div>
    </div>
    <div class="row">
      <div class="col"><q-toggle  v-model="principles['Transformador']" label='Transformador' class="q-mb-md" />
        <q-slide-transition>
          <div v-show="principles['Transformador']">
              <q-list>
                <q-item-label header>Reglas</q-item-label>
                <div class="row" v-for="(item, index) in returnRules(selected())" v-bind:key="index">
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="arrayRules7" :val="index" :label="item.Rname"/>
                    </q-item>
                </div>
                <q-item-label header>Objetivos</q-item-label>
                <div class="row" v-for="(item, index) in returnObj(selected())" v-bind:key="index">
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="arrayObjectives7" :val="index" :label="item.Oname"/>
                    </q-item>
                </div>
                <q-item-label header>Roles</q-item-label>
                <div class="row" >
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="rols[6]"  label="Roles"/>
                    </q-item>
                </div>
                <q-item-label header>Materiales</q-item-label>
                <q-item tag="label" v-ripple>
                        <q-checkbox v-model="mat[6]"  label="Materiales"/>
                    </q-item>
                <q-item-label header>Pasos</q-item-label>
                <q-item tag="label" v-ripple>
                        <q-checkbox v-model="steps[6]"  label="Pasos"/>
                    </q-item>
              </q-list>
          </div>
        </q-slide-transition></div>
      <div class="col">
        <q-toggle  v-model="principles['Orientado al bienestar']" label='Orientado al bienestar' class="q-mb-md" />
        <q-slide-transition>
          <div v-show="principles['Orientado al bienestar']">
              <q-list>
                <q-item-label header>Reglas</q-item-label>
                <div class="row" v-for="(item, index) in returnRules(selected())" v-bind:key="index">
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="arrayRules8" :val="index" :label="item.Rname"/>
                    </q-item>
                </div>
                <q-item-label header>Objetivos</q-item-label>
                <div class="row" v-for="(item, index) in returnObj(selected())" v-bind:key="index">
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="arrayObjectives8" :val="index" :label="item.Oname"/>
                    </q-item>
                </div>
                <q-item-label header>Roles</q-item-label>
                <div class="row" >
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="rols[7]"  label="Roles"/>
                    </q-item>
                </div>
                <q-item-label header>Materiales</q-item-label>
                <q-item tag="label" v-ripple>
                        <q-checkbox v-model="mat[7]"  label="Materiales"/>
                    </q-item>
                <q-item-label header>Pasos</q-item-label>
                <q-item tag="label" v-ripple>
                        <q-checkbox v-model="steps[7]"  label="Pasos"/>
                    </q-item>
              </q-list>
          </div>
        </q-slide-transition>
      </div>
      <div class="col">
        <q-toggle  v-model="principles['Genera investigacion']" label='Genera investigacion' class="q-mb-md" />
        <q-slide-transition>
          <div v-show="principles['Genera investigacion']">
              <q-list>
                <q-item-label header>Reglas</q-item-label>
                <div class="row" v-for="(item, index) in returnRules(selected())" v-bind:key="index">
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="arrayRules9" :val="index" :label="item.Rname"/>
                    </q-item>
                </div>
                <q-item-label header>Objetivos</q-item-label>
                <div class="row" v-for="(item, index) in returnObj(selected())" v-bind:key="index">
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="arrayObjectives9" :val="index" :label="item.Oname"/>
                    </q-item>
                </div>
                <q-item-label header>Roles</q-item-label>
                <div class="row" >
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="rols[8]"  label="Roles"/>
                    </q-item>
                </div>
                <q-item-label header>Materiales</q-item-label>
                <q-item tag="label" v-ripple>
                        <q-checkbox v-model="mat[8]"  label="Materiales"/>
                    </q-item>
                <q-item-label header>Pasos</q-item-label>
                <q-item tag="label" v-ripple>
                        <q-checkbox v-model="steps[8]"  label="Pasos"/>
                    </q-item>
              </q-list>
          </div>
        </q-slide-transition>
      </div>
    </div>
        <q-toggle  v-model="principles['Basado en el conocimiento']" label='Basado en el conocimiento' class="q-mb-md" />
        <q-slide-transition>
          <div v-show="principles['Basado en el conocimiento']">
              <q-list>
                <q-item-label header>Reglas</q-item-label>
                <div class="row" v-for="(item, index) in returnRules(selected())" v-bind:key="index">
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="arrayRules10" :val="index" :label="item.Rname"/>
                    </q-item>
                </div>
                <q-item-label header>Objetivos</q-item-label>
                <div class="row" v-for="(item, index) in returnObj(selected())" v-bind:key="index">
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="arrayObjectives10" :val="index" :label="item.Onames"/>
                    </q-item>
                </div>
                <q-item-label header>Roles</q-item-label>
                <div class="row" >
                  <q-item tag="label" v-ripple>
                        <q-checkbox v-model="rols[9]"  label="Roles"/>
                    </q-item>
                </div>
                <q-item-label header>Materiales</q-item-label>
                <q-item tag="label" v-ripple>
                        <q-checkbox v-model="mat[9]"  label="Materiales"/>
                    </q-item>
                <q-item-label header>Pasos</q-item-label>
                <q-item tag="label" v-ripple>
                        <q-checkbox v-model="steps[9]"  label="Pasos"/>
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
import { LocalStorage } from 'quasar'
export default {
  beforeMount () {
    this.token = LocalStorage.getItem('token')
    this.getInstruments()
  },
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
      rols: [false, false, false, false, false, false, false, false, false, false],
      steps: [false, false, false, false, false, false, false, false, false, false],
      mat: [false, false, false, false, false, false, false, false, false, false],
      model: null,
      token: '',
      instruments: []
    }
  },
  methods: {
    getInstruments () {
      let tkn = this.token
      this.$axios.get('https://meejel-back.herokuapp.com/api/v1/instrument/', { headers: { Authorization: 'Bearer ' + tkn } })
        .then(res => {
          this.instruments = res.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    makeOptions () {
      let instruments = this.instruments
      let obj = {}
      instruments.forEach(element => {
        obj[element.name] = element.id
      })
      console.log('algo', obj)
      return obj
    },
    selected () {
      let item = this.makeOptions()[this.model]
      return item
    },
    returnRules (id) {
      let algo = null
      this.instruments.forEach(element => {
        if (element.id === id) {
          algo = element.Reglas
        }
      })
      return algo
    },
    returnObj (id) {
      let algo = null
      this.instruments.forEach(element => {
        if (element.id === id) {
          algo = element.Objetivos
        }
      })
      return algo
    }
  }
}
</script>
