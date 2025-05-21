<template>
  <div class="container mt-4">
    <h1>Modos de Pago</h1>

    <table class="table table-hover">
      <thead class="table-primary">
        <tr>
          <th>#</th>
          <th>ID</th>
          <th>Nombre</th>
          <th>Observación</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(mode, index) in payModes" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ mode.id }}</td>
          <td>{{ mode.name }}</td>
          <td>{{ mode.observation }}</td>
          <td>
            <button @click="editPayMode(mode.id)" class="btn btn-warning mx-1">
              <font-awesome-icon icon="pencil" />
            </button>
            <button @click="deletePayMode(mode.id)" class="btn btn-outline-danger btn-sm">
              <font-awesome-icon icon="trash" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <button @click="newPayMode" class="btn btn-primary mt-2">
      <font-awesome-icon icon="plus" /> Nuevo modo de pago
    </button>
  </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
  name: 'PayModes',
  data() {
    return {
      payModes: []
    }
  },
  methods: {
    async fetchPayModes() {
      const res = await axios.get('http://127.0.0.1:8000/api/pay_modes');
      this.payModes = res.data.pay_modes;
    },
    newPayMode() {
      this.$router.push({ name: 'NewPayMode' });
    },
    editPayMode(id) {
      this.$router.push({ name: 'EditarPayMode', params: { id } });
    },
    deletePayMode(id) {
      Swal.fire({
        title: `¿Eliminar modo de pago con ID ${id}?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Eliminar'
      }).then(result => {
        if (result.isConfirmed) {
          axios.delete(`http://127.0.0.1:8000/api/pay_modes/${id}`).then(() => {
            this.fetchPayModes();
            Swal.fire('Eliminado', 'Modo de pago eliminado correctamente.', 'success');
          });
        }
      });
    }
  },
  mounted() {
    this.fetchPayModes();
  }
}
</script>