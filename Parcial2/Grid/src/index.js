new gridjs.Grid({
    columns: ['IdEmpleado', 'Nombre', 'Apellido'],
    server: {
        url: 'http://localhost:2234/ConsultarEmpleado',
        then: data => data.map(empleado =>
            [empleado.IdEmpleado, empleado.nombre, empleado.apellido]
        )
    }
}).render(document.getElementById("wrapper"));