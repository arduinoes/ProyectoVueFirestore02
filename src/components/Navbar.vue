<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Consola</a>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search">
          <button class="btn btn-outline-success me-2" type="submit">Buscar</button>
        </form>
          <button type="button" class="btn btn-outline-primary me-2" 
                data-bs-toggle="modal" 
                data-bs-target="#login">
                Iniciar sesión
          </button>  
          <button class="btn btn-outline-danger me-2" 
            data-bs-toggle="modal" 
            data-bs-target="#login"
            @click="signout">Cerrar sesión</button>
          <button type="button" 
                  class="btn btn-outline-primary" 
                  data-bs-toggle="modal" 
                  data-bs-target="#registro">
                  Regístrate
          </button> 
        </div>
    </div>
  </nav>

<!-- Modal Iniciar sesión -->
<div class="modal fade" id="login" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Inicia de sesión</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="login( this.email, this.password )">  
            <div class="input-group mb-3">
            <span class="input-group-text">Correo</span>
            <input v-model="email" 
                    type="email"
                    required="true"
                    class="form-control">
            </div>
            <!-- Familia -->
            <div class="input-group mb-3">
            <span class="input-group-text">Password</span>
            <input v-model="password" 
                    type="password"
                    required="true" 
                    class="form-control">
            </div>
                <button type="submit" class="btn btn-primary">Registrar
            </button>
          </form>
      </div>
    </div>
  </div>
</div>
<!-- ///////////// registro //////////////-->
<div class="modal fade" id="registro" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Regístrate</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="register( this.email, this.password )">  
          <div class="input-group mb-3">
          <span class="input-group-text">Correo</span>
          <input v-model="email" 
                  type="email"
                  required="true"
                  class="form-control">
          </div>
          <!-- Familia -->
          <div class="input-group mb-3">
          <span class="input-group-text">Password</span>
          <input v-model="password" 
                  type="password"
                  required="true" 
                  class="form-control">
          </div>
          <!-- Descripción -->
          <div class="input-group mb-3">
          <span class="input-group-text">Repite Password</span>
          <input v-model="repassword" 
                  type="password"
                  required="true" 
                  class="form-control">
          </div>
          <button type="submit" :disabled="!desactivar" class="btn btn-primary">Registrar
          </button>
        </form>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { 
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
  } from "firebase/auth";

import { auth } from "../main";

export default {
  name: 'Navbar',
   data() {
        return {
            email: '',
            password: '',
            repassword: '',
            errorMessage: ''
        };
    },
   methods: {
     register(email, password) {
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                alert('¡Registrado!');
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                this.errorMessage = error.message;
                alert(this.errorMessage);
                // ..
            });
        },        
     login( email, password ) {
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                alert('¡Sesión iniciada!');
                // Signed in
                const user = userCredential.user;
                this.$router.push('/');
                // ...
                })
            .catch((error) => {
            const errorCode = error.code;
            this.errorMessage = error.message;
            alert(this.errorMessage);
            });
        },
     signout () {
      signOut(auth).then(() => {
        alert('¡Sesión cerrada! Inicia sesión.');
        //this.$router.push('/login');
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
     }
   },
    computed: {
    desactivar(){
        return this.password === this.repassword
    }
    }
}
</script>
