import Embed from '@editorjs/embed'
import Table from '@editorjs/table'
import List from '@editorjs/list'
import LinkTool from '@editorjs/link'
import Image from '@editorjs/image'
import Header from '@editorjs/header'
import Marker from '@editorjs/marker'
import CheckList from '@editorjs/checklist'
import Delimiter from '@editorjs/delimiter'
import InlineCode from '@editorjs/inline-code'
import SimpleImage from '@editorjs/simple-image'
import InlineImage from 'editorjs-inline-image';
import Underline from '@editorjs/underline'
import Alert from 'editorjs-alert';
import ImageGallery from '@rodrigoodhin/editorjs-image-gallery'
import editorjsCodeflask from '@calumk/editorjs-codeflask';

export const EDITOR_JS_TOOLS = {
  header: {
    class: Header,
    config: {
      levels: [1, 2, 3],
      defaultLevel: 3,
    }
  },
  list: {
    class: List,
    inlineToolbar: true,
    config: {
      defaultStyle: 'unordered'
    }
  },
  delimiter: Delimiter,
  underline: Underline,
  table: {
    class: Table,
    inlineToolbar: true,
    config: {
      rows: 2,
      cols: 2,
    },
  },
  embed: {
    class: Embed,
    config: {
      services: {
        youtube: true,
        coub: true,
        imgur: true,
        codepen: true,
        instagram: true,
        facebook: true,
        twitter: true
      }
    }
  },
  image: InlineImage,
  alert: Alert,
  checkList: {
    class: CheckList,
    inlineToolbar: true,
  },
}
