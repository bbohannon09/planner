import { LeaderboardTwoTone } from '@mui/icons-material';
import { createSlice } from '@reduxjs/toolkit';

const addTaskSlice = createSlice({
  name: 'addTask',
  initialState: {
    showModal: false,
    priorityLevel: 0,
    titleFieldValue: '',
    descriptionFieldValue: '',
    allTasks: [],
    incompleteTasks: [],
    activeTasks: [],
    finishedTasks: []
  },
  reducers: {
    setShowModal: (state, action) => {
      state.showModal = action.payload;
    },
    setPriorityLevel: (state, action) => {
      state.priorityLevel = action.payload;
    },
    setTitleFieldValue: (state, action) => {
      state.titleFieldValue = action.payload;
    },
    setDescriptionFieldValue: (state, action) => {
      state.descriptionFieldValue = action.payload;
    },
    setNewTask: (state, action) => {
      state.incompleteTasks.push(action.payload);
      state.allTasks.push(action.payload);

      localStorage.setItem('incompleteTasks', JSON.stringify(state.incompleteTasks));
      localStorage.setItem('activeTasks', JSON.stringify(state.activeTasks))
      localStorage.setItem('finishedTasks', JSON.stringify(state.finishedTasks))
      localStorage.setItem('allTasks', JSON.stringify(state.allTasks))
    },
    moveTask: (state, action) => {
      let movedItem;

      switch (action.payload.source.droppableId) {
        case 'incomplete':
          movedItem = state.incompleteTasks[action.payload.source.index];
          state.incompleteTasks = state.incompleteTasks.filter((_, index) => index !== action.payload.source.index);
          break;
        case 'active':
          movedItem = state.activeTasks[action.payload.source.index];
          state.activeTasks = state.activeTasks.filter((_, index) => index !== action.payload.source.index);
          break;
        case 'finished':
          movedItem = state.finishedTasks[action.payload.source.index];
          state.finishedTasks = state.finishedTasks.filter((_, index) => index !== action.payload.source.index);
          break;
      }

      switch (action.payload.destination.droppableId) {
        case 'incomplete':
          state.incompleteTasks.splice(action.payload.destination.index, 0, movedItem)
          break;
        case 'active':
          state.activeTasks.splice(action.payload.destination.index, 0, movedItem)
          break;
        case 'finished':
          state.finishedTasks.splice(action.payload.destination.index, 0, movedItem)
          break;
      }

      localStorage.setItem('incompleteTasks', JSON.stringify(state.incompleteTasks))
      localStorage.setItem('activeTasks', JSON.stringify(state.activeTasks))
      localStorage.setItem('finishedTasks', JSON.stringify(state.finishedTasks))
    },
    reorderTasks: (state, action) => {
      let movedItem;
      switch (action.payload.source.droppableId) {
        case 'incomplete':
          movedItem = state.incompleteTasks[action.payload.source.index]
          state.incompleteTasks.splice(action.payload.source.index, 1)
          state.incompleteTasks.splice(action.payload.destination.index, 0, movedItem)
          break;
        case 'active':
          movedItem = state.activeTasks[action.payload.source.index]
          state.activeTasks.splice(action.payload.source.index, 1)
          state.activeTasks.splice(action.payload.destination.index, 0, movedItem)
          break;
        case 'finished':
          movedItem = state.finishedTasks[action.payload.source.index]
          state.finishedTasks.splice(action.payload.source.index, 1)
          state.finishedTasks.splice(action.payload.destination.index, 0, movedItem)
          break;
      }

      localStorage.setItem('incompleteTasks', JSON.stringify(state.incompleteTasks))
      localStorage.setItem('activeTasks', JSON.stringify(state.activeTasks))
      localStorage.setItem('finishedTasks', JSON.stringify(state.finishedTasks))
    },
    deleteTask: (state, action) => {
      switch (action.payload.list) {
        case ('incompleteTasks'):
          state.incompleteTasks.splice(action.payload.index, 1)
          break;
        case ('activeTasks'):
          state.activeTasks.splice(action.payload.index, 1)
          break;
        case ('finishedTasks'):
          state.finishedTasks.splice(action.payload.index, 1)
          break;
      }

      state.allTasks.splice(action.payload.id, 1)

      localStorage.setItem('incompleteTasks', JSON.stringify(state.incompleteTasks))
      localStorage.setItem('activeTasks', JSON.stringify(state.activeTasks))
      localStorage.setItem('finishedTasks', JSON.stringify(state.finishedTasks))
      localStorage.setItem('allTasks', JSON.stringify(state.allTasks))
    },
    pageLoad: (state, action) => {
      state.incompleteTasks = JSON.parse(action.payload.incompleteTasks);
      state.activeTasks = JSON.parse(action.payload.activeTasks);
      state.finishedTasks = JSON.parse(action.payload.finishedTasks);
      state.allTasks = JSON.parse(action.payload.allTasks);
    }
  },
});

export const {
  setShowModal,
  setPriorityLevel,
  setTitleFieldValue,
  setDescriptionFieldValue,
  setNewTask,
  moveTask,
  reorderTasks,
  deleteTask,
  pageLoad
} = addTaskSlice.actions;

export default addTaskSlice.reducer;