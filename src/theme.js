import { createMuiTheme } from '@material-ui/core/styles';

import deepOrange from '@material-ui/core/colors/deepOrange'
import lightBlue from '@material-ui/core/colors/lightBlue'

const theme = createMuiTheme({
    palette:{
        primary:lightBlue,
        // {
        //     main:   '#0258FF',
        //     light : '#03FFED'
        // },
        secondary:deepOrange,
        // background:{
        //     default:'#fff'
        // }
    },
})
export default theme;