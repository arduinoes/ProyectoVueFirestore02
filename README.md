# AGREGAR / addDoc y  ELIMINAR / deleteDoc

## Atención acuérdate de intalar los Módulos

Instala los modulos, vete a terminal, nuevo terminal y escribe:
```
npm install
```

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
