<template>
  <div class="container">
    <Navbar/>
<!-- ////////// tabla ////////// -->
  <table class="table">
    <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">Nombre</th>
        <th scope="col">Correo</th>
        <th scope="col">Eliminar</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in usuarios" :key="index">
        <th scope="row">{{index}}</th>
        <td>{{item.nombre}}</td>
        <td>{{item.correo}}</td> 
        <td>
        <button @click.prevent="eliminarDato(item.id)" 
          class="btn btn-danger">Eliminar
        </button>
      </td>
      </tr>
    </tbody>
  </table>
  </div>
  <!-- ////////// formulario Añadir ////////// -->
    <!-- Nombre -->
  <div class="container my-4">
  <form>  
    <div class="input-group mb-3">
    <span class="input-group-text">Nombre</span>
    <input v-model="usuario.nombre" type="text" class="form-control">
    </div>
    <!-- Correo -->
    <div class="input-group mb-3">
    <span class="input-group-text">Correo</span>
    <input v-model="usuario.correo" type="text" class="form-control">
    </div>
    <!-- Botone Guardar -->
    <div class="mt-3">  
    <button @click.prevent="agregarDato()" 
            class="btn btn-primary">Guardar
    </button>
    </div>
  </form>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore/lite';
import { db } from "../main";
import router from '../router/index'

export default {
  name: 'Home',
  components: {
    Navbar
  },
  data() {
    return {
      usuarios: [],
      usuario: {
      nombre: '',
      correo: ''
    }
    }
  },
  methods: {
    async obtenerDatos () { 
      const querySnapshot = await getDocs(collection(db, "usuarios"));
        querySnapshot.forEach((doc) => {
        let usuario = doc.data()
        usuario.id = doc.id
        this.usuarios.push(usuario)
        console.log(usuario)
      });
    },
    async agregarDato(){
      const docRef = await addDoc(collection(db, "usuarios"), {
        nombre: this.usuario.nombre,
        correo: this.usuario.correo
      })
        .then(() => {
          router.go('/')
          console.log("Documento añadido");
        })
        .catch(function(error) {
          console.error("Error al añadir el documento: ", error);
        });
    },
    // DELETE / ELIMINAR / BORRAR
    async eliminarDato (id){
      await deleteDoc(doc(db, "usuarios", id ));
      router.go('/')
    },
  },
  mounted() {
    this.obtenerDatos();
  },
}
</script>
