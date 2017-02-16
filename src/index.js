"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var PercentageCircle = (function (_super) {
    __extends(PercentageCircle, _super);
    function PercentageCircle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PercentageCircle.prototype.getClassName = function () {
        return "percentage-circle pct" + this.props.percentage + " " + this.getColor();
    };
    PercentageCircle.prototype.getText = function () {
        return this.props.percentage + "%";
    };
    PercentageCircle.prototype.getColor = function () {
        if (this.props.percentage > 85) {
            return "green";
        }
        if (this.props.percentage > 45) {
            return "orange";
        }
        return "red";
    };
    PercentageCircle.prototype.render = function () {
        return (React.createElement("div", { className: this.getClassName() },
            React.createElement("span", null, this.getText()),
            React.createElement("div", { className: "slice" },
                React.createElement("div", { className: "above50" }),
                React.createElement("div", { className: "below50" }))));
    };
    return PercentageCircle;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PercentageCircle;
