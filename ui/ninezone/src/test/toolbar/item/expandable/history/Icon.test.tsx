/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
import { mount, shallow } from "enzyme";
import * as React from "react";

import { HistoryIcon } from "../../../../../ui-ninezone";

describe("<HistoryIcon />", () => {
  it("should render", () => {
    mount(<HistoryIcon />);
  });

  it("renders correctly", () => {
    shallow(<HistoryIcon />).should.matchSnapshot();
  });
});
