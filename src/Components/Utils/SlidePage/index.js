// import React from 'react'
// import './slidePage.css'

// class SilePage extends React.Component {
//     constructor(props) {
//         super(props)
//         const { initComponent, onSwitchComponent } = this.props
//         this.state = {
//             currentWidth: 0,
//             components: [initComponent],
//             slideTo: 'left',
//             slidding: false
//         }
//         onSwitchComponent = (component, slideTo) => this.switchComponent(component, slideTo)
//     }


//     switchComponent = (component, slideTo) => {
//         this.setState(prev => ({ components: [...prev.components, component], slideTo: 'left' , slidding: true}),
//         () => {
//             setTimeout(() => {
//                 this.setState({slidding: false})
//             }, 500)
//         }
//     )
//     }


//     getActiveComponent = () => {
//         const { components, slideTo, currentWidth, slidding } = this.state

//             return components.map((item, index) => {
//                 const Component = item
//                 return   <div className={"sidenav"} style={{ left: currentWidth + '%' }}>
//                     <Component />
//                 </div>
//             })
//     }

//     closeNav = () => {
//         console.log("Close")
//         this.setState({ currentWidth: 0 })
//     }

//     openNav = () => {
//         console.log("openNav")
//         this.setState({ currentWidth: 100 })
//     }


//     render() {
//         const { currentPage, currentWidth } = this.state
//         return <div className="">
//             <div className={"sidenavLeft"} style={{ left: -currentWidth + '%' }}>
//                 <a href="#" className="closebtn" onClick={this.closeNav} >&times;</a>
//                 <a href="#">About</a>
//                 <a href="#">Services</a>
//                 <a href="#">Clients</a>
//                 <a href="#" onClick={this.openNav}>CLose</a>
//             </div>
//             <div className={"sidenavRight"} style={{ left: -(currentWidth - 100) + '%' }}>
//                 <h2>Animated Sidenav Example</h2>
//                 <p>Click on the element below to open the side navigation menu.</p>
//                 <span style={{
//                     fontSize: '30px',
//                     cursor: "pointer"
//                 }} onClick={this.closeNav} >&times; Close</span>
//             </div>

//         </div>
//     }
// }
// const a = ReactDOM.render(SlidePageComponent, )

// export const SlidePageComponent = ({ initComponent, onSwitchComponent=() =>{} }) => <SilePage initComponent={initComponent} onSwitchComponent={onSwitchComponent} />