<template>
  <div class="container py-4">
    <h2 class="text-primary">Clientes</h2>
    <router-link class="btn btn-success mb-3" :to="{ name: 'NewCustomer' }">Nuevo Cliente</router-link>

    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Documento</th>
          <th>Nombres</th>
          <th>Apellidos</th>
          <th>Teléfono</th>
          <th>Email</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers" :key="customer.id">
          <td>{{ customer.document_number }}</td>
          <td>{{ customer.first_name }}</td>
          <td>{{ customer.last_name }}</td>
          <td>{{ customer.phone_number }}</td>
          <td>{{ customer.email }}</td>
          <td>
            <router-link class="btn btn-sm btn-warning" :to="{ name: 'EditarCustomer', params: { id: customer.id } }">Editar</router-link>
            <button class="btn btn-sm btn-danger ms-2" @click="eliminar(customer.id)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Customers',
  data() {
    return {
      customers: []
    }
  },
  methods: {
    async cargarCustomers() {
      const res = await axios.get('http://127.0.0.1:8000/api/customers');
      this.customers = res.data.customers;
    },
    async eliminar(id) {
      if (confirm('¿Estás seguro de eliminar este cliente?')) {
        await axios.delete(`http://127.0.0.1:8000/api/customers/${id}`);
        this.cargarCustomers();
      }
    }
  },
  mounted() {
    this.cargarCustomers();
  }
}
</script>