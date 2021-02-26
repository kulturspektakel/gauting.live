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
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
          scrolling="no"
          allow="encrypted-media"
          src={`https://www.youtube.com/embed/${id}?autoplay=${
            autoPlay ? "1" : "0"
          }&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&vq=hd1080`}
        />
      </div>
    </div>
  );
}
