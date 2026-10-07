// Base de dados inicial completa e recheada com produtos essenciais
const initialCategories = [
    {
        id: 'despensa',
        name: 'Despensa & Grãos',
        icon: 'fa-wheat-awn',
        items: [
            { id: 'd1', name: 'Arroz', price: '', quantity: 1, checked: false },
            { id: 'd2', name: 'Feijão', price: '', quantity: 1, checked: false },
            { id: 'd3', name: 'Açúcar', price: '', quantity: 1, checked: false },
            { id: 'd4', name: 'Café em Pó', price: '', quantity: 1, checked: false },
            { id: 'd5', name: 'Sal Comum / Refinado', price: '', quantity: 1, checked: false },
            { id: 'd6', name: 'Óleo de Soja', price: '', quantity: 1, checked: false },
            { id: 'd7', name: 'Azeite de Oliva', price: '', quantity: 1, checked: false },
            { id: 'd8', name: 'Macarrão', price: '', quantity: 1, checked: false },
            { id: 'd9', name: 'Farinha de Mandioca / Trigo', price: '', quantity: 1, checked: false },
            { id: 'd10', name: 'Cuscuz / Flocão de Milho', price: '', quantity: 1, checked: false },
            { id: 'd11', name: 'Molho de Tomate / Extrato', price: '', quantity: 1, checked: false },
            { id: 'd12', name: 'Milho Verde em Lata / Ervilha', price: '', quantity: 1, checked: false },
            { id: 'd13', name: 'Sardinha / Atum em Lata', price: '', quantity: 1, checked: false },
            { id: 'd14', name: 'Maionese / Ketchup / Mostarda', price: '', quantity: 1, checked: false },
            { id: 'd15', name: 'Vinagre', price: '', quantity: 1, checked: false },
            { id: 'd16', name: 'Milho de Pipoca', price: '', quantity: 1, checked: false }
        ]
    },
    {
        id: 'infantil',
        name: 'Lanches & Infantil',
        icon: 'fa-child-reaching',
        items: [
            { id: 'i1', name: 'Danone / Danoninho / Iogurte Infantil', price: '', quantity: 1, checked: false },
            { id: 'i2', name: 'Mucilon / Cereal Matinal', price: '', quantity: 1, checked: false },
            { id: 'i3', name: 'Achocolatado em Pó (Nescau / Toddy)', price: '', quantity: 1, checked: false },
            { id: 'i4', name: 'Bolinho Recheado (Ana Maria / Bauducco)', price: '', quantity: 1, checked: false },
            { id: 'i5', name: 'Biscoito Recheado', price: '', quantity: 1, checked: false },
            { id: 'i6', name: 'Biscoito Maisena / Cream Cracker', price: '', quantity: 1, checked: false },
            { id: 'i7', name: 'Salgadinho / Snacks', price: '', quantity: 1, checked: false },
            { id: 'i8', name: 'Suco de Caixinha / Pacote', price: '', quantity: 1, checked: false },
            { id: 'i9', name: 'Refrigerante (Coca-Cola)', price: '', quantity: 1, checked: false },
            { id: 'i10', name: 'Energético (Night Power)', price: '', quantity: 1, checked: false },
            { id: 'i11', name: 'Paçoca', price: '', quantity: 1, checked: false },
            { id: 'i12', name: 'Marshmallow / Balas / Doces', price: '', quantity: 1, checked: false },
            { id: 'i13', name: 'Chocolate em Barra / Leite em Pó', price: '', quantity: 1, checked: false }
        ]
    },
    {
        id: 'padaria',
        name: 'Padaria & Matinal',
        icon: 'fa-bread-slice',
        items: [
            { id: 'p1', name: 'Pão Francês', price: '', quantity: 1, checked: false },
            { id: 'p2', name: 'Pão de Forma / Pão de Hambúrguer', price: '', quantity: 1, checked: false },
            { id: 'p3', name: 'Torradas / Broa', price: '', quantity: 1, checked: false },
            { id: 'p4', name: 'Bolo Caseiro', price: '', quantity: 1, checked: false }
        ]
    },
    {
        id: 'carnes',
        name: 'Carnes, Aves & Frios',
        icon: 'fa-drumstick-bite',
        items: [
            { id: 'c1', name: 'Carne Bovina (Picanha, Alcatra, Acém)', price: '', quantity: 1, checked: false },
            { id: 'c2', name: 'Carne Moída', price: '', quantity: 1, checked: false },
            { id: 'c3', name: 'Frango (Peito / Coxa e Sobrecoxa / Filezinho)', price: '', quantity: 1, checked: false },
            { id: 'c4', name: 'Carne Suína (Bisteca / Lombo)', price: '', quantity: 1, checked: false },
            { id: 'c5', name: 'Calabresa / Linguiça Toscana', price: '', quantity: 1, checked: false },
            { id: 'c6', name: 'Presunto Fatiado', price: '', quantity: 1, checked: false },
            { id: 'c7', name: 'Queijo Mussarela Fatiado', price: '', quantity: 1, checked: false },
            { id: 'c8', name: 'Salsicha', price: '', quantity: 1, checked: false },
            { id: 'c9', name: 'Ovos (Cartela com 30)', price: '', quantity: 1, checked: false }
        ]
    },
    {
        id: 'laticinios',
        name: 'Laticínios & Refrigeração',
        icon: 'fa-cow',
        items: [
            { id: 'l1', name: 'Leite Integral (Caixa)', price: '', quantity: 1, checked: false },
            { id: 'l2', name: 'Manteiga / Margarina', price: '', quantity: 1, checked: false },
            { id: 'l3', name: 'Requeijão Cremoso', price: '', quantity: 1, checked: false },
            { id: 'l4', name: 'Creme de Leite', price: '', quantity: 1, checked: false },
            { id: 'l5', name: 'Leite Condensado', price: '', quantity: 1, checked: false },
            { id: 'l6', name: 'Iogurte Natural / Frutas', price: '', quantity: 1, checked: false },
            { id: 'l7', name: 'Queijo Coalho / Minas', price: '', quantity: 1, checked: false }
        ]
    },
    {
        id: 'hortifruti',
        name: 'Hortifrúti',
        icon: 'fa-carrot',
        items: [
            { id: 'h1', name: 'Tomate', price: '', quantity: 1, checked: false },
            { id: 'h2', name: 'Cebola', price: '', quantity: 1, checked: false },
            { id: 'h3', name: 'Batata Inglesa', price: '', quantity: 1, checked: false },
            { id: 'h4', name: 'Alho', price: '', quantity: 1, checked: false },
            { id: 'h5', name: 'Banana', price: '', quantity: 1, checked: false },
            { id: 'h6', name: 'Maçã', price: '', quantity: 1, checked: false },
            { id: 'h7', name: 'Mamão', price: '', quantity: 1, checked: false },
            { id: 'h8', name: 'Laranja / Limão', price: '', quantity: 1, checked: false },
            { id: 'h9', name: 'Alface / Coentro / Cebolinha', price: '', quantity: 1, checked: false },
            { id: 'h10', name: 'Cenoura / Chuchu / Abóbora', price: '', quantity: 1, checked: false }
        ]
    },
    {
        id: 'limpeza',
        name: 'Limpeza & Lavanderia',
        icon: 'fa-soap',
        items: [
            { id: 'lp1', name: 'Veja / Limpador Multiúso', price: '', quantity: 1, checked: false },
            { id: 'lp2', name: 'Sabão em Pó / Líquido', price: '', quantity: 1, checked: false },
            { id: 'lp3', name: 'Sabão em Barra', price: '', quantity: 1, checked: false },
            { id: 'lp4', name: 'Amaciante de Roupas', price: '', quantity: 1, checked: false },
            { id: 'lp5', name: 'Detergente Líquido para Louça', price: '', quantity: 1, checked: false },
            { id: 'lp6', name: 'Água Sanitária / Desinfetante', price: '', quantity: 1, checked: false },
            { id: 'lp7', name: 'Esponja de Louça / Esponja de Aço', price: '', quantity: 1, checked: false },
            { id: 'lp8', name: 'Papel Higiênico', price: '', quantity: 1, checked: false },
            { id: 'lp9', name: 'Papel Toalha / Guardanapo de Papel', price: '', quantity: 1, checked: false },
            { id: 'lp10', name: 'Sacos de Lixo (30L / 50L)', price: '', quantity: 1, checked: false },
            { id: 'lp11', name: 'Papel Alumínio / Filme PVC', price: '', quantity: 1, checked: false },
            { id: 'lp12', name: 'Lustra Móveis / Limpa Vidros', price: '', quantity: 1, checked: false }
        ]
    },
    {
        id: 'higiene',
        name: 'Higiene Pessoal',
        icon: 'fa-pump-soap',
        items: [
            { id: 'hg1', name: 'Creme Dental', price: '', quantity: 1, checked: false },
            { id: 'hg2', name: 'Escova de Dentes', price: '', quantity: 1, checked: false },
            { id: 'hg3', name: 'Sabonete em Barra / Líquido', price: '', quantity: 1, checked: false },
            { id: 'hg4', name: 'Shampoo / Condicionador', price: '', quantity: 1, checked: false },
            { id: 'hg5', name: 'Desodorante', price: '', quantity: 1, checked: false },
            { id: 'hg6', name: 'Fio Dental', price: '', quantity: 1, checked: false },
            { id: 'hg7', name: 'Aparelho de Barbear / Creme de Barbear', price: '', quantity: 1, checked: false },
            { id: 'hg8', name: 'Hastes Flexíveis (Cotonetes) / Algodão', price: '', quantity: 1, checked: false },
            { id: 'hg9', name: 'Absorventes', price: '', quantity: 1, checked: false }
        ]
    }
];

