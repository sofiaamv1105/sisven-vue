<template>
<div class="container mt-4">
        <h1>Categorías</h1>

    <table class="table table-hover">
        <thead class="table-primary">
            <tr>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
                <tr v-for="(category, index) in categories" :key="index">
                    <td>{{ $category.name }}</td>
                    <td>{{ $category.description }}</td>
                </tr>
        </tbody>
    </table>
</div>
</template>

<script>
 import axios from 'axios';
 export default {
    name: 'Category',
    data() {
        return {
            categories: []
        }
    },
    mounted() {
        axios
            .get('http://127.0.0.1:8000/api/categories')
            .then(response =>
                (this.categories = response.data.categories))
        },
    }
</script>