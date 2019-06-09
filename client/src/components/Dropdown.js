import React,{ Component } from 'react';


class Dropdown extends Component{
    state = {
        open: false,
        value: this.props.value || this.props.placeholder
    }

    dropdownRef = React.createRef();

    componentDidMount(){
        document.addEventListener("click",this.handleClick);
    }

    componentWillUnmount(){
        document.removeEventListener("click",this.handleClick);
    }

    handleClick = e => {
        if(!this.dropdownRef.current.contains(e.target) && this.state.open){
            this.toggleOpen();
        }
    }

    toggleOpen = () => {
        this.setState({ open: !this.state.open })
    }

    select(option){
        this.props.onSelect(option.value);
        this.setState({ value: option.text || option.value });
        this.toggleOpen();
    }

    render(){
        const { open,value } = this.state;
        const { options } = this.props;

        return (
            <div ref={this.dropdownRef} className="dropdown">
                <a onClick={this.toggleOpen} className="dropdown__anchor flex-container">
                    <span className="flex-grow">{value}</span>
                    <span>&#9660;</span>
                </a>
                {open &&
                <ul className="dropdown__list">
                    {options.map((option,i) => <li key={i}><a onClick={() => this.select(option)} className="dropdown__item">{option.text || option.value}</a></li>)}
                </ul>}
            </div>
        )
    }
}

export default Dropdown;