let sistemaSolar = [
    {
      nombre: "mercurio",
      color: "gris",
      fondo: "grey",
      temperatura: 350,
      imagen:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Mercury_in_color_-_Prockter07_centered.jpg/1024px-Mercury_in_color_-_Prockter07_centered.jpg",
    },
    {
      nombre: "venus",
      color: "blanco",
      fondo: "white",
      temperatura: 460,
      imagen:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Venus-real_color.jpg/220px-Venus-real_color.jpg",
    },
    {
      nombre: "tierra",
      color: "morado",
      fondo: "purple",
      temperatura: 14,
      imagen:
        "https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/5a0ab2a75bafe87f4d3f9a63/acaba-tiempo_0.jpg",
    },
    {
      nombre: "marte",
      color: "rojo",
      fondo: "red",
      temperatura: -46,
      imagen:
        "https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/55365b6b34099b0279c8fb2e/slide-marte.jpg",
    },
    {
      nombre: "jupiter",
      color: "marrón",
      fondo: "brown",
      temperatura: -121,
      imagen:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Jupiter_by_Cassini-Huygens.jpg/280px-Jupiter_by_Cassini-Huygens.jpg",
    },
    {
      nombre: "saturno",
      color: "amarillo",
      fondo: "yellow",
      temperatura: -130,
      imagen:
        "https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/558d2b15010e26221b57df75/saturno.jpg",
    },
    {
      nombre: "urano",
      color: "azul",
      fondo: "blue",
      temperatura: -205,
      imagen: "http://www.manzanares.es/v2/sites/paseo/img/urano/urano1.jpg",
    },
    {
      nombre: "neptuno",
      color: "azul",
      fondo: "blue",
      temperatura: -220,
      imagen:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Neptune_Full.jpg/280px-Neptune_Full.jpg",
    },
    {
      nombre: "plutón",
      color: "blanco",
      fondo: "white",
      temperatura: -229,
      imagen:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Nh-pluto-in-true-color_2x_JPEG.jpg/1200px-Nh-pluto-in-true-color_2x_JPEG.jpg",
    },
  ];

let name1 = prompt("Introduce el nombre de un planeta");
let planet1 = [];
let name2 = prompt("Introduce otr nombre de un planeta");
let planet2 = [];
let name3 = prompt("Introduce otro planeta");
let planet3 = [];
// valores existen
// valores no repetidos
// mostrar datos en divs
// boton en cada planeta cambiarColor(){document.geteleme....style.backgroundcolor=...${valor fondo}}

function mostrar1(){
  for(i=0;i<sistemaSolar.length;i++){
    name1===sistemaSolar[i].nombre?planet1.push(sistemaSolar[i].nombre,sistemaSolar[i].color,sistemaSolar[i].fondo,sistemaSolar[i].temperatura,sistemaSolar[i].imagen)
    console.log(planet1[i])
  }
}

/* document.getElementById("planetOne").innerHTML=`
<img src="${sistemaSolar[tierra]}">` */

//if(name1!==name2&&name1!==name3&&name2!==name3)

