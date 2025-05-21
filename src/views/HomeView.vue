<template>
  <div class="bg-light" style="padding-top: 70px;">
    <div class="container py-5">
      <h1 class="text-center mb-5 text-primary">Panel Principal</h1>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        <!-- Categorías -->
        <div class="col">
          <div class="card h-100 card-hover border-primary">
            <div class="card-body text-center">
              <i class="bi bi-tags fs-1 text-primary"></i>
              <h5 class="card-title mt-3">Categorías</h5>
              <p class="card-text">Administrar categorías de productos.</p>
              <RouterLink to="/categories" class="btn btn-outline-primary">Ir</RouterLink>
            </div>
          </div>
        </div>
        <!-- Productos -->
        <div class="col">
          <div class="card h-100 card-hover border-primary">
            <div class="card-body text-center">
              <i class="bi bi-box fs-1 text-primary"></i>
              <h5 class="card-title mt-3">Productos</h5>
              <p class="card-text">Administrar productos en el inventario.</p>
              <RouterLink to="/products" class="btn btn-outline-primary">Ir</RouterLink>
            </div>
          </div>
      </div>
        <!-- Clientes -->
        <div class="col">
          <div class="card h-100 card-hover border-primary">
            <div class="card-body text-center">
              <i class="bi bi-person fs-1 text-primary"></i>
              <h5 class="card-title mt-3">Clientes</h5>
              <p class="card-text">Administrar información de clientes.</p>
              <RouterLink to="/customers" class="btn btn-outline-primary">Ir</RouterLink>
            </div>
          </div>
        </div>
        <!-- Metodos de Pago -->
        <div class="col">
          <div class="card h-100 card-hover border-primary">
            <div class="card-body text-center">
              <i class="bi bi-cart fs-1 text-primary"></i>
              <h5 class="card-title mt-3">Métodos de Pago</h5>
              <p class="card-text">Administrar métodos de pago.</p>
              <RouterLink to="/paymodes" class="btn btn-outline-primary">Ir</RouterLink>
            </div>
          </div>
        </div>
    </div>
  </div>
</div>
</template>

<style>
.card-hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}
</style>