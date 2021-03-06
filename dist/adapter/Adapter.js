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
 * Adapters are adaptive modules to be injected into the page.
 */
class Adapter {
    constructor(uuid, name, description, version, script, preferenceSchema = {}) {
        /**
         * The script itself. Represented as a string to allow for an eval call after being injected into the page.
         */
        this.script = '';
        this.uuid = uuid;
        this.name = name;
        this.description = description;
        this.version = version;
        this.script = script;
        this.preferenceSchema = preferenceSchema;
    }
    /**
     * Executes the adapter code.
     */
    execute(aw) {
        (function (aw, rawScript, window) {
            eval(rawScript);
        })(aw, this.script, window);
    }
    /**
     * Creates an instance of an Adapter from an object or string.
     * @param obj the object to initiate from. Can be either a JSON string or object.
     */
    static fromObject(obj) {
        if (typeof obj === 'string')
            obj = JSON.parse(obj);
        return new Adapter(obj.uuid, obj.name, obj.description, obj.version, obj.script, obj.preferenceSchema);
    }
}
exports.Adapter = Adapter;
//# sourceMappingURL=Adapter.js.map