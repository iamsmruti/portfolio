import { default as React, useEffect, useRef } from 'react';
import EditorJS from '@editorjs/editorjs';
import { EDITOR_JS_TOOLS } from './tools';


const ResultComponent = ({data}) => {
  const ejInstance = useRef();
 
  // This will run only once
  useEffect(() => {
    if (!ejInstance.current && data !== undefined) {
      initEditor();
    }
  }, [data]);

  const initEditor = () => {
    const editor = new EditorJS({
      holder: "ResultRoot",
      logLevel: "ERROR",
      
      data: data,
      onReady: () => {
        ejInstance.current = editor;
      },
      autofocus: true,
      readOnly: true,
      tools: EDITOR_JS_TOOLS
    });
  };
  
  return (
    <>
      <div id="ResultRoot" className=""/>
    </>
  )
}

export default ResultComponent

