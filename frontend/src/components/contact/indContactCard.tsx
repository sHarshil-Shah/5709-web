import { Heading, Text, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Stack, Image } from '@chakra-ui/react';

interface ContactCardProps {
  imageUrl: string;
  title: string;
  description: string;
  price: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ imageUrl, title, description, price }) => {
  return (
    <Card maxW='sm'>
      <CardBody>
        <Image src={imageUrl} alt='Green double couch with wooden legs' borderRadius='lg' />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{title}</Heading>
          <Text>{description}</Text>
          <Text color='blue.600' fontSize='2xl'>
            {price}
          </Text>
        </Stack>
      </CardBody>
      {/* <Divider /> */}
      {/* <CardFooter>
        <ButtonGroup spacing='2'>
          <Button variant='solid' colorScheme='blue'>
            Contact
          </Button>
        </ButtonGroup>
      </CardFooter> */}
    </Card>
  );
};

export default ContactCard;
