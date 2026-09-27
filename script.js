// Base de dados inicial completa dividida por categorias (incluindo lanches infantis)
const initialCategories = [
    {
        id: 'despensa',
        name: 'Despensa & Grãos',
        icon: 'fa-wheat-awn',
        items: [
            { id: 'd1', name: 'Arroz', price: '', checked: false },
            { id: 'd2', name: 'Feijão', price: '', checked: false },
            { id: 'd3', name: 'Açúcar', price: '', checked: false },
            { id: 'd4', name: 'Café em Pó', price: '', checked: false },
            { id: 'd5', name: 'Sal Refinado', price: '', checked: false },
            { id: 'd6', name: 'Óleo de Soja', price: '', checked: false },
            { id: 'd7', name: 'Macarrão', price: '', checked: false },
            { id: 'd8', name: 'Farinha de Mandioca / Trigo', price: '', checked: false },
            { id: 'd9', name: 'Molho de Tomate', price: '', checked: false },
            { id: 'd10', name: 'Milho de Pipoca', price: '', checked: false }
        ]
    },
    {
        id: 'infantil',
        name: 'Lanches & Infantil (Danoninho, Bolinhos...)',
        icon: 'fa-child-reaching',
        items: [
            { id: 'i1', name: 'Danoninho / Iogurte Infantil', price: '', checked: false },
            { id: 'i2', name: 'Bolinho Recheado (Ana Maria / Bauducco)', price: '', checked: false },
            { id: 'i3', name: 'Biscoito Recheado', price: '', checked: false },
            { id: 'i4', name: 'Achocolatado em Caixa', price: '', checked: false },
            { id: 'i5', name: 'Cereal Matinal', price: '', checked: false },
            { id: 'i6', name: 'Salgadinho / Snacks', price: '', checked: false },
            { id: 'i7', name: 'Suco de Caixinha', price: '', checked: false },
            { id: 'i8', name: 'Biscoito Maisena / Cream Cracker', price: '', checked: false }
        ]
    },
    {
        id: 'carnes',
        name: 'Carnes, Aves & Frios',
        icon: 'fa-drumstick-bite',
        items: [
            { id: 'c1', name: 'Carne Bovina (Picanha, Alcatra, Acém)', price: '', checked: false },
            { id: 'c2', name: 'Frango (Peito / Coxa e Sobrecoxa)', price: '', checked: false },
            { id: 'c3', name: 'Carne Suína (Bisteca / Lombo)', price: '', checked: false },
            { id: 'c4', name: 'Linguiça Toscana', price: '', checked: false },
            { id: 'c5', name: 'Presunto Fatiado', price: '', checked: false },
            { id: 'c6', name: 'Queijo Mussarela Fatiado', price: '', checked: false },
            { id: 'c7', name: 'Salsicha', price: '', checked: false },
            { id: 'c8', name: 'Ovos (Cartela com 30)', price: '', checked: false }
        ]
    },
    {
        id: 'laticinios',
        name: 'Laticínios & Refrigeração',
        icon: 'fa-cow',
        items: [
            { id: 'l1', name: 'Leite Integral (Caixa)', price: '', checked: false },
            { id: 'l2', name: 'Manteiga / Margarina', price: '', checked: false },
            { id: 'l3', name: 'Requeijão Cremoso', price: '', checked: false },
            { id: 'l4', name: 'Creme de Leite', price: '', checked: false },
            { id: 'l5', name: 'Leite Condensado', price: '', checked: false },
            { id: 'l6', name: 'Iogurte Natural / Frutas', price: '', checked: false },
            { id: 'l7', name: 'Queijo Coalho / Minas', price: '', checked: false }
        ]
    },
    {
        id: 'hortifruti',
        name: 'Hortifrúti (Frutas, Verduras & Legumes)',
        icon: 'fa-carrot',
        items: [
            { id: 'h1', name: 'Tomate', price: '', checked: false },
            { id: 'h2', name: 'Cebola', price: '', checked: false },
            { id: 'h3', name: 'Batata Inglesa', price: '', checked: false },
            { id: 'h4', name: 'Alho', price: '', checked: false },
            { id: 'h5', name: 'Banana', price: '', checked: false },
            { id: 'h6', name: 'Maçã', price: '', checked: false },
            { id: 'h7', name: 'Mamão', price: '', checked: false },
            { id: 'h8', name: 'Alface / Coentro / Cebolinha', price: '', checked: false },
            { id: 'h9', name: 'Limão', price: '', checked: false }
        ]
    },
    {
        id: 'limpeza',
        name: 'Limpeza & Lavanderia',
        icon: 'fa-soap',
        items: [
            { id: 'lp1', name: 'Sabão em Pó / Líquido', price: '', checked: false },
            { id: 'lp2', name: 'Amaciante de Roupas', price: '', checked: false },
            { id: 'lp3', name: 'Detergente Líquido', price: '', checked: false },
            { id: 'lp4', name: 'Água Sanitária / Desinfetante', price: '', checked: false },
            { id: 'lp5', name: 'Esponja de Aço / Louça', price: '', checked: false },
            { id: 'lp6', name: 'Papel Higiênico', price: '', checked: false },
            { id: 'lp7', name: 'Papel Toalha / Guardanapo', price: '', checked: false },
            { id: 'lp8', name: 'Sacos de Lixo', price: '', checked: false }
        ]
    },
    {
        id: 'higiene',
        name: 'Higiene Pessoal',
        icon: 'fa-pump-soap',
        items: [
            { id: 'hg1', name: 'Creme Dental', price: '', checked: false },
            { id: 'hg2', name: 'Sabonete em Barra / Líquido', price: '', checked: false },
            { id: 'hg3', name: 'Shampoo / Condicionador', price: '', checked: false },
            { id: 'hg4', name: 'Desodorante', price: '', checked: false },
            { id: 'hg5', name: 'Fio Dental', price: '', checked: false },
            { id: 'hg6', name: 'Aparelho de Barbear', price: '', checked: false }
        ]
    }
];

