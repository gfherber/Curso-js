const formNovaAula = document.getElementById('form-nova-aula');
const tbodyFuncionario = document.getElementById('aulas-funcionario-body');

formNovaAula.addEventListener('submit', function(e) {
    e.preventDefault();

    const horario = document.getElementById('input-horario').value;
    const sala = document.getElementById('input-sala').value;
    const curso = document.getElementById('input-curso').value;
    const professor = document.getElementById('input-professor').value;

    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${horario}</td>
        <td>${sala}</td>
        <td>${curso}</td>
        <td>${professor}</td>
    `;

    tbodyFuncionario.appendChild(tr);

    formNovaAula.reset();
});
