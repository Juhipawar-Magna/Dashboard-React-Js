import React from "react";
import "./Dropdown.css";

class dropDown extends React.Component {
  state = {
    items: this.props.items || [],
    showItems: false,
    selectedItem: this.props.items && this.props.items[0]
  };

  dropDown = () => {
    this.setState(prevState => ({
      showItems: !prevState.showItems
    }));
  };

  selectItem = item => {
    this.setState({
      selectedItem: item,
      showItems: false
    });
  };

  render() {
    return (
      <div className="select-box--box">
        <div className="select-box--container">
          <div className="select-box--selected-item">
            {this.state.selectedItem.value}
          </div>
          <div className="select-box--arrow" onClick={this.dropDown}>
            <span
              className={`${
                this.state.showItems
                  ? "select-box--arrow-up"
                  : "select-box--arrow-down"
              }`}
            />
          </div>

          <div
            style={{ display: this.state.showItems ? "block" : "none" }}
            className={"select-box--items"}
          >
            {this.state.items.map(item => (
              <div
                key={item.id}
                onClick={() => this.selectItem(item)}
                className={this.state.selectedItem === item ? "selected" : ""}
              >
                {item.value}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}



export default dropDown;






/*import React, { useEffect , useState } from "react";

import "./Dropdown.css";

const Icon = () => {
  return (
    <svg height="20" width="20" viewBox="0 0 20 20">
      <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
    </svg>
  );
};

const Dropdown = ({ placeHolder, options, isMulti }) => {
    const [showMenu, setShowMenu] = useState(false);
    const [selectedValue, setSelectedValue] = useState(isMulti ? [] : null);

    useEffect( () => {
        const handleInputClick =(e) => {};

        const getDisplay = () => {
            if (!selectedValue || selectedValue.length === 0) {
                return placeHolder;
            }
            if (isMulti) {
                return (
                    <div className="dropdown-tags">
                        {selectedValue.map((option) => (
                            <div key={option.value} className="dropdown-tag-item">
                                {option.label}
                                <span onClick={(e) => onTagRemove(e, option)} className="dropdown-tag-close"><CloseIcon/></span>
                            </div>
                        ))}
                    </div>
                );
            }
            return selectedValue.label;
        };
        const removeOption = (option) => {
            return selectedValue.filter((o) => o.value !== option.value);
        };
        const onTagRemove = (e, option) => {
            e.stopPropagation();
            setSelectedValue(removeOption(option));
        };

        const onItemClick = (option) => {
            let newValue;
            if (isMulti) {
                if (selectedValue.findIndex((o) => o.value === option.value) >= 0) {
                    newValue = removeOption(option);
                } else {
                    newValue = [...selectedValue, option];
                }
            } else {
                newValue = option;
            }
            setSelectedValue(newValue);
        };

        const isSelected = (option) => {
            if (isMulti) {
                return selectedValue.filter((o) => o.value === option.value).length > 0;
            }
            if (!selectedValue) {
                return false;
            }
            return selectedValue.value === option.value;
        };
    }

    )

  return (
    <div className="dropdown-container">
      <div className="dropdown-input">
        <div className="dropdown-selected-value">{getDisplay()}</div>
        <div className="dropdown-tools">
          <div className="dropdown-tool">
            <Icon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;






/*import React from "react";

const App  = () => {
    const [isOpen, setOpen]= React.useState(false);

    const handleOpen = () =>{
        setOpen(true);
    };

    const handleClose = () =>{
        setOpen(false);
    };

    return (
        <div>
            <Button onClick={handleOpen}>Open</Button>
            <Button onClick={handleClose}>Close</Button>

            {isOpen && <div>submit</div>}
        </div>
    );
};

const Button = ({onClick, children }) => {
    return (
        <button type="button" onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;*/