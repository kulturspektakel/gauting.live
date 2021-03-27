import { useEffect, useState } from "react";

export default function Video(
  props:
    | {
        id: string;
        page: string;
        autoPlay?: boolean;
        service: "facebook";
        thumbnail?: string;
      }
    | {
        id: string;
        autoPlay?: boolean;
        service: "youtube";
        openExternal?: boolean;
        title?: string;
        thumbnail?: string;
      }
) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, [setMounted]);

  const [playVideo, setPlayVideo] = useState(false);
  const autoPlay = playVideo || props.autoPlay;
  let content = null;

  if (props.thumbnail && !playVideo) {
    content = (
      <a
        className="clickableArea"
        title="Video abspielen"
        onClick={() => setPlayVideo(true)}
      >
        <img src={props.thumbnail} className="thumbnail" />
        <img src="/play.png" className="play" width="73" height="73" />
      </a>
    );
  } else if (props.service === "youtube" && props.openExternal) {
    content = (
      <a
        href={`https://www.youtube.com/watch?v=${props.id}`}
        target="_blank"
        className="clickableArea"
        title="Video abspielen"
      >
        <img src="/vid.gif" className="backgroundVid" />
        <span className="liveBadge">live</span>
        {props.title && <h3 className="liveTitle">{props.title}</h3>}
        <img src="/play.png" className="play" width="73" height="73" />
      </a>
    );
  } else if (mounted) {
    content = (
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen
        scrolling="no"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        src={
          props.service === "youtube"
            ? `https://www.youtube-nocookie.com/embed/${props.id}?autoplay=${
                autoPlay ? "1" : "0"
              }&fs=1&iv_load_policy=3&showinfo=0&rel=0&modestbranding=1&cc_load_policy=0&vq=hd1080`
            : `https://www.facebook.com/plugins/video.php?autoplay=${
                autoPlay ? "true" : "false"
              }&href=https%3A%2F%2Fwww.facebook.com%2F${props.page}/videos/${
                props.id
              }%2F`
        }
      />
    );
  }

  return (
    <div className="video">
      {mounted && <div className="videoInner">{content}</div>}
    </div>
  );
}
