import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProjects } from "../../api/mockApi";

export const loadProjects = createAsyncThunk(
  "projects/loadProjects",
  async () => {
    const projects = await fetchProjects();
    return projects;
  },
);

const projectSlice = createSlice({
  name: "projects",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadProjects.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadProjects.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(loadProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default projectSlice.reducer;
