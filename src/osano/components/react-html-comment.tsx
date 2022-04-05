import React, { useEffect } from 'react';

type DataStructure = { text: string };

const HTMLComment = ({ text }: DataStructure ) => {
  const ref = React.createRef<HTMLElement>();

  useEffect(() => {
    let placeholder : HTMLElement | null = null;
    let parent : Node | null = null;
    let comment : Comment | null = null;

    if (ref.current) {
      placeholder = ref.current;
      parent = placeholder.parentNode;
      comment = document.createComment(` ${text.trim()} `);
      try {
        if (parent && parent.contains(placeholder)) {
          parent.replaceChild(comment, placeholder);
        }
      } catch (err) {
        console.error(err);
      }
    }

    return () => {
      if(parent && placeholder && comment) {
        parent.replaceChild(placeholder, comment)
      }
    }
  }, []);

  return <span ref={ref} style={{ display: 'none' }} />;
};

export default HTMLComment;