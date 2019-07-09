import React from 'react'

import typographyResets from '../Typography/typography.resets'
import formResets from '../Forms/forms.resets'
import colorVars from '../Colors/colors.vars'
import selection from '../Browser/browser.selection'
import body from '../Browser/browser.body'
import boxShadows from '../Shadows/boxShadows'
import typography from '../Typography/typography.css'
import mediaQueries from '../MediaQueries/mediaQueries'
import scrollbar from '../Browser/browser.scrollbar'
import spacing from '../Spacing/spacing.index'

export default () => (
  <>
    <style jsx global>
      {`    
      body {
        background-color: #07050D;
      }
      
          ${formResets}
          ${typographyResets}
          ${typography}
          ${scrollbar}
          ${mediaQueries}
          ${boxShadows}
          ${body}
          ${selection}
          ${spacing}
:root {
  ${colorVars}
  }


          `}
    </style>
  </>
)
