import React from 'react'
import zxcvbn from 'zxcvbn'
import { Progress, Text, ProgressBar } from './PasswordStrength.styled'

const PasswordStrength = ({ password }) => {
  const testResult = zxcvbn(password)
  const num = (testResult.score * 100) / 4

  const funcProgressColor = () => {
    switch (testResult.score) {
      case 0:
        return '#E0E0E0'
      case 1:
        return 'red'
      case 2:
        return 'orange'
      case 3:
        return '#24CCA7'
      case 4:
        return '#24CCA7'
      default:
        return 'none'
    }
  }

  const createPasswordLabel = () => {
    switch (testResult.score) {
      case 0:
        return 'Use a strong password'
      case 1:
        return 'Easy password'
      case 2:
        return 'Normal password'
      case 3:
        return 'A good password'
      case 4:
        return 'Safe password!'
      default:
        return ''
    }
  }
  const changePasswordColor = () => ({
    width: `${num}%`,
    background: funcProgressColor(),
    height: '7px',
  })
  return (
    <ProgressBar>
      <Progress style={{ height: '7px' }}>
        <Progress style={changePasswordColor()}></Progress>
      </Progress>
      <Text >
        {createPasswordLabel()}
      </Text>
    </ProgressBar>
  )
}

export default PasswordStrength
