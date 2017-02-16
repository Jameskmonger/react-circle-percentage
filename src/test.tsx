import { Expect, TestFixture, Test, TestCase } from "alsatian";
import { shallow } from "enzyme";
import PercentageCircle from "./index";

import * as React from "react";

@TestFixture("<PercentageCircle />")
export class PercentageCircleTests {

  @Test()
  public hasCorrectStructure() {
    let wrapper = shallow(<PercentageCircle percentage={50} />);

    Expect(wrapper.containsMatchingElement(
      <div className="slice">
        <div className="above50"></div>
        <div className="below50"></div>
      </div>)).toBe(true);
  }

  @TestCase(50)
  @TestCase(25)
  @TestCase(17)
  @TestCase(100)
  @TestCase(99)
  public hasCorrectNumberClass(percentage: number) {
    let wrapper = shallow(<PercentageCircle percentage={percentage} />);

    let expectedClass = `pct${percentage}`;

    Expect(wrapper.first().hasClass(expectedClass)).toBe(true);
  }

  @TestCase(50, "orange")
  @TestCase(25, "red")
  @TestCase(17, "red")
  @TestCase(100, "green")
  @TestCase(99, "green")
  public hasCorrectColorClass(percentage: number, expectedClass: string) {
    let wrapper = shallow(<PercentageCircle percentage={percentage} />);

    Expect(wrapper.first().hasClass(expectedClass)).toBe(true);
  }

  @TestCase(50)
  @TestCase(25)
  @TestCase(17)
  @TestCase(100)
  @TestCase(99)
  public hasCorrectLabel(percentage: number) {
    let wrapper = shallow(<PercentageCircle percentage={percentage} />);

    Expect(wrapper.first().contains(<span>{ `${percentage}%` }</span>)).toBe(true);
  }

}
