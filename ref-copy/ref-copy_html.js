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

export const htmlTemplate = Polymer.html`
<style>
  .text {
    min-width: 8em;
    padding: var(--spacing-l);
    text-transform: none;
  }
</style>
<div class="text">
  <iron-input
      bind-value="{{revision.ref}}"
      readonly>
    <input
        id="input"
        is="iron-input"
        type="text"
        on-tap="_handleInputTap"
        bind-value="{{revision.ref}}"
        readonly/>
  </iron-input>
  <gr-button
    id="button"
    link
    class="copyToClipboard"
    on-tap="_copyToClipboard">
    copy
  </gr-button>
</div>
<gr-js-api-interface id="jsAPI"></gr-js-api-interface>`;
