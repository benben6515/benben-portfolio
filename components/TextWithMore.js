import { useState } from 'react'
import styled from '@emotion/styled'

const MAX_LINES = 4

const TextWrapper = styled.div`
  position: relative;
`

const ClampedText = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;

  display: -webkit-box;
  -webkit-line-clamp: ${MAX_LINES};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`

const MoreButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #7d7;
  padding: 0.25rem 0.75rem;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 0.85rem;
  margin-top: 0.5rem;
  transition: 0.2s;
  font-family: inherit;

  &:hover {
    background: rgba(125, 221, 125, 0.2);
    border-color: #7d7;
  }
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`

const Modal = styled.div`
  background: rgba(30, 30, 30, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 1rem;
  padding: 1.5rem;
  max-width: 500px;
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
`

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`

const ModalTitle = styled.h3`
  color: #fff;
  font-size: 1rem;
  margin: 0;
`

const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
  font-family: inherit;

  &:hover {
    color: #fff;
  }
`

const ModalContent = styled.div`
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;
  line-height: 1.7;
  max-height: 60vh;
  overflow-y: auto;
  white-space: pre-wrap;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 3px;

    &:hover {
      background: rgba(255, 255, 255, 0.5);
    }
  }
`

function TextWithMore({ text, author, moreText = 'More' }) {
  const [isOpen, setIsOpen] = useState(false)

  // Estimate if text exceeds 4 lines
  // Average ~80 characters per line at container width, 4 lines = ~320 chars
  const isLongText = text.length > 150

  if (!isLongText) {
    return <ClampedText>"{text}"</ClampedText>
  }

  return (
    <TextWrapper>
      <ClampedText>"{text}"</ClampedText>
      <MoreButton onClick={() => setIsOpen(true)}>{moreText}</MoreButton>

      {isOpen && (
        <Overlay onClick={() => setIsOpen(false)}>
          <Modal onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>{author}</ModalTitle>
              <CloseButton onClick={() => setIsOpen(false)}>&times;</CloseButton>
            </ModalHeader>
            <ModalContent>"{text}"</ModalContent>
          </Modal>
        </Overlay>
      )}
    </TextWrapper>
  )
}

export default TextWithMore
