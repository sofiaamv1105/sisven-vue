<template>
  <div class="container text-start mt-4">
    <h1 class="text-warning fw-bold">Editar Producto</h1>
    <div class="card">
      <div class="card-header fw-bold">Formulario de Edición</div>
      <div class="card-body">
        <form @submit.prevent="updateProduct">
          <div class="row mb-3">
            <label for="name" class="form-label">Nombre:</label>
            <div class="input-group">
              <div class="input-group-text"><font-awesome-icon icon="font" /></div>
              <input type="text" class="form-control" id="name" v-model="product.name" required />
            </div>
          </div>

          <div class="row mb-3">
            <label for="price" class="form-label">Precio:</label>
            <div class="input-group">
              <div class="input-group-text"><font-awesome-icon icon="dollar-sign" /></div>
              <input type="number" class="form-control" id="price" v-model="product.price" required />
            </div>
          </div>

          <div class="row mb-3">
            <label for="stock" class="form-label">Stock:</label>
            <div class="input-group">
              <div class="input-group-text"><font-awesome-icon icon="boxes" /></div>
              <input type="number" class="form-control" id="stock" v-model="product.stock" required />
            </div>
          </div>

          <div class="row mb-3">
            <label for="category" class="form-label">Categoría:</label>
            <div class="input-group">
              <div class="input-group-text"><font-awesome-icon icon="tags" /></div>
              <select class="form-control" v-model="product.category_id" required>
                <option disabled value="">Seleccione una categoría</option>
                <option v-for="cat in categories" :value="cat.id" :key="cat.id">{{ cat.name }}</option>
              </select>
            </div>
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
  name: 'EditarProduct',
  data() {
    return {
      product: {
        name: '',
        price: '',
        stock: '',
        category_id: ''
      },
      categories: []
    }
  },
  methods: {
    async fetchProduct() {
      const res = await axios.get(`http://127.0.0.1:8000/api/products/${this.$route.params.id}`)
      this.product = res.data.product
    },
    async fetchCategories() {
      const res = await axios.get('http://127.0.0.1:8000/api/categories')
      this.categories = res.data.categories
    },
    async updateProduct() {
      try {
        await axios.put(`http://127.0.0.1:8000/api/products/${this.$route.params.id}`, this.product)
        Swal.fire('Actualizado', 'Producto actualizado correctamente', 'success')
        this.$router.push({ name: 'Products' })
      } catch (error) {
        console.error(error)
        Swal.fire('Error', 'No se pudo actualizar el producto', 'error')
      }
    },
    cancel() {
      this.$router.push({ name: 'Products' })
    }
  },
  mounted() {
    this.fetchProduct()
    this.fetchCategories()
  }
}
</script>