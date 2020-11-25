<template>
<div>
    <div class="col" style="position: absolute; top: 15%; left: 40px;">
      <q-drawer
        show-if-above
        @mouseover="miniState = false"
        @mouseout="miniState = false"
        mini-to-overlay

        :width="200"
        :breakpoint="500"
        bordered
        content-class="bg-grey-3"
      >
        <q-scroll-area class="fit">
          <q-list padding>
            <q-item @click="showMenus('basics')" :active="showBasics" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="assignment" />
              </q-item-section>

              <q-item-section>
                Datos basicos
              </q-item-section>
            </q-item>

            <q-item @click="showMenus('elements')" :active="showElements" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="build" />
              </q-item-section>

              <q-item-section>
                Elementos
              </q-item-section>
            </q-item>

            <q-item @click="showMenus('ads')" :active="showAds" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="drafts" />
              </q-item-section>

              <q-item-section>
                Adjuntos
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>
    </div>
    <q-slide-transition>
        <q-stepper
        v-show="showBasics"
        class="q-gutter-md"
        vertical
        header-nav
        v-model="step"
        ref="stepper"
        alternative-labels
        color="primary"
        animated
        style="display: block;
        margin-top: 2.5%;
        margin-left: auto;
        margin-right: auto;
        width: 50%;"
      >
        <q-step :name="1" title="Nombre su instrumento" caption="*" icon="settings" :done="step > 1">
          <q-input
            rounded
            outlined
            v-model="name"
            label="Nombre del instrumento*"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Debe escribir algo']"
          />
        </q-step>
        <q-step
          :name="2"
          title="Descripción del instrumento"
          caption="*"
          icon="create_new_folder"
          :done="step > 2"
        >
          <q-input
            rounded
            outlined
            v-model="description"
            filled
            type="textarea"
            label="Descripcion del instrumento*"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Debe escribir algo']"
          />
        </q-step>
        <q-step
          :name="3"
          title="Categoria"
          caption="*"
          icon="create_new_folder"
          :done="step > 3"
        >
          <div class="q-pa-md" style="max-width: 300px, margin-left: auto; margin-right: auto;">
            <div class="q-gutter-md">
              <q-select outlined v-model="Category" :options="categories" label="Opciones" />
            </div>
          </div>
        </q-step>
        <q-step
          :name="4"
          title="Propósito del instrumento"
          caption="*"
          icon="create_new_folder"
          :done="step > 4"
        >
          <div class="q-pa-md">
            <div class="q-gutter-sm">
              <q-checkbox v-model="CbEnseñar" label="Enseñar" />
              <q-checkbox v-model="CbReforzar" label="Reforzar" />
              <q-checkbox v-model="CbComprobar" label="Comprobar" />
              <q-checkbox v-model="CbSocializar" label="Socializar experiencias" />
            </div>
          </div>
        </q-step>

        <q-step
          :name="5"
          title="Nivel de dificultad"
          caption="*"
          icon="create_new_folder"
          :done="step > 5"
        >
          <div class="q-pa-md" style="max-width: 300px, margin-left: auto; margin-right: auto;">
            <div class="q-gutter-md">
              <q-select outlined v-model="leveloptions" :options="options" label="Opciones" />
            </div>
          </div>
        </q-step>

        <q-step
          :name="6"
          title="Número de grupos"
          caption="*"
          icon="create_new_folder"
          :done="step > 6"
        >
          <div class="q-pa-md" style="max-width: 300px, margin-left: auto; margin-right: auto;">
            <div class="q-gutter-md">
              <q-input v-model.number="groups" type="number" filled />
            </div>
          </div>
        </q-step>

        <q-step
          :name="7"
          title="Criterio de selección del ganador"
          caption="*"
          icon="create_new_folder"
          :done="step > 7"
        >
          <q-input
            rounded
            outlined
            v-model="criteriosel"
            filled
            type="textarea"
            label="Criterio de selección*"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Debe escribir algo']"
          />
        </q-step>

        <q-step
          :name="8"
          title="Tiempo de duración (minutos)"
          caption="*"
          icon="create_new_folder"
          :done="step > 8"
        >
          <div class="q-pa-md" style="max-width: 300px, margin-left: auto; margin-right: auto;">
            <div class="q-gutter-md">
              <q-input v-model.number="time" type="number" filled />
            </div>
          </div>
        </q-step>

        <q-step
          :name="9"
          title="Privacidad del instrumento"
          caption="*"
          icon="create_new_folder"
          :done="step > 9"
        >
          <div class="q-pa-md" style="margin-left: 30%; margin-right: auto;">
            <div class="q-gutter-md">
              <q-toggle v-model="Public" label="Publico" />
            </div>
          </div>
        </q-step>
      </q-stepper>
    </q-slide-transition>
    <q-slide-transition>
      <q-stepper
        v-show="showElements"
        class="q-gutter-md"
        vertical
        header-nav
        v-model="step"
        ref="stepper"
        alternative-labels
        color="primary"
        animated
        style="display: block;
        margin-top: 2.5%;
        margin-left: auto;
        margin-right: auto;
        width: 50%;"
      >
          <q-step
            :name="1"
            title="Añada los objetivos de su instrumento"
            caption="*"
            icon="create_new_folder"
            :done="step > 1"
          >
            <div v-for="(objective, index) in objectives" v-bind:key="index" class="row">
              <div class="col-3"></div>
              <div class="col-5">
                <q-input
                  rounded
                  outlined
                  v-model="objective.Oname"
                  label="Objetivo*"
                  lazy-rules
                  :rules="[ val => val && val.length > 0 || 'Debe escribir algo']"
                />
              </div>
              <div class="col-lg-2">
                <div class="block float-right">
                  <q-btn @click="removeObj(index)" icon="delete" round />
                  <q-btn v-if="index + 1 === objectives.length" @click="addObj" round>
                    <v-icon class="text-h4">+</v-icon>
                  </q-btn>
                </div>
              </div>
            </div>
          </q-step>
          <q-step
            :name="3"
            title="Añada las reglas de su instrumento"
            caption="*"
            icon="create_new_folder"
            :done="step > 3"
          >
            <div v-for="(rule, index) in rules " v-bind:key="index" class="row">
              <div class="col-3"></div>
              <div class="col-5">
                <q-input
                  rounded
                  outlined
                  v-model="rule.Rname"
                  label="Regla*"
                  lazy-rules
                  :rules="[ val => val && val.length > 0 || 'Debe escribir algo']"
                />
              </div>
              <div class="col-lg-2">
                <div class="block float-right">
                  <q-btn @click="removerule(index)" icon="delete" round />
                  <q-btn v-if="index + 1 === rules.length" @click="addrule" round>
                    <v-icon class="text-h4">+</v-icon>
                  </q-btn>
                </div>
              </div>
            </div>
          </q-step>
        <q-step
          :name="4"
          title="Añada los roles de su instrumento"
          caption="*"
          icon="create_new_folder"
          :done="step > 4"
        >
          <div v-for="(rol, index) in rols" v-bind:key="index" class="row">
            <div class="col-3"></div>
            <div class="col-5">
              <q-input
                rounded
                outlined
                v-model="rol.Roname"
                label="Rol*"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Debe escribir algo']"
              />
            </div>
            <div class="col-lg-2">
              <div class="block float-right">
                <q-btn @click="removeRol(index)" icon="delete" round />
                <q-btn v-if="index + 1 === rols.length" @click="addRol" round>
                  <v-icon class="text-h4">+</v-icon>
                </q-btn>
              </div>
            </div>
          </div>
        </q-step>
        <q-step
          :name="5"
          title="Añada los pasos de su instrumento"
          caption="*"
          icon="create_new_folder"
          :done="step > 5"
        >
          <div v-for="(step,index) in steps" v-bind:key="index" class="row">
            <div class="col-3"></div>
            <div class="col-5">
              <q-input
                rounded
                outlined
                v-model="step.Sname"
                label="Paso*"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Debe escribir algo']"
              />
            </div>
            <div class="col-lg-2">
              <div class="block float-right">
                <q-btn @click="removestep(index)" icon="delete" round />
                <q-btn v-if="index + 1 === steps.length" @click="addstep" round>
                  <v-icon class="text-h4">+</v-icon>
                </q-btn>
              </div>
            </div>
          </div>
        </q-step>
        <q-step
          :name="6"
          title="Añada los conceptos asociados a su instrumento"
          caption="*"
          icon="create_new_folder"
          :done="step > 6"
        >
          <div v-for="(concept,index) in concepts" v-bind:key="index" class="row">
            <div class="col-3"></div>
            <div class="col-5">
              <q-input
                rounded
                outlined
                v-model="concept.Coname"
                label="Concepto Asociado*"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Debe escribir algo']"
              />
            </div>
            <div class="col-lg-2">
              <div class="block float-right">
                <q-btn @click="removeConcept(index)" icon="delete" round />
                <q-btn v-if="index + 1 === concepts.length" @click="addConcepts" round>
                  <v-icon class="text-h4">+</v-icon>
                </q-btn>
              </div>
            </div>
          </div>
        </q-step>
        <q-step
          :name="7"
          title="Añada los materiales de su instrumento"
          caption="*"
          icon="create_new_folder"
          :done="step > 7"
        >
          <div v-for="(material,index) in materials" v-bind:key="index" class="row">
            <div class="col-3"></div>
            <div class="col-5">
              <q-input
                rounded
                outlined
                v-model="material.Maname"
                label="Material*"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Debe escribir algo']"
              />
            </div>
            <div class="col-lg-2">
              <div class="block float-right">
                <q-btn @click="removeMaterial(index)" icon="delete" round />
                <q-btn v-if="index + 1 === materials.length" @click="addMaterial" round>
                  <v-icon class="text-h4">+</v-icon>
                </q-btn>
              </div>
            </div>
          </div>
        </q-step>
      </q-stepper>
    </q-slide-transition>
    <q-slide-transition>
      <q-stepper
        v-show="showAds"
        class="q-gutter-md"
        vertical
        header-nav
        v-model="step"
        ref="stepper"
        alternative-labels
        color="primary"
        animated
        style="display: block;
        margin-top: 2.5%;
        margin-left: auto;
        margin-right: auto;
        width: 50%;"
      >
        <q-step
            :name="1"
            title="Adjuntos"
            caption="*"
            icon="create_new_folder"
            :done="step > 1"
          >
          <q-input v-model="fileSelected" @change="onFileSelected" type="file"/>
          </q-step>
          <q-stepper-navigation>
            <q-btn @click="makeInstrument()" color="primary" label="Finalizar" />
          </q-stepper-navigation>
      </q-stepper>
    </q-slide-transition>
    <q-inner-loading :showing="visible">
        <q-spinner-gears size="50px" color="primary" />
    </q-inner-loading>
