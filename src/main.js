import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBank, faBuilding, faPencil, faPhone, faPlus, faTag, faTrash, faUser } from '@fortawesome/free-solid-svg-icons';
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

library.add(faUser, faPhone, faBuilding, faBank, faTag, faPencil, faPlus, faTrash);

createApp(App)
.component("font-awesome-icon", FontAwesomeIcon)
.use(router)
.mount('#app')