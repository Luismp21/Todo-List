import { Tarea } from "./tarea.js";

class Tareas {
  _listado = {};

  constructor() {
    this._listado = {};
  }

  cargarTareasFromArray(tareas = []) {
    tareas.forEach((tarea) => {
      this._listado[tarea.id] = tarea;
    });
  }

  crearTarea(desc = "") {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }

  listadoCompletado() {
    console.log();
    this.listadoArr.forEach((tarea, indice) => {
      let index = `${indice + 1}.`.green;
      const { desc, completadoEn } = tarea;
      console.log(
        `${index} ${desc} :: ${
          completadoEn != null ? "Completada".green : "Pendiente".red
        } `
      );
    });
  }

  listarPendientesCompletadas(completas = true) {
    console.log();
    this.listadoArr.forEach((tarea) => {
      let index = 0;
      const { desc, completadoEn } = tarea;
      if (completas) {
        if (completadoEn) {
          index += 1;
          console.log(
            `${index.toString().green} ${desc} :: ${
              completadoEn ? "Completada".green : ""
            } `
          );
        }
      } else {
        if (!completadoEn) {
          index += 1;
          console.log(
            `${index.toString().green} ${desc} :: ${
              !completadoEn ? "Pendiente".red : ""
            } `
          );
        }
      }
    });
  }

  borrarTarea(id = "") {
    if (this._listado[id]) {
      delete this._listado[id];
    }
  }

  toggleCompletadas(ids = []){

    ids.forEach(id => {
      const tarea = this._listado[id];
      if(!tarea.completadoEn){
        tarea.completadoEn = new Date().toISOString();
      }
    });

    this.listadoArr.forEach( tarea => {
      if(!ids.includes(tarea.id)){
        const desmarcarTarea = this._listado[tarea.id];
        desmarcarTarea.completadoEn = null;
      }
    })
  }

  get listadoArr() {
    const listado = [];
    Object.keys(this._listado).forEach((keys) => {
      const tarea = this._listado[keys];
      listado.push(tarea);
    });
    return listado;
  }
}



export { Tareas };
