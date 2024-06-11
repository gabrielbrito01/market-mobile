import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

import { CircleNotch } from 'phosphor-react-native'

import { styled } from 'nativewind'

const StyledText = styled(Text)
const StyledCircleNotch = styled(CircleNotch)
const StyledTouchableOpacity = styled(TouchableOpacity)

interface Props extends TouchableOpacityProps {
  title: string
  type?: 'primary' | 'outline'
  loading?: boolean
}

export function ButtonUI({
  title,
  type = 'primary',
  loading,
  ...props
}: Props) {
  const styleButtonPrimary =
    'p-3 bg-blue-600 w-full rounded-md items-center mb-1'
  const styleButtonOutline =
    'p-3 border border-blue-600 rounded-md items-center'

  const styleButton =
    type === 'primary' ? styleButtonPrimary : styleButtonOutline

  return (
    <StyledTouchableOpacity {...props} className={styleButton}>
      {loading ? (
        <StyledCircleNotch />
      ) : (
        <StyledText className="text-lg text-white uppercase font-bold text-center">
          {title}
        </StyledText>
      )}
    </StyledTouchableOpacity>
  )
}
