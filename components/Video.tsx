export default function Video({
  id,
  autoPlay,
}: {
  id?: string;
  autoPlay?: boolean;
}) {
  return (
    <div className="video">
      <div className="videoInner">
        <a href={`https://www.youtube.com/watch?v=${id}`}>▶︎ Play</a>
      </div>
    </div>
  );
}
