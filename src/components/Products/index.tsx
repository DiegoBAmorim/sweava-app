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
        w='220'
        h='270px'
        rounded='lg'
        position='relative'
        marginTop='20'
        bg='white'
      >
        <Center position='absolute' top='-50' left='0' right='0'>
          <AspectRatio
            ratio={{
              base: 3 / 3,
              md: 9 / 10,
            }}
            height={{
              base: 150,
              md: 200,
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
          marginTop='50'
        >
          <Text fontSize='20'>Apple Watch</Text>
          <Text color='#868686'>Series 6 Red</Text>
        </Box>
        <Text alignSelf='center' marginBottom='5'>
          $ 359
        </Text>
      </Box>
    </Box>
  );
};

export default Products;
