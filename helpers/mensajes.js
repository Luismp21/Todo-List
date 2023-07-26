import pkg from "colors"; 


const mostrarMenu = () => {
    console.clear();
    console.log('==================================='.green);
    console.log('       Seleccione una opción       '.green);
    console.log('===================================\n'.green);

    console.log(`${'1.'.green} Crear tarea`);
    console.log(`${'2.'.green} Listar tareas`);
    console.log(`${'3.'.green} Listar tareas completadas`);
    console.log(`${'4.'.green} Listar tareas pendientes`);
    console.log(`${'5.'.green} Completar tarea(s)`);
    console.log(`${'6.'.green} Borrar tarea`);
    console.log(`${'0.'.green} Salir \n`);

    let rl = readline.createInterface(
        process.stdin,
        process.stdout
    );

    rl.question(' Seleccione una opción  :', (opt) => {
        console.log({opt});
        rl.close()
    });

}



export{
    mostrarMenu
}