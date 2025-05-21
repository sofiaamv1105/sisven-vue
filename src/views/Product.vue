<template>
  <div class="container mt-4">
    <h1 class="text-primary fw-bold">Productos</h1>

    <table class="table table-hover">
      <thead class="table-primary">
        <tr>
          <th>#</th>
          <th>ID</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Stock</th>
          <th>Categoría</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" :key="product.id">
          <td>{{ index + 1 }}</td>
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>$ {{ product.price }}</td>
          <td>{{ product.stock }}</td>
          <td>{{ product.category_name }}</td>
          <td>
            <button @click="editProduct(product.id)" class="btn btn-warning btn-sm mx-1">
              <font-awesome-icon icon="pencil" />
            </button>
            <button @click="deleteProduct(product.id)" class="btn btn-outline-danger btn-sm mx-1">
              <font-awesome-icon icon="trash" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <button @click="newProduct" class="btn btn-success mt-3">
      <font-awesome-icon icon="plus" /> Nuevo producto
    </button>
  </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  name: 'Products',
  data() {
    return {
      products: []
    };
  },
  methods: {
    async getProducts() {
      const res = await axios.get('http://127.0.0.1:8000/api/products');
      this.products = res.data.products;
    },
    async deleteProduct(id) {
      Swal.fire({
        title: `¿Deseas eliminar el producto con ID ${id}?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar'
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await axios.delete(`http://127.0.0.1:8000/api/products/${id}`);
          if (res.data.success) {
            Swal.fire('Eliminado', 'Producto eliminado exitosamente', 'success');
            this.products = res.data.products;
          }
        }
      });
    },
    editProduct(id) {
      this.$router.push({ name: 'EditarProduct', params: { id } });
    },
    newProduct() {
      this.$router.push({ name: 'NewProduct' });
    }
  },
  mounted() {
    this.getProducts();
  }
}
</script>