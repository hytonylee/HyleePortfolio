import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

// const now = moment();
// console.log(now.format('MMM Do, YYYY - HH:MM:SS'));

export default class PostForm extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            title: props.post ? props.post.title : '',
            postType: props.post ? props.post.postType : '',
            link: props.post ? props.post.link : '',
            note: props.post ? props.post.note : '',
            createdAt: props.post ? moment(props.post.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        }
    }

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
        if (!this.state.title || !this.state.postType || !this.state.note) {
            this.setState(() => ({ error: `Please provide required fields of ${this.state}` }))
        } else {
            this.setState(() => ({ error: '' }))
            this.props.onSubmit({
                title: this.state.title,
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
                        placeholder="Title"
                        autoFocus
                        value={this.state.title}
                        // onChange={this.ontitleChange}
                        onChange={(e) => this.handleChange('title', e.target.value)}
                    />
                    <input
                        type="postType"
                        placeholder="Post Type"
                        value={this.state.postType}
                        onChange={(e) => this.handleChange('postType', e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Link"
                        value={this.state.link}
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
                        onChange={(e) => this.handleChange('note', e.target.value)}
                    ></textarea>
                    <button>Add Post</button>
                </form>
            </div>
        )
    }
}
