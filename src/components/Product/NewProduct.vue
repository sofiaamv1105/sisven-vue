<template>
  <div class="container text-start mt-4">
    <h1 class="text-success fw-bold">Nuevo Producto</h1>
    <div class="card">
      <div class="card-header fw-bold">Formulario de Producto</div>
      <div class="card-body">
        <form @submit.prevent="saveProduct">
          <div class="row mb-3">
            <label for="name" class="form-label">Nombre:</label>
            <div class="input-group">
              <div class="input-group-text">
                <font-awesome-icon icon="font" />
              </div>
              <input type="text" class="form-control" id="name" placeholder="Nombre del producto" v-model="product.name" required />
            </div>
          </div>

          <div class="row mb-3">
            <label for="price" class="form-label">Precio:</label>
            <div class="input-group">
              <div class="input-group-text">
                <font-awesome-icon icon="dollar-sign" />
              </div>
              <input type="number" class="form-control" id="price" v-model="product.price" required />
            </div>
          </div>

          <div class="row mb-3">
            <label for="stock" class="form-label">Stock:</label>
            <div class="input-group">
              <div class="input-group-text">
                <font-awesome-icon icon="boxes" />
              </div>
              <input type="number" class="form-control" id="stock" v-model="product.stock" required />
            </div>
          </div>

          <div class="row mb-3">
            <label for="category" class="form-label">Categoría:</label>
            <div class="input-group">
              <div class="input-group-text">
                <font-awesome-icon icon="tags" />
              </div>
              <select class="form-control" v-model="product.category_id" required>
                <option disabled value="">Seleccione una categoría</option>
                <option v-for="cat in categories" :value="cat.id" :key="cat.id">{{ cat.name }}</option>
              </select>
            </div>
          </div>

          <button class="btn btn-success" type="submit">Guardar</button>
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
  name: 'NewProduct',
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
    async saveProduct() {
      try {
        const res = await axios.post('http://127.0.0.1:8000/api/products', this.product)
        Swal.fire('Guardado', 'Producto guardado correctamente', 'success')
        this.$router.push({ name: 'Products' })
      } catch (error) {
        console.error(error)
        Swal.fire('Error', 'No se pudo guardar el producto', 'error')
      }
    },
    cancel() {
      this.$router.push({ name: 'Products' })
    },
    async fetchCategories() {
      const res = await axios.get('http://127.0.0.1:8000/api/categories')
      this.categories = res.data.categories
    }
  },
  mounted() {
    this.fetchCategories()
  }
}
</script>