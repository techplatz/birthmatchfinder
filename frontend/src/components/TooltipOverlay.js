import React, { useState, useRef } from 'react';
import { Overlay, Tooltip, Button } from 'react-bootstrap';

const TooltipOverlay = (props) => {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <>
      <Button
        className=" btn btn-circle"
        ref={target}
        onClick={() => setShow(!show)}
      >
        <i className="fas fa-question btn-circle-icon"></i>
      </Button>
      <Overlay target={target.current} show={show} placement="bottom">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            <strong>
              Your date of birth is needed for the system to recommend your
              birthday mates.
            </strong>{' '}
            You can change who sees your Year of birth on your profile later.
          </Tooltip>
        )}
      </Overlay>
    </>
  );
};

export default TooltipOverlay;
