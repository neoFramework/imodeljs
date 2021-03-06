/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Frontstage */

import { CommandItemDef } from "../shared/Item";
import { FrontstageManager } from "./FrontstageManager";

/** Nested Frontstage related classes and commands */
export class NestedFrontstage {
  /** Command that returns to the previous Frontstage */
  public static get backToPreviousFrontstageCommand() {
    return new CommandItemDef({
      commandId: "backToPreviousFrontstage",
      iconSpec: "icon-progress-backward",
      labelKey: "UiFramework:commands.backToPreviousFrontstage",
      execute: async () => {
        await FrontstageManager.closeNestedFrontstage();
      },
    });
  }
}
