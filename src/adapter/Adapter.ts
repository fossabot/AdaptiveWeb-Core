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

import { IAdapterContext } from './AdapterContext';
import { AdapterPreferenceSchema } from './AdapterPreferenceSchema';

/**
 * Adapters are adaptive modules to be injected into the page.
 */
export class Adapter {

    /**
     * The universally unique identifier (UUID) of this adapter.
     */
    uuid: string;
    /**
     * The name of the adapter.
     */
    name: string;
    /**
     * A user friendly description of this adapter.
     */
    description: string;
    /**
     * The version string.
     */
    version: string;
    /**
     * The preference schema for this adapter.
     */
    preferenceSchema: AdapterPreferenceSchema;
    /**
     * The script itself. Represented as a string to allow for an eval call after being injected into the page.
     */
    script: string = '';

    constructor(uuid: string,
                name: string,
                description: string,
                version: string,
                script: string,
                preferenceSchema: AdapterPreferenceSchema = {}
                ) {
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
    execute(aw: IAdapterContext) {
        (function(aw: IAdapterContext, rawScript: string, window: Window) { 
            eval(rawScript); 
        })(aw, this.script, window);
    }

    /**
     * Creates an instance of an Adapter from an object or string.
     * @param obj the object to initiate from. Can be either a JSON string or object.
     */
    static fromObject(obj: any): Adapter {
        if (typeof obj === 'string') obj = JSON.parse(obj);

        return new Adapter(obj.uuid, obj.name, obj.description, obj.version, obj.script, obj.preferenceSchema);
    }

}