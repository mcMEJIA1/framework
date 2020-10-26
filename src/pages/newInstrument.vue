<template>
  <div class="items-center">
    <q-stepper
      class="q-gutter-md"
      vertical
      v-model="step"
      ref="stepper"
      alternative-labels
      color="primary"
      animated
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
        <q-stepper-navigation>
          <q-btn @click="$refs.stepper.next()" color="primary" label="Continuar" />
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
        <q-stepper-navigation>
          <q-btn @click="$refs.stepper.next()" color="primary" label="Continuar" />
          <q-btn @click="$refs.stepper.previous()" flat color="primary" label="Atras" />
        </q-stepper-navigation>
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
        <q-stepper-navigation>
          <q-btn @click="$refs.stepper.next()" color="primary" label="Continuar" />
          <q-btn @click="$refs.stepper.previous()" flat color="primary" label="Atras" />
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
        <q-stepper-navigation>
          <q-btn @click="$refs.stepper.next()" color="primary" label="Continuar" />
          <q-btn @click="$refs.stepper.previous()" flat color="primary" label="Atras" />
        </q-stepper-navigation>
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
        <q-stepper-navigation>
          <q-btn @click="$refs.stepper.next()" color="primary" label="Continuar" />
          <q-btn @click="$refs.stepper.previous()" flat color="primary" label="Atras" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="6"
        title="Añada las categorias de su instrumento"
        caption="*"
        icon="create_new_folder"
        :done="step > 6"
      >
        <div v-for="(category,index) in categories" v-bind:key="index" class="row">
          <div class="col-3"></div>
          <div class="col-5">
            <q-input
              rounded
              outlined
              v-model="category.Cname"
              label="Categoria*"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Debe escribir algo']"
            />
          </div>
          <div class="col-lg-2">
            <div class="block float-right">
              <q-btn @click="removeCategory(index)" icon="delete" round />
              <q-btn v-if="index + 1 === categories.length" @click="addCategory" round>
                <v-icon class="text-h4">+</v-icon>
              </q-btn>
            </div>
          </div>
        </div>
        <q-stepper-navigation>
          <q-btn @click="$refs.stepper.next()" color="primary" label="Continuar" />
          <q-btn @click="$refs.stepper.previous()" flat color="primary" label="Atras" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="7"
        title="Descripción del instrumento"
        caption="*"
        icon="create_new_folder"
        :done="step > 7"
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
        <q-stepper-navigation>
          <q-btn @click="$refs.stepper.next()" color="primary" label="Continuar" />
          <q-btn @click="$refs.stepper.previous()" flat color="primary" label="Atras" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="8"
        title="Propósito del instrumento"
        caption="*"
        icon="create_new_folder"
        :done="step > 8"
      >
        <div class="q-pa-md">
          <div class="q-gutter-sm">
            <q-checkbox v-model="CbEnseñar" label="Enseñar" />
            <q-checkbox v-model="CbReforzar" label="Reforzar" />
            <q-checkbox v-model="CbComprobar" label="Comprobar" />
            <q-checkbox v-model="CbSocializar" label="Socializar experiencias" />
          </div>
        </div>
        <q-stepper-navigation>
          <q-btn @click="$refs.stepper.next()" color="primary" label="Continuar" />
          <q-btn @click="$refs.stepper.previous()" flat color="primary" label="Atras" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="9"
        title="Añada los conceptos asociados a su instrumento"
        caption="*"
        icon="create_new_folder"
        :done="step > 9"
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
        <q-stepper-navigation>
          <q-btn @click="$refs.stepper.next()" color="primary" label="Continuar" />
          <q-btn @click="$refs.stepper.previous()" flat color="primary" label="Atras" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="10"
        title="Nivel de dificultad"
        caption="*"
        icon="create_new_folder"
        :done="step > 10"
      >
        <div class="q-pa-md" style="max-width: 300px">
          <div class="q-gutter-md">
            <q-select outlined v-model="leveloptions" :options="options" label="Opciones" />
          </div>
        </div>
        <q-stepper-navigation>
          <q-btn @click="$refs.stepper.next()" color="primary" label="Continuar" />
          <q-btn @click="$refs.stepper.previous()" flat color="primary" label="Atras" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="11"
        title="Número de grupos"
        caption="*"
        icon="create_new_folder"
        :done="step > 11"
      >
        <div class="q-pa-md">
          <q-input v-model.number="model" type="number" filled style="max-width: 200px" />
        </div>
        <q-stepper-navigation>
          <q-btn @click="$refs.stepper.next()" color="primary" label="Continuar" />
          <q-btn @click="$refs.stepper.previous()" flat color="primary" label="Atras" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="12"
        title="Criterio de selección del ganador"
        caption="*"
        icon="create_new_folder"
        :done="step > 12"
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
        <q-stepper-navigation>
          <q-btn @click="$refs.stepper.next()" color="primary" label="Continuar" />
          <q-btn @click="$refs.stepper.previous()" flat color="primary" label="Atras" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="13"
        title="Tiempo de duración (minutos)"
        caption="*"
        icon="create_new_folder"
        :done="step > 13"
      >
        <div class="q-pa-md">
          <q-input v-model.number="model" type="number" filled style="max-width: 200px" />
        </div>
        <q-stepper-navigation>
          <q-btn @click="$refs.stepper.next()" color="primary" label="Continuar" />
          <q-btn @click="$refs.stepper.previous()" flat color="primary" label="Atras" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="14"
        title="Añada los materiales de su instrumento"
        caption="*"
        icon="create_new_folder"
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
        <q-stepper-navigation>
          <q-btn @click="makeInstrument()" color="primary" label="Finalizar" />
          <q-btn @click="$refs.stepper.previous()" flat color="primary" label="Atras" />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </div>
