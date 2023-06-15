import React from 'react';
import { Box, Flex, Text, Link, Tooltip, Avatar} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const LandingComponent = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  const handleFAQClick = () => {
    navigate('/faq');
  };

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
            fontSize={20}
            fontWeight="bold"
            margin={10}
            flex={{ base: '100%', md: 'auto' }}
            mb={{ base: 4, md: 0 }}
          >
            Class Mate
          </Text>
          <Flex alignItems="center">
            <Link
              onClick={() => navigate('/contact')}
              mr={20}
              fontSize={10}
              fontWeight={"bold"}
              _focus={{ outline: '_focus' }}
              _hover={{ cursor: 'pointer' }}
              _onClick={{handleContactClick}}
            >
              Contact us
            </Link>
            <Link
              onClick={() => navigate('/faq')}
              mr={20}
              fontSize={10}
              fontWeight={"bold"}
              _focus={{ outline: '_focus' }}
              _hover={{ cursor: 'pointer' }}
              _onClick={{handleFAQClick}}
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
                alt="User Profile"
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

export default LandingComponent;
