import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { sub } from "date-fns";
import { RootStore } from "../../app/store";

export type ReactionType = "thumbsUp" | "wow" | "heart" | "rocket" | "coffee";

export interface IReactions {
  thumbsUp: number;
  wow: number;
  heart: number;
  rocket: number;
  coffee: number;
}

export interface IPost {
  id: string;
  title: string;
  content: string;
  userId: string;
  date: string;
  reactions: IReactions;
}

const reactions: IReactions = {
  thumbsUp: 0,
  wow: 0,
  heart: 0,
  rocket: 0,
  coffee: 0
};

const initialState: IPost[] = [
  {
    id: "1",
    title: "Learnig Redux toolKit",
    content: "I have heard good things.",
    userId: "1",
    date: sub(Date.now(), { minutes: 10 }).toISOString(),
    reactions
  },
  {
    id: "2",
    title: "Slice ...",
    content: "The more i say slice, the more i want Pizza.",
    userId: "1",
    date: sub(Date.now(), { minutes: 5 }).toISOString(),
    reactions
  }
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer: (state, action: PayloadAction<IPost>) => {
        state.push(action.payload);
      },
      prepare: (title: string, content: string, userId: string) => {
        const id = nanoid();
        const date = new Date().toISOString();
        return {
          payload: { id, title, content, userId, date, reactions }
        };
      }
    },
    updateReaction: (
      state,
      action: PayloadAction<{ reaction: ReactionType; postId: string }>
    ) => {
      const { reaction, postId } = action.payload;
      const post = state.find((post) => post.id === postId);
      if (post) {
        post.reactions[reaction]++;
      }
    }
  }
});

export const selectAllPosts = (state: RootStore) =>
  state.posts
    .slice()
    .sort((a: IPost, b: IPost) => b.date.localeCompare(a.date));

export const { addPost, updateReaction } = postsSlice.actions;

export default postsSlice.reducer;
