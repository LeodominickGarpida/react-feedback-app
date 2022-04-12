import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeebackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This item is from context',
      rating: 2
    },
    {
      id: 2,
      text: 'Second item from the context',
      rating: 6
    },
  ])

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  // set item to be updated
  const editFeedback = item => {
    setFeedbackEdit({
      item,
      edit: true
    })
  }

  // Update item
  const updateFeedback = (id, updItem) => {
    setFeedback(feedback.map((item) => item.id === id ? { ...updItem, id } : item ))
    // console.log(feedback)
  }

  return (
    <FeebackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        addFeedback,
        deleteFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeebackContext.Provider>
  )
}

export default FeebackContext