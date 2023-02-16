// Copyright (C) 2021 The Android Open Source Project
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {css, html, LitElement} from 'lit';

const COPY_TIMEOUT_MS = 1000;

export const REF_COPY = 'ref-copy';
class RefCopy extends LitElement {
  static get properties() {
    return {
      revision: {type: Object}
    };
  }

  static get styles() {
    return css`
    .text {
      min-width: 8em;
      padding: var(--spacing-l);
      text-transform: none;
    }
    `;
  }

  render() {
    return html`
    <div class="text">
      <iron-input
          bind-value="${this.revision.ref}"
          readonly>
        <input
            id="input"
            is="iron-input"
            type="text"
            @click="${this._handleInputTap}"
            readonly/>
      </iron-input>
      <gr-button
        id="button"
        link
        class="copyToClipboard"
        @click="${this._copyToClipboard}">
        copy
      </gr-button>
    </div>`;
  }

  _handleInputTap(e) {
    e.preventDefault();
    const rootTarget = e.composedPath()[0];
    rootTarget.select();
  }

  _copyToClipboard(e) {
    const ref = this.revision.ref;
    const copyBtn = e.target;
    if (ref) {
      navigator.clipboard.writeText(ref).then(() => {
        copyBtn.innerText = 'done';
        setTimeout(() => {
          copyBtn.innerText = 'copy'
        }, COPY_TIMEOUT_MS);
      }).catch(err => {
        console.log('Failed to copy ref to clipboard', err);
      })
    }
  }
}

customElements.define(REF_COPY, RefCopy);
