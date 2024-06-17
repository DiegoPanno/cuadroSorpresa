document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    // Ajustar el tamaño del canvas al tamaño del contenedor
    const container = canvas.parentElement;
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;

    // Rellenar el canvas con un color sólido (puede ser cualquier color)
    const colorCubierta = '#000'; // Cambia este valor al color que desees
    ctx.fillStyle = colorCubierta;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Agregar eventos de mouse y touch para borrar
    canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        borrarEnCanvas(x, y);
    });

    canvas.addEventListener('touchmove', (e) => {
        const rect = canvas.getBoundingClientRect();
        const touch = e.touches[0];
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;
        borrarEnCanvas(x, y);
    });

    function borrarEnCanvas(x, y) {
        // Crear un "borrador" redondo
        const tamañoBorrador = 120;
        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath();
        ctx.arc(x, y, tamañoBorrador / 2, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.globalCompositeOperation = 'source-over';
    }
});
