import React, { Component } from 'react';

class FileField extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const { input: { onChange } } = this.props;
    onChange(e.target.files[0]);
  }

  render() {
    const { input: { value } } = this.props;
    const {input, label} = this.props;
    return (
      <div>
        <label>{label}</label>
        <input
          type="file"
          onChange={this.onChange}
        />
      </div>
    )
  }
}

export default FileField