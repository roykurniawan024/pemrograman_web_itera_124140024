// =========================================================================
// Fitur Dark Mode Toggle
// =========================================================================
const btnTheme = document.getElementById("btn-theme");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    btnTheme.innerText = "Mode Terang";
}

btnTheme.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        btnTheme.innerText = "Light Mode";
    } else {
        localStorage.setItem("theme", "light");
        btnTheme.innerText = "Dark Mode";
    }
});

// =========================================================================
// Input Mahasiswa
// =========================================================================
const formMhs = document.getElementById("form-mhs");
const inputNamaMhs = document.getElementById("mhs-nama");
const inputNimMhs = document.getElementById("mhs-nim");
const listMhs = document.getElementById("list-mhs");
const errorMhs = document.getElementById("error-mhs");

let dataMahasiswa = JSON.parse(localStorage.getItem("mhsData")) || [];

function renderMahasiswa() {
    listMhs.innerHTML = "";
    dataMahasiswa.forEach(mhs => {
        listMhs.innerHTML += `<li><strong>${mhs.nama}</strong> (NIM: ${mhs.nim})</li>`;
    });
}

formMhs.addEventListener("submit", (e) => {
    e.preventDefault();
    const nama = inputNamaMhs.value.trim();
    const nim = inputNimMhs.value.trim();

    if (nama.length < 3 || nim === "") {
        errorMhs.style.display = "block";
        return;
    }
    
    errorMhs.style.display = "none";
    dataMahasiswa.push({ nama, nim });
    
    localStorage.setItem("mhsData", JSON.stringify(dataMahasiswa));
    
    inputNamaMhs.value = "";
    inputNimMhs.value = "";
    renderMahasiswa();
});

renderMahasiswa(); 

// =========================================================================
// Aplikasi Todo List
// =========================================================================
const formTodo = document.getElementById("form-todo");
const inputTodo = document.getElementById("todo-input");
const listTodo = document.getElementById("list-todo");

let todos = JSON.parse(localStorage.getItem("todoData")) || [];

function renderTodos() {
    listTodo.innerHTML = "";
    todos.forEach(todo => {
        const li = document.createElement("li");
        li.className = `todo-item ${todo.selesai ? "selesai" : ""}`;
        
        li.innerHTML = `
            <span>${todo.teks}</span>
            <div>
                <button class="btn-small btn-success" onclick="toggleTodo(${todo.id})">✔</button>
                <button class="btn-small btn-danger" onclick="hapusTodo(${todo.id})">✖</button>
            </div>
        `;
        listTodo.appendChild(li);
    });
}

formTodo.addEventListener("submit", (e) => {
    e.preventDefault();
    const teks = inputTodo.value.trim();
    if (teks === "") return;

    todos.push({ id: Date.now(), teks: teks, selesai: false });
    simpanTodo();
    inputTodo.value = "";
});

window.toggleTodo = (id) => {
    const todo = todos.find(t => t.id === id);
    if (todo) todo.selesai = !todo.selesai;
    simpanTodo();
};

window.hapusTodo = (id) => {
    todos = todos.filter(t => t.id !== id);
    simpanTodo();
};

function simpanTodo() {
    localStorage.setItem("todoData", JSON.stringify(todos));
    renderTodos();
}

renderTodos(); 

// =========================================================================
// Fetch API
// =========================================================================
const postContainer = document.getElementById("post-container");
const searchPost = document.getElementById("search-post");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const pageInfo = document.getElementById("page-info");
const loadingApi = document.getElementById("loading-api");

let allPosts = [];
let currentPage = 1;
const itemsPerPage = 5;

async function fetchPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        allPosts = await response.json();
        loadingApi.style.display = "none";
        renderPosts();
    } catch (error) {
        loadingApi.innerText = "Gagal memuat data API!";
        loadingApi.style.color = "red";
    }
}

function renderPosts() {
    const keyword = searchPost.value.toLowerCase();
    const filteredPosts = allPosts.filter(post => post.title.toLowerCase().includes(keyword));

    const totalPages = Math.ceil(filteredPosts.length / itemsPerPage) || 1;
    
    if (currentPage > totalPages) currentPage = totalPages;
    if (currentPage < 1) currentPage = 1;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedPosts = filteredPosts.slice(startIndex, startIndex + itemsPerPage);

    postContainer.innerHTML = "";
    
    if (paginatedPosts.length === 0) {
        postContainer.innerHTML = "<p>Artikel tidak ditemukan.</p>";
    } else {
        paginatedPosts.forEach(post => {
            postContainer.innerHTML += `
                <div class="post-box">
                    <div class="post-title">${post.title.substring(0, 50)}...</div>
                    <div style="font-size: 14px;">${post.body}</div>
                </div>
            `;
        });
    }

    pageInfo.innerText = `Halaman ${currentPage} dari ${totalPages}`;
    btnPrev.disabled = currentPage === 1;
    btnNext.disabled = currentPage === totalPages;
}

btnPrev.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        renderPosts();
    }
});

btnNext.addEventListener("click", () => {
    currentPage++;
    renderPosts();
});

searchPost.addEventListener("input", () => {
    currentPage = 1; 
    renderPosts();
});

fetchPosts();