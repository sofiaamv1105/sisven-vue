<template>
  <div class="container text-start">
    <h1 class="text-primary fw-bold">Editar</h1>
    <div class="card">
      <div class="card-header fw-bold">Categoría</div>
      <div class="card-body">
        <form @submit.prevent="updateCategory">

          <!-- ID (solo lectura) -->
          <div class="row mb-3">
            <label for="id" class="form-label">ID</label>
            <div class="input-group">
              <div class="input-group-text">
                <font-awesome-icon icon="tag" />
              </div>
              <input
                type="text"
                class="form-control"
                id="id"
                v-model="category.id"
                disabled
              />
            </div>
          </div>

          <!-- Nombre -->
          <div class="row mb-3">
            <label for="name" class="form-label">Nombre</label>
            <div class="input-group">
              <div class="input-group-text">
                <font-awesome-icon icon="bookmark" />
              </div>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Nombre categoría"
                v-model="category.name"
              />
            </div>
          </div>

          <!-- Descripción -->
          <div class="row mb-3">
            <label for="description" class="form-label">Descripción</label>
            <div class="input-group">
              <div class="input-group-text">
                <font-awesome-icon icon="file-alt" />
              </div>
              <textarea
                class="form-control"
                id="description"
                placeholder="Descripción"
                v-model="category.description"
              ></textarea>
            </div>
          </div>

          <!-- Botones -->
          <button class="btn btn-primary" type="submit">Actualizar</button>
          <button class="btn btn-secondary mx-2" @click="cancelar">Cancelar</button>

        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
  name: 'EditarCategory',
  data() {
    return {
      category: {
        id: null,
        name: '',
        description: ''
      }
    }
  },
  methods: {
    cancelar() {
      this.$router.push({ name: 'Categories' }) // Asegúrate de tener esta ruta definida
    },
    async updateCategory() {
      try {
        const res = await axios.put(`http://127.0.0.1:8000/api/categories/${this.category.id}`, this.category)
        if (res.status === 200) {
          this.$router.push({ name: 'Categories' })
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Categoría actualizada',
            showConfirmButton: false,
            timer: 2000
          })
        }
      } catch (error) {
        console.error(error)
        Swal.fire('Error', 'No se pudo actualizar la categoría.', 'error')
      }
    }
  },
  mounted() {
    const id = this.$route.params.id
    axios.get(`http://127.0.0.1:8000/api/categories/${id}`)
      .then(response => {
        this.category = response.data.category
      })
      .catch(error => {
        console.error(error)
        Swal.fire('Error', 'No se pudo cargar la categoría.', 'error')
      })
  }
}
</script>