let inventario = [
    {
        nombre: "Brocha",
        precio: 10,
        imagen: "./iconos/Copia de brocha.svg",
        cantidad: 0,
    },
    {
        nombre: "Llave",
        precio: 5,
        imagen: "./iconos/Copia de llave.svg",
        cantidad: 0,
    },
    {
        nombre: "Martillo",
        precio: 15,
        imagen: "./iconos/Copia de martillo.svg",
        cantidad: 0,
    },
    {
        nombre: "Tronco",
        precio: 3,
        imagen: "./iconos/Copia de tronco.svg",
        cantidad: 0,
    }
]

for (let i = 0 ; i < inventario.length ; i++) {
    document.getElementById("articulo").innerHTML +=
    `
    <h2>${inventario[i].nombre}</h2>
    <img src="${inventario[i].imagen}"/>
    <p>${inventario[i].precio} €</p>
    <button onclick="sumar(${i})">Añadir a la Cesta</button>
    <button onclick="restar(${i})">Restar de la Cesta</button>
    `;
}

function sumar(i) {
    inventario[i].cantidad += 1;
    cesta(i);
}

function restar(i) {
    if (inventario[i].cantidad>0) {
        inventario[i].cantidad -= 1;
        cesta(i);
    }
}

function cesta(i){
    document.getElementById("cesta").innerHTML =
    `
    <h2>CESTA</h2>
    <h3>${inventario[i].nombre}</h3>
    <p>Te llevas: ${inventario[i].cantidad}</p>
    `;
    for (let j = 0 ; j < inventario[i].cantidad ; j++) {
        document.getElementById("cesta").innerHTML +=
        `
        <img src="${inventario[i].imagen}"/>
        `
    }
}