import React from 'react';
import TitleForm from './TitleForm';
import DescriptionForm from './DescriptionForm';
import PostActions from '../../actions/PostActions';

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isValid: false,
    };
  }
  changeState(valid) {
    this.setState({
      isValid: valid
    });
  }

  _submit(event) {
    var _this = this;
    event.preventDefault(); // Let's stop this event.
    PostActions.create({
        title: _this.titleValue,
        text: _this.descValue
    });
  }

  _handleDescValue(val) {
    this.descValue = val;
  }

  _handleTitleValue(val) {
    this.titleValue = val;
  }

  render() {
    return (
        <div className="row">
          <div className="medium-12">
            <form onSubmit={this._submit} action="POST" className="callout success">
              <TitleForm changeState={this.changeState.bind(this)} handleTitleValue={this._handleTitleValue.bind(this)}  />
              <DescriptionForm changeState={this.changeState.bind(this)} handleDescValue={this._handleDescValue.bind(this)} />
              <input type="submit" disabled={!this.state.isValid} className="button pull-right" value="Create" />
            </form>
          </div>
        </div>
    );
  }
};

module.exports = Create;
