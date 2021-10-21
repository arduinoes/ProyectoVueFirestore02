# AGREGAR / addDoc y  ELIMINAR / deleteDoc

## Atención acuérdate de intalar los Módulos

## ADD / AGREGAR DATOS / FIRESTORE

### TEMPLATE / Formulario

Bootstrap Formularios [input group](https://getbootstrap.com/docs/5.1/forms/input-group/)

Bootstrap Botones [buttons](https://getbootstrap.com/docs/5.1/components/buttons/)

Vue.js [v-model](https://es.vuejs.org/v2/guide/components-custom-events.html#Personalizacion-de-componente-v-model)

Vue.js [@click](https://es.vuejs.org/v2/guide/syntax.html)

Vue.js [v-bind](https://es.vuejs.org/v2/guide/syntax.html)

```html
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
```
### SCRIPT / Formulario

```js
// Importar addDoc
import { collection, 
          getDocs,
          // Añadimos addDoc 
          addDoc } from 'firebase/firestore/lite';

// Añadir en data de v-model
usuario: {
      nombre: '',
      correo: ''
    }
// Añadir en methods
// ADD / AGREGAR / AÑADIR
async agregarDato(){
  const docRef = await addDoc(collection(db, "usuarios"), {
    nombre: this.usuario.nombre,
    correo: this.usuario.correo
  })
    .then(() => {
      console.log("Documento añadido");
    })
    .catch(function(error) {
      console.error("Error al añadir el documento: ", error);
    });
},
```

## DELETE / ELIMINAR / FIRESTORE

### TEMPLATE / Tabla

Añadiendo el botón **Eliminar**

```html
// Añado thead dos columnas: ID y Eliminar
<th scope="col">ID</th>
<th scope="col">Eliminar</th>

// Añado en tbody dos columnas: ID y botón Eliminar
<td>{{item.id}}</td>
<td>
  <button @click.prevent="eliminarDato(item.id)" 
    class="btn btn-danger">Eliminar
  </button>
</td>
```
### SCRIPT / Tabla

```js
import { collection, 
        getDocs, 
        addDoc,
        // Añadimos deleteDoc y doc
        deleteDoc, 
        doc 
        } from 'firebase/firestore/lite';
// DELETE / ELIMINAR / BORRAR
    async eliminarDato (id){
      await deleteDoc(doc(db, "usuarios", id ));
    },
```

## ROUTER GO / ACTUALIZANDO LOS DATOS

Añade router.go a: agregarDato() y eliminarDato()

```js
// Importa el router
import router from '../router/index'
// Añade en la función
router.go('/')
```
