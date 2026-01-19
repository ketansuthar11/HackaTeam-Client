import axios from 'axios'
import api from './api'
export const getProfile = ()=> api.get('/profile');
export const saveProfile = (profileData)=> api.put('/profile',profileData);
export const getTeams = ()=> api.get('/find-team');