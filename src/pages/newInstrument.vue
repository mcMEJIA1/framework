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
              rounded outlined
              v-model="name"
              label="Nombre del instrumento*"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Debe escribir algo']"/>
            <q-stepper-navigation>
              <q-btn @click="$refs.stepper.next()" color="primary" label="Continuar"/>
            </q-stepper-navigation>
          </q-step>
          <q-step
            :name="2"
            title="Añada los objetivos de su instrumento"
            caption="*"
            icon="create_new_folder"
            :done="step > 2"
          >
            <div v-for="(objective, index) in objectives" v-bind:key="index" class="row">
              <div class="col-3">
              </div>
              <div class="col-5">
                <q-input
                    rounded outlined
                    v-model="objective.Oname"
                    label="Objetivo*"
                    lazy-rules
                    :rules="[ val => val && val.length > 0 || 'Debe escribir algo']"
                />
              </div>
              <div class="col-lg-2">
                  <div class="block float-right">
                    <q-btn @click="removeObj(index)" icon="delete" round />
                    <q-btn v-if="index + 1 === objectives.length" @click="addObj" round >
                      <v-icon class="text-h4">+</v-icon>
                    </q-btn>
                  </div>
              </div>
            </div>
            <q-stepper-navigation>
              <q-btn @click="$refs.stepper.next()" color="primary" label="Continuar"/>
              <q-btn @click="$refs.stepper.previous()" flat color="primary" label="Atras"/>
            </q-stepper-navigation>
          </q-step>
          <q-step
            :name="3"
            title="Añada las reglas de su instrumento"
            caption="*"
            icon="create_new_folder"
            :done="step > 3"
          >
            <div v-for="(rule, index) in rules " v-bind:key="index" class = "row">
              <div class="col-3">
              </div>
              <div class="col-5">
                <q-input
                        rounded outlined
                        v-model="rule.Rname"
                        label="Regla*"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Debe escribir algo']"/>
              </div>
              <div class="col-lg-2">
                  <div class="block float-right">
                    <q-btn @click="removerule(index)" icon="delete" round />
                    <q-btn v-if="index + 1 === rules.length" @click="addrule" round >
                      <v-icon class="text-h4">+</v-icon>
                    </q-btn>
                  </div>
              </div>
            </div>
            <q-stepper-navigation>
              <q-btn @click="$refs.stepper.next()" color="primary" label="Continuar"/>
              <q-btn @click="$refs.stepper.previous()" flat color="primary" label="Atras"/>
            </q-stepper-navigation>
          </q-step>
          <q-step
            :name="4"
            title="Añada los roles de su instrumento"
            caption="*"
            icon="create_new_folder"
            :done="step > 4"
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
                  <q-btn v-if="index + 1 === rols.length" @click="addRol" round>
                    <v-icon class="text-h4">+</v-icon>
                  </q-btn>
                </div>
              </div>
            </div>
            <q-stepper-navigation>
              <q-btn @click="$refs.stepper.next()" color="primary" label="Continuar"/>
              <q-btn @click="$refs.stepper.previous()" flat color="primary" label="Atras"/>
            </q-stepper-navigation>
          </q-step>
          <q-step
            :name="5"
            title="Añada los pasos de su instrumento"
            caption="*"
            icon="create_new_folder"
          >
            <div v-for="(step,index) in steps" v-bind:key="index" class="row">
              <div class="col-3">
              </div>
              <div class="col-5">
                <q-input
                  rounded outlined
                  v-model="step.Sname"
                  label="Paso*"
                  lazy-rules
                  :rules="[ val => val && val.length > 0 || 'Debe escribir algo']"
                />
              </div>
              <div class="col-lg-2">
                <div class="block float-right">
                  <q-btn @click="removestep(index)" icon="delete" round/>
                  <q-btn v-if="index + 1 === steps.length" @click="addstep" round>
                    <v-icon class="text-h4">+</v-icon>
                  </q-btn>
                </div>
              </div>
            </div>
            <q-stepper-navigation>
              <q-btn @click="$refs.stepper.next()" color="primary" label="Continuar"/>
              <q-btn @click="$refs.stepper.previous()" flat color="primary" label="Atras"/>
            </q-stepper-navigation>
          </q-step>
          <q-step
            :name="6"
            title="Añada los materiales de su instrumento"
            caption="*"
            icon="create_new_folder"
          >
            <div v-for="(material,index) in materials" v-bind:key="index" class="row">
              <div class="col-3">
              </div>
              <div class="col-5">
                <q-input
                  rounded outlined
                  v-model="material.Maname"
                  label="Material*"
                  lazy-rules
                  :rules="[ val => val && val.length > 0 || 'Debe escribir algo']"
                />
              </div>
              <div class="col-lg-2">
                <div class="block float-right">
                  <q-btn @click="removeMaterial(index)" icon="delete" round/>
                  <q-btn v-if="index + 1 === materials.length" @click="addMaterial" round>
                    <v-icon class="text-h4">+</v-icon>
                  </q-btn>
                </div>
              </div>
            </div>
            <q-stepper-navigation>
              <q-btn @click="makeInstrument()" color="primary" label="Finalizar"/>
              <q-btn @click="$refs.stepper.previous()" flat color="primary" label="Atras"/>
            </q-stepper-navigation>
          </q-step>
        </q-stepper>
        {{data}}
    </div>
