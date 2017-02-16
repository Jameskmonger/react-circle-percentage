import * as React from "react";

interface PercentageCircleProps {
  percentage: number;
}

export default class PercentageCircle extends React.Component<PercentageCircleProps, {}> {
  private getClassName() {
    return `percentage-circle pct${ this.props.percentage } ${ this.getColor() }`;
  }

  private getText() {
    return `${this.props.percentage}%`;
  }

  private getColor() {
    if (this.props.percentage > 85) {
      return "green";
    }

    if (this.props.percentage > 45) {
      return "orange";
    }

    return "red";
  }

  public render() {
    return (
      <div className={ this.getClassName() }>
        <span>{ this.getText() }</span>
        <div className="slice">
          <div className="above50"></div>
          <div className="below50"></div>
        </div>
      </div>
    );
  }
}
