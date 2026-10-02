// Asignación de eventos al cargar el DOM (Buena práctica)
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Lógica para desplegar menús principales
    const menuBtns = document.querySelectorAll('.menu-btn');
    menuBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const submenu = this.nextElementSibling;
            submenu.style.display = submenu.style.display === "block" ? "none" : "block";
        });
    });

    // 2. Lógica para cargar los ejercicios (Escucha los botones del submenú)
    const ejercicioBtns = document.querySelectorAll('.ejercicio-btn');
    ejercicioBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Lee el ID del ejercicio desde el atributo data-ejercicio
            const idEjercicio = this.getAttribute('data-ejercicio');
            cargarEjercicio(idEjercicio);
        });
    });
});

// Función central para inyectar el HTML limpio
function cargarEjercicio(id) {
    const area = document.getElementById('area-ejercicio');
    // Removemos la clase de bienvenida si existe
    area.classList.remove('bienvenida');
    
    let html = '';

    switch(id) {
        case 'exp1':
            html = `
                <h2 class="titulo-ejercicio">1.1 Suma de dos números</h2>
                <div class="controles">
                    <div class="grupo-input"><label>Número 1:</label><input type="number" id="n1"></div>
                    <div class="grupo-input"><label>Número 2:</label><input type="number" id="n2"></div>
                    <button class="btn-ejecutar" id="btn-accion">Ejecutar</button>
                </div>
                ${generarTabla(['Número 1', 'Número 2', 'Resultado'])}
            `;
            break;
        case 'exp2':
            html = `
                <h2 class="titulo-ejercicio">1.2 Área de un Cuadrado</h2>
                <div class="controles">
                    <div class="grupo-input"><label>Lado (cm):</label><input type="number" id="lado" min="0.1" step="0.1"></div>
                    <button class="btn-ejecutar" id="btn-accion">Calcular Área</button>
                </div>
                ${generarTabla(['Lado Ingresado', 'Área Calculada'])}
            `;
            break;
        case 'cond1':
            html = `
                <h2 class="titulo-ejercicio">2.1 Par o Impar</h2>
                <div class="controles">
                    <div class="grupo-input"><label>Número:</label><input type="number" id="num"></div>
                    <button class="btn-ejecutar" id="btn-accion">Evaluar</button>
                </div>
                ${generarTabla(['Número', 'Clasificación'])}
            `;
            break;
        case 'cond2':
            html = `
                <h2 class="titulo-ejercicio">2.2 Mayor o Menor de Edad</h2>
                <div class="controles">
                    <div class="grupo-input"><label>Edad:</label><input type="number" id="edad" min="0"></div>
                    <button class="btn-ejecutar" id="btn-accion">Verificar</button>
                </div>
                ${generarTabla(['Edad', 'Estado'])}
            `;
            break;
        case 'anid1':
            html = `
                <h2 class="titulo-ejercicio">3.1 Notas UNIESPINAL (Else If)</h2>
                <div class="controles">
                    <div class="grupo-input"><label>Nota (0.0 a 5.0):</label><input type="number" id="nota" step="0.1"></div>
                    <button class="btn-ejecutar" id="btn-accion">Evaluar</button>
                </div>
                ${generarTabla(['Nota', 'Desempeño Universitario'])}
            `;
            break;
        case 'anid2':
            html = `
                <h2 class="titulo-ejercicio">3.2 Perfil (If dentro de If)</h2>
                <div class="controles">
                    <div class="grupo-input"><label>Edad:</label><input type="number" id="perfil-edad" min="0"></div>
                    <div class="grupo-input">
                        <label>Ocupación:</label>
                        <select id="perfil-ocupacion">
                            <option value="estudia">Estudia</option>
                            <option value="trabaja">Trabaja</option>
                            <option value="ninguno">Ninguno</option>
                        </select>
                    </div>
                    <button class="btn-ejecutar" id="btn-accion">Analizar</button>
                </div>
                ${generarTabla(['Edad', 'Ocupación', 'Resultado del Análisis'])}
            `;
            break;
        case 'sw1':
            html = `
                <h2 class="titulo-ejercicio">4.1 Días de la Semana</h2>
                <div class="controles">
                    <div class="grupo-input"><label>Día (1-7):</label><input type="number" id="dia" min="1" max="7"></div>
                    <button class="btn-ejecutar" id="btn-accion">Buscar</button>
                </div>
                ${generarTabla(['Número Ingresado', 'Día Correspondiente'])}
            `;
            break;
        case 'sw2':
            html = `
                <h2 class="titulo-ejercicio">4.2 Calculadora Básica</h2>
                <div class="controles">
                    <div class="grupo-input"><label>N1:</label><input type="number" id="cn1" class="input-corto"></div>
                    <div class="grupo-input">
                        <label>Op:</label>
                        <select id="cop" class="select-corto">
                            <option value="+">+</option>
                            <option value="-">-</option>
                            <option value="*">*</option>
                            <option value="/">/</option>
                        </select>
                    </div>
                    <div class="grupo-input"><label>N2:</label><input type="number" id="cn2" class="input-corto"></div>
                    <button class="btn-ejecutar" id="btn-accion">Calcular</button>
                </div>
                ${generarTabla(['Operación Completa', 'Resultado'])}
            `;
            break;
        case 'ciclo1':
            html = `
                <h2 class="titulo-ejercicio">5.1 Sumatoria (Ciclo For)</h2>
                <p class="texto-centrado">Suma todos los números desde 1 hasta N.</p>
                <div class="controles">
                    <div class="grupo-input"><label>Límite (N):</label><input type="number" id="limite-for" min="1"></div>
                    <button class="btn-ejecutar" id="btn-accion">Calcular Sumatoria</button>
                </div>
                ${generarTabla(['Límite (N)', 'Sumatoria Total'])}
            `;
            break;
        case 'ciclo4':
            html = `
                <h2 class="titulo-ejercicio">5.2 Análisis de Edades (Ciclo For)</h2>
                <p class="texto-centrado">Ingresa la cantidad de estudiantes. El sistema pedirá la edad de cada uno.</p>
                <div class="controles">
                    <div class="grupo-input"><label>Cantidad Alumnos:</label><input type="number" id="num-estudiantes" min="1"></div>
                    <button class="btn-ejecutar" id="btn-accion">Ingresar Edades</button>
                </div>
                ${generarTabla(['Cantidad', 'Mayor Edad', 'Menor Edad', 'Promedio'])}
            `;
            break;
        case 'ciclo2':
            html = `
                <h2 class="titulo-ejercicio">5.3 Factorial (Ciclo While)</h2>
                <p class="texto-centrado">Multiplica 1 * 2 * ... * N.</p>
                <div class="controles">
                    <div class="grupo-input"><label>Número (N):</label><input type="number" id="num-while" min="0"></div>
                    <button class="btn-ejecutar" id="btn-accion">Calcular Factorial</button>
                </div>
                ${generarTabla(['Número (N)', 'Factorial Resultante'])}
            `;
            break;
        case 'ciclo3':
            html = `
                <h2 class="titulo-ejercicio">5.4 Conteo de Dígitos (Do While)</h2>
                <p class="texto-centrado">Cuenta cuántos dígitos tiene un número.</p>
                <div class="controles">
                    <div class="grupo-input"><label>Número:</label><input type="number" id="num-do"></div>
                    <button class="btn-ejecutar" id="btn-accion">Contar</button>
                </div>
                ${generarTabla(['Número Ingresado', 'Cantidad de Dígitos'])}
            `;
            break;
    }

    area.innerHTML = html;

    // ASIGNACIÓN DINÁMICA DE EVENTOS (Reemplazo del onclick)
    const btnAccion = document.getElementById('btn-accion');
    if (btnAccion) {
        switch(id) {
            case 'exp1': btnAccion.addEventListener('click', resolverExp1); break;
            case 'exp2': btnAccion.addEventListener('click', resolverExp2); break;
            case 'cond1': btnAccion.addEventListener('click', resolverCond1); break;
            case 'cond2': btnAccion.addEventListener('click', resolverCond2); break;
            case 'anid1': btnAccion.addEventListener('click', resolverAnid1); break;
            case 'anid2': btnAccion.addEventListener('click', resolverAnid2); break;
            case 'sw1': btnAccion.addEventListener('click', resolverSw1); break;
            case 'sw2': btnAccion.addEventListener('click', resolverSw2); break;
            case 'ciclo1': btnAccion.addEventListener('click', resolverCiclo1); break;
            case 'ciclo4': btnAccion.addEventListener('click', resolverCiclo4); break;
            case 'ciclo2': btnAccion.addEventListener('click', resolverCiclo2); break;
            case 'ciclo3': btnAccion.addEventListener('click', resolverCiclo3); break;
        }
    }
}

