document.addEventListener('DOMContentLoaded', () => {
    const formTarea = document.getElementById('form-tarea');
    const tareasContainer = document.getElementById('tareas-container');

    formTarea.addEventListener('submit', (event) => {
        event.preventDefault(); 

    
        if (!formTarea.checkValidity()) {
            alert('Por favor, completa todos los campos obligatorios.');
            return; 
        }

        const nombre = document.getElementById('nombreTarea').value;
        const fecha = document.getElementById('fechaEntrega').value;
        const descripcion = document.getElementById('descripcion').value;
        const tipo = document.getElementById('tipo').value;
        const prioridad = document.querySelector('input[name="prioridad"]:checked').value;

        const nuevaTarea = {
            nombre: nombre,
            fechaEntrega: fecha,
            descripcion: descripcion,
            tipo: tipo,
            prioridad: prioridad
        };

       
        const tareaCard = document.createElement('div'); 
        tareaCard.classList.add('tarea-card'); 

        tareaCard.innerHTML = `
            <h3>${nuevaTarea.nombre}</h3>
            <p><strong>Fecha de Entrega:</strong> ${nuevaTarea.fechaEntrega}</p>
            <p><strong>Tipo:</strong> ${nuevaTarea.tipo || 'No especificado'}</p>
            <p><strong>Prioridad:</strong> ${nuevaTarea.prioridad}</p>
            <p><strong>Descripción:</strong> ${nuevaTarea.descripcion || 'Sin descripción'}</p>
        `;

        tareasContainer.appendChild(tareaCard); 
        formTarea.reset();
        document.getElementById('tipo').value = '';
    });
});