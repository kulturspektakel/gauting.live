import { detect } from "detect-browser";

export default function Video(props: {
  id?: string;
  autoPlay?: boolean;
  page?: string;
  url?: string;
}) {
  const url =
    props.url ??
    `https://www.facebook.com/plugins/video.php?autoplay=${
      props.autoPlay ? "true" : "false"
    }&href=https%3A%2F%2Fwww.facebook.com%2F${props.page}%2Fvideos%2F${
      props.id
    }%2F`;

  const browser = detect();
  const linkExternal =
    props.id &&
    (browser?.name === "edge" ||
      (browser?.name === "safari" && browser.os === "Mac OS"));
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

        {!props.autoPlay && linkExternal && (
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
