# ClassMate

The background of the Classmate Application stems from the challenges and complexities faced in traditional educational settings. In many educational institutions, administrative tasks are often time-consuming and manual, leading to inefficiencies and delays. Communication between students and professors can be fragmented, with information scattered across multiple platforms or channels. Additionally, the lack of a centralized platform for collaboration and knowledge sharing can hinder the development of a vibrant learning community.

To address these issues, the Classmate Application was developed as a digital platform specifically designed for students, professors, and campus administrators. Its primary goal is to simplify administrative processes, improve communication channels, and foster a collaborative learning environment. By leveraging technology, the application aims to streamline various aspects of educational management and create a more efficient and effective system

* *Date Created*: 22 May 2023
* *Last Modification Date*: 25 July 2023
* *Netlify URL*: [Frontend](https://classmate-g7.netlify.app/) https://classmate-g7.netlify.app/
* *Render URL*: [Backend](https://classmate-backend.onrender.com) https://classmate-backend.onrender.com
* *Git URL*: [ClassMate Git](https://git.cs.dal.ca/harshils/classmate.git) https://git.cs.dal.ca/harshils/classmate.git

## Authors

* [Raj Soni](raj.soni@dal.ca) - *(Full Stack Developer)*

## Deployment

### Frontend
- Through CI/CD pipeline
- Commit on Main Branch in Frontend folder
- Frontend automatically get tested and deployed on netlify

### Backend
- When committed on gitlab, through mirroring automatically deployed on GitHub
- GitHub actions triggers render deployment hook to fetch latest commit

## Built With

<!--- Provide a list of the frameworks used to build this application, your list should include the name of the framework used, the url where the framework is available for download and what the framework was used for, see the example below --->

* [React](https://react.dev/) - For frontend
* [Type Script](https://www.typescriptlang.org/) - For frontend - strictly typed language
* [Chakra UI](https://chakra-ui.com/getting-started) - Chakra UI - Front End framework (Responsive)
* [Express](https://expressjs.com/) - Express - Backend
* [MongoDB](https://www.mongodb.com/cloud/atlas/lp/try4?utm_source=google&utm_campaign=search_gs_pl_evergreen_atlas_core-high-int_prosp-brand_gic-null_amers-ca_ps-all_desktop_eng_lead&utm_term=mongodb%20atlas&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=19616985274&adgroup=146373896100&cq_cmp=19616985274&gad=1&gclid=Cj0KCQjw5f2lBhCkARIsAHeTvli8fbOCJfuoxjBay03K5Odb28T8n0GgH5ofE-HyGROo0j6lLlA4e54aArNnEALw_wcB) - MongoDB - database

## Files Created and description on how to use them
Folder structure: 
```bash
ClassMate
├───backend
│   ├───controller
│   │   └───quiz
│   │       ├───createQuiz.ts
│   │       ├───deleteQuiz.ts
│   │       ├───listQuiz.ts
│   │       └───updateQuiz.ts
│   ├───model
│   │   └───quiz.model.ts
│   └───service
│       └───quiz.service.ts
└───frontend
    ├───public
    └───src
        ├───components
        │   ├───error
        │   │   └───ErrorPage.tsx
        │   ├───model
        │   │   └───quiz.model.tsx
        │   ├───quiz
        │   │   ├───CreateQuiz.tsx
        │   │   ├───QuestionBank.tsx
        │   │   ├───QuizDetailsModal.tsx
        │   │   ├───QuizList.tsx
        │   │   ├───QuizPage.tsx
        │   │   ├───QuizTableRow.tsx
        │   │   ├───StartQuizAlert.tsx
        │   │   └───StudentQuizList.tsx
        ├───DynamicRoute
        └───service
```

Note: Page URLs might not work on netlify directly

### Credentials

#### Netlify endpoint for quiz: 
*Netlify URL*: https://classmate-g7.netlify.app/

Note: Specific page URL will not work so after login if the nav bar doesn't work, the user can enter **/quiz** at the end of Netlify URL to access Quiz feature.


#### Login as Admin

* Email ID: admin@mail.com
* Password: AdminPass

#### Login as a professor

* Email ID: prof@test.com
* Password: ProfPass

#### Login as a Student

* Email ID: stud@test.com 
* Password: StudPass


### Quiz List Page

* The Quiz List page is a dynamic React component that showcases a comprehensive list of quizzes. As a professor, you have the privilege to create, edit, and delete quizzes, and access the question bank for added convenience.

* **As a Professor**, you can effortlessly view detailed information about a specific quiz by simply clicking on its corresponding row. This allows you to access the Edit and Delete quiz buttons for quick management.

* **As a Professor**, you'll find the user-friendly Create Quiz and Question Bank buttons at your disposal. These powerful tools empower you to create new quizzes with all their parameters and add new questions to any quiz, streamlining your quiz preparation process.

* **As a Student**, your experience on this page is optimized for simplicity. Just click on a quiz row to embark on your quiz journey.

* In case of an attempt to access the quiz page without logging in, an error prompt will gracefully remind you to authenticate.

#### Create Quiz Modal

* The Create Quiz Modal is a dynamic React component that facilitates the effortless creation of new quizzes. As a professor, you'll find it seamless to set quiz details, questions, options, and correct answers, all within this intuitive interface.

* Within the modal, you have the flexibility to define the quiz's timer, the number of questions, start date, due date, visibility date, and total marks, giving you full control over the quiz setup.

* The user-friendly interface lets you add multiple questions with ease. Furthermore, you can conveniently manage options, allowing you to delete both entire questions or specific options in case of any input errors.

* On save the details will be saved to the mongodb database.

#### Question Bank Modal

* The Question Bank Modal is a reactive component designed to enhance your quiz creation experience. You can effortlessly add new questions to any quiz with a few simple clicks.

#### Quiz Details Modal

* The Quiz Details Modal is an elegant React component that showcases intricate details of a selected quiz in a visually appealing modal dialog. This comprehensive view includes essential quiz information, a detailed list of questions, and the corresponding correct answers.


### Quiz Page

* Once a student selects a particular quiz, a seamless transition to the Quiz Page awaits. Here, you'll be prompted to start the quiz by simply accepting an alert.

* As a diligent student, you'll find the quiz-taking process streamlined and straightforward.

* The Quiz Page boasts an intuitive timer, presenting a sense of urgency while answering the questions. A seamless navigator ensures smooth navigation through various quiz questions.

* The questions and multiple-choice options are elegantly displayed for clarity and ease of answering.

* Once you've completed the quiz to the best of your abilities, a user-friendly submit button awaits your command, concluding your quiz-taking experience.

### Backend Code

* **createQuiz.ts** : This file is the create api which is use to insert document to the Database.

* **deleteQuiz.ts** : This file is the delete api which is use to delete document to the Database.

* **listQuiz.ts** : This file is for getting all the quiz from the Database.

* **updateQuiz.ts** : This file is the update api which is use to update document to the Database.



## Sources Used


### quiz.service.ts

*Lines 87 - 93*

```tsx
const projection = {
        "_id": 1,
        "startDate": 1,
        "dueDate": 1,
        "title": 1,
        "description": 1,
      };
      const returned_quizzes = await db.collection(quizCollectionName).find().project(projection).toArray();
      client.close();
```

The code above was created by adapting the code in [MongoDB](https://www.mongodb.com/docs/drivers/node/current/usage-examples/find/) as shown below:

```tsx
const options = {
      // sort returned documents in ascending order by title (A->Z)
      sort: { title: 1 },
      // Include only the `title` and `imdb` fields in each returned document
      projection: { _id: 0, title: 1, imdb: 1 },
    };
    const cursor = movies.find(query, options);

```

 * The code in [MongoDB](https://www.mongodb.com/docs/drivers/node/current/usage-examples/find/) was implemented by authors in MongoDB official documents.
* [MongoDB](https://www.mongodb.com/docs/drivers/node/current/usage-examples/find/)'s Code was used because I wanted specific result from the document.

### createQuiz.tsx

*Lines 190 - 196 && 429 - 439

```tsx
  <Modal isOpen={isOpenQuizModel} onClose={handleCancel} size="xl" scrollBehavior="inside">
      {isLoading && <Loader />}
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Quiz</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
            ...
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="gray" onClick={handleCancel}>
            Cancel
          </Button>
          <Button colorScheme="teal" onClick={handleSave} ml={2}>
            Save
          </Button>
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

- The code in [Chakra UI Modal](https://chakra-ui.com/docs/components/modal/usage) was present in official documentation of Chakra UI.
- [Chakra UI Modal](https://chakra-ui.com/docs/components/modal/usage)'s Code was used because once user has clicked on button - a small dialog box will be shown to the user stating success message of contancting us.
- [Chakra UI Modal](https://chakra-ui.com/docs/components/modal/usage)'s Code was modified by maitaining isOpen and inClose conditions and setting up different message to the user.

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

* The code in [Router](https://medium.com/react-courses/how-to-integrate-routing-in-typescript-project-with-react-router-v5-2-0-a6b0ab160a1b) was implemented by a medium blog writer in the given link.
* [Router](https://medium.com/react-courses/how-to-integrate-routing-in-typescript-project-with-react-router-v5-2-0-a6b0ab160a1b)'s Code was used because once user clicks something - should be redirected to the corresponding pages.
- [Router](https://medium.com/react-courses/how-to-integrate-routing-in-typescript-project-with-react-router-v5-2-0-a6b0ab160a1b)'s Code was modified by writing proper component name and paths as per parameters and by default path too (Which is our /LandingPage)




## Acknowledgments

* [1] “Regex to not match leading and trailing white spaces for email address in javascript,” Stack Overflow. [Online]. Available: https://stackoverflow.com/questions/65631340/regex-to-not-match-leading-and-trailing-white-spaces-for-email-address-in-javasc. [Accessed: 20-Jun-2023].

* [2] “Accordion,” Chakra UI: Simple, Modular and Accessible UI Components for your React Applications. [Online]. Available: https://chakra-ui.com/docs/components/accordion/usage. [Accessed: 20-Jun-2023].

* [3] Raj Shah - “Assignment - 1” GitLab. [Online]. Available: https://git.cs.dal.ca/harshils/5709-assignments-b00918159-rajs/-/tree/main/Assignment%201. [Accessed: 20-Jun-2023].

* [4] “Card,” Chakra UI: Simple, Modular and Accessible UI Components for your React Applications. [Online]. Available: https://chakra-ui.com/docs/components/card/usage. [Accessed: 20-Jun-2023].

* [5] “Modal,” Chakra UI: Simple, Modular and Accessible UI Components for your React Applications. [Online]. Available: https://chakra-ui.com/docs/components/modal/usage. [Accessed: 20-Jun-2023].

* [6] E. E. Elrom, “Integrate Routing in Typescript project with React-Router v5.2.0. Including Redux toolkit integration. 2020 ReactJS example tutorial,” Master React, 11-Aug-2020. [Online]. Available: https://medium.com/react-courses/how-to-integrate-routing-in-typescript-project-with-react-router-v5-2-0-a6b0ab160a1b. [Accessed: 20-Jun-2023].

* [7] “Find multiple documents,” Mongodb.com. [Online]. Available: https://www.mongodb.com/docs/drivers/node/current/usage-examples/find/. [Accessed: 27-Jul-2023].
