<template>
  <div class="container mt-4">
    <h1 class="text-primary fw-bold">Clientes</h1>

    <div class="card shadow-sm">
      <div class="card-header fw-bold">Lista de Clientes</div>
      <div class="card-body">
        <table class="table table-hover">
          <thead class="table-info">
            <tr>
              <th>#</th>
              <th>Documento</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Teléfono</th>
              <th>Email</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(customer, index) in customers" :key="customer.id">
              <th scope="row">{{ index + 1 }}</th>
              <td>{{ customer.document_number }}</td>
              <td>{{ customer.first_name }}</td>
              <td>{{ customer.last_name }}</td>
              <td>{{ customer.phone_number }}</td>
              <td>{{ customer.email }}</td>
              <td>
                <button @click="editCustomer(customer.id)" class="btn btn-sm btn-warning mx-1">
                  <font-awesome-icon icon="pencil" />
                </button>
                <button @click="eliminar(customer.id)" class="btn btn-sm btn-outline-danger mx-1">
                  <font-awesome-icon icon="trash" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <button @click="newCustomer" class="btn btn-success">
          <font-awesome-icon icon="plus" /> Nuevo Cliente
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
  name: 'Customers',
  data() {
    return {
      customers: []
    }
  },
  methods: {
    async cargarCustomers() {
      try {
        const res = await axios.get('http://127.0.0.1:8000/api/customers');
        this.customers = res.data.customers;
      } catch (error) {
        console.error('Error cargando clientes:', error);
      }
    },
    async eliminar(id) {
      Swal.fire({
        title: `¿Deseas eliminar al cliente con ID ${id}?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar'
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            await axios.delete(`http://127.0.0.1:8000/api/customers/${id}`);
            Swal.fire('Eliminado', 'El cliente ha sido eliminado.', 'success');
            this.cargarCustomers();
          } catch (error) {
            console.error('Error al eliminar:', error);
            Swal.fire('Error', 'No se pudo eliminar el cliente.', 'error');
          }
        }
      });
    },
    editCustomer(id) {
      this.$router.push({ name: 'EditarCustomer', params: { id } });
    },
    newCustomer() {
      this.$router.push({ name: 'NewCustomer' });
    }
  },
  mounted() {
    this.cargarCustomers();
  }
}
</script>