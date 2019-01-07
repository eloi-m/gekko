import React from 'react';

const STYLE = {}

class Icon extends React.Component {
    state = {
        hovered: false
    }

    toggleHoverOn() {
        this.setState({ hovered: true })
    }
    toggleHoverOff() {
        this.setState({ hovered: false })
    }

    render() {
        const { Icon } = this.props
        const { hovered } = this.state
        return (
            <div color="inherit"
                onMouseEnter={() => this.toggleHoverOn()}
                onMouseLeave={() => this.toggleHoverOff()}
                style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
            >
                <Icon
                    style={hovered ?
                        { ...STYLE, fontSize: '36px' }
                        : { ...STYLE }}

                />
            </div>
        );
    }
}


export default Icon;