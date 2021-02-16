import { detect } from "detect-browser";

export default function Video({
  id,
  autoPlay,
  page,
}: {
  id: string;
  autoPlay?: boolean;
  page: string;
}) {
  const browser = detect();
  const linkExternal =
    browser?.name === "edge" ||
    (browser?.name === "safari" && browser.os === "Mac OS");
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
          src={`https://www.facebook.com/plugins/video.php?autoplay=${
            autoPlay ? "true" : "false"
          }&href=https%3A%2F%2Fwww.facebook.com%2F${page}%2Fvideos%2F${id}%2F`}
        />

        {!autoPlay && linkExternal && (
          <a
            className="openVideo"
            href={`https://fb.com/${id}`}
            target="_blank"
          />
        )}
      </div>
    </div>
  );
}
