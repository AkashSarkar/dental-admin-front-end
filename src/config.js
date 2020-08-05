import axios from 'axios';

const status = 'prod'
export const API_URL = status === 'dev' ? 'http://127.0.0.1:8000' : 'http://202.164.212.238:9030';
export const TOKEN = "AUTH_TOKEN"
const jwt = localStorage.getItem(TOKEN);

export const API = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "Authorization": `Bearer ${jwt}`
  }
})
export const PUBLIC_API = axios.create({
  baseURL: API_URL,
  timeout: 10000
})
