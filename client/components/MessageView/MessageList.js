import React from 'react'

const MessageList = ({ messages, deleteMessage }) => {
  if (!messages) return null

  const handleDelete = (message) => () => {
    deleteMessage(message)
  }

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <ul>
      {messages.map((message) => (
        <li key={message.id}>
          {message.body}
          <button type="button" onClick={handleDelete(message)}>
            delete
          </button>
        </li>
      ))}
    </ul>
  )
}

export default MessageList
