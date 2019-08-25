<template>
  <div class="q-pa-md">
      <q-table
        grid
        title="Instrumentos"
        :data="tableData"
        :pagination.sync="serverPagination"
        :rows-per-page-options="[20,50]"
        :columns="columns"
        row-key="id"
        hide-header
        @request="request"
        @click="console.log('me hicieron click')"
      >
      </q-table>
    </div>
</template>

<style>
</style>

<script>
import { getUserInstruments } from '../services/instrument.TARGET'

export default {
  // name: 'PageIndex',
  // data: () => ({
  //   columns: [
  //     { name: 'name', label: 'Nombre', field: 'name', align: 'left' },
  //     { name: 'owner', label: 'Dueño', field: 'owner', align: 'left' }
  //   ],
  //   tableData: [],
  //   loadingData: true,
  //   serverPagination: {
  //     page: 1,
  //     rowsNumber: 10
  //   }
  // }),
  data () {
    return {
      columns: [
        { name: 'name', label: 'Nombre', field: 'name', align: 'left' },
        { name: 'owner', label: 'Dueño', field: 'owner', align: 'left' }
      ],
      tableData: [],
      loadingData: true,
      serverPagination: {
        page: 1,
        rowsNumber: 10
      }
    }
  },
  created () {
    this.request({ pagination: this.serverPagination })
  },
  methods: {
    request ({ pagination }) {
      this.loadingData = true
      getUserInstruments('test', pagination)
        .then(result => {
          console.log(result)
          this.serverPagination = pagination
          this.serverPagination.rowsNumber = result.count
          this.tableData = result
          this.loadingData = false
        })
    }
  }
}
</script>
