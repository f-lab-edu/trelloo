import * as S from "./style";

function BoardSkeleton() {
  return (
    <S.Container>
      <S.CardListSkeleton height={280} variant="rounded" width={300} />
      <S.CardListSkeleton height={230} variant="rounded" width={300} />
      <S.CardListSkeleton height={300} variant="rounded" width={300} />
      <S.CardListSkeleton height={370} variant="rounded" width={300} />
    </S.Container>
  );
}

export default BoardSkeleton;
