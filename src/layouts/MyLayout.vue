<template>
  <q-layout view="hHh lpR fff">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          Meejel
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/newInstrument" label="Añadir instrumento"/>
        <q-route-tab to="/" label="Instrumentos" />
        <q-route-tab to="/newEvidence" label="Añadir evidencias"/>
      </q-tabs>
    </q-header>

    <q-drawer v-model="left" side="left" overlay bordered>
      <!-- drawer content -->
      <q-route-tab to="/Index" label="Page Two" />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      left: true
    }
  }
}
</script>