</div>
</template>

<script>
import { Notify, LocalStorage } from 'quasar'

export default {
  beforeMount () {
    this.token = LocalStorage.getItem('token')
    this.edit()
  },
  props: {
    eInstrument: Object,
    dialogEdit: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      visible: true,
      showData: false,
      step: 1,
      rules: [],
      objectives: [],
      rols: [],
      steps: [],
      materials: [],
      categories: [ 'Calidad de software', 'Requisitos', 'Comunicación', 'Trabajo en equipo' ],
      concepts: [],
      options: ['Alto', 'Medio', 'Bajo'],
      leveloptions: null,
      CbEnseñar: false,
      CbReforzar: false,
      CbComprobar: false,
      CbSocializar: false,
      blockRemoval: true,
      Public: false,
      fileSelected: '',
      text: '',
      accept: false,
      Rname: '',
      name: '',
      Oname: '',
      Roname: '',
      Sname: '',
      Maname: '',
      Cname: '',
      Coname: '',
      token: '',
      time: 0,
      groups: 0,
      criteriosel: '',
      description: '',
      Category: '',
      data: {},
      showElements: false,
      showBasics: true,
      showAds: false
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
    },
    concepts () {
      this.blockRemoval = this.concepts.length <= 1
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
    addConcepts () {
      let checkEmpty = this.concepts.filter(con => con.Coname === null)
      if (checkEmpty.length >= 1 && this.concepts.length > 0) return
      this.concepts.push({
        Coname: null
      })
    },
    removeConcepts (conId) {
      if (!this.blockRemoval) this.concepts.splice(conId)
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
      let checkEmpty = this.materials.filter(
        material => material.Maname === null
      )
      if (checkEmpty.length >= 1 && this.materials.length > 0) return
      this.materials.push({
        Maname: null
      })
    },
    removeMaterial (materialId) {
      if (!this.blockRemoval) this.materials.splice(materialId)
    },
    onFileSelected (e) {
      this.fileSelected = e.target.files[0].name
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
      let conceptsAsc = ''
      Object.values(this.concepts).forEach(cat => {
        conceptsAsc += ',' + cat.Coname
      })
      console.log(conceptsAsc)
      let newInstrument = {
        name: this.name,
        Reglas: Object.values(this.rules),
        Objetivos: Object.values(this.objectives),
        Roles: Object.values(this.rols),
        Pasos: Object.values(this.steps),
        Materiales: Object.values(this.materials),
        category: this.Category,
        associated_concepts: conceptsAsc,
        difficulty: this.leveloptions,
        time: this.time,
        winner_selection: this.criteriosel,
        purpose_teaching: this.CbEnseñar,
        purpose_reinforce: this.CbReforzar,
        purpose_check: this.CbComprobar,
        purpose_social: this.CbSocializar,
        description: this.description,
        groups: this.groups,
        attachments: this.fileSelected,
        public: this.Public
      }
      this.data = newInstrument
      if (this.dialogEdit) {
        this.$axios
          .put(
            'https://meejel-back.herokuapp.com/api/v1/instrument/' + this.$route.params.id + '/',
            newInstrument,
            { headers: { Authorization: 'Bearer ' + this.token } }
          )
          .then(res => {
            Notify.create('Se ha actualizado correctamente el instrumento')
            this.$router.push('/instruments')
          })
          .catch(err => {
            console.log(err)
          })
      } else {
        this.$axios
          .post(
            'https://meejel-back.herokuapp.com/api/v1/instrument/',
            newInstrument,
            { headers: { Authorization: 'Bearer ' + this.token } }
          )
          .then(res => {
            console.log(res)
            this.setInitState()
          })
          .catch(err => {
            console.log(err)
          })
      }
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
      this.categories = []
      this.concepts = []
      this.addstep()
      this.addrule()
      this.addObj()
      this.addRol()
      this.addConcepts()
    },
    edit () {
      if (this.dialogEdit) {
        this.axiosInstruments()
      } else {
        this.visible = false
        this.showData = true
      }
    },
    axiosInstruments () {
      let tkn = this.token
      this.$axios.get('https://meejel-back.herokuapp.com/api/v1/instrument/' + this.$route.params.id, { headers: { Authorization: 'Bearer ' + tkn } })
        .then(res => {
          this.eInstrument = res.data
          this.name = this.eInstrument.name
          if (this.eInstrument.Objetivos.length === 0) { this.objectives.push({ Oname: '' }) }
          if (this.eInstrument.Reglas.length === 0) { this.rules.push({ Rname: '' }) }
          if (this.eInstrument.Roles.length === 0) { this.rols.push({ Roname: '' }) }
          if (this.eInstrument.Pasos.length === 0) { this.steps.push({ Sname: '' }) }
          if (this.eInstrument.Materiales.length === 0) { this.materials.push({ Maname: '' }) }
          this.eInstrument.Objetivos.forEach(obj => { this.objectives.push({ Oname: obj.Oname }) })
          this.eInstrument.Reglas.forEach(rule => { this.rules.push({ Rname: rule.Rname }) })
          this.eInstrument.Roles.forEach(rol => { this.rols.push({ Roname: rol.Roname }) })
          this.eInstrument.Pasos.forEach(step => { this.steps.push({ Sname: step.Sname }) })
          this.Category = this.eInstrument.category
          this.description = this.eInstrument.description
          this.CbEnseñar = this.eInstrument.purpose_teaching
          this.CbReforzar = this.eInstrument.purpose_reinforce
          this.CbComprobar = this.eInstrument.purpose_check
          this.CbSocializar = this.eInstrument.purpose_social
          let oldConcepts = this.eInstrument.associated_concepts.split(',')
          oldConcepts.shift()
          if (oldConcepts.length === 0) { this.concepts.push({ Coname: '' }) }
          oldConcepts.forEach(conc => { this.concepts.push({ Coname: conc }) })
          this.leveloptions = this.eInstrument.difficulty
          this.groups = this.eInstrument.groups
          this.criteriosel = this.eInstrument.winner_selection
          this.time = this.eInstrument.time
          this.eInstrument.Materiales.forEach(mat => { this.materials.push({ Maname: mat.Maname }) })
          this.fileSelected = this.eInstrument.attachments
          this.Public = this.eInstrument.public
          setTimeout(() => {
            this.visible = false
            this.showData = true
          }, 1000)
        })
        .catch(err => {
          console.log(err)
          this.$router.push('/')
        })
    },
    showMenus (location) {
      let self = this
      if (location === 'elements') {
        self.showElements = true
        self.showBasics = false
        self.showAds = false
      } else if (location === 'basics') {
        self.showElements = false
        self.showBasics = true
        self.showAds = false
      } else if (location === 'ads') {
        self.showElements = false
        self.showBasics = false
        self.showAds = true
      }
    }
  },
  mounted () {
    if (this.dialogEdit === false) {
      this.addrule()
      this.addObj()
      this.addRol()
      this.addstep()
      this.addMaterial()
      this.addConcepts()
    }
  }
}
</script>
