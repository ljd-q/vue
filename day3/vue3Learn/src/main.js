import { createApp } from 'vue'
import App from './components/03.style/App.vue'
import Swiper from './components/Swiper.vue'
import Test from './components/Test.vue'
import './index.css'

const app=createApp(App)

app.component('my-swiper',Swiper)
app.component('my-test',Test)

app.mount('#app')

