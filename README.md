<!--- The following README.md sample file was adapted from https://gist.github.com/PurpleBooth/109311bb0361f32d87a2#file-readme-template-md by Gabriella Mosquera for academic use ---> 
<!--- You may delete any comments in this sample README.md file. If needing to use as a .txt file then simply delete all comments, edit as needed, and save as a README.txt file --->

# ClassMate

The background of the Classmate Application stems from the challenges and complexities faced in traditional educational settings. In many educational institutions, administrative tasks are often time-consuming and manual, leading to inefficiencies and delays. Communication between students and professors can be fragmented, with information scattered across multiple platforms or channels. Additionally, the lack of a centralized platform for collaboration and knowledge sharing can hinder the development of a vibrant learning community.

To address these issues, the Classmate Application was developed as a digital platform specifically designed for students, professors, and campus administrators. Its primary goal is to simplify administrative processes, improve communication channels, and foster a collaborative learning environment. By leveraging technology, the application aims to streamline various aspects of educational management and create a more efficient and effective system

* *Date Created*: 22 May 2023
* *Last Modification Date*: 20 Jun 2023
* *Netlify URL*: [ClassMate](https://classmate-g7.netlify.app/) https://classmate-g7.netlify.app/
* *Git URL*: [ClassMate Git](https://git.cs.dal.ca/harshils/classmate.git) https://git.cs.dal.ca/harshils/classmate.git

## Authors

* [Harshil Shah](hs@dal.ca) - *(Full Stack Developer)*
* [Raj Soni](raj.soni@dal.ca) - *(Full Stack Developer)*
* [Viral Siddhapura](vs@dal.ca) - *(Full Stack Developer)*
* [Yatrik Pravinbhai Amrutiya](yt707481@dal.ca) - *(Full Stack Developer)*
* [Aanandi Pankhania](an936894@dal.ca) - *(Full Stack Developer)*


<!-- ## Testing

Briefly explain the process you went through to test your work. 

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
``` -->


## Deployment

- Thorugh CI/CD pipeline
- Commit on Main Branch in Frontend folder
- Frontend automatically get tested and deployed on netlify
- Commit on Main Branch in Backend folder
- Backend automatically get tested and deployed on render

## Built With

<!--- Provide a list of the frameworks used to build this application, your list should include the name of the framework used, the url where the framework is available for download and what the framework was used for, see the example below --->

* [React](https://react.dev/) - For frontend
* [Type Script](https://www.typescriptlang.org/) - For frontend - strictly typed language
* [Chakra UI](https://chakra-ui.com/getting-started) - Chakra UI - Front End framework (Responsive)

## Sources Used

<!-- If in completing your lab / assignment / project you used any interpretation of someone else's code, then provide a list of where the code was implement, how it was implemented, why it was implemented, and how it was modified. See the sections below for more details. -->

### FAQ.tsx

*Lines 189 - 203*

```tsx
  <Accordion allowMultiple>
      {filteredData.map((item, index) => (
          <AccordionItem key={index}>
              <h2>
                  <AccordionButton _expanded={{ bg: 'gray.200' }}>
                      <Box flex="1" textAlign="left" fontWeight="bold">
                          {`${index + 1}. ${item.question}`}
                      </Box>
                      <AccordionIcon />
                  </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>{item.answer}</AccordionPanel>
          </AccordionItem>
      ))}
  </Accordion>

```

The code above was created by adapting the code in [FAQ Page](https://chakra-ui.com/docs/components/accordion/usage) as shown below: 

```tsx
<Accordion>
  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: 'tomato', color: 'white' }}>
        <Box as="span" flex='1' textAlign='left'>
          Click me to see a different style
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
</Accordion>

```

- <!---How---> The code in [FAQ Page](https://chakra-ui.com/docs/components/accordion/usage) was implemented by authors in Chakra UI official documents.
- <!---Why---> [FAQ Page](https://chakra-ui.com/docs/components/accordion/usage)'s Code was used because we want to show FAQ Data such that it must be expanded once a question has been clicked.
- <!---How---> [FAQ Page](https://chakra-ui.com/docs/components/accordion/usage)'s Code was modified by changing data filtering and providing background color to grey and maitaining index of JSON data.

<!-- *Repeat as needed* -->

### sucessMailSentModal.tsx

*Lines 11 - 23

```tsx
  <Modal isOpen={isOpen} onClose={onClose} size="sm">
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Your Message has been Mailed to us Successfully!</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <p>Thank you for contacting us. We will get back to you as soon as we can.</p>
      </ModalBody>
      <ModalFooter>
        <Button onClick={onClose}>Close</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>

```

The code above was created by adapting the code in [Chakra UI Modal](https://chakra-ui.com/docs/components/modal/usage) as shown below: 

```tsx
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Modal Title</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Lorem count={2} />
      </ModalBody>

      <ModalFooter>
        <Button colorScheme='blue' mr={3} onClick={onClose}>
          Close
        </Button>
        <Button variant='ghost'>Secondary Action</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>

```

- <!---How---> The code in [Chakra UI Modal](https://chakra-ui.com/docs/components/modal/usage) was present in official documentation of Chakra UI.
- <!---Why---> [Chakra UI Modal](https://chakra-ui.com/docs/components/modal/usage)'s Code was used because once user has clicked on button - a small dialog box will be shown to the user stating success message of contancting us.
- <!---How---> [Chakra UI Modal](https://chakra-ui.com/docs/components/modal/usage)'s Code was modified by maitaining isOpen and inClose conditions and setting up different message to the user.

### router.tsx

*Lines 16 - 21*

```tsx
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/faq" element={<FAQ />} />
    <Route path="/assignment" element={<AssignmentBase />} />
  </Routes>

