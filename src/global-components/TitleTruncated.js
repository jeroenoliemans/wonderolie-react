import React, {Component} from 'react'

class TitleTruncated extends Component {
    constructor(props) {
        super(props);

        this.refTitle = React.createRef();

        this.state = {
            truncate: true
        };

        this.toggleTitle = this.toggleTitle.bind(this);
    }

    toggleTitle() {
        this.setState(prevState => ({ truncate: !prevState.truncate }));
    }

    componentDidMount() {
        // set pointer
        if (this.refTitle.current.scrollWidth > this.refTitle.current.clientWidth) {
            this.refTitle.current.style.cursor = 'pointer';
        }
    }

    render() {
        return (
            <div className="TitleTruncated">
                <div
                    ref={this.refTitle}
                    onClick={this.toggleTitle}
                    className={this.state.truncate ? 'TitleTruncatedTitle' : 'TitleTruncatedTitle ClearEllipsis' }>
                    {this.props.title}
                </div>
            </div>
        )
    }
}

export default TitleTruncated;
