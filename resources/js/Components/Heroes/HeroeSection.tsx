import * as React from 'react';
import { Container, chakra, Stack, Text, Button, Box } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { FaGithub } from 'react-icons/fa';

const HeroSection = () => {
    return (
        <Container p={{ base: 8, sm: 14 }}>
            <Stack direction="column" spacing={6} alignItems="center">
                <Box py={2} px={3} bg="teal" w="max-content" color="white" rounded="md" fontSize="sm">
                    <Stack direction={{ base: 'column', sm: 'row' }}>
                        <Text fontWeight="bold">Ready, Set, Build! 🚀</Text>
                        <Text>Join the owk team!</Text>
                    </Stack>
                </Box>
                <chakra.h1
                    fontSize={{ base: '4xl', sm: '5xl' }}
                    fontWeight="bold"
                    textAlign="center"
                    maxW="600px"
                >
                    Build Amazing Laravel 11 & React apps{' '}
                    <chakra.span color="teal" bg="linear-gradient(transparent 50%, #83e9e7 50%)">
                        with fun and ❤️
                    </chakra.span>
                </chakra.h1>
                <Text maxW="550px" fontSize="xl" textAlign="center" color="gray.500">
                    Laravel 11, JetStream, React, Chakra UI and swr are a simple, modular and accessible frameworks that gives you the
                    building blocks you need to build your awesome applications 🚀
                </Text>
                <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    w={{ base: '100%', sm: 'auto' }}
                    spacing={5}
                >
                    <Button
                        colorScheme="teal"
                        variant="outline"
                        rounded="md"
                        size="lg"
                        height="3.5rem"
                        fontSize="1.2rem"
                    >
                        Get Started
                    </Button>
                    <Button
                        leftIcon={<FaGithub />}
                        colorScheme="gray"
                        variant="outline"
                        rounded="md"
                        size="lg"
                        height="3.5rem"
                        fontSize="1.2rem"
                    >
                        Github
                    </Button>
                </Stack>
            </Stack>
        </Container>
    );
};

export default HeroSection;
