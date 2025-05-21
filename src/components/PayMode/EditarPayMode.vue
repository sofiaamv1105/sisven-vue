<template>
  <div class="container text-start">
    <h1 class="text-warning fw-bold">Editar Modo de Pago</h1>
    <div class="card">
      <div class="card-header fw-bold">Formulario</div>
      <div class="card-body">
        <form @submit.prevent="updatePayMode">
          <div class="row mb-3">
            <label for="name" class="form-label">Nombre:</label>
            <input type="text" class="form-control" id="name" v-model="payMode.name" required />
          </div>
          <div class="row mb-3">
            <label for="observation" class="form-label">Observación:</label>
            <textarea class="form-control" id="observation" v-model="payMode.observation"></textarea>
          </div>
          <button class="btn btn-primary" type="submit">Actualizar</button>
          <button class="btn btn-secondary mx-2" @click="cancel">Cancelar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
  name: 'EditarPayMode',
  data() {
    return {
      payMode: {
        name: '',
        observation: ''
      }
    }
  },
  methods: {
    async fetchPayMode() {
      const res = await axios.get(`http://127.0.0.1:8000/api/pay_modes/${this.$route.params.id}`)
      this.payMode = res.data.pay_mode
    },
    async updatePayMode() {
      try {
        await axios.put(`http://127.0.0.1:8000/api/pay_modes/${this.$route.params.id}`, this.payMode)
        Swal.fire('Actualizado', 'Modo de pago actualizado correctamente', 'success')
        this.$router.push({ name: 'PayModes' })
      } catch (err) {
        console.error(err)
        Swal.fire('Error', 'No se pudo actualizar el modo de pago.', 'error')
      }
    },
    cancel() {
      this.$router.push({ name: 'PayModes' })
    }
  },
  mounted() {
    this.fetchPayMode()
  }
}
</script>