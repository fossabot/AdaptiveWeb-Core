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

import { Wrapper } from "./wrapper";
import { Adapter } from "./adapter/Adapter";
import { AdapterContext } from './adapter/AdapterContext';

/**
 * Adapters are adaptive modules to be injected into the page.
 */
export default class AdaptiveWeb {

    wrapper: Wrapper;
    adapters: Adapter[] = [];

    constructor(wrapper: Wrapper) {
        this.wrapper = wrapper;
    }

    /**
     * Execute the attached adapters
     */
    executeAdapters() {
        this.adapters.forEach((executingAdapter: Adapter) => {
            const aw = new AdapterContext(this.wrapper, executingAdapter);
            executingAdapter.execute(aw);
        });
    }

    /**
     * Attaches an adapter
     * @param adapter the adapter to attach
     */
    attachAdapter(adapter: Adapter) {
        this.adapters.forEach((attachedAdapter: Adapter) => {
            if (attachedAdapter.uuid == adapter.uuid) {
                throw new Error('An adapter with the UUID ' + adapter.uuid + ' is already attached.');
            }
        });
        this.adapters.push(adapter);
    }

    /**
     * Detach an adapter
     * @param uuid the uuid of the adapter to detach
     */
    detachAdapter(uuid: string) {
        this.adapters = this.adapters.filter((adapter: Adapter) => {
            return adapter.uuid != uuid;
        });
    }

    /**
     * Sets the preferences for an adapter
     * @param uuid the uuid of the adapter
     * @param preferences the preferences to set
     */
    setAdapterPreferences(uuid: string, preferences: any) {
        this.wrapper.storage.set(uuid + '/preferences', preferences);
    }

}