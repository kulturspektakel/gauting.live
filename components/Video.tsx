import React from "react";
import { useEffect, useState } from "react";
import Modal from "react-overlays/Modal";
import { Transition, TransitionStatus } from "react-transition-group";

export default function Video(
  props:
    | {
        id?: string;
        page: string;
        autoPlay?: boolean;
        service: "facebook";
        thumbnail?: string;
      }
    | {
        id?: string;
        autoPlay?: boolean;
        service: "youtube";
        openExternal?: boolean;
        title?: string;
        thumbnail?: string;
      }
) {
  const [playVideo, setPlayVideo] = useState(false);
  const autoPlay = playVideo || props.autoPlay;

  return (
    <div className="video">
      <Modal
        transition={Fade}
        backdropTransition={Fade}
        show={playVideo}
        onHide={() => setPlayVideo(false)}
        className="modal"
        renderBackdrop={() => (
          <div className="backdrop" onClick={() => setPlayVideo(false)} />
        )}
      >
        <div className="videoModal">
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
                    autoPlay ? "1" : "0"
                  }&fs=1&iv_load_policy=3&showinfo=0&rel=0&modestbranding=1&cc_load_policy=0&vq=hd1080`
                : `https://www.facebook.com/plugins/video.php?autoplay=${
                    autoPlay ? "true" : "false"
                  }&href=https%3A%2F%2Fwww.facebook.com%2F${
                    props.page
                  }/videos/${props.id}%2F`
            }
          />
        </div>
      </Modal>
      <div className="videoInner">
        {!props.id ? (
          <span className="clickableArea">
            <img src={props.thumbnail} className="thumbnail" />
          </span>
        ) : (
          <a
            className="clickableArea"
            title="Video abspielen"
            onClick={() => setPlayVideo(true)}
          >
            <img src={props.thumbnail} className="thumbnail" />
            <img src="/play.png" className="play" width="73" height="73" />
          </a>
        )}
      </div>
    </div>
  );
}

const fadeStyles: Record<TransitionStatus, string> = {
  entering: "show",
  entered: "show",
  exiting: "",
  exited: "",
  unmounted: "",
};

const Fade = ({ children, ...props }: any) => (
  <Transition {...props} timeout={200}>
    {(status: TransitionStatus, innerProps: any) =>
      React.cloneElement(children, {
        ...innerProps,
        className: `fade ${fadeStyles[status]} ${children.props.className}`,
      })
    }
  </Transition>
);
