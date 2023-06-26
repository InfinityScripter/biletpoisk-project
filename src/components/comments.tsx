import Comment from "@/components/comment";

type AllCommentsInMovieListProps = {
  allComments: CommentsType[] | undefined;
};

export default function AllCommentsInMovieList({
  allComments,
}: AllCommentsInMovieListProps) {
  return (
    <section className="gap">
      {allComments ? (
        allComments.map((review: CommentsType) => {
          return <Comment key={review.id} comment={review} />;
        })
      ) : (
        <div>Нет отзывов. Оставьте первый!</div>
      )}
    </section>
  );
}
