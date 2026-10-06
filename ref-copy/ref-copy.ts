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
import {customElement, property} from 'lit/decorators.js';
import {RevisionInfo} from '@gerritcodereview/typescript-api/rest-api';

const COPY_TIMEOUT_MS = 1000;

@customElement('ref-copy')
export class RefCopy extends LitElement {
  @property({type: Object})
  revision!: RevisionInfo;

  static override get styles() {
    return [
      css`
        .text {
          min-width: 8em;
          padding: var(--spacing-l);
          text-transform: none;
        }
      `
    ];
  }

  override render() {
    return html`
      <div class="text">
        <input
          id="input"
          type="text"
          .value="${this.revision.ref}"
          @click=${(e: InputEvent) => this.handleInputTap(e)}
          readonly
        />
        <gr-button
          id="button"
          link
          class="copyToClipboard"
          @click=${(e: Event) => this.copyToClipboard(e)}>
          copy
        </gr-button>
      </div>`;
  }

  private handleInputTap(e: InputEvent) {
    e.preventDefault();
    const rootTarget = e.composedPath()[0] as HTMLInputElement;
    rootTarget.select();
  }

  private copyToClipboard(e: Event) {
    const ref = this.revision.ref;
    const copyBtn = e.target as HTMLButtonElement;
    if (ref) {
      navigator.clipboard.writeText(ref).then(() => {
        copyBtn!.innerText = 'done';
        setTimeout(() => {
          copyBtn!.innerText = 'copy'
        }, COPY_TIMEOUT_MS);
      }).catch(err => {
        console.log('Failed to copy ref to clipboard', err);
      })
    }
  }
}
