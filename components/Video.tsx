export default function Video({ url }: { url: string }) {
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
          src={url}
        />
      </div>
    </div>
  );
}
