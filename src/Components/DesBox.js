import React, {Component, PropTypes} from 'react';
import RichTextEditor from 'react-rte';
import "./Head.css";
 
export default class Desbox extends Component {
  static propTypes = {
    onChange: PropTypes
  };
 
  state = {
    value: RichTextEditor.createEmptyValue()
  }
 
  onChange = (value) => {
    this.setState({value});
    if (this.props.onChange) {
      this.props.onChange(
        value.toString('html')
      );
    }
  };
  render() {
    
    const toolbarConfig = {
      
      display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'LINK_BUTTONS', 'BLOCK_TYPE_DROPDOWN', 'HISTORY_BUTTONS'],
      INLINE_STYLE_BUTTONS: [
        {label: 'Bold', style: 'BOLD', className: 'custom-css-class'},
        {label: 'Italic', style: 'ITALIC'},
        {label: 'Underline', style: 'UNDERLINE'}
      ],
      BLOCK_TYPE_DROPDOWN: [
        {label: 'Normal', style: 'unstyled'},
        {label: 'Heading Large', style: 'header-one'},
        {label: 'Heading Medium', style: 'header-two'},
        {label: 'Heading Small', style: 'header-three'}
      ],
      BLOCK_TYPE_BUTTONS: [
        {label: 'UL', style: 'unordered-list-item'},
        {label: 'OL', style: 'ordered-list-item'}
      ]
    };
    return (
        <div className="Box">
            <RichTextEditor toolbarConfig={toolbarConfig} 
              value={this.state.value}
              onChange={this.onChange}/>
          </div>
    );
  }
} 
 

    