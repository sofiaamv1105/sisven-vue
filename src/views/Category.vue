<template>
  <div class="container mt-4">
    <h1>Categorías</h1>

    <table class="table table-hover">
      <thead class="table-primary">
        <tr>
          <th>#</th>
          <th>ID</th>
          <th>Nombre</th>
          <th>Descripción</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(category, index) in categories" :key="index">
          <th scope="row"> {{ index + 1 }}</th>
          <td>{{ category.id }}</td>
          <td>{{ category.name }}</td>
          <td>{{ category.description }}</td>
          <td>
            <button @click="deleteCategory(category.id)" class="btn btn-sm btn-outline-danger">
              <font-awesome-icon icon="trash" />
            </button>
            <button @click="editCategory(category.id)" class="btn btn-warning mx-2">
              <font-awesome-icon icon="pencil" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <button @click="newCategory" class="btn btn-primary">
      <font-awesome-icon icon="plus" /> Nueva categoría
    </button>
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
    deleteCategory(codigo) {
      Swal.fire({
        title: `¿Do you want to delete the category with ID ${codigo}?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Delete',
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete(`http://127.0.0.1:8000/api/categories/${codigo}`)
            .then(response => {
              if (response.data.success) {
                Swal.fire('Deleted!', 'The category has been deleted.', 'success');
                this.categories = this.categories.filter(c => c.id !== codigo); // Eliminar localmente
              }

            })
        }
      })
    },
    editCategory(id) {
      this.$router.push({ name: 'EditarCategory', params: { id: `${id}}` } })
    },
    newCategory() {
      this.$router.push({ name: 'NewCategory' })
    }
  },
  mounted() {
    axios
      .get('http://127.0.0.1:8000/api/categories')
      .then(response => (this.categories = response.data.categories))
  },
}
</script>