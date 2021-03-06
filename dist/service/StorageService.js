"use strict";
/**
 *  Copyright 2019 The Adaptive Web. All Rights Reserved.
 *
 *  Licensed under the Mozilla Public License 2.0 (the "License").
 *  You may not use this file except in compliance with the License.
 *  A copy of the License is located at
 *
 *      https://www.mozilla.org/en-US/MPL/2.0/
 *
 *  or in the "license" file accompanying this file. This file is distributed
 *  on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 *  express or implied. See the License for the specific language governing
 *  permissions and limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The type of storage available
 */
var StorageType;
(function (StorageType) {
    /**
     * Sync allows for storage of data across devices, such as sharing
     * between desktop and mobile. Sync is preferred to local storage.
     */
    StorageType[StorageType["SYNC"] = 0] = "SYNC";
    /**
     * Local storage saves only to this installation of the browser/device.
     */
    StorageType[StorageType["LOCAL"] = 1] = "LOCAL";
})(StorageType = exports.StorageType || (exports.StorageType = {}));
//# sourceMappingURL=StorageService.js.map