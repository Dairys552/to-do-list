import React, { Fragment } from "react";
const Checkbox = props => {

    const {
        onChange,
        data: { id, description, done }
    } = props;
    return (
        <Fragment>
            <label className="todo new-item">
                { }
                <input
                    className="todo__state"
                    name={id}
                    type="checkbox"
                    defaultChecked={done}
                    onChange={onChange}
                />
                <div className="todo__text">{description}</div>
            </label>
        </Fragment>
    );
};
console.clear();

setTimeout(function () {
    document.querySelector('input[type="checkbox"]').setAttribute('checked', true);
}, 100);
export default Checkbox;
