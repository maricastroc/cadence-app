import styled from 'styled-components'
import { DragHandle } from '@/components/Core/DragHandle'

// Dashed "Add subtask" composer reuses the shared sheet primitive.
export { DashedComposerBtn as AddSubtaskBtn } from '../Sheet/styles'

// A subtask row in the edit/create form: grip handle + the field group.
export const SubtaskRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  width: 100%;

  /* the field group (input + inline error) fills the row beside the grip */
  > div {
    flex: 1;
    min-width: 0;
  }
`

// The grip spans the input height so it lines up with the field, not the error.
export const SubtaskDragHandle = styled(DragHandle)`
  height: 44px;
`

export const SubtasksForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const SubtasksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  width: 100%;
  margin-bottom: 0.7rem;
`

// Fills the otherwise-empty subtasks area so the section doesn't read as a void
// before the first subtask is added.
export const SubtasksEmpty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  width: 100%;
  min-height: 72px;
  padding: 0.75rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme['field-bg']};
  color: ${(props) => props.theme['muted-color']};
  text-align: center;

  svg {
    font-size: 1rem;
    opacity: 0.7;
  }

  span {
    font-size: 0.8125rem;
    font-weight: 500;
  }
`

export const StyledDatePickerWrapper = styled.div`
  width: 100%;

  .react-datepicker-wrapper {
    width: 100%;
  }

  .react-datepicker {
    background-color: ${(props) => props.theme['card-color']};
    border-radius: 12px;
    box-shadow: ${(props) => props.theme['shadow-pop']};
    padding: 0.7rem;
    font-family: inherit;

    div {
      color: ${(props) => props.theme['title-color']};
    }
  }

  .react-datepicker__navigation {
    top: 0.7rem;
    width: 28px;
    height: 28px;
    border-radius: 7px;
    transition: background-color 140ms ease;
  }

  .react-datepicker__navigation--previous {
    left: 0.7rem;
  }

  .react-datepicker__navigation--next {
    right: 0.7rem;
  }

  .react-datepicker__navigation:hover {
    background-color: ${(props) => props.theme['hairline-color']};
  }

  .react-datepicker__navigation-icon::before {
    width: 7px;
    height: 7px;
    border-width: 2px 2px 0 0;
    border-color: ${(props) => props.theme['subtitle-color']};
  }

  .react-datepicker__navigation:hover
    .react-datepicker__navigation-icon::before {
    border-color: ${(props) => props.theme['title-color']};
  }

  .react-datepicker__day-names {
    padding-top: 1rem;
  }

  .react-datepicker__header {
    position: relative;
    background-color: transparent;
    border: none;
    color: ${(props) => props.theme['title-color']};

    h2,
    div {
      color: ${(props) => props.theme['title-color']};
    }
  }

  .react-datepicker__day {
    color: ${(props) => props.theme['text-color']};
    border-radius: 6px;
  }

  .react-datepicker__day--selected,
  .react-datepicker__day:hover {
    background-color: ${(props) => props.theme['accent-color']};
    color: ${(props) => props.theme['accent-on']};
    border-radius: 6px;
  }

  .react-datepicker__day--today {
    background-color: ${(props) => props.theme['hairline-strong']};
    border-radius: 6px;
    color: ${(props) => props.theme['title-color']};
  }
`
