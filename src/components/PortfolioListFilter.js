import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByType } from '../actions/filters';

const PortfolioListFilter = (props) => (
    <div className="content-container">
        <div className="input-group">
            <div className="input-group__item">
                <input
                    placeholder="Search Portfolio"
                    className="text-input"
                    type="text"
                    value={props.filters.text}
                    onChange={(e) => {
                        props.dispatch(setTextFilter(e.target.value))
                        // console.log(e.target.value)
                    }
                    } />
            </div>
            <div className="input-group__item">
                <select
                    className='select'
                    value={props.filters.sortBy}
                    onChange={(e) => {
                        if (e.target.value === 'date') {
                            props.dispatch(sortByDate())
                        } else if (e.target.value === 'type') {
                            console.log('sorty by type')
                            props.dispatch(sortByType())
                        }
                    }}>
                    <option value="date">Date</option>
                    <option value="type">Type</option>
                </select>
            </div>
        </div>
    </div>
)

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(PortfolioListFilter);