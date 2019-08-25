<template>
     <div class="items-center">
        <q-stepper
          class="q-gutter-md"
          vertical
          v-model="step"
          ref="stepper"
          alternative-labels
          color="primary"
          animated>
          <q-step
          :name="1"
          title="Nombre su instrumento"
          caption = "*"
          icon="settings"
          :done="step > 1"
          >
            <q-input
              rounded outruled
              v-model="name"
              label="Nombre del instrumento*"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Debe escribir algo']"/>
          </q-step>
          <q-step
            :name="2"
            title="Añada las reglas de su instrumento"
            caption="*"
            icon="create_new_folder"
            :done="step > 2"
        >
            <div v-for="(rule, index) in rules " v-bind:key="index" class = "row">
              <div class="col-3">
              </div>
              <div class="col-5">
                <q-input
                        rounded outruled
                        v-model="rule.Rname"
                        label="Regla*"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Debe escribir algo']"/>
              </div>
              <div class="col-lg-2">
                  <div class="block float-right">
                    <q-btn @click="removerule(index)" icon="delete" round />
                    <q-btn v-if="index + 1 === rules.length" @click="addrule" icon="playlist-plus" round />
                  </div>
              </div>
            </div>
          </q-step>
          <q-step
            :name="3"
            title="Añada los objetivos de su instrumento"
            caption="*"
            icon="create_new_folder"
            :done="step > 3"
          >
            <div v-for="(objective, index) in objectives" v-bind:key="index" class="row">
              <div class="col-3">
              </div>
              <div class="col-5">
                <q-input
                    rounded outruled
                    v-model="objective.Oname"
                    label="Objetivo*"
                    lazy-rules
                    :rules="[ val => val && val.length > 0 || 'Debe escribir algo']"
                />
              </div>
              <div class="col-lg-2">
                  <div class="block float-right">
                    <q-btn @click="removeObj(index)" icon="delete" round />
                    <q-btn v-if="index + 1 === objectives.length" @click="addObj" icon="playlist-plus" round />
                  </div>
              </div>
            </div>
          </q-step>
          <q-step
            :name="4"
            title="Añada los roles de su instrumento"
            caption="*"
            icon="create_new_folder"
          >
            <div v-for="(rol, index) in rols" v-bind:key="index" class="row">
              <div class="col-3">
              </div>
              <div class="col-5">
                <q-input
                  rounded outlined
                  v-model="rol.Roname"
                  label="Rol*"
                  lazy-rules
                  :rules="[ val => val && val.length > 0 || 'Debe escribir algo']"
                />
              </div>
              <div class="col-lg-2">
                <div class="block float-right">
                  <q-btn @click="removeRol(index)" icon="delete" round/>
                  <q-btn v-if="index + 1 === rols.length" @click="addRol" icon="playlist-plus" round/>
                </div>
              </div>
            </div>
          </q-step>
          <template v-slot:navigation>
            <q-stepper-navigation>
              <q-btn @click="if(validations(step) == 'error'){

              }else if (step === 4){
                  makeInstrument()
              }else{
                  $refs.stepper.next()
              }" color="primary" :label="step === 4 ? 'Finalizar' : 'Continuar'" />
              <q-btn v-if="step > 1" flat color="primary" @click="$refs.stepper.previous()" label="Atras" class="q-ml-sm" />
            </q-stepper-navigation>
           </template>
        </q-stepper>
    </div>
</template>
<style>

</style>
<script>
import { Notify } from 'quasar'
import { addUserInstruments } from '../services/newinstrument.TARGET'

export default {
  data () {
    return {
      step: 1,
      rules: [],
      objectives: [],
      rols: [],
      blockRemoval: true,
      text: '',
      accept: false,
      Rname: '',
      name: '',
      Oname: '',
      Roname: '',
      Mname: '',
      pname: ''
    }
  },
  watch: {
    rules () {
      this.blockRemoval = this.rules.length <= 1
    },
    objectives () {
      this.blockRemoval = this.objectives.length <= 1
    },
    rols () {
      this.blockRemoval = this.rols.length <= 1
    }
  },
  methods: {
    addrule () {
      let checkEmptyrules = this.rules.filter(rule => rule.Rname === null)
      if (checkEmptyrules.length >= 1 && this.rules.length > 0) return
      this.rules.push({
        Rname: null
      })
    },
    removerule (ruleId) {
      if (!this.blockRemoval) this.rules.splice(ruleId, 1)
    },
    addObj () {
      let checkEmpty = this.objectives.filter(obj => obj.Oname === null)
      if (checkEmpty.length >= 1 && this.objectives.length > 0) return
      this.objectives.push({
        Oname: null
      })
    },
    removeObj (objId) {
      if (!this.blockRemoval) this.objectives.splice(objId, 1)
    },
    addRol () {
      let checkEmpty = this.rols.filter(rol => rol.Roname === null)
      if (checkEmpty.length >= 1 && this.rols.length > 0) return
      this.rols.push({
        Roname: null
      })
    },
    removeRol (rolId) {
      if (!this.blockRemoval) this.rols.splice(rolId, 1)
    },
    validations (step) {
      if (step === 2) {
        let checkEmptyrules = this.rules.filter(rule => rule.Rname === null)
        if (checkEmptyrules.length >= 1 && this.rules.length > 0) {
          Notify.create('Una o todas las reglas estan vacias')
          return 'error'
        }
      } else if (step === 1 && this.name === '') {
        Notify.create('Debe poner un nombre para continuar')
        return 'error'
      } else if (step === 3) {
        let checkEmpty = this.objectives.filter(obj => obj.Oname === null)
        if (checkEmpty.length >= 1 && this.objectives.length > 0) {
          Notify.create('Uno o todos los objetivos estan vacios')
          return 'error'
        }
      } else if (step === 4) {
        let checkEmpty = this.rols.filter(rol => rol.Roname === null)
        if (checkEmpty.length >= 1 && this.rols.length > 0) {
          Notify.create('Uno o todos los roles estan vacios')
          return 'error'
        }
      }
    },
    makeInstrument () {
      let newInstrument = { iname: this.name, irules: this.rules, iobj: this.objectives, irols: this.rols }
      let response = addUserInstruments(newInstrument)
      if (response) {
        Notify.create('Se ha agregado correctamente su instrumento')
        this.name = ''
        this.rols = []
        this.objectives = []
        this.rules = []
        this.addrule()
        this.addObj()
        this.addRol()
      }
    }
  },
  mounted () {
    this.addrule()
    this.addObj()
    this.addRol()
  }
}

</script>
