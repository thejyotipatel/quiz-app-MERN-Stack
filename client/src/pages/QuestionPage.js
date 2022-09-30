import React, { useState } from 'react'
import FormRowSelect from '../component/FormRowSelect'
import InputCmponent from '../component/InputCmponent'
import { useAppContext } from '../context/appContext'

const QuestionPage = () => {
  const {
    user,
    questionTypeOptions,
    questionType,
    point,
    handleChange,
    Question,
    options1,
    options2,
    options3,
    Questions,
    createQuiz,
  } = useAppContext()
  const handleInputs = (e) => {
    const name = [e.target.name]
    const value = [e.target.value]
    handleChange({ name, value })
  }
  const onSubmit = (e) => {
    e.preventDefault()
    createQuiz()
  }

  return (
    <form className='container' onSubmit={onSubmit}>
      <h1>Questions {Questions.length}</h1>
      <div className='question-header'>
        <FormRowSelect
          list={questionTypeOptions}
          value={questionType}
          name='questionType'
          handleChange={handleInputs}
        />
        <InputCmponent
          type='number'
          name='point'
          value={point}
          handleChange={handleInputs}
        />
      </div>
      <div className='question-contant'>
        <InputCmponent
          type='text'
          name='Question'
          value={Question}
          handleChange={handleInputs}
          placeholder='Write your Question here'
        />
        <div className='question-options'>
          <InputCmponent
            type='text'
            name='options1'
            value={options1}
            handleChange={handleInputs}
            placeholder='option 1'
          />
          <InputCmponent
            type='text'
            name='options2'
            value={options2}
            placeholder='option 2'
            handleChange={handleInputs}
          />
          <InputCmponent
            type='text'
            name='options3'
            placeholder='option 3'
            value={options3}
            handleChange={handleInputs}
          />
        </div>
      </div>

      <div className='btns'>
        <button>Add</button>
        <button>Delete</button>
      </div>
    </form>
  )
}

export default QuestionPage
