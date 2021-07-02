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

import {htmlTemplate} from './ref-copy_html';

const COPY_TIMEOUT_MS = 1000;

class RefCopy extends Polymer.Element {

  static get is() { return 'ref-copy'; }

  static get template() { return htmlTemplate; }

  static get properties() {
    return {
      revision: Object,
    };
  }

  _handleInputTap(e) {
    e.preventDefault();
    Polymer.dom(e).rootTarget.select();
  }

  _copyToClipboard(e) {
    const ref = this.$.input.value;
    const copyBtn = e.target;
    if (ref) {
      navigator.clipboard.writeText(ref).then(() => {
        copyBtn.innerText = 'done';
        setTimeout(() => {
          copyBtn.innerText = 'copy'}, COPY_TIMEOUT_MS);
        }).catch(err => {
          console.log('Failed to copy ref to clipboard', err);
        })
    }
  }
}

customElements.define(RefCopy.is, RefCopy);
