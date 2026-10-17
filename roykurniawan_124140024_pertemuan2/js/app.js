import { defaultTasks } from "./modules/data.js";
import { formatTanggal, getWeatherLabel } from "./modules/utils.js";

export class TaskItem {
  constructor({
    id = Date.now().toString(),
    title,
    course = "Pengembangan Aplikasi Web",
    priority = "Tinggi",
    deadline = "",
    completed = false
  }) {
    this.id = id;
    this.title = title;
    this.course = course;
    this.priority = priority;
    this.deadline = deadline;
    this.completed = completed;
  }

  toggle() {
    this.completed = !this.completed;
  }

  get formattedDeadline() {
    return formatTanggal(this.deadline);
  }
}

export class DashboardApp {
  constructor(storageKey = "paw_dashboard_tasks") {
    this.storageKey = storageKey;
    this.tasks = [];
    this.filterStatus = "all";
    this.searchKeyword = "";
  }

  loadFromStorage() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        this.tasks = parsed.map((item) => new TaskItem(item));
      } else {
        this.tasks = defaultTasks.map((item) => new TaskItem(item));
        this.saveToStorage();
      }
    } catch (error) {
      this.tasks = defaultTasks.map((item) => new TaskItem(item));
    }
  }

  saveToStorage() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.tasks));
    } catch (error) {
      console.error("Gagal menyimpan ke localStorage:", error);
    }
  }

  addTask({ title, course, priority = "Sedang", deadline }) {
    const newTask = new TaskItem({
      title,
      course,
      priority,
      deadline
    });
    this.tasks = [newTask, ...this.tasks];
    this.saveToStorage();
    return newTask;
  }

  updateTask(id, { title, course, priority, deadline }) {
    this.tasks = this.tasks.map((task) =>
      task.id === id
        ? new TaskItem({ ...task, title, course, priority, deadline })
        : task
    );
    this.saveToStorage();
  }

  deleteTask(id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveToStorage();
  }

  toggleTask(id) {
    const target = this.tasks.find((task) => task.id === id);
    if (target) {
      target.toggle();
      this.saveToStorage();
    }
  }

  findTaskById(id) {
    return this.tasks.find((task) => task.id === id);
  }

  getFilteredTasks() {
    return this.tasks.filter((task) => {
      const matchStatus =
        this.filterStatus === "all" ||
        (this.filterStatus === "completed" && task.completed) ||
        (this.filterStatus === "pending" && !task.completed);

      const keyword = this.searchKeyword.toLowerCase();
      const matchSearch =
        task.title.toLowerCase().includes(keyword) ||
        task.course.toLowerCase().includes(keyword);

      return matchStatus && matchSearch;
    });
  }

  getStats() {
    const total = this.tasks.length;
    const done = this.tasks.reduce(
      (acc, task) => (task.completed ? acc + 1 : acc),
      0
    );
    const pending = total - done;
    return { total, done, pending };
  }

  async fetchWeather() {
    const url = "https://api.open-meteo.com/v1/forecast?latitude=-5.36&longitude=105.31&current_weather=true";
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Gagal mengambil data cuaca");
      const data = await response.json();
      const { temperature, windspeed, weathercode } = data.current_weather;

      return {
        temp: Math.round(temperature),
        wind: windspeed,
        condition: getWeatherLabel(weathercode)
      };
    } catch (error) {
      return {
        temp: 29,
        wind: 10.5,
        condition: "Berawan"
      };
    }
  }

  async fetchQuote() {
    const url = "https://dummyjson.com/quotes/random";
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Gagal mengambil kutipan");
      const { quote, author } = await response.json();
      return { quote, author };
    } catch (error) {
      return {
        quote: "Pendidikan adalah senjata paling ampuh untuk mengubah dunia.",
        author: "Nelson Mandela"
      };
    }
  }
}