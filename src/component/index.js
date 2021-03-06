/*
 * Project: redux-i18n
 * File: component/index.js
 */

import {connect} from 'react-redux'
import I18n from './component'

export default connect(state => ({
  lang: state.i18nState.lang
}))(I18n)
