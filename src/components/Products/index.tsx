import React from 'react';
import { AspectRatio, Box, Center, Image, Text } from 'native-base';

interface Props {
  data: {
    key: string;
    title: string;
  };
}

const Products: React.FC<Props> = ({ data }) => {
  return (
    <Box flex='1'>
      <Box
        marginRight='34'
        w='64'
        h='70%'
        rounded='lg'
        position='relative'
        marginTop='20'
        bg='white'
        style={{
          shadowColor: 'rgba(57, 57, 57, 0.1)',
          shadowOffset: { width: 10, height: 10 },
          shadowOpacity: 0.5,
          shadowRadius: 2,
        }}
      >
        <Center position='absolute' top='-50' left='0' right='0'>
          <AspectRatio
            ratio={{
              base: 3 / 3,
              md: 9 / 10,
            }}
            height={{
              base: 150,
              sm: 480,
              md: 768,
              lg: 992,
              xl: 1280,
            }}
          >
            <Image
              rounded='full'
              resizeMode='cover'
              source={{
                uri: 'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
              }}
              alt='Picture of a Flower'
            />
          </AspectRatio>
        </Center>
        <Box
          alignItems='center'
          justifyContent='center'
          flex='1'
          marginTop='100'
        >
          <Text fontSize='20'>Apple Watch</Text>
          <Text color='#868686'>Series 6 Red</Text>
        </Box>
        <Text
          alignSelf='center'
          marginBottom='5'
          style={{ color: '#5956E9' }}
          fontSize='17'
        >
          $ 359
        </Text>
      </Box>
    </Box>
  );
};

export default Products;
