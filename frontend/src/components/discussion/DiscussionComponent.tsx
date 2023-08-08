// import React, { useState } from "react";
// import { Discussion } from "../model/discussions.model";
// import Modal from "react-bootstrap/Modal";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";

// interface DiscussionComponentProps {
//   discussion: Discussion;
//   onEdit: (editedDiscussion: Discussion) => void;
//   onDelete: () => void;
// }

// function DiscussionComponent({
//   discussion,
//   onEdit,
//   onDelete,
// }: DiscussionComponentProps) {
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [editedContent, setEditedContent] = useState(discussion.content);

//   const handleEdit = () => {
//     setShowEditModal(true);
//   };

//   const handleCloseEditModal = () => {
//     setShowEditModal(false);
//     setEditedContent(discussion.content); // Reset the edited content
//   };

//   const handleSaveEdit = () => {
//     const editedDiscussion: Discussion = {
//       ...discussion,
//       content: editedContent,
//     };
//     onEdit(editedDiscussion);
//     setShowEditModal(false);
//   };

//   return (
//     <div className="discussion">
//       <p>{discussion.content}</p>
//       <p>User ID: {discussion.userID}</p>
//       <p>Course ID: {discussion.courseID}</p>
//       {/* Display other discussion details */}
//       <div>
//         <button onClick={handleEdit}>Edit</button>
//         <button onClick={onDelete}>Delete</button>
//       </div>

//       {/* Edit Modal */}
//       <Modal show={showEditModal} onHide={handleCloseEditModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Edit Discussion</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form.Control
//             as="textarea"
//             rows={4}
//             value={editedContent}
//             onChange={(e) => setEditedContent(e.target.value)}
//           />
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseEditModal}>
//             Cancel
//           </Button>
//           <Button variant="primary" onClick={handleSaveEdit}>
//             Save
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

// export default DiscussionComponent;
import React, { useState } from "react";
import { Discussion } from "../model/discussions.model";
import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Textarea,
} from "@chakra-ui/react";

interface DiscussionComponentProps {
  discussion: Discussion;
  onEdit: (editedDiscussion: Discussion) => void;
  onDelete: () => void;
}

function DiscussionComponent({
  discussion,
  onEdit,
  onDelete,
}: DiscussionComponentProps) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedContent, setEditedContent] = useState(discussion.content);

  const handleEdit = () => {
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setEditedContent(discussion.content); // Reset the edited content
  };

  const handleSaveEdit = () => {
    const editedDiscussion: Discussion = {
      ...discussion,
      content: editedContent,
    };
    onEdit(editedDiscussion);
    setShowEditModal(false);
  };

  return (
    <Box className="discussion" p={4} borderWidth="1px" borderRadius="md">
      <p>{discussion.content}</p>
      <p>User ID: {discussion.userID}</p>
      <p>Course ID: {discussion.courseID}</p>
      {/* Display other discussion details */}
      <Box mt={2}>
        <Button onClick={handleEdit} colorScheme="blue" mr={2}>
          Edit
        </Button>
        <Button onClick={onDelete} colorScheme="red">
          Delete
        </Button>
      </Box>

      {/* Edit Modal */}
      <Modal isOpen={showEditModal} onClose={handleCloseEditModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Discussion</ModalHeader>
          <ModalBody>
            <Textarea
              rows={4}
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
            />
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={handleCloseEditModal}>
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={handleSaveEdit}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default DiscussionComponent;
