import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Attach JWT token to every request if available
// API.interceptors.request.use((config) => {
//   const token = localStorage.getItem('token');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// // Auth APIs
// export const authAPI = {
//   login: (email, password) => API.post('/auth/login', { email, password }),
//   register: (name, email, password) =>
//     API.post('/auth/register', { name, email, password }),
//   getProfile: () => API.get('/auth/profile'),
// };

// // Study APIs
// export const studyAPI = {
//   getSubjects: () => API.get('/subjects'),
//   getChapters: (subjectId) => API.get(`/subjects/${subjectId}/chapters`),
//   getNotes: (chapterId) => API.get(`/chapters/${chapterId}/notes`),
// };

// // Practice APIs
// export const practiceAPI = {
//   getQuestions: (chapterId) => API.get(`/questions/${chapterId}`),
//   submitAnswer: (questionId, selectedAnswer) =>
//     API.post('/submit', { questionId, selectedAnswer }),
//   getProgress: () => API.get('/progress'),
// };

export default api;
