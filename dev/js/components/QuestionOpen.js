import React, { Component } from 'react';
import TextField from 'react-md/lib/TextFields';

export default class QuestionOpen extends Component {
  render(){
    const { text, id, onChange } = this.props;
    return(
      <div className="question">
        <div className="question-text">{text}</div>
        <div class="md-grid">
          <TextField
            id={"open" + id}
            name="question-open"
            placeholder="Your answer"
            rows={4}
            onChange={onChange}
            className="md-cell md-cell--12"
          />
        </div>
      </div>
    )
  }
}
