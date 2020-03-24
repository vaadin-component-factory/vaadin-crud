import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import { PolymerElement } from '@polymer/polymer/polymer-element.js';
class CrudThemeDemos extends DemoReadyEventEmitter(CrudDemo(PolymerElement)) {
  static get template() {
    return html`
    <style include="vaadin-component-demo-shared-styles">
      :host {
        display: block;
      }
    </style>

    <h3>No border</h3>
    <p>Removes the border around the grid and the toolbar.</p>
    <vaadin-demo-snippet id="crud-theme-demos-no-border">
      <template preserve-content="">
        <vaadin-crud theme="no-border"></vaadin-crud>
        <script>
          window.addDemoReadyListener('#crud-theme-demos-no-border', function(document) {
            var crud = document.querySelector('vaadin-crud');
            fetch('users.json').then(function(response) {
              response.json().then(function(json) {
                crud.items = json;
              });
            });
          });
        &lt;/script>
      </template>
    </vaadin-demo-snippet>
`;
  }

  static get is() {
    return 'crud-theme-demos';
  }
}
customElements.define(CrudThemeDemos.is, CrudThemeDemos);
