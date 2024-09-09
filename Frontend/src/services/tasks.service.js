export default class TasksService {
  url = 'http://localhost:3000/api/tasks';

  async getTasks() {
    const response = await fetch(this.url);
    return response.json();
  }

  async updateTask(task) {
    const payload = {
      titulo: task?.titulo,
      descricao: task?.descricao,
      status: task?.status,
    }
    const response = await fetch(`${this.url}/update/${task.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    return response.json();
  }
}