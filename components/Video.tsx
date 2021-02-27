import { useEffect, useState } from "react";

export default function Video(
  props:
    | {
        id: string;
        page: string;
        autoPlay?: boolean;
        service: "facebook";
      }
    | {
        id: string;
        autoPlay?: boolean;
        service: "youtube";
        openExternal?: boolean;
        title?: string;
      }
) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, [setMounted]);

  return (
    <div className="video">
      {mounted && (
        <div className="videoInner">
          {props.service === "youtube" && props.openExternal ? (
            <a
              href={`https://www.youtube.com/watch?v=${props.id}`}
              target="_blank"
              className="openExternal"
              title="Video abspielen"
            >
              <img src="/vid.gif" className="backgroundVid" />
              <span className="liveBadge">live</span>
              {props.title && <h3 className="liveTitle">{props.title}</h3>}
              <img src="/play.png" className="play" width="73" height="73" />
            </a>
          ) : (
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              scrolling="no"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              src={
                props.service === "youtube"
                  ? `https://www.youtube-nocookie.com/embed/${
                      props.id
                    }?autoplay=${
                      props.autoPlay ? "1" : "0"
                    }&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&vq=hd1080`
                  : `https://www.facebook.com/plugins/video.php?autoplay=${
                      props.autoPlay ? "true" : "false"
                    }&href=https%3A%2F%2Fwww.facebook.com%2F${
                      props.page
                    }/videos/${props.id}%2F`
              }
            />
          )}
        </div>
      )}
    </div>
  );
}
