import React from "react";
import { Box, Button, Flex, Heading, Spacer, Text, useColorMode, Icon, Center } from '@chakra-ui/react'
import { SocialIcon } from "react-social-icons";
import { Timeline } from 'react-twitter-widgets'
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export const Spenpo: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  const socialColors = {
    twitter: "rgb(0, 172, 237)",
    youtube: "rgb(255, 51, 51)",
    github: "rgb(36, 41, 46)",
  }

  type Social = 'twitter' | 'youtube' | 'github'

  const iconBg = (social: Social) => colorMode === 'light' ? 'transparent' : socialColors[social]
  const iconFg = (social: Social) => colorMode === 'light' ? socialColors[social] : 'white'

  const iconStyle = { border: 'solid white', borderRadius: 50 }

  return (
      <Box className="App">
        <Flex p={3} top={0} pos="sticky" bg="Background">
          <Heading as="h1">
            Spencer Pope
          </Heading>
          <Spacer />
          <Icon as={() => <SocialIcon url="https://twitter.com/s_pop3" bgColor={iconBg('twitter')} fgColor={iconFg('twitter')} style={iconStyle}/>}/>
          <Icon as={() => <SocialIcon url="https://www.youtube.com/channel/UCN00Qt1TBZPoDQAvj9t-Dtw" bgColor={iconBg('youtube')} fgColor={iconFg('youtube')} style={iconStyle} />}/>
          <Icon as={() => <SocialIcon url="https://github.com/spope851" bgColor={iconBg('github')} fgColor={iconFg('github')} style={iconStyle} />}/>
          <Spacer />
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Flex>
        <Center>
          <Timeline
            dataSource={{
              sourceType: 'profile',
              screenName: 's_pop3'
            }}
            options={{
              width: '50vw',
              theme: colorMode === 'light' ? 'dark' : 'light',
              chrome: "noheader, nofooter",
            }}
          />
        </Center>
      </Box>
  );
}
