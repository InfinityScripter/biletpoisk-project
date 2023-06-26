interface MovieType {
  title: string;
  posterUrl: string;
  description: string;
  releaseYear: number;
  genre: string;
  id: string;
  rating: number;
  director: string;
  reviewIds: string[];
}

interface CommentsType {
  id: string;
  name: string;
  text: string;
  rating: number;
}

interface CinemaType {
  id: string;
  name: string;
}

interface SearchType {
  title: string;
  genre: string;
  cinema: string;
}

interface SearchActionType {
  type: string;
  payload: string;
}
