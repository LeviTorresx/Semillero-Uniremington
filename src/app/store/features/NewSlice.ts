import { createSlice } from "@reduxjs/toolkit";
import { News } from "@/app/types/New";
import { approveNewsThunk, createNewsThunk, editNewsThunk, fetchNews } from "../thunks/NewsThunks";


interface NewsState {
  news: News[];
  loading: boolean;
  error: string | null;
}

const initialState: NewsState = {
  news: [],
  loading: false,
  error: null,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // 🔹 Fetch all news
    builder.addCase(fetchNews.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.loading = false;
      state.news = action.payload;
    });
    builder.addCase(fetchNews.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Error fetching news";
    });

    // 🔹 Create news
    builder.addCase(createNewsThunk.fulfilled, (state, action) => {
      state.news.push(action.payload);
    });

    // 🔹 Edit news
    builder.addCase(editNewsThunk.fulfilled, (state, action) => {
      const index = state.news.findIndex((n) => n.newId === action.payload.newId);
      if (index !== -1) {
        state.news[index] = action.payload;
      }
    })
     .addCase(approveNewsThunk
      .fulfilled, (state, action) => {
      const { newId } = action.payload;
      const news = state.news.find((n) => n.newId === newId);
      if (news) {
        news.valid = true; // marcamos como aprobada
      }
    })
    .addCase(approveNewsThunk.rejected, (state, action) => {
      state.error = action.payload as string;
    });
   
  },
});

export default newsSlice.reducer;
