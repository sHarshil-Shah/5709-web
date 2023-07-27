<!--- The following README.md sample file was adapted from https://gist.github.com/PurpleBooth/109311bb0361f32d87a2#file-readme-template-md by Gabriella Mosquera for academic use ---> 
<!--- You may delete any comments in this sample README.md file. If needing to use as a .txt file then simply delete all comments, edit as needed, and save as a README.txt file --->

# ClassMate

The background of the Classmate Application stems from the challenges and complexities faced in traditional educational settings. In many educational institutions, administrative tasks are often time-consuming and manual, leading to inefficiencies and delays. Communication between students and professors can be fragmented, with information scattered across multiple platforms or channels. Additionally, the lack of a centralized platform for collaboration and knowledge sharing can hinder the development of a vibrant learning community.

To address these issues, the Classmate Application was developed as a digital platform specifically designed for students, professors, and campus administrators. Its primary goal is to simplify administrative processes, improve communication channels, and foster a collaborative learning environment. By leveraging technology, the application aims to streamline various aspects of educational management and create a more efficient and effective system

* *Date Created*: 22 May 2023
* *Last Modification Date*: 25 July 2023
* *Netlify URL*: [Frontend](https://classmate-g7.netlify.app/) https://classmate-g7.netlify.app/
* *Render URL*: [Backend](https://classmate-backend.onrender.com) https://classmate-backend.onrender.com
* *Git URL*: [ClassMate Git](https://git.cs.dal.ca/harshils/classmate.git) https://git.cs.dal.ca/harshils/classmate.git

## Authors

* [Viral Siddhapura](vr607491@dal.ca) - *(Full Stack Developer)*

## Deployment

### Frontend
- CI/CD pipeline is used throughout the development
- Commit on Main Branch in Frontend folder
- Frontend validations are done properly and tested on netlify as well

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
├───backend
│   ├───controller
│   │   └───profAssignments
│   │   └───studentAssignments
│   ├───model
│   │   └───profAssignmentsModel
│   │   └───studAssignmentsModel
│   └───service
│   │   └───profassignmentServices
│   │   └───studAssignmentServices
└───frontend
    ├───public
    └───src
        ├───assests
        │   └───images
        ├───components
        │   ├───contact
        │   ├───Landing
        │   ├───model
        │   ├───otherpages
        │   └───ProfessorAssignments
        │   └───StudAssignments        
        └───DynamicRoute
```

Note: Page URLs might not work on netlify directly

### Page 1: Professor Assignment Page
Route to the page: 

* If not already logged in, From landing page click on Login, 
* If already logged in, click on logout page and then login button will appear

#### Login as Admin
* Email ID: admin@mail.com
* Password: AdminPass

#### Login as a professor

* Email ID: prof@test.com
* Password: ProfPass

#### Login as a Student

* Email ID: stud@test.com 
* Password: StudPass

### Page 1: Assigment Creation

Route to the page:
* Login as Professor to go to Assignment Page.
* Click on Create Assignment Button As you can see on the right hand corner.
* Enter all details and click on create user.
* Make sure you put all the details as all things are mandatory.

### Page 2: List Assignments on the Dashboard Page

* Login as Professor to go to Professor dashboard
* From Professor dashboard move to List User (To see Any assignment listed are not)
* If No Assignment then we should see a message that => No Assignment Data.
* Else we should see some of the assignments list with the tabular format.
* Make sure, while checking you wait for 3 to 4 seconds as render(BackEnd Hosting) sometimes runs slow.
* A tabular format for Assignment List is containing Fields like Assignment Title, Assignment Visible Date, Assignment Submission Date, Action columns.

### Page 3: Delete Assignment on the Dashboard Page

* Clicking on Delete Assignment button, will ask you to delete confirmation of an assignment from database as well as the list.
* If click on Yes, you can see a success message that assignment has been deleted.
* Else the assignment list will remain same.

### Page 3: Edit Assignment on the Dashboard Page

* Clicking on Edit Assignment button, will open an Edit Assignment Dialog Box with pre-populated Data.
* After updating some of the information, you can click on "Update" button - which refers to updating assignment list.
* After loading is done - it will update the assignment list as well with the updated list.
* If clicked on Cancel button, it will close that Edit Assignment Modal simply.

## Sources Used

<!-- If in completing your lab / assignment / project you used any interpretation of someone else's code, then provide a list of where the code was implement, how it was implemented, why it was implemented, and how it was modified. See the sections below for more details. -->

### ProfAssignmentService.tsx

*Lines 88 - 110*

```tsx
  async createAssignment(assignment: assignment) {
        try {
            // Connect to MongoDB
            const client = await MongoClient.connect(mongoURI, {
                connectTimeoutMS: 5000,
                socketTimeoutMS: 30000
            });

            const db: Db = client.db(dbName);

            // Check user credentials in the MongoDB collection
            console.log(assignment);

            const new_assignment = await db.collection(profAssignmentsCollectionName).insertOne(assignment);

            console.log(assignment);
            await client.close();
            return new_assignment;
        } catch (error) {
            console.log(error);
        }
    }

```

The code above was created by adapting the code in [ProfAssignmentService Page](https://www.mongodb.com/docs/manual/reference/method/db.collection.insertOne/) as shown below:

```tsx
    try {
        db.products.insertOne(
            { "item": "envelopes", "qty": 100, type: "Self-Sealing" },
            { writeConcern: { w : "majority", wtimeout : 100 } }
    );
    } catch (e) {
        print (e);
    }

```

- <!---How---> The code in [ProfAssignmentService Page](https://www.mongodb.com/docs/manual/reference/method/db.collection.insertOne/) was implemented by authors in MongoDB Documentation.
- <!---Why---> [ProfAssignmentService Page](https://www.mongodb.com/docs/manual/reference/method/db.collection.insertOne/)'s Code was used because we want to show that how in the backend assignment is added.
- <!---How---> [ProfAssignmentService Page](https://www.mongodb.com/docs/manual/reference/method/db.collection.insertOne/)'s Code was modified by inserting data into MongoDB - by running a async call with respect to MongoDB Client opening and closing a call.

<!-- *Repeat as needed* -->

### CreateAssignmentModal.tsx

*Lines 224 - 245

```tsx
    function callCreateAssignmentAPI(assignment : Assignment): Promise<{ assignment: Assignment }> {
    const backendURL = envVariables.backendURL;

    return fetch(backendURL + '/createAssignment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(assignment),
    })
        .then((response) => response.json())
        .then((data) => {
            // Handle the response data
            console.log(data);
            return data;
        })
        .catch((error) => {
            // Handle any errors
            console.error(error);
            return {};
        });
    }

```

The code above was created by adapting the code in [CreateAssignmentModal](https://www.codingthesmartway.com/how-to-fetch-api-data-with-react/) as shown below:

```tsx
  const fetchUserData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

```

- <!---How---> The code in [CreateAssignmentModal](https://www.codingthesmartway.com/how-to-fetch-api-data-with-react/) was present in the mentioned link author's documentation.
- <!---Why---> [CreateAssignmentModal](https://www.codingthesmartway.com/how-to-fetch-api-data-with-react/)'s Code was used because once user has clicked on create assignment button - an assignment details should be added to the database.
- <!---How---> [CreateAssignmentModal](https://www.codingthesmartway.com/how-to-fetch-api-data-with-react/)'s Code was modified by maitaining try and catch block as well as handling JSON data output properly.

### AssignmentList.tsx

*Lines 79 - 88*

```tsx
  useEffect(() => {
        const fetchAssignments = async () => {
          try {
            const response = await fetchAssignmentList();
            setAssignments(response.assignments);
          } catch (error) {
            console.error(error);
            setAssignments([]); 
          }
        };
    
        fetchAssignments();
      },[assignments]);

```

The code above was created by adapting the code in [Assignment List Page](https://www.digitalocean.com/community/tutorials/how-to-call-web-apis-with-the-useeffect-hook-in-react) as shown below:

```tsx
    useEffect(() => {
        let mounted = true;
        getList()
        .then(items => {
            if(mounted) {
            setList(items)
            }
        })
        return () => mounted = false;
    }, [])

```

- <!---How---> The code in [Assignment List Page](https://www.digitalocean.com/community/tutorials/how-to-call-web-apis-with-the-useeffect-hook-in-react) was implemented by a Digital Ocean blog writer in the given link.
- <!---Why---> [Assignment List Page](https://www.digitalocean.com/community/tutorials/how-to-call-web-apis-with-the-useeffect-hook-in-react)'s Code was used because once page is rendered - using this react hook, we can call any API we want to call and fetch the data accordingly.
- <!---How---> [Assignment List Page](https://www.digitalocean.com/community/tutorials/how-to-call-web-apis-with-the-useeffect-hook-in-react)'s Code was modified by calling a proper API() endpoint - gettting responses and putting into the assignment list data so that we can show the data accordingly.

### studentAssignment.tsx

*Lines 121 - 141

```tsx
  <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <ModalOverlay />
        <ModalContent>
        <ModalHeader>Add Comments and Upload File</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
            <Textarea
            placeholder="Add comments..."
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            />
            <Input type="file" onChange={handleFileChange} />
        </ModalBody>
        <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSave}>
                Save
            </Button>
            <Button onClick={handleModalClose}>Cancel</Button>
        </ModalFooter>
        </ModalContent>
    </Modal>

```

The code above was created by adapting the code in [Chakra UI - Modal](https://chakra-ui.com/docs/components/modal/usage) as shown below:

```tsx
  <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input ref={initialRef} placeholder='First name' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder='Last name' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

```

- <!---How---> The code in [Chakra UI - Modal](https://chakra-ui.com/docs/components/modal/usage) was present in the official documentation of chakra ui.
- <!---Why---> [Chakra UI - Modal](https://chakra-ui.com/docs/components/modal/usage)'s Code was used because we want to show the modal for uploading A file or image and comments fields.
- <!---How---> [Chakra UI - Modal](https://chakra-ui.com/docs/components/modal/usage)'s Code was modified by handling different button clicking calls and how to open or close the modal.

### profAssignment.model.tsx

*Lines 1 - 12*

```tsx
    interface assignment {
        assignmentTitle?: String;
        visibleDate?: String;
        submissionDate?: String;
        description?: String;
        file?: File | null;
        grade?: number;
        courseId?: String;
        assignment_id?: String;
    }

    export default assignment;

```

The code above was created by adapting the code in [Prof Assignment Interface](https://www.typescriptlang.org/docs/handbook/2/objects.html) as shown below:

```tsx
    interface PaintOptions {
        shape: Shape;
        xPos?: number;
        yPos?: number;
    }

```

- <!---How---> The code in [Prof Assignment Interface](https://www.typescriptlang.org/docs/handbook/2/objects.html) was implemented by Proposed by authors on typescriptlang.
- <!---Why---> [Prof Assignment Interface](https://www.typescriptlang.org/docs/handbook/2/objects.html)'s Code was used because we want to group and pass around data is through objects.
- <!---How---> [Prof Assignment Interface](https://www.typescriptlang.org/docs/handbook/2/objects.html)'s Code was modified by changing the fields of different data types.


## Acknowledgments

* [1] “Regex to not match leading and trailing white spaces for email address in javascript,” Stack Overflow. [Online]. Available: https://stackoverflow.com/questions/65631340/regex-to-not-match-leading-and-trailing-white-spaces-for-email-address-in-javasc. [Accessed: 20-Jun-2023].

* [2] “Accordion,” Chakra UI: Simple, Modular and Accessible UI Components for your React Applications. [Online]. Available: https://chakra-ui.com/docs/components/accordion/usage. [Accessed: 20-Jun-2023].

* [3] Harshil Shah - “Assignment - 1” GitLab. [Online]. Available: https://git.cs.dal.ca/harshils/5709-assignments-b00919966-harshil/-/tree/main/Assignment%201. [Accessed: 20-Jun-2023].

* [4] “Card,” Chakra UI: Simple, Modular and Accessible UI Components for your React Applications. [Online]. Available: https://chakra-ui.com/docs/components/card/usage. [Accessed: 20-Jun-2023].

* [5] “Modal,” Chakra UI: Simple, Modular and Accessible UI Components for your React Applications. [Online]. Available: https://chakra-ui.com/docs/components/modal/usage. [Accessed: 20-Jun-2023].

* [6] E. E. Elrom, “Integrate Routing in Typescript project with React-Router v5.2.0. Including Redux toolkit integration. 2020 ReactJS example tutorial,” Master React, 11-Aug-2020. [Online]. Available: https://medium.com/react-courses/how-to-integrate-routing-in-typescript-project-with-react-router-v5-2-0-a6b0ab160a1b. [Accessed: 20-Jun-2023].
