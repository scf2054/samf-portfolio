import './assets/styles/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import * as icons from '@fortawesome/free-solid-svg-icons';
import SidebarVue from './components/Sidebar.vue';

library.add(
  icons.faUser,
  icons.faSchool,
  icons.faBriefcase,
  icons.faComputer,
  icons.faHandshake,
  icons.faBars
);

const app = createApp(App)

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)


app.mount('#app')