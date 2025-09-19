document.addEventListener('DOMContentLoaded', function() {
    // Carrega a view inicial (Dashboard)
    showView('dashboard');
});

// Simulação de banco de dados / dados da API
const MOCK_DATA = {
    stats: {
        aulasHoje: 23,
        salasOcupadas: 8,
        professoresAtivos: 12,
        conflitos: 1
    },
    cursos: [{id: 1, nome: "Técnico em Redes"}, {id: 2, nome: "Design Gráfico"}],
    professores: [{id: 1, nome: "João Silva"}, {id: 2, nome: "Maria Santos"}],
    salas: [{id: 1, nome: "Laboratório A", recursos: ["Computadores Windows", "Projetor"]}, {id: 2, nome: "Sala 101", recursos: ["Lousa Digital"]}]
};

// Gerenciador de Views (Simula a navegação da SPA)
function showView(viewId) {
    const mainView = document.getElementById('main-view');
    const menuItems = document.querySelectorAll('.sidebar-menu li');

    // Remove a classe 'active' de todos os itens do menu
    menuItems.forEach(item => item.classList.remove('active'));
    // Adiciona 'active' ao item clicado
    document.querySelector(`.sidebar-menu li[onclick="showView('${viewId}')"]`).classList.add('active');

    // Gera o HTML para a view selecionada
    switch (viewId) {
        case 'dashboard':
            mainView.innerHTML = createDashboardView(MOCK_DATA.stats);
            break;
        case 'agenda':
            mainView.innerHTML = `<h2>Agenda Completa</h2><p>Aqui entraria um componente de calendário interativo (Ex: FullCalendar.js).</p>`;
            break;
        case 'professores':
             mainView.innerHTML = `<h2>Gestão de Professores</h2><p>Tabela com todos os professores, com opções de Adicionar, Editar (com restrições de horário) e Excluir.</p>`;
            break;
        // ... outras views
        default:
            mainView.innerHTML = `<h2>Página não encontrada</h2>`;
    }
}

function createDashboardView(stats) {
    return `
        <div class="dashboard-grid">
            <div class="stat-card">
                <i class="fas fa-calendar-check"></i>
                <div class="info">
                    <h4>${stats.aulasHoje}</h4>
                    <p>Aulas Agendadas Hoje</p>
                </div>
            </div>
            <div class="stat-card">
                <i class="fas fa-door-closed"></i>
                <div class="info">
                    <h4>${stats.salasOcupadas} / 15</h4>
                    <p>Salas em Uso Agora</p>
                </div>
            </div>
             <div class="stat-card">
                <i class="fas fa-chalkboard-teacher"></i>
                <div class="info">
                    <h4>${stats.professoresAtivos}</h4>
                    <p>Professores Ativos</p>
                </div>
            </div>
            <div class="stat-card" style="border-left: 5px solid #dc3545;">
                <i class="fas fa-exclamation-triangle" style="color: #dc3545;"></i>
                <div class="info">
                    <h4>${stats.conflitos}</h4>
                    <p>Conflito de Agenda</p>
                </div>
            </div>
        </div>
        `;
}

// --- Lógica dos Modais ---
function openModal(modalId) {
    // Antes de abrir, popula os selects com dados da "API"
    populateSelects();
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function populateSelects() {
    const cursoSelect = document.getElementById('curso');
    // ... e outros selects
    cursoSelect.innerHTML = '<option value="">Selecione...</option>' + MOCK_DATA.cursos.map(c => `<option value="${c.id}">${c.nome}</option>`).join('');
    // Fazer o mesmo para professores e salas
}

// Lida com o envio do formulário de agendamento
document.getElementById('form-agendamento').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o recarregamento da página
    console.log("Iniciando verificação de conflitos...");
    // 1. Coletar todos os dados do formulário
    const dadosForm = {
        cursoId: document.getElementById('curso').value,
        // ... outros campos
    };
    
    // 2. Enviar para a API de validação no backend Java
    // fetch('/api/schedule/check-conflicts', { method: 'POST', body: JSON.stringify(dadosForm), ... })
    //     .then(response => response.json())
    //     .then(result => {
    //         if(result.hasConflict) {
    //             alert('Conflito encontrado! Professor ou sala já ocupado.');
    //         } else {
    //             // Se não houver conflito, envia para salvar
    //             // fetch('/api/schedule', { method: 'POST', ... })
    //             alert('Agendamento salvo com sucesso!');
    //             closeModal('modal-agendamento');
    //         }
    //     });
    
    // Simulação por enquanto:
    setTimeout(() => {
        alert("Agendamento salvo com sucesso! (Simulação)");
        closeModal('modal-agendamento');
    }, 1000);
});

// Lógica para mostrar/esconder campos de recorrência
document.getElementById('recorrente').addEventListener('change', function(e) {
    document.getElementById('campos-recorrencia').style.display = e.target.checked ? 'flex' : 'none';
});

// Fecha o modal se clicar fora dele
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        closeModal(event.target.id);
    }
}