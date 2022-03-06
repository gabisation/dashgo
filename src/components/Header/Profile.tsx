import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align='center'>
      {showProfileData && (
        <Box mr='4' textAlign='right'>
          <Text>Gabrielly Fonseca</Text>
          <Text color='gray.300' fontSize='small'>
            gabrielly.barros@hotmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size='md'
        name='Gabrielly Fonseca'
        src='https://github.com/gabisation.png'
      />
    </Flex>
  )
}