</template>
<style>

</style>
<script>
import { Notify, LocalStorage } from 'quasar'
// import { functions } from '../services/newinstrument.TARGET'

export default {
  beforeMount () {
    this.token = LocalStorage.getItem('token')
  },
  data () {
    return {
      step: 1,
      rules: [],
      objectives: [],
      rols: [],
      steps: [],
      materials: [],
      blockRemoval: true,
      text: '',
      accept: false,
      Rname: '',
      name: '',
      Oname: '',
      Roname: '',
      Sname: '',
      Maname: '',
      token: '',
      data: {}
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
    },
    steps () {
      this.blockRemoval = this.steps.length <= 1
    },
    materials () {
      this.blockRemoval = this.materials.length <= 1
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
    addstep () {
      let checkEmpty = this.steps.filter(step => step.Sname === null)
      if (checkEmpty.length >= 1 && this.steps.length > 0) return
      this.steps.push({
        Sname: null
      })
    },
    removestep (stepId) {
      if (!this.blockRemoval) this.steps.splice(stepId)
    },
    addMaterial () {
      let checkEmpty = this.materials.filter(material => material.Maname === null)
      if (checkEmpty.length >= 1 && this.materials.length > 0) return
      this.materials.push({
        Maname: null
      })
    },
    removeMaterial (materialId) {
      if (!this.blockRemoval) this.materials.splice(materialId)
    },
    reduce (step) {
      return step--
    },
    validations (step) {
      if (step === 3) {
        let checkEmptyrules = this.rules.filter(rule => rule.Rname === null)
        if (checkEmptyrules.length >= 1 && this.rules.length > 0) {
          Notify.create('Una o todas las reglas estan vacias')
          return 'error'
        }
      } else if (step === 1 && this.name === '') {
        Notify.create('Debe poner un nombre para continuar')
        return 'error'
      } else if (step === 2) {
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
      } else if (step === 5) {
        let checkEmpty = this.steps.filter(step => step.Sname === null)
        if (checkEmpty.length >= 1 && this.steps.length > 0) {
          Notify.create('Una o todos los pasos estan vacios')
          return 'error'
        }
      }
    },
    makeInstrument () {
      console.log(this.token)
      let newInstrument = { 'name': this.name, 'Reglas': Object.values(this.rules), 'Objetivos': Object.values(this.objectives), 'Roles': Object.values(this.rols), 'Pasos': Object.values(this.steps) }
      console.log(newInstrument)
      this.data = newInstrument
      this.$axios.post('https://meejel-back.herokuapp.com/api/v1/instrument/', newInstrument, { headers: { Authorization: 'Bearer ' + this.token } })
        .then(res => {
          console.log(res)
          this.setInitState()
        })
        .catch(err => {
          console.log(err)
        })
      // let response = functions('post', newInstrument)
    },
    setInitState () {
      Notify.create('Se ha agregado correctamente su instrumento')
      this.step = 1
      this.name = ''
      this.rols = []
      this.objectives = []
      this.rules = []
      this.steps = []
      this.materials = []
      this.addstep()
      this.addrule()
      this.addObj()
      this.addRol()
    }
  },
  mounted () {
    this.addrule()
    this.addObj()
    this.addRol()
    this.addstep()
    this.addMaterial()
  }
}

</script>
