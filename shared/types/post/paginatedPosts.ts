import type { PaginatedResult } from "../paginatedResult"
import type { Post } from "./post"

export interface PaginatedPosts extends PaginatedResult {
  posts: Post[]
}