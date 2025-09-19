function carregarAulasHoje() {
    const tbody = document.getElementById('aulas-hoje-body');
    tbody.innerHTML = ''; // Limpa a tabela

    const hoje = new Date().toISOString().split('T')[0]; // yyyy-mm-dd

    const aulas = JSON.parse(localStorage.getItem('aulas')) || [];

    aulas
        .filter(a => a.data === hoje) // só aulas do dia
        .forEach(aula => {
            const tr = document.createElement('tr');

            tr.innerHTML = `
                <td>${aula.inicio} - ${aula.fim}</td>
                <td>${aula.sala}</td>
                <td>${aula.curso}</td>
                <td>${aula.professor}</td>
            `;

            tbody.appendChild(tr);
        });
}

// Atualiza data
document.getElementById('data-hoje').textContent = new Date().toLocaleDateString('pt-BR');

// Carrega as aulas
carregarAulasHoje();