</template>
<style>
</style>
<script>
import { Notify, LocalStorage } from "quasar";
// import { functions } from '../services/newinstrument.TARGET'

export default {
  beforeMount() {
    this.token = LocalStorage.getItem("token");
  },
  data() {
    return {
      step: 1,
      rules: [],
      objectives: [],
      rols: [],
      steps: [],
      materials: [],
      categories: [],
      concepts: [],
      options: ["Alto", "Medio", "Bajo"],
      leveloptions: null,
      CbEnseñar: false,
      CbReforzar: false,
      CbComprobar: false,
      CbSocializar: false,
      blockRemoval: true,
      text: "",
      accept: false,
      Rname: "",
      name: "",
      Oname: "",
      Roname: "",
      Sname: "",
      Maname: "",
      Cname: "",
      Coname: "",
      token: "",
      data: {}
    };
  },
  watch: {
    rules() {
      this.blockRemoval = this.rules.length <= 1;
    },
    objectives() {
      this.blockRemoval = this.objectives.length <= 1;
    },
    rols() {
      this.blockRemoval = this.rols.length <= 1;
    },
    steps() {
      this.blockRemoval = this.steps.length <= 1;
    },
    materials() {
      this.blockRemoval = this.materials.length <= 1;
    },
    categories() {
      this.blockRemoval = this.categories.length <= 1;
    },
    concepts() {
      this.blockRemoval = this.concepts.length <= 1;
    }
  },
  methods: {
    addrule() {
      let checkEmptyrules = this.rules.filter(rule => rule.Rname === null);
      if (checkEmptyrules.length >= 1 && this.rules.length > 0) return;
      this.rules.push({
        Rname: null
      });
    },
    removerule(ruleId) {
      if (!this.blockRemoval) this.rules.splice(ruleId, 1);
    },
    addObj() {
      let checkEmpty = this.objectives.filter(obj => obj.Oname === null);
      if (checkEmpty.length >= 1 && this.objectives.length > 0) return;
      this.objectives.push({
        Oname: null
      });
    },
    removeObj(objId) {
      if (!this.blockRemoval) this.objectives.splice(objId, 1);
    },

    addCategory() {
      let checkEmpty = this.categories.filter(cat => cat.Cname === null);
      if (checkEmpty.length >= 1 && this.categories.length > 0) return;
      this.categories.push({
        Cname: null
      });
    },
    removeCategory(catId) {
      if (!this.blockRemoval) this.categories.splice(catId);
    },
    addConcepts() {
      let checkEmpty = this.concepts.filter(con => con.Coname === null);
      if (checkEmpty.length >= 1 && this.concepts.length > 0) return;
      this.concepts.push({
        Coname: null
      });
    },
    removeConcepts(conId) {
      if (!this.blockRemoval) this.concepts.splice(conId);
    },
    addRol() {
      let checkEmpty = this.rols.filter(rol => rol.Roname === null);
      if (checkEmpty.length >= 1 && this.rols.length > 0) return;
      this.rols.push({
        Roname: null
      });
    },
    removeRol(rolId) {
      if (!this.blockRemoval) this.rols.splice(rolId, 1);
    },
    addstep() {
      let checkEmpty = this.steps.filter(step => step.Sname === null);
      if (checkEmpty.length >= 1 && this.steps.length > 0) return;
      this.steps.push({
        Sname: null
      });
    },
    removestep(stepId) {
      if (!this.blockRemoval) this.steps.splice(stepId);
    },
    addMaterial() {
      let checkEmpty = this.materials.filter(
        material => material.Maname === null
      );
      if (checkEmpty.length >= 1 && this.materials.length > 0) return;
      this.materials.push({
        Maname: null
      });
    },
    removeMaterial(materialId) {
      if (!this.blockRemoval) this.materials.splice(materialId);
    },
    reduce(step) {
      return step--;
    },
    validations(step) {
      if (step === 3) {
        let checkEmptyrules = this.rules.filter(rule => rule.Rname === null);
        if (checkEmptyrules.length >= 1 && this.rules.length > 0) {
          Notify.create("Una o todas las reglas estan vacias");
          return "error";
        }
      } else if (step === 1 && this.name === "") {
        Notify.create("Debe poner un nombre para continuar");
        return "error";
      } else if (step === 2) {
        let checkEmpty = this.objectives.filter(obj => obj.Oname === null);
        if (checkEmpty.length >= 1 && this.objectives.length > 0) {
          Notify.create("Uno o todos los objetivos estan vacios");
          return "error";
        }
      } else if (step === 4) {
        let checkEmpty = this.rols.filter(rol => rol.Roname === null);
        if (checkEmpty.length >= 1 && this.rols.length > 0) {
          Notify.create("Uno o todos los roles estan vacios");
          return "error";
        }
      } else if (step === 5) {
        let checkEmpty = this.steps.filter(step => step.Sname === null);
        if (checkEmpty.length >= 1 && this.steps.length > 0) {
          Notify.create("Una o todos los pasos estan vacios");
          return "error";
        }
      } else if (step === 6) {
        let checkEmpty = this.categories.filter(
          category => categories.Cname === null
        );
        if (checkEmpty.length >= 1 && this.categories.length > 0) {
          Notify.create("Una o todos los pasos estan vacios");
          return "error";
        }
      } else if (step === 9) {
        let checkEmpty = this.concepts.filter(
          concept => concepts.Coname === null
        );
        if (checkEmpty.length >= 1 && this.concepts.length > 0) {
          Notify.create("Una o todos los pasos estan vacios");
          return "error";
        }
      }
    },
    makeInstrument() {
      console.log(this.token);
      let newInstrument = {
        name: this.name,
        Reglas: Object.values(this.rules),
        Objetivos: Object.values(this.objectives),
        Roles: Object.values(this.rols),
        Pasos: Object.values(this.steps),
        Materiales: Object.values(this.materials),
        Categorias: Object.values(this.categories),
        "Conceptos Asociados": Object.values(this.concepts)
      };
      console.log(newInstrument);
      this.data = newInstrument;
      this.$axios
        .post(
          "https://meejel-back.herokuapp.com/api/v1/instrument/",
          newInstrument,
          { headers: { Authorization: "Bearer " + this.token } }
        )
        .then(res => {
          console.log(res);
          this.setInitState();
        })
        .catch(err => {
          console.log(err);
        });
      // let response = functions('post', newInstrument)
    },
    setInitState() {
      Notify.create("Se ha agregado correctamente su instrumento");
      this.step = 1;
      this.name = "";
      this.rols = [];
      this.objectives = [];
      this.rules = [];
      this.steps = [];
      this.materials = [];
      this.categories = [];
      this.concepts = [];
      this.addstep();
      this.addrule();
      this.addObj();
      this.addRol();
      this.addCategory();
      this.addConcepts();
    }
  },
  mounted() {
    this.addrule();
    this.addObj();
    this.addRol();
    this.addstep();
    this.addMaterial();
    this.addCategory();
    this.addConcepts();
  }
};
</script>