// Generador de estructura de tabla (HTML puramente semántico)
function generarTabla(cabeceras) {
    let ths = cabeceras.map(c => `<th>${c}</th>`).join('');
    return `
        <h3 class="titulo-resultados">Resultados</h3>
        <table class="tabla-historial">
            <thead><tr>${ths}</tr></thead>
            <tbody id="historial-body"></tbody>
        </table>
    `;
}

// Agrega una nueva fila al tbody manipulando el DOM
function agregarAHistorial(valoresArray) {
    const tbody = document.getElementById('historial-body');
    const tr = document.createElement('tr');
    valoresArray.forEach(val => {
        const td = document.createElement('td');
        td.textContent = val;
        tr.appendChild(td);
    });
    tbody.appendChild(tr); 
}

// Función auxiliar para vaciar los inputs
function limpiarCampos(...ids) {
    ids.forEach(id => {
        const elemento = document.getElementById(id);
        if(elemento) elemento.value = '';
    });
}

// ================= FUNCIONES RESOLUTORAS =================

function resolverExp1() {
    let val1 = document.getElementById('n1').value;
    let val2 = document.getElementById('n2').value;
    
    if(val1 === '' || val2 === '') {
        alert("Atención: Por favor complete ambos campos para realizar la suma.");
        limpiarCampos('n1', 'n2');
        return;
    }
    let n1 = parseFloat(val1);
    let n2 = parseFloat(val2);
    agregarAHistorial([n1, n2, n1 + n2]);
    limpiarCampos('n1', 'n2');
}

