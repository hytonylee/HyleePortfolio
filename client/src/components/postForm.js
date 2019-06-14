import React from 'react';

export default class postForm extends React.Component {
    state = {
        desc: '',
        postType: '',
        link: '',
        note: '',
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

    render() {
        return (
            <div>
                <form action="">
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