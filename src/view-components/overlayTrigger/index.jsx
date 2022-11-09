import React from 'react'
import OverlayTrigger from 'react-overlay-trigger'

const Overlay = ({style, ...rest}) => <span {...rest}>{}</span>

const overlay = <Overlay>yep</Overlay>

const Button = React.forwardRef((props, ref) => <div {...props} ref={ref} />)

export default function useOverlayTrigger() {
    return (
        <div>
            <OverlayTrigger placement="top" overlay={overlay} triggers={["click"]}>
                <button className="Button">top</button>
            </OverlayTrigger>
        </div>
    )
}
