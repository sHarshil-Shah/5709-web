import React, { useEffect, useState } from "react";
import DiscussionComponent from "./DiscussionComponent";
import envVariables from "../../importenv";
import { Discussion } from "../model/discussions.model";
import { Modal, Button, Form } from "react-bootstrap"; // Assuming you're using Bootstrap components

function DiscussionList() {
  const [discussions, setDiscussions] = useState<Discussion[]>([]);
  const [sortedDiscussions, setSortedDiscussions] = useState<Discussion[]>([]);
  const [availableCourseIDs, setAvailableCourseIDs] = useState<string[]>([]);
  const [selectedCourseID, setSelectedCourseID] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newDiscussionCourseID, setNewDiscussionCourseID] = useState("");
  const [newDiscussionContent, setNewDiscussionContent] = useState("");

  const handleOpenModal = () => {
    console.log("called");
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setNewDiscussionCourseID("");
    setNewDiscussionContent("");
  };

  // Inside your DiscussionList component
  const handleCreateDiscussion = async () => {
    const userData = JSON.parse(localStorage.getItem("userData") || "");
    const userEmail = (userData && userData.user_mail) || "";

    const newDiscussion = {
      userID: userEmail,
      courseID: newDiscussionCourseID,
      content: newDiscussionContent,
    };

    try {
      const response = await fetch(`${backendURL}/create-discussion`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newDiscussion),
      });

      if (response.ok) {
        console.log("Discussion created:", newDiscussion);
        // Fetch updated discussions after successful create
        fetchDiscussions();
      } else {
        console.error("Failed to create discussion.");
      }
    } catch (error) {
      console.error("Error creating discussion:", error);
    }

    handleCloseModal();
  };

  useEffect(() => {
    fetchDiscussions();
  }, []);

  const fetchDiscussions = () => {
    fetchDiscussionsFromBackend().then((fetchedDiscussions: Discussion[]) => {
      console.log(fetchedDiscussions)
      if (fetchedDiscussions.length > 0) {
        setDiscussions(fetchedDiscussions);

        const uniqueCourseIDs = [
          ...new Set(
            fetchedDiscussions.map((discussion) => discussion.courseID)
          ),
        ].filter((courseID) => courseID !== undefined) as string[];
        setAvailableCourseIDs(uniqueCourseIDs);
      } else {
        setDiscussions([]);
        setAvailableCourseIDs([]);
      }
    });
  };
  const backendURL = envVariables.backendURL;

  function fetchDiscussionsFromBackend() {
    return fetch(`${backendURL}/discussion`)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          return data;
        } else {
          return [];
        }
      })
      .catch((error) => {
        console.error(error);
        return [];
      });
  }

  useEffect(() => {
    const sortedFilteredDiscussions = discussions.filter((discussion) =>
      selectedCourseID ? discussion.courseID === selectedCourseID : true
    );
    setSortedDiscussions(sortedFilteredDiscussions);
  }, [selectedCourseID, discussions]);

  const handleEditDiscussion = async (editedDiscussion: Discussion) => {
    try {
      const response = await fetch(
        `${backendURL}/update-discussion/${editedDiscussion._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editedDiscussion), // Send the edited discussion object
        }
      );

      if (response.ok) {
        console.log("Discussion updated:", editedDiscussion);
        // Fetch updated discussions after successful update
        fetchDiscussions();
      } else {
        console.error("Failed to update discussion.");
      }
    } catch (error) {
      console.error("Error updating discussion:", error);
    }
  };

  const handleDeleteDiscussion = async (discussion: Discussion) => {
    try {
      const response = await fetch(
        `${backendURL}/delete-discussion/${discussion._id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        console.log("Discussion deleted:", discussion);
        // Fetch updated discussions after successful delete
        fetchDiscussions();
      } else {
        console.error("Failed to delete discussion.");
      }
    } catch (error) {
      console.error("Error deleting discussion:", error);
    }
  };

  const handleEditDiscussionInList = (editedDiscussion: Discussion) => {
    // Find the index of the edited discussion in the discussions array
    const editedDiscussionIndex = discussions.findIndex(
      (discussion) => discussion._id === editedDiscussion._id
    );

    if (editedDiscussionIndex !== -1) {
      // Create a copy of the discussions array and update the edited discussion
      const updatedDiscussions = [...discussions];
      updatedDiscussions[editedDiscussionIndex] = editedDiscussion;

      // Update the state with the updated discussions array
      setDiscussions(updatedDiscussions);
      handleEditDiscussion(editedDiscussion); // Call the API to save changes
    }
  };

  return (
    <div style={{ marginLeft: "10%", marginRight: "10%" }}>
      <button onClick={handleOpenModal}>Add Discussion</button>

      <div className="Headers">Discussions</div>
      <label htmlFor="courseSelect">Sort by Course ID:</label>
      <select
        id="courseSelect"
        value={selectedCourseID}
        onChange={(event) => setSelectedCourseID(event.target.value)}
      >
        <option value="">All Courses</option>
        {availableCourseIDs.map((courseID) => (
          <option key={courseID} value={courseID}>
            {courseID}
          </option>
        ))}
      </select>
      <div>
        {sortedDiscussions.map((discussion, index) => (
          <DiscussionComponent
            key={index}
            discussion={discussion}
            onEdit={handleEditDiscussionInList} // Use the modified function
            onDelete={() => handleDeleteDiscussion(discussion)}
          />
        ))}
      </div>
      <Modal show={isModalOpen} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Discussion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="newDiscussionCourseID">
            <Form.Label>Course ID:</Form.Label>
            <Form.Control
              type="text"
              value={newDiscussionCourseID}
              onChange={(event) => setNewDiscussionCourseID(event.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="newDiscussionContent">
            <Form.Label>Content:</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              value={newDiscussionContent}
              onChange={(event) => setNewDiscussionContent(event.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleCreateDiscussion}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default DiscussionList;
