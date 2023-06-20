[![Netlify Status](https://api.netlify.com/api/v1/badges/91cc1082-8148-4fb3-ab88-af8d128b7cc5/deploy-status)](https://app.netlify.com/sites/classmate-g7/deploys)
<!--- The following README.md sample file was adapted from https://gist.github.com/PurpleBooth/109311bb0361f32d87a2#file-readme-template-md by Gabriella Mosquera for academic use ---> 
<!--- You may delete any comments in this sample README.md file. If needing to use as a .txt file then simply delete all comments, edit as needed, and save as a README.txt file --->

# ClassMate

The background of the Classmate Application stems from the challenges and complexities faced in traditional educational settings. In many educational institutions, administrative tasks are often time-consuming and manual, leading to inefficiencies and delays. Communication between students and professors can be fragmented, with information scattered across multiple platforms or channels. Additionally, the lack of a centralized platform for collaboration and knowledge sharing can hinder the development of a vibrant learning community.

To address these issues, the Classmate Application was developed as a digital platform specifically designed for students, professors, and campus administrators. Its primary goal is to simplify administrative processes, improve communication channels, and foster a collaborative learning environment. By leveraging technology, the application aims to streamline various aspects of educational management and create a more efficient and effective system

* *Date Created*: 22 May 2023
* *Last Modification Date*: 15 Jun 2023
* *Netlify URL*: * [ClassMate](https://classmate-g7.netlify.app/)
* *Git URL*: [ClassMate Git](https://git.cs.dal.ca/harshils/classmate.git) 

## Authors

* [Harshil Shah](hs@dal.ca) - *(Full Stack Developer)*
* [Raj Soni](raj.soni@dal.ca) - *(Full Stack Developer)*
* [Viral Siddhapura](vs@dal.ca) - *(Full Stack Developer)*
* [Yatrik Pravinbhai Amrutiya](yt707481@dal.ca) - *(Full Stack Developer)*
* [Aanandi Pankhania](an936894@dal.ca) - *(Full Stack Developer)*


## Testing

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
```


## Deployment

- Thorugh CI/CD pipeline
- Commit on Main Branch in Frontend folder
- Frontend automatically get tested and deployed on netlify
- Commit on Main Branch in Backend folder
- Backend automatically get tested and deployed on render

## Built With

<1!--- Provide a list of the frameworks used to build this application, your list should include the name of the framework used, the url where the framework is available for download and what the framework was used for, see the example below --->

* [React](https://react.dev/) - For frontend
* [Express JS](https://expressjs.com/) - For backend - API creation
* [MongoDB](https://rometools.github.io/rome/) - Database As a Service

## Sources Used

<!-- If in completing your lab / assignment / project you used any interpretation of someone else's code, then provide a list of where the code was implement, how it was implemented, why it was implemented, and how it was modified. See the sections below for more details. -->

### FAQ.tsx

*Lines 189 - 203*

```
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

```
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

### File Name

*Lines ## - ##*

```
Copy and paste your code on lines mentioned 

```

The code above was created by adapting the code in [NAME](link) as shown below: 

```
Copy and paste the snippet of code you are referencing

```

- <!---How---> The code in [NAME](link) was implemented by...
- <!---Why---> [NAME](link)'s Code was used because...
- <!---How---> [NAME](link)'s Code was modified by...

### Contact.tsx

*Lines 54 - 60*

```
    if (email.trim() === '') {
      setEmailError('Please enter your email address');
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError('Please enter a valid email address');
      isValid = false;
    } 

```

The code above was created by adapting the code in [Contact us Type Script](https://stackoverflow.com/questions/65631340/regex-to-not-match-leading-and-trailing-white-spaces-for-email-address-in-javasc) as shown below: 

```
    if (!event.target.value.trim().match(/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)) {
        setEmailStatus('Enter valid email address');
    }

```

- <!---How---> The code in [Contact us Type Script](https://stackoverflow.com/questions/65631340/regex-to-not-match-leading-and-trailing-white-spaces-for-email-address-in-javasc) was implemented by Proposed by someone on Stackoverflow.
- <!---Why---> [Contact us Type Script](link)'s Code was used because a user's email address must be validated before it sends us an email for contact purpose.
- <!---How---> [Contact us Type Script](link)'s Code was modified by changing the if and else condition and using Regular expressions and using .test() function.

*Repeat as needed*

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
