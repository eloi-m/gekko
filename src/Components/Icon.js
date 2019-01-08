import React from 'react';


const SELECTED_STYLE = {
    color: '#ff6333', fontSize: '36px'
};
const NOT_SELECTED_STYLE = {};

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
        const { Icon, isSelected } = this.props
        const { hovered } = this.state

        const STYLE = isSelected ? SELECTED_STYLE : NOT_SELECTED_STYLE

        return (
            <div
                onMouseEnter={() => this.toggleHoverOn()}
                onMouseLeave={() => this.toggleHoverOff()}
                style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
            >
                <Icon
                    style={
                        hovered
                            ? { ...STYLE, fontSize: '36px' }
                            : { ...STYLE }
                    }
                />
            </div>
        );
    }
}


export default Icon;