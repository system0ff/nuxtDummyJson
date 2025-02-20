export interface Post {
  id: number,
  title: string,
  reactions: Reaction
}

export interface Reaction {
  likes: number,
  dislikes: number
}