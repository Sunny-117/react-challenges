import React, { Component } from "react";
import ctx from "./formContext";

//一定处于上下文中
export default class FormInput extends Component {
    static contextType = ctx;

    static defaultProps = {
        type: "text",
    };

    render() {
        return (
            // 变成受控
            <input
                value={this.context.formData[this.props.name] || ""} // 如果不||""就会之前是undefined不受控，后来受控，导致报错，所以需要让之前的数据不能是undefined
                onChange={(e) => {
                    this.context.changeFormData(this.props.name, e.target.value);
                }}
                type={this.props.type}
            />
        );
    }
}
