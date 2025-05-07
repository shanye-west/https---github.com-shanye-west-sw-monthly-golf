import { apiRequest } from './api-request';

// Events
export const getEvents = () => apiRequest('GET', '/api/events');
export const createEvent = (data: any) => apiRequest('POST', '/api/events', data);
export const updateEvent = (id: number, data: any) => apiRequest('PUT', `/api/events/${id}`, data);
export const deleteEvent = (id: number) => apiRequest('DELETE', `/api/events/${id}`);
export const deleteAllEvents = () => apiRequest('DELETE', '/api/events');
export const resetAllEvents = () => apiRequest('PUT', '/api/events/reset/all');

// Groups
export const getGroups = () => apiRequest('GET', '/api/groups');
export const createGroup = (data: any) => apiRequest('POST', '/api/groups', data);
export const updateGroup = (id: number, data: any) => apiRequest('PUT', `/api/groups/${id}`, data);
export const deleteGroup = (id: number) => apiRequest('DELETE', `/api/groups/${id}`);
export const deleteAllGroups = () => apiRequest('DELETE', '/api/groups');
export const resetAllGroups = () => apiRequest('PUT', '/api/groups/reset/all');

// Players
export const getPlayers = () => apiRequest('GET', '/api/players');
export const createPlayer = (data: any) => apiRequest('POST', '/api/players', data);
export const updatePlayer = (id: number, data: any) => apiRequest('PUT', `/api/players/${id}`, data);
export const deletePlayer = (id: number) => apiRequest('DELETE', `/api/players/${id}`);
export const deleteAllPlayers = () => apiRequest('DELETE', '/api/players'); 