// Carregar dados salvos no localStorage ou usar a base padrão
let categories = JSON.parse(localStorage.getItem('shopping_list_data')) || initialCategories;

// Salvar dados no localStorage
function saveData() {
    localStorage.setItem('shopping_list_data', JSON.stringify(categories));
    calculateGrandTotal();
}

// Renderizar toda a lista de categorias e produtos na tela
function renderList(filterText = '') {
    const container = document.getElementById('categories-container');
    container.innerHTML = '';

    let hasResults = false;

    categories.forEach(cat => {
        // Filtrar itens com base na busca
        const filteredItems = cat.items.filter(item =>
            item.name.toLowerCase().includes(filterText.toLowerCase())
        );

        if (filteredItems.length === 0 && filterText !== '') return;
        hasResults = true;

        const categoryCard = document.createElement('div');
        categoryCard.className = 'bg-white rounded-2xl shadow-sm border border-emerald-100 overflow-hidden';

        // Cabeçalho da Categoria
        let htmlContent = `
            <div class="bg-emerald-50/70 px-5 py-3.5 border-b border-emerald-100 flex items-center justify-between">
                <h2 class="font-bold text-emerald-900 flex items-center gap-2.5 text-base">
                    <i class="fa-solid ${cat.icon} text-emerald-600"></i> ${cat.name}
                </h2>
                <span class="text-xs font-semibold bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full">
                    ${cat.items.length} itens
                </span>
            </div>
            <div class="divide-y divide-slate-100">
        `;

        // Itens da Categoria
        filteredItems.forEach(item => {
            const isCheckedClass = item.checked ? 'item-purchased' : '';
            htmlContent += `
                <div class="p-3.5 sm:px-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 transition-colors ${isCheckedClass}" id="row-${item.id}">
                    <div class="flex items-center gap-3 w-full sm:w-auto flex-grow">
                        <input type="checkbox" 
                            id="check-${item.id}" 
                            ${item.checked ? 'checked' : ''} 
                            onchange="toggleCheck('${item.id}')"
                            class="w-5 h-5 accent-emerald-600 rounded cursor-pointer">
                        <label for="check-${item.id}" class="item-name font-medium text-sm text-slate-700 cursor-pointer select-none">
                            ${item.name}
                        </label>
                    </div>

                    <div class="flex items-center gap-2 w-full sm:w-auto justify-end">
                        <div class="relative w-full sm:w-36">
                            <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-xs text-slate-400 font-semibold">R$</span>
                            <input type="number" 
                                step="0.01" 
                                placeholder="0,00" 
                                value="${item.price !== undefined ? item.price : ''}" 
                                oninput="updatePrice('${item.id}', this.value)"
                                onkeydown="handlePriceKeydown(event, this)"
                                class="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition text-right">
                        </div>
                    </div>
                </div>
            `;
        });

        htmlContent += `</div>`;
        categoryCard.innerHTML = htmlContent;
        container.appendChild(categoryCard);
    });

    if (!hasResults) {
        container.innerHTML = `
            <div class="bg-white rounded-2xl p-8 text-center border border-emerald-100 text-slate-400">
                <i class="fa-solid fa-box-open text-4xl mb-2 text-emerald-300"></i>
                <p class="text-sm font-medium">Nenhum produto encontrado com "${filterText}"</p>
            </div>
        `;
    }

    calculateGrandTotal();
}

