import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

import $ from 'jquery';

import 'tinymce/tinymce';
import 'tinymce/icons/default';
import 'tinymce/themes/silver';
import 'tinymce/plugins/advlist';
import 'tinymce/plugins/autolink';
import 'tinymce/plugins/paste';
import 'tinymce/plugins/link';

import 'tinymce/plugins/searchreplace';
import 'tinymce/plugins/visualblocks';
import 'tinymce/plugins/code';
import 'tinymce/plugins/fullscreen';

import 'tinymce/plugins/insertdatetime';
import 'tinymce/plugins/media';
import 'tinymce/plugins/table';
import 'tinymce/plugins/paste';
import 'tinymce/plugins/help';
import 'tinymce/plugins/wordcount';


import 'tinymce/plugins/lists';
import 'tinymce/plugins/link';
import 'tinymce/plugins/image';
import 'tinymce/plugins/charmap';
import 'tinymce/plugins/print';
import 'tinymce/plugins/preview';
import 'tinymce/plugins/anchor';
import 'tinymce/plugins/emoticons/js/emojis.min';
import 'tinymce/plugins/emoticons';


import 'tinymce/plugins/image';
import 'tinymce/plugins/table';
import 'tinymce/skins/ui/oxide/skin.min.css';
import 'tinymce/skins/ui/oxide/content.min.css';
import 'tinymce/skins/content/default/content.min.css';

import './tinyeditor.css';

// Load the file that contains common imports between demos. (functions, styles, etc)
//import * as Generic from 'resources/demos/react-imports';

// Import the wiris plugin version.
//import { version as pluginVersion } from '@wiris/mathtype-tinymce5/package.json';

window.$ = $;
window.tinymce = require('tinymce');
require('@wiris/mathtype-tinymce5');

// document.getElementById('header_title_name').innerHTML = 'Mathtype for TinyMCE';
// document.getElementById('version_editor').innerHTML = 'TinyMCE editor: ';


const content = '<p class="text"> Double click on the following formula to edit it.</p><p style="text-align:center;"><math><mi>z</mi><mo>=</mo><mfrac><mrow><mo>-</mo><mi>b</mi><mo>&PlusMinus;</mo><msqrt><msup><mi>b</mi><mn>3</mn></msup><mo>-</mo><mn>4</mn><mi>a</mi><mi>c</mi></msqrt></mrow><mrow><mn>2</mn><mi>a</mi></mrow></mfrac></math></p>';
//document.getElementById('transform_content').innerHTML = content;

// Add listener on click button to launch updateContent function.
// document.getElementById('btn_update').addEventListener('click', (e) => {
//   e.preventDefault();
//   Generic.updateContent(tinyMCE.activeEditor.getContent(), 'transform_content');            //eslint-disable-line
// });

const options = {
  skin: false,

  paste_data_images: true,

  content_css: false,

  height: 500,
  //menubar: false,
  menubar: 'file edit view insert format tools table tc help',

  // Add wiris plugin
  external_plugins: {
      //'tiny_mce_wiris' : `${window.location.href}/node_modules/@wiris/mathtype-tinymce5/plugin.min.js`
      'tiny_mce_wiris' : `https://www.wiris.net/demo/plugins/tiny_mce/plugin.js`
  },
  plugins: [
      'advlist autolink lists link image charmap print preview anchor emoticons ',
      'searchreplace visualblocks code fullscreen ',
      'insertdatetime media table paste code help wordcount '
  ],
  toolbar: [
      ' bold italic underline strikethrough | ' +
      ' alignleft aligncenter alignright alignjustify | ' + 
      ' forecolor backcolor casechange permanentpen formatpainter removeformat | ' +
      ' fontselect fontsizeselect formatselect | ' + 
      ' bullist numlist outdent indent | removeformat emoticons | ' + 
      ' tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry '
  ],
  templates: [
    { title: 'New Table', description: 'creates a new table', content: '<div class="mceTmpl"><table width="98%%"  border="0" cellspacing="0" cellpadding="0"><tr><th scope="col"> </th><th scope="col"> </th></tr><tr><td> </td><td> </td></tr></table></div>' },
    { title: 'Starting my story', description: 'A cure for writers block', content: 'Once upon a time...' },
    { title: 'New list with dates', description: 'New List with dates', content: '<div class="mceTmpl"><span class="cdate">cdate</span><br /><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>' }
    ],
  htmlAllowedTags:  ['.*'],
  htmlAllowedAttrs: ['.*'],
  // Handle events.
  setup(editor) {
    // Launch on init event.
    editor.on('init', () => {
      // Get and set the editor and wiris versions in this order.
      //Generic.setEditorAndWirisVersion(`${tinymce.majorVersion}.${tinymce.minorVersion}`, pluginVersion);   //eslint-disable-line
    });
  },
};


export function EditorTiny(props) {
  return (
    <Editor init ={ options } initialValue = { content } />
  );
}


// class EditorTiny extends React.Component {
//   render() {
//       return (
//           <Editor init ={ options } initialValue = { content } />
//       );
//   }
// }

export default EditorTiny;

//export default Editor;
