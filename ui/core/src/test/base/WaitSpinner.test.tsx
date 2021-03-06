/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
import { mount, shallow } from "enzyme";
import * as React from "react";
import { WaitSpinner } from "../../ui-core";

describe("WaitSpinner", () => {

  it("should render", () => {
    mount(<WaitSpinner />);
  });

  it("renders correctly", () => {
    shallow(<WaitSpinner />).should.matchSnapshot();
  });

});
