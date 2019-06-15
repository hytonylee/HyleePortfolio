import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { runInThisContext } from 'vm';

const now = moment();
console.log(now.format('MMM Do, YYYY - HH:MM:SS'));

export default class PostForm extends React.Component {
    state = {
        desc: '',
        postType: '',
        link: '',
        note: '',
        createdAt: moment(),
        calendarFocused: false,
        error: ''
    }
    // onDescChange = (e) => {
    //     const desc = e.target.value;
    //     this.setState(() => ({ desc }));
    // }
    // onPostTypeChange = (e) => {
    //     const postType = e.target.value;
    //     this.setState(() => ({ postType }));
    // }
    // onLinkChange = (e) => {
    //     const link = e.target.value;
    //     this.setState(() => ({ link }));
    // }
    // onNoteChange = (e) => {
    //     const note = e.target.value;
    //     this.setState(() => ({ note }));
    // }

    handleChange = (key, value) => {
        this.setState(() => ({
            [key]: value
        }))
    }

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }))
        }
    }

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }))
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.desc || !this.state.postType || !this.state.note) {
            this.setState(() => ({ error: `Please provide required fields of ${this.state}` }))
        } else {
            this.setState(() => ({ error: '' }))
            this.props.onSubmit({
                desc: this.state.desc,
                postType: this.state.postType,
                link: this.state.link,
                note: this.state.note,
                createdAt: this.state.createdAt.valueOf()
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.desc}
                        // onChange={this.onDescChange}
                        onChange={(e) => this.handleChange('desc', e.target.value)}
                    />
                    <input
                        type="postType"
                        placeholder="Portfolio"
                        value={this.state.postType}
                        // onChange={this.onPostTypeChange}
                        onChange={(e) => this.handleChange('postType', e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Link"
                        value={this.state.link}
                        // onChange={this.onLinkChange}
                        onChange={(e) => this.handleChange('link', e.target.value)}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        cols="30" rows="10"
                        placeholder="Notes"
                        value={this.state.note}
                        // onChange={this.onNoteChange}
                        onChange={(e) => this.handleChange('note', e.target.value)}
                    ></textarea>
                    <button>Add Post</button>
                </form>
            </div>
        )
    }
}



// onAmountChange = (e) => {
//     const amount = e.target.value;
//     if (amount.match(/^\d*(\.\d{0,2})?$/)) {
//         this.setState(() => ({ amount }))
//     }
// }