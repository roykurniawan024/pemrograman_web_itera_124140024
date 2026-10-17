import { DashboardApp } from "./app.js";

const app = new DashboardApp();
let editingId = null;

const form = document.getElementById("taskForm");
const titleInput = document.getElementById("titleInput");
const courseInput = document.getElementById("courseInput");
const priorityInput = document.getElementById("priorityInput");
const deadlineInput = document.getElementById("deadlineInput");
const submitBtn = document.getElementById("submitBtn");
const cancelEditBtn = document.getElementById("cancelEditBtn");
const taskListEl = document.getElementById("taskList");
const searchInput = document.getElementById("searchInput");
const filterSelect = document.getElementById("filterSelect");

const startClock = () => {
  const updateClock = () => {
    const now = new Date();
    document.getElementById("clockText").textContent = now.toLocaleTimeString("id-ID");
    document.getElementById("dateText").textContent = now.toLocaleDateString("id-ID", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  };
  updateClock();
  setInterval(updateClock, 1000);
};

const renderStats = () => {
  const { total, done, pending } = app.getStats();
  document.getElementById("totalCount").textContent = total;
  document.getElementById("pendingCount").textContent = pending;
  document.getElementById("doneCount").textContent = done;
};

const renderTasks = () => {
  renderStats();
  const tasks = app.getFilteredTasks();

  if (tasks.length === 0) {
    taskListEl.innerHTML = `<p class="empty-state">Belum ada daftar tugas yang sesuai.</p>`;
    return;
  }

  taskListEl.innerHTML = tasks
    .map((task) => {
      const priorityClass = task.priority.toLowerCase();
      const checkedAttr = task.completed ? "checked" : "";
      const doneClass = task.completed ? "done" : "";

      return `
        <div class="task-item ${doneClass}">
          <div class="task-left">
            <input type="checkbox" class="check-item" data-id="${task.id}" ${checkedAttr}>
            <div class="task-info">
              <div class="task-title">${task.title}</div>
              <div class="task-meta">
                <span>${task.course}</span>
                <span>•</span>
                <span>Deadline: ${task.formattedDeadline}</span>
                <span class="badge badge-${priorityClass}">${task.priority}</span>
              </div>
            </div>
          </div>
          <div class="task-actions">
            <button type="button" class="btn-action btn-edit" data-id="${task.id}">Edit</button>
            <button type="button" class="btn-action btn-delete" data-id="${task.id}">Hapus</button>
          </div>
        </div>
      `;
    })
    .join("");
};

const resetForm = () => {
  editingId = null;
  form.reset();
  document.getElementById("formTitle").textContent = "Tambah Tugas Kuliah";
  submitBtn.textContent = "Tambah Tugas";
  cancelEditBtn.classList.add("hidden");
};

const loadAsyncWidgets = async () => {
  const [weather, quoteData] = await Promise.all([
    app.fetchWeather(),
    app.fetchQuote()
  ]);

  document.getElementById("weatherTemp").textContent = `${weather.temp}°C`;
  document.getElementById("weatherCond").textContent = weather.condition;
  document.getElementById("weatherWind").textContent = `Angin: ${weather.wind} km/j`;

  document.getElementById("quoteText").textContent = `"${quoteData.quote}"`;
  document.getElementById("quoteAuthor").textContent = `- ${quoteData.author}`;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const payload = {
    title: titleInput.value.trim(),
    course: courseInput.value,
    priority: priorityInput.value,
    deadline: deadlineInput.value
  };

  if (!payload.title) return;

  if (editingId) {
    app.updateTask(editingId, payload);
    resetForm();
  } else {
    app.addTask(payload);
    form.reset();
  }
  renderTasks();
});

cancelEditBtn.addEventListener("click", () => resetForm());

taskListEl.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  if (!id) return;

  if (e.target.classList.contains("check-item")) {
    app.toggleTask(id);
    renderTasks();
  } else if (e.target.classList.contains("btn-edit")) {
    const task = app.findTaskById(id);
    if (!task) return;
    editingId = task.id;
    titleInput.value = task.title;
    courseInput.value = task.course;
    priorityInput.value = task.priority;
    deadlineInput.value = task.deadline;
    document.getElementById("formTitle").textContent = "Edit Tugas";
    submitBtn.textContent = "Simpan Perubahan";
    cancelEditBtn.classList.remove("hidden");
    titleInput.focus();
  } else if (e.target.classList.contains("btn-delete")) {
    app.deleteTask(id);
    if (editingId === id) resetForm();
    renderTasks();
  }
});

searchInput.addEventListener("input", (e) => {
  app.searchKeyword = e.target.value;
  renderTasks();
});

filterSelect.addEventListener("change", (e) => {
  app.filterStatus = e.target.value;
  renderTasks();
});

document.getElementById("refreshQuoteBtn").addEventListener("click", async () => {
  const quoteData = await app.fetchQuote();
  document.getElementById("quoteText").textContent = `"${quoteData.quote}"`;
  document.getElementById("quoteAuthor").textContent = `- ${quoteData.author}`;
});

document.addEventListener("DOMContentLoaded", () => {
  app.loadFromStorage();
  startClock();
  renderTasks();
  loadAsyncWidgets();
});