import React from 'react'
import { TransitionGroup, Transition, CSSTransition } from "react-transition-group";

const duration = 1000;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
}

const transitionStyles = {
    entering: {
        opacity: 0
    },
    entered: {
        opacity: 1,
    },
    exiting: {},
    exited: {}
};


export const AnimateComponent = ({ loaded = false, duration = 500, Component, defaultStyle, transitionStyles }) => {
    return <Transition in={loaded} timeout={duration}>
        {
            (state) => (
                <div style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                }}>
                    <Component />
                </div>
            )
        }
    </Transition>
}