// Atualizar preço de um item específico
function updatePrice(itemId, value) {
    for (let cat of categories) {
        const item = cat.items.find(i => i.id === itemId);
        if (item) {
            item.price = value;
            saveData();
            break;
        }
    }
}

// Confirmar o campo ao pressionar "Enter" no teclado
function handlePriceKeydown(event, inputElement) {
    if (event.key === 'Enter') {
        inputElement.blur(); // Remove o foco do input, fechando o teclado no celular e confirmando a edição
    }
}

// Marcar ou desmarcar item como comprado
function toggleCheck(itemId) {
    for (let cat of categories) {
        const item = cat.items.find(i => i.id === itemId);
        if (item) {
            item.checked = !item.checked;
            saveData();

            // Atualizar estilo visual da linha instantaneamente
            const row = document.getElementById(`row-${itemId}`);
            if (row) {
                if (item.checked) {
                    row.classList.add('item-purchased');
                } else {
                    row.classList.remove('item-purchased');
                }
            }
            break;
        }
    }
}

// Calcular o Total Geral de todos os preços preenchidos
function calculateGrandTotal() {
    let total = 0;
    categories.forEach(cat => {
        cat.items.forEach(item => {
            const val = parseFloat(item.price);
            if (!isNaN(val)) {
                total += val;
            }
        });
    });

    document.getElementById('grand-total').innerText = total.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}

// Resetar todos os preços e seleções
document.getElementById('btn-reset').addEventListener('click', () => {
    if (confirm('Deseja limpar todos os preços e desmarcar os itens?')) {
        categories.forEach(cat => {
            cat.items.forEach(item => {
                item.price = '';
                item.checked = false;
            });
        });
        saveData();
        renderList();
    }
});

// Manipulador de busca em tempo real
document.getElementById('search-input').addEventListener('input', (e) => {
    renderList(e.target.value);
});

// Funções do Modal de Adicionar Novo Item
function openModal() {
    const select = document.getElementById('new-item-category');
    select.innerHTML = '';
    categories.forEach(cat => {
        const option = document.createElement('option');
        option.value = cat.id;
        option.textContent = cat.name;
        select.appendChild(option);
    });

    document.getElementById('item-modal').classList.remove('hidden');
    document.getElementById('new-item-name').focus();
}

function closeModal() {
    document.getElementById('item-modal').classList.add('hidden');
    document.getElementById('add-item-form').reset();
}

// Cadastrar novo item preenchido pelo usuário
document.getElementById('add-item-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('new-item-name').value.trim();
    const catId = document.getElementById('new-item-category').value;

    if (!name) return;

    const newItem = {
        id: 'custom-' + Date.now(),
        name: name,
        price: '',
        checked: false
    };

    const targetCategory = categories.find(c => c.id === catId);
    if (targetCategory) {
        targetCategory.items.push(newItem);
        saveData();
        renderList();
        closeModal();
    }
});

// Inicializar aplicação ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
    renderList();
});