<template>
  <div class="container text-start py-4">
    <h1 class="text-warning fw-bold mb-4">Editar Cliente</h1>
    <div class="card shadow-sm">
      <div class="card-header fw-bold">Formulario de Edición</div>
      <div class="card-body">
        <form @submit.prevent="actualizarCustomer">

          <!-- Document Number -->
          <div class="row mb-3">
            <label for="document_number" class="form-label">Número de Documento</label>
            <div class="input-group">
              <span class="input-group-text">
                <i class="fas fa-id-card"></i>
              </span>
              <input id="document_number" type="text" class="form-control" v-model="customer.document_number"
                placeholder="Número de Documento" required />
            </div>
          </div>

          <!-- First Name -->
          <div class="row mb-3">
            <label for="first_name" class="form-label">Nombre</label>
            <div class="input-group">
              <span class="input-group-text">
                <i class="fas fa-user"></i>
              </span>
              <input id="first_name" type="text" class="form-control" v-model="customer.first_name" placeholder="Nombre"
                required />
            </div>
          </div>

          <!-- Last Name -->
          <div class="row mb-3">
            <label for="last_name" class="form-label">Apellido</label>
            <div class="input-group">
              <span class="input-group-text">
                <i class="fas fa-user"></i>
              </span>
              <input id="last_name" type="text" class="form-control" v-model="customer.last_name" placeholder="Apellido"
                required />
            </div>
          </div>

          <!-- Address -->
          <div class="row mb-3">
            <label for="address" class="form-label">Dirección</label>
            <div class="input-group">
              <span class="input-group-text">
                <i class="fas fa-map-marker-alt"></i>
              </span>
              <input id="address" type="text" class="form-control" v-model="customer.address" placeholder="Dirección" />
            </div>
          </div>

          <!-- Birthday -->
          <div class="row mb-3">
            <label for="birthday" class="form-label">Fecha de Nacimiento</label>
            <div class="input-group">
              <span class="input-group-text">
                <i class="fas fa-calendar-alt"></i>
              </span>
              <input id="birthday" type="date" class="form-control" v-model="customer.birthday"
                placeholder="Fecha de Nacimiento" />
            </div>
          </div>

          <!-- Phone Number -->
          <div class="row mb-3">
            <label for="phone_number" class="form-label">Teléfono</label>
            <div class="input-group">
              <span class="input-group-text">
                <i class="fas fa-phone"></i>
              </span>
              <input id="phone_number" type="text" class="form-control" v-model="customer.phone_number"
                placeholder="Teléfono" />
            </div>
          </div>

          <!-- Email -->
          <div class="row mb-4">
            <label for="email" class="form-label">Correo Electrónico</label>
            <div class="input-group">
              <span class="input-group-text">
                <i class="fas fa-envelope"></i>
              </span>
              <input id="email" type="email" class="form-control" v-model="customer.email"
                placeholder="Correo Electrónico" />
            </div>
          </div>

          <!-- Botones -->
          <button class="btn btn-warning" type="submit">Actualizar</button>
          <router-link class="btn btn-secondary ms-2" :to="{ name: 'Customers' }">Cancelar</router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'EditarCustomer',
  data() {
    return {
      customer: {
        document_number: '',
        first_name: '',
        last_name: '',
        address: '',
        birthday: '',
        phone_number: '',
        email: ''
      }
    }
  },
  methods: {
    async obtenerCustomer() {
      const res = await axios.get(`http://127.0.0.1:8000/api/customers/${this.$route.params.id}`);
      // Si la fecha viene en otro formato, aseguramos que sea yyyy-MM-dd para el input date
      if (res.data.customer.birthday) {
        res.data.customer.birthday = this.formatDate(res.data.customer.birthday);
      }
      this.customer = res.data.customer;
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = (`0${date.getMonth() + 1}`).slice(-2);
      const day = (`0${date.getDate()}`).slice(-2);
      return `${year}-${month}-${day}`;
    },
    async actualizarCustomer() {
      try {
        await axios.put(`http://127.0.0.1:8000/api/customers/${this.$route.params.id}`, this.customer);
        this.$router.push({ name: 'Customers' });
      } catch (error) {
        console.error(error.response?.data || error);
        alert('Error al actualizar cliente. Ver consola.');
      }
    }
  },
  mounted() {
    this.obtenerCustomer();
  }
}
</script>