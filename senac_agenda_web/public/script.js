// Este arquivo será usado para fazer as requisições AJAX para o seu backend Java
// e preencher a tabela dinamicamente.

document.addEventListener('DOMContentLoaded', () => {
    // Exemplo de como você faria uma requisição (isso será seu próximo passo)
    // fetch('/api/aulas/hoje')
    //     .then(response => response.json())
    //     .then(data => {
    //         const tbody = document.getElementById('aulas-hoje-body');
    //         tbody.innerHTML = ''; // Limpa o conteúdo existente (os exemplos estáticos)
    //         data.forEach(aula => {
    //             const row = tbody.insertRow();
    //             row.insertCell().textContent = aula.horario;
    //             row.insertCell().textContent = aula.sala;
    //             row.insertCell().textContent = aula.curso;
    //             row.insertCell().textContent = aula.professor;
    //         });
    //     })
    //     .catch(error => console.error('Erro ao carregar aulas:', error));

    // Lógica para filtros (será implementada aqui)
    const filterSala = document.getElementById('filter-sala');
    const filterProfessor = document.getElementById('filter-professor');

    filterSala.addEventListener('change', filterAulas);
    filterProfessor.addEventListener('change', filterAulas);

    function filterAulas() {
        const selectedSala = filterSala.value;
        const selectedProfessor = filterProfessor.value;
        const rows = document.querySelectorAll('#aulas-hoje-body tr');

        rows.forEach(row => {
            const sala = row.cells[1].textContent;
            const professor = row.cells[3].textContent;

            const matchesSala = selectedSala === "" || sala === selectedSala;
            const matchesProfessor = selectedProfessor === "" || professor === selectedProfessor;

            if (matchesSala && matchesProfessor) {
                row.style.display = ''; // Mostra a linha
            } else {
                row.style.display = 'none'; // Esconde a linha
            }
        });
    }

    // Inicializa o filtro para exibir tudo
    filterAulas();
});