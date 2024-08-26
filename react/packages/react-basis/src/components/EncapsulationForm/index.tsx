import { CheckBoxGroupTest, RadioBoxGroupTest, SelectTest } from '@handle-react/components'
export default function EncapsulationForm() {
    return (
        <div>
            <div className="sec">
                <h1>Select</h1>
                <div className="select-container">
                    <SelectTest />
                </div>
            </div>
            <div className="RadioBoxGroup">
                <h1>RadioBoxGroup</h1>
                <div className="RadioBoxGroup-container">
                    <RadioBoxGroupTest />
                </div>
            </div>
            <div className="CheckBoxGroup">
                <h1>CheckBoxGroup</h1>
                <div className="CheckBoxGroup-container">
                    <CheckBoxGroupTest />
                </div>
            </div>
        </div>
    )
}