function resolverExp2() {
    let val = document.getElementById('lado').value;
    if(val === '' || parseFloat(val) <= 0) {
        alert("Atención: El lado debe ser un número válido mayor a cero.");
        limpiarCampos('lado');
        return;
    }
    let lado = parseFloat(val);
    agregarAHistorial([lado, lado * lado]);
    limpiarCampos('lado');
}

function resolverCond1() {
    let val = document.getElementById('num').value;
    if(val === '') {
        alert("Atención: Ingrese un número para evaluar.");
        limpiarCampos('num');
        return;
    }
    let num = parseInt(val);
    let res = (num % 2 === 0) ? 'Par' : 'Impar';
    agregarAHistorial([num, res]);
    limpiarCampos('num');
}

function resolverCond2() {
    let val = document.getElementById('edad').value;
    if(val === '' || parseInt(val) < 0) {
        alert("Atención: Por favor ingrese una edad válida (no negativa).");
        limpiarCampos('edad');
        return;
    }
    let edad = parseInt(val);
    let res = (edad >= 18) ? 'Mayor de edad' : 'Menor de edad';
    agregarAHistorial([edad, res]);
    limpiarCampos('edad');
}

function resolverAnid1() {
    let val = document.getElementById('nota').value;
    if(val === '') {
        alert("Atención: El campo de la nota no puede estar vacío.");
        limpiarCampos('nota');
        return;
    }
    let nota = parseFloat(val);
    if (nota < 0.0 || nota > 5.0) {
        alert("Recuerde: El rango válido de notas en la universidad es entre 0.0 y 5.0.");
        limpiarCampos('nota');
        return;
    }
    let mensaje = "";
    if (nota < 3.0) mensaje = "Desempeño Bajo (Reprobado)";
    else if (nota < 4.0) mensaje = "Desempeño Medio (Aprobado)";
    else if (nota < 4.5) mensaje = "Desempeño Alto (Aprobado)";
    else mensaje = "Desempeño Superior (Aprobado)";
    agregarAHistorial([nota, mensaje]);
    limpiarCampos('nota');
}

function resolverAnid2() {
    let valEdad = document.getElementById('perfil-edad').value;
    let ocupacion = document.getElementById('perfil-ocupacion').value;
    if(valEdad === '' || parseInt(valEdad) < 0) {
        alert("Atención: Por favor ingrese una edad válida.");
        limpiarCampos('perfil-edad');
        return;
    }
    let edad = parseInt(valEdad);
    let mensaje = "";
    if (edad >= 18) {
        if (ocupacion === 'trabaja') mensaje = "Es un adulto económicamente activo.";
        else if (ocupacion === 'estudia') mensaje = "Es un adulto en formación académica.";
        else mensaje = "Adulto sin ocupación definida.";
    } else {
        mensaje = "Es menor de edad, su prioridad principal es estudiar.";
    }
    agregarAHistorial([edad, ocupacion.toUpperCase(), mensaje]);
    limpiarCampos('perfil-edad'); 
}

