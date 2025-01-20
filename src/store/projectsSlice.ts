import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    link: string;
}

interface ProjectsState {
    items: Project[];
}

const initialState: ProjectsState = {
    items: [],
};

const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        setProjects(state, action: PayloadAction<Project[]>) {
            state.items = action.payload;
        },
        addProject(state, action: PayloadAction<Project>) {
            state.items.push(action.payload);
        },
        removeProject(state, action: PayloadAction<number>) {
            state.items = state.items.filter((project) => project.id !== action.payload);
        },
    },
});

export const { setProjects, addProject, removeProject } = projectsSlice.actions;
export default projectsSlice.reducer;
