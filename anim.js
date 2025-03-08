// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Tan bonita", time: 12 },
  { text: "Que le da celos al cielo", time: 15 },
  { text: "Le va bien lo que se ponga", time: 18 },
  { text: "Y no arregla su cabello", time: 21 },
  { text: "La critican", time: 24 },
  { text: "Porque odia usar tacones", time: 27 },
  { text: "No le gusta ir a fiestas", time: 31 },
  { text: "Y lee libros por deporte", time: 34 },
  { text: "Quiero que aparezca", time: 38 },
  { text: "Y presumirla a mis amigos como la primera", time: 43 },
  { text: "Que me robó el corazón", time: 48 },
  { text: "Déjame explicarte", time: 56 },
  { text: "Que te quiero", time: 61 },
  { text: "Y no te conozco, no te tengo", time: 64 },
  { text: "Déjame contarte", time: 68 },
  { text: "Que te sueño", time: 73 },
  { text: "La mujer perfecta para mí, yeah", time: 77 },
  { text: "Me regala", time: 92 },
  { text: "Discos y sonrisas", time: 96 },
  { text: "No me hace esperarla", time: 98 },
  { text: "Y no elige mis camisas", time: 102 },
  { text: "Quiero que aparezca", time: 106 },
  { text: "Y presumirla a mis amigos como la primera", time: 111 },
  { text: "Que me robó el corazón", time: 116 },
  { text: "Déjame explicarte", time: 124 },
  { text: "Que te quiero", time: 129 },
  { text: "Y no te conozco, no te tengo", time: 132 },
  { text: "Dejame contarte", time: 136 },
  { text: "Que te sueño", time: 141 },
  { text: "La mujer perfecta para mí, yeah", time: 145 },
  { text: "Déjame explicarte", time: 173 },
  { text: "Que te quiero", time: 178 },
  { text: "Y no te conozco, no te tengo", time: 182 },
  { text: "Dejame contarte", time: 186 },
  { text: "Que te sueño", time: 191 },
  { text: "La mujer perfecta para mí, yeah", time: 195 },
  { text: "No es mucho, pero quiero que sepas...", time: 198 },
  { text: "Que te amo y siempre te amaré", time: 201 },
  { text: "Feliz día de la mujer mi amorcito <3.", time: 203 },
];

// Índice para recorrer lyricsData en orden
var currentIndex = 0;

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime); // Obtener el tiempo exacto del audio

  // Si hay una línea pendiente y su tiempo coincide con el actual
  if (currentIndex < lyricsData.length && time === lyricsData[currentIndex].time) {
    lyrics.innerHTML = lyricsData[currentIndex].text;
    lyrics.style.opacity = 1; // Mostrar la letra inmediatamente

    // Avanzar al siguiente texto en el arreglo
    currentIndex++;
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);