function resolverSw1() {
    let val = document.getElementById('dia').value;
    if(val === '') {
        alert("Atención: Debe ingresar un número.");
        limpiarCampos('dia');
        return;
    }
    let dia = parseInt(val);
    if(dia < 1 || dia > 7) {
        alert("Error: El número ingresado no corresponde a un día de la semana. Ingrese un valor entre 1 y 7.");
        limpiarCampos('dia');
        return;
    }
    let nombre = "";
    switch(dia) {
        case 1: nombre = "Lunes"; break;
        case 2: nombre = "Martes"; break;
        case 3: nombre = "Miércoles"; break;
        case 4: nombre = "Jueves"; break;
        case 5: nombre = "Viernes"; break;
        case 6: nombre = "Sábado"; break;
        case 7: nombre = "Domingo"; break;
    }
    agregarAHistorial([dia, nombre]);
    limpiarCampos('dia');
}

function resolverSw2() {
    let val1 = document.getElementById('cn1').value;
    let val2 = document.getElementById('cn2').value;
    if(val1 === '' || val2 === '') {
        alert("Atención: Ingrese ambos números para realizar el cálculo.");
        limpiarCampos('cn1', 'cn2');
        return;
    }
    let n1 = parseFloat(val1);
    let n2 = parseFloat(val2);
    let op = document.getElementById('cop').value;
    if (op === '/' && n2 === 0) {
        alert("Error matemático: No se puede dividir por cero. Ingrese otro valor.");
        limpiarCampos('cn2'); 
        return;
    }
    let res = 0;
    switch(op) {
        case '+': res = n1 + n2; break;
        case '-': res = n1 - n2; break;
        case '*': res = n1 * n2; break;
        case '/': res = n1 / n2; break;
    }
    agregarAHistorial([`${n1} ${op} ${n2}`, res]);
    limpiarCampos('cn1', 'cn2');
}

function resolverCiclo1() {
    let val = document.getElementById('limite-for').value;
    if(val === '' || parseInt(val) < 1) {
        alert("Atención: El límite debe ser un número entero mayor o igual a 1.");
        limpiarCampos('limite-for');
        return;
    }
    let lim = parseInt(val);
    let suma = 0;
    for(let i = 1; i <= lim; i++) {
        suma += i;
    }
    agregarAHistorial([lim, suma]);
    limpiarCampos('limite-for');
}

function resolverCiclo4() {
    let val = document.getElementById('num-estudiantes').value;
    if(val === '' || parseInt(val) < 1) {
        alert("Atención: Ingrese una cantidad válida de estudiantes (mayor a 0).");
        limpiarCampos('num-estudiantes');
        return;
    }
    let n = parseInt(val);
    let suma = 0;
    let mayor = -Infinity; 
    let menor = Infinity;  

    for (let i = 1; i <= n; i++) {
        let edadStr = prompt(`Estudiante ${i} de ${n}\nIngrese la edad del estudiante:`);
        if(edadStr === null || edadStr.trim() === '') {
            alert("Operación cancelada. Faltaron edades por ingresar.");
            limpiarCampos('num-estudiantes');
            return;
        }
        let edad = parseInt(edadStr);
        if(isNaN(edad) || edad < 0) {
            alert("Edad no válida ingresada. Se cancelará el proceso.");
            limpiarCampos('num-estudiantes');
            return;
        }
        suma += edad;
        if (edad > mayor) mayor = edad;
        if (edad < menor) menor = edad;
    }
    let promedio = suma / n;
    agregarAHistorial([n, mayor, menor, promedio.toFixed(1)]);
    limpiarCampos('num-estudiantes');
}

function resolverCiclo2() {
    let val = document.getElementById('num-while').value;
    if(val === '' || parseInt(val) < 0) {
        alert("Atención: No se puede calcular el factorial de un número negativo o vacío.");
        limpiarCampos('num-while');
        return;
    }
    let num = parseInt(val);
    let factorial = 1;
    let i = 1;
    while(i <= num) {
        factorial *= i;
        i++;
    }
    agregarAHistorial([num, factorial]);
    limpiarCampos('num-while');
}

function resolverCiclo3() {
    let val = document.getElementById('num-do').value;
    if(val === '') {
        alert("Atención: Ingrese un número para contar sus dígitos.");
        limpiarCampos('num-do');
        return;
    }
    let num = parseInt(val);
    let temp = Math.abs(num);
    let digitos = 0;
    do {
        digitos++;
        temp = Math.floor(temp / 10);
    } while (temp > 0);
    agregarAHistorial([num, digitos]);
    limpiarCampos('num-do');
}