// Carregar dados salvos no localStorage ou usar a base inicial atualizada
let storedCategories = JSON.parse(localStorage.getItem('shopping_list_data'));

// Função de sincronização para garantir que novos itens padrões apareçam no localStorage
function loadCategoriesWithMerge() {
    if (!storedCategories) return initialCategories;

    initialCategories.forEach(initCat => {
        let storedCat = storedCategories.find(c => c.id === initCat.id);
        if (!storedCat) {
            storedCategories.push(initCat);
        } else {
            initCat.items.forEach(initItem => {
                let exists = storedCat.items.some(i => i.id === initItem.id || i.name.toLowerCase() === initItem.name.toLowerCase());
                if (!exists) {
                    storedCat.items.push(initItem);
                }
            });
        }
    });
    return storedCategories;
}

let categories = loadCategoriesWithMerge();
let activeTab = 'all';

// Salvar dados no localStorage
function saveData() {
    localStorage.setItem('shopping_list_data', JSON.stringify(categories));
    calculateGrandTotal();
}

// Renderizar Abas Superiores de Categoria
function renderTabs() {
    const tabsContainer = document.getElementById('category-tabs');
    if (!tabsContainer) return;
    tabsContainer.innerHTML = '';

    const allBtn = document.createElement('button');
    allBtn.className = `px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${activeTab === 'all' ? 'bg-emerald-700 text-white shadow-sm' : 'bg-white text-slate-600 hover:bg-emerald-100 border border-emerald-100'}`;
    allBtn.innerText = 'Todas as Categorias';
    allBtn.onclick = () => filterByTab('all');
    tabsContainer.appendChild(allBtn);

    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = `px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${activeTab === cat.id ? 'bg-emerald-700 text-white shadow-sm' : 'bg-white text-slate-600 hover:bg-emerald-100 border border-emerald-100'}`;
        btn.innerHTML = `<i class="fa-solid ${cat.icon}"></i> ${cat.name}`;
        btn.onclick = () => filterByTab(cat.id);
        tabsContainer.appendChild(btn);
    });
}

