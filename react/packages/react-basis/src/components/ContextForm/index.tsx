import React, { Component } from "react";
import { Provider } from "./formContext";
import FormInput from "./FormInput";
import FormButton from "./FormButton";

export default class Form extends Component {
    state = {
        formData: {}, //表单数据对象
        //修改formData中的数据
        changeFormData: (name: any, val: any) => {
            this.setState({
                // 重新给状态复制，只覆盖name
                formData: {
                    ...this.state.formData,
                    [name]: val,
                },
            });
        },
        submit: () => {
            this.props.onSubmit && this.props.onSubmit(this.state.formData);
        },
    };

    static propTypes = {
        // onSubmit
    };

    render() {
        return (
            <div>
                <Provider value={this.state}>{this.props.children}</Provider>
            </div>
        );
    }
}

Form.Input = FormInput;
Form.Button = FormButton;