```

The code above was created by adapting the code in [Router](https://medium.com/react-courses/how-to-integrate-routing-in-typescript-project-with-react-router-v5-2-0-a6b0ab160a1b) as shown below: 

```tsx
<Router>
    <Header />
    <div className="page">
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/SubMenu1" component={SubMenu1Page} />
            <Route exact path="/SubMenu2" component={SubMenu2Page} />
            <Route path="/404" component={NotFoundPage} />
            <Redirect to="/404" />
        </Switch>
    </div>
</Router>

```

- <!---How---> The code in [Router](https://medium.com/react-courses/how-to-integrate-routing-in-typescript-project-with-react-router-v5-2-0-a6b0ab160a1b) was implemented by a medium blog writer in the given link.
- <!---Why---> [Router](https://medium.com/react-courses/how-to-integrate-routing-in-typescript-project-with-react-router-v5-2-0-a6b0ab160a1b)'s Code was used because once user clicks something - should be redirected to the corresponding pages.
- <!---How---> [Router](https://medium.com/react-courses/how-to-integrate-routing-in-typescript-project-with-react-router-v5-2-0-a6b0ab160a1b)'s Code was modified by writing proper component name and paths as per parameters and by default path too (Which is our /LandingPage)

### indContactCard.tsx

*Lines 16 - 32

```tsx
  <Card maxW='sm'>
    <CardBody>
      <Center>
        <Image src={imgLocation} alt='Profile Image' borderRadius='lg' />
      </Center>
      <Center>
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{name}</Heading>
        </Stack>
      </Center>
    </CardBody>
    <Divider />
    <Button margin='1em'
      onClick={handleButtonClick} variant='solid' colorScheme='blue'>
      Visit Profile
    </Button>
  </Card>

```

The code above was created by adapting the code in [Chakra UI - Card](https://chakra-ui.com/docs/components/card/usage) as shown below: 

```tsx
  <Card>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
  </Card>

```

- <!---How---> The code in [Chakra UI - Card](https://chakra-ui.com/docs/components/card/usage) was present in the official documentation of chakra ui.
- <!---Why---> [Chakra UI - Card](https://chakra-ui.com/docs/components/card/usage)'s Code was used because we want to show the user profiles with a button and a simple image of a user.
- <!---How---> [Chakra UI - Card](https://chakra-ui.com/docs/components/card/usage)'s Code was modified by putting an image and a button with margin and profile url as well.

### Contact.tsx

*Lines 54 - 60*

```tsx
    if (email.trim() === '') {
      setEmailError('Please enter your email address');
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError('Please enter a valid email address');
      isValid = false;
    } 

```

The code above was created by adapting the code in [Contact us Type Script](https://stackoverflow.com/questions/65631340/regex-to-not-match-leading-and-trailing-white-spaces-for-email-address-in-javasc) as shown below: 

```tsx
    if (!event.target.value.trim().match(/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)) {
        setEmailStatus('Enter valid email address');
    }

```

- <!---How---> The code in [Contact us Type Script](https://stackoverflow.com/questions/65631340/regex-to-not-match-leading-and-trailing-white-spaces-for-email-address-in-javasc) was implemented by Proposed by someone on Stackoverflow.
- <!---Why---> [Contact us Type Script](link)'s Code was used because a user's email address must be validated before it sends us an email for contact purpose.
- <!---How---> [Contact us Type Script](link)'s Code was modified by changing the if and else condition and using Regular expressions and using .test() function.


## Acknowledgments

* [1] “Regex to not match leading and trailing white spaces for email address in javascript,” Stack Overflow. [Online]. Available: https://stackoverflow.com/questions/65631340/regex-to-not-match-leading-and-trailing-white-spaces-for-email-address-in-javasc. [Accessed: 20-Jun-2023].

* [2] “Accordion,” Chakra UI: Simple, Modular and Accessible UI Components for your React Applications. [Online]. Available: https://chakra-ui.com/docs/components/accordion/usage. [Accessed: 20-Jun-2023].

* [3] Harshil Shah - “Assignment - 1” GitLab. [Online]. Available: https://git.cs.dal.ca/harshils/5709-assignments-b00919966-harshil/-/tree/main/Assignment%201. [Accessed: 20-Jun-2023].

* [4] “Card,” Chakra UI: Simple, Modular and Accessible UI Components for your React Applications. [Online]. Available: https://chakra-ui.com/docs/components/card/usage. [Accessed: 20-Jun-2023].

* [5] “Modal,” Chakra UI: Simple, Modular and Accessible UI Components for your React Applications. [Online]. Available: https://chakra-ui.com/docs/components/modal/usage. [Accessed: 20-Jun-2023].

* [6] E. E. Elrom, “Integrate Routing in Typescript project with React-Router v5.2.0. Including Redux toolkit integration. 2020 ReactJS example tutorial,” Master React, 11-Aug-2020. [Online]. Available: https://medium.com/react-courses/how-to-integrate-routing-in-typescript-project-with-react-router-v5-2-0-a6b0ab160a1b. [Accessed: 20-Jun-2023].