function filterByTab(tabId) {
    activeTab = tabId;
    renderTabs();
    renderList(document.getElementById('search-input').value);
}

// Renderizar a lista de categorias e produtos
function renderList(filterText = '') {
    const container = document.getElementById('categories-container');
    container.innerHTML = '';

    let hasResults = false;

    categories.forEach(cat => {
        if (activeTab !== 'all' && cat.id !== activeTab) return;

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
            const qty = item.quantity || 1;

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

                    <div class="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                        <!-- Controle de Quantidade -->
                        <div class="flex items-center border border-slate-200 rounded-xl bg-slate-50 overflow-hidden">
                            <button onclick="changeQuantity('${item.id}', -1)" class="px-2.5 py-1 text-slate-500 hover:bg-slate-200 font-bold transition text-xs" title="Diminuir e recalcular">-</button>
                            <span class="px-2 py-1 text-xs font-bold text-slate-700 min-w-[24px] text-center">${qty}</span>
                            <button onclick="changeQuantity('${item.id}', 1)" class="px-2.5 py-1 text-slate-500 hover:bg-slate-200 font-bold transition text-xs" title="Adicionar e somar valor">+</button>
                        </div>

                        <!-- Campo de Preço -->
                        <div class="relative w-28 sm:w-32">
                            <span class="absolute inset-y-0 left-0 flex items-center pl-2.5 text-xs text-slate-400 font-semibold">R$</span>
                            <input type="number" 
                                step="0.01" 
                                placeholder="0,00" 
                                value="${item.price !== undefined ? item.price : ''}" 
                                oninput="updatePrice('${item.id}', this.value)"
                                onkeydown="handlePriceKeydown(event, this)"
                                class="w-full pl-8 pr-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition text-right">
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

// Alterar Quantidade e recalcular o valor do produto somando a adição
function changeQuantity(itemId, delta) {
    for (let cat of categories) {
        const item = cat.items.find(i => i.id === itemId);
        if (item) {
            const oldQty = item.quantity || 1;
            const newQty = Math.max(1, oldQty + delta);

            // Fórmula de soma ao adicionar no botão (+)
            const currentPrice = parseFloat(item.price);
            if (!isNaN(currentPrice) && currentPrice > 0 && oldQty > 0) {
                const unitPrice = currentPrice / oldQty;
                item.price = (unitPrice * newQty).toFixed(2);
            }

            item.quantity = newQty;
            saveData();
            renderList(document.getElementById('search-input').value);
            break;
        }
    }
}

// Atualizar preço de um item específico
function updatePrice(itemId, value) {
    const formattedValue = value.replace(',', '.');
    for (let cat of categories) {
        const item = cat.items.find(i => i.id === itemId);
        if (item) {
            item.price = formattedValue;
            saveData();
            break;
        }
    }
}

// Confirmar o campo ao pressionar "Enter"
function handlePriceKeydown(event, inputElement) {
    if (event.key === 'Enter') {
        inputElement.blur();
    }
}

// Marcar ou desmarcar item como comprado
function toggleCheck(itemId) {
    for (let cat of categories) {
        const item = cat.items.find(i => i.id === itemId);
        if (item) {
            item.checked = !item.checked;
            saveData();

            const row = document.getElementById(`row-${itemId}`);
            if (row) {
                row.classList.toggle('item-purchased', item.checked);
            }
            break;
        }
    }
}

// Calcular o Total Geral de todos os produtos
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

    const totalElement = document.getElementById('grand-total');
    if (totalElement) {
        totalElement.innerText = total.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
    }
}

// Resetar todos os preços, quantidades e seleções
document.getElementById('btn-reset').addEventListener('click', () => {
    if (confirm('Deseja limpar todos os preços, quantidades e desmarcar os itens?')) {
        categories.forEach(cat => {
            cat.items.forEach(item => {
                item.price = '';
                item.quantity = 1;
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
        quantity: 1,
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

// Fechar modal ao pressionar ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Inicializar aplicação ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
    renderTabs();
    renderList();
});