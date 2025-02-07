import React from 'react';
import Admonition from '@theme-original/Admonition';
import '../css/custom.css'; // Import the existing custom CSS file
import CustomIcon from '@site/static/img/cropped-OWWL-favicon-1-32x32.png'; // Import your custom icon

export default function AdmonitionWrapper(props) {
  if (props.type === 'note') {
    const title = props.title || "OWWL Policy / Recommendation";
    return (
      <Admonition
        {...props}
        title={title}
        icon={<img src={CustomIcon} alt="OWWL Logo" />}
        className="custom-note-admonition"
      >
        {props.children}
      </Admonition>
    );
  }
  return <Admonition {...props} />;
}