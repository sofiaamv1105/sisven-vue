<template>
  <div class="container mt-4">
    <h1 class="text-primary fw-bold">Categorías</h1>

    <div class="card shadow-sm">
      <div class="card-header fw-bold">Lista de Categorías</div>
      <div class="card-body">
        <table class="table table-hover">
          <thead class="table-info">
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(category, index) in categories" :key="category.id">
              <th scope="row">{{ index + 1 }}</th>
              <td>{{ category.id }}</td>
              <td>{{ category.name }}</td>
              <td>{{ category.description }}</td>
              <td>
                <button @click="editCategory(category.id)" class="btn btn-sm btn-warning mx-1">
                  <font-awesome-icon icon="pencil" />
                </button>
                <button @click="deleteCategory(category.id)" class="btn btn-sm btn-outline-danger mx-1">
                  <font-awesome-icon icon="trash" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <button @click="newCategory" class="btn btn-success">
          <font-awesome-icon icon="plus" /> Nueva Categoría
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  name: 'Category',
  data() {
    return {
      categories: []
    };
  },
  methods: {
    async cargarCategorias() {
      try {
        const res = await axios.get('http://127.0.0.1:8000/api/categories');
        this.categories = res.data.categories;
      } catch (error) {
        console.error('Error cargando categorías:', error);
      }
    },
    async deleteCategory(id) {
      Swal.fire({
        title: `¿Deseas eliminar la categoría con ID ${id}?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar'
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            await axios.delete(`http://127.0.0.1:8000/api/categories/${id}`);
            Swal.fire('Eliminada', 'La categoría ha sido eliminada.', 'success');
            this.cargarCategorias();
          } catch (error) {
            console.error('Error al eliminar:', error);
            Swal.fire('Error', 'No se pudo eliminar la categoría.', 'error');
          }
        }
      });
    },
    editCategory(id) {
      this.$router.push({ name: 'EditarCategory', params: { id } });
    },
    newCategory() {
      this.$router.push({ name: 'NewCategory' });
    }
  },
  mounted() {
    this.cargarCategorias();
  }
}
</script>