import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, getFormValues } from 'redux-form'
import { connect  } from 'react-redux'
import { validate} from './validate'
import { dynamicSubmitAction } from '../../redux/actions';
import "./styles.css"
import { getInitValues } from './helper';

class DynamicPage extends React.Component {
    constructor(props) {
        super(props)
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('SnapShot: ', prevProps, this.props)
        if(this.props.initPage) {
            if(this.props.isLoadedInit === true && prevProps.isLoadedInit === false) {
                return { shouldSetInitialize: true };
            }
        }
        return null;
    }
    componentDidUpdate(prevProps, prevState, snapShot) {
        if(snapShot) {
            console.log('SnapShot: ', snapShot)
            if(snapShot.shouldSetInitialize) {
                const values = getInitValues(this.props.initPage.components)
                this.props.initialize(values)
            }
        }
    }

    onParse = (value) => {

    }

    renderNormalProps = (item) => {
        return {
            name: item.fieldName,
            field: item.fieldName,
            type: item.type,
            placeholder: item.placeholder,
            label: item.label,
            styles: item.styles,
            disabled: item.disabled,
        }
    }

    renderComponentHelper = (item, index) => {
        const showingStyle = {display: item.isShowing ? undefined : 'none'}
        switch (item.type) {
            case "select":
                return   <Field
                    className="component"
                    component={item.component}
                    {...this.renderNormalProps(item)}
                    key={index} style={{...item.styles, ...showingStyle}}
                > 
                {
                    item.options.map((opt, indexOpt) => {
                        return <option value={opt.value}  key={indexOpt}>{opt.text}</option>
                    })
                }
                </Field>
            default:
                return   <Field
                key={index} style={{...item.styles, ...showingStyle}}
                    className="component"
                    type={item.type}
                    component="input"
                    {...this.renderNormalProps(item)}
                />
        }
    }

    onHandleSubmit = () => {
        this.props.onSubmitAction(this.props.formData, this.props.initPage.apiSubmit)
    }

    render() {
        const {initPage, invalid } = this.props
        return <main className="main-page">
            {
                initPage && initPage.components.map((item, index) => {
                    return  this.renderComponentHelper(item, index)
                })
            }
            <div className="footer">
                <button  type={"button"} disabled={invalid} onClick={this.onHandleSubmit}>Submit</button>
            </div>
        </main>
    }

}

const MockReduxForm = reduxForm({
    form: 'DynamicPage',
    validate
})(DynamicPage)

const mapStateToProps = (state, props) => {
    return {
        initPage: state.dynamicPage.init,
        isLoadedInit: state.dynamicPage.isLoadedInit,
        formData: getFormValues('DynamicPage')(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmitAction: (body, url) => dispatch(dynamicSubmitAction(body, url))
    }
}

export const DynamicComponent = connect(mapStateToProps, mapDispatchToProps)(MockReduxForm)
