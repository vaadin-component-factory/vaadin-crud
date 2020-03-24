import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import { PolymerElement } from '@polymer/polymer/polymer-element.js';
class CrudEditorPositionDemos extends DemoReadyEventEmitter(CrudDemo(PolymerElement)) {
  static get template() {
    return html`
    <style include="vaadin-component-demo-shared-styles">
      :host {
        display: block;
      }
    </style>

    <p>
      By default, on desktop, editor will be opened as dialog.
    </p>
    <p>
      The editor position can be also set to open below and aside the grid.
    </p>
    <p>
      <strong>NOTE:</strong> On mobile, editor always opens as a fullscreen dialog.
    </p>

    <h3>Editor below the grid</h3>
    <p><code>&lt;vaadin-crud <strong>editor-position="bottom"&gt;</strong></code></p>
    <p></p>
    <vaadin-demo-snippet id="crud-editor-position-demos-bottom">
      <template preserve-content="">
        <vaadin-crud editor-position="bottom" style="height: 600px;"></vaadin-crud>
        <script>
          window.addDemoReadyListener('#crud-editor-position-demos-bottom', function(document) {
            /* window.users is an array of objects with the following structure:
            [{
              _id: '…',
              name: {first: '…', last: '…'},
              details: {picture: '', email: '…'},
              password: '…',
              role: '…'
            }, ... ] */
            document.querySelector('vaadin-crud').items = window.users;
          });
        &lt;/script>
      </template>
    </vaadin-demo-snippet>

    <h3>Editor aside the grid</h3>
    <p><code>&lt;vaadin-crud <strong>editor-position="aside"&gt;</strong></code></p>
    <p></p>
    <vaadin-demo-snippet id="crud-editor-position-demos-aside">
      <template preserve-content="">
        <vaadin-crud editor-position="aside" style="height: 600px;"></vaadin-crud>
        <script>
          window.addDemoReadyListener('#crud-editor-position-demos-aside', function(document) {
            /* window.users is an array of objects with the following structure:
            [{
              _id: '…',
              name: {first: '…', last: '…'},
              details: {picture: '', email: '…'},
              password: '…',
              role: '…'
            }, ... ] */
            document.querySelector('vaadin-crud').items = window.users;
          });
        &lt;/script>
      </template>
    </vaadin-demo-snippet>
`;
  }

  static get is() {
    return 'crud-editor-position-demos';
  }
}
customElements.define(CrudEditorPositionDemos.is, CrudEditorPositionDemos);
