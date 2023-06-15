import { Box, Flex, Text, Tooltip, Avatar, Link } from '@chakra-ui/react';

const Header = () => {
  return (
    <div>
      <Box>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          style={{
            background: 'linear-gradient(to right, #DBE6F6, #C5796D)'
          }}
        >
          <Text
            fontSize={30}
            fontWeight="bold"
            margin={10}
            flex={{ base: '100%', md: 'auto' }}
            mb={{ base: 4, md: 0 }}
          >
            Class Mate
          </Text>
          <Flex alignItems="center">
            <Link as="a" href="/contact"
              mr={20}
              fontSize={20}
              fontWeight={"bold"}
              _focus={{ outline: '_focus' }}
              _hover={{ cursor: 'pointer' }}
            >
              Contact us
            </Link>
            <Link as="a" href="/faq"
              mr={20}
              fontSize={20}
              fontWeight={"bold"}
              _focus={{ outline: '_focus' }}
              _hover={{ cursor: 'pointer' }}

            >
              FAQ
            </Link>

            <Tooltip
              label="Login"
              background={'grey'}
              color="white"
              borderRadius={2}
              p={5}
              placement="top">
              <Avatar
                mr={10}
                src="https://img.icons8.com/cotton/32/gender-neutral-user--v1.png"
                _hover={{ cursor: 'pointer' }}
              >
              </Avatar>
            </Tooltip>
          </Flex>
        </Flex>
        {/* Rest of your landing page content goes here */}
      </Box>
    </div>



  );
};

export default Header;