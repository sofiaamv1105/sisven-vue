<template>
  <div class="container text-start">
    <h1 class="text-primary fw-bold">Nueva Categoría</h1>
    <div class="card">
      <div class="card-header fw-bold">Formulario de Categoría</div>
      <div class="card-body">
        <form @submit.prevent="saveCategory">

          <!-- ID (deshabilitado) -->
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
                placeholder="ID categoría"
                v-model="category.id"
                disabled
              />
            </div>
          </div>

          <!-- Nombre -->
          <div class="row mb-3">
            <label for="name" class="form-label">Nombre:</label>
            <div class="input-group">
              <div class="input-group-text">
                <font-awesome-icon icon="font" />
              </div>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Nombre de la categoría"
                v-model="category.name"
                required
              />
            </div>
          </div>

          <!-- Descripción -->
          <div class="row mb-3">
            <label for="description" class="form-label">Descripción:</label>
            <div class="input-group">
              <div class="input-group-text">
                <font-awesome-icon icon="align-left" />
              </div>
              <textarea
                class="form-control"
                id="description"
                placeholder="Descripción de la categoría"
                v-model="category.description"
              ></textarea>
            </div>
          </div>

          <!-- Botones -->
          <button class="btn btn-primary" type="submit">Guardar</button>
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
  name: 'NewCategory',
  data() {
    return {
      category: {
        id: 0,
        name: '',
        description: ''
      }
    }
  },
  methods: {
    cancel() {
      this.$router.push({ name: 'Categories' }) // Asegúrate que la ruta se llama así
    },
    async saveCategory() {
      try {
        const res = await axios.post('http://127.0.0.1:8000/api/categories', this.category)

        if (res.status === 200 || res.status === 201) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Categoría guardada exitosamente',
            showConfirmButton: false,
            timer: 2000
          })
          this.$router.replace({ path: '/categories' })
        }
      } catch (error) {
        console.error('Error al guardar la categoría:', error)
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se pudo guardar la categoría.'
        })
      }
    }
  }
}
</script>