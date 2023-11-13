import { useState } from 'react'
import React from 'react'
import Heading from './components/Heading/Heading'
import Instruction from './components/Instruction/Instruction'
import Input from './components/Inputs/Input'
import Button from './components/Button/Button'
import Separator from './components/Separator/Separator'
import Link from './components/Link/Link'
import './App.css'

//=================TYPES==========
const TYPE_TEXT = 'text';
const TYPE_TEL = 'tel';
const TYPE_EMAIL = 'email';
const TYPE_PASSWORD = 'password';
const TYPE_CHECKBOX = 'checkbox';
const BUTTOM_TYPE_SUBMIT = 'submit';
//=================NAME===========
const NAME = 'name';
const SURNAME = 'surname';
const TEL = 'tel';
const EMAIL = 'email';
const PASSWORD = 'password';
const REPEAT_PASSWORD = 'repeatPassword';
const SUBMIT_PASSWORD = 'submitPassword';
//=================PLACEHOLDER======
const NAME_PLACEHOLDER = 'Name';
const SURNAME_PLACEHOLDER = 'Surname';
const TEL_PLACEHOLDER = '+420-000-000-000';
const EMAIL_PLACEHOLDER = 'Email';
const PASSWORD_PLACEHOLDER = 'Password';
const REPEAT_PASSWORD_PLACEHOLDER = 'Repeat password';
//=================TEXT==============
const SUBMIT_PASSWORD_TEXT = 'Submit password';
const BUTTON_TEXT = 'Continue';
const LINK_TEXT = 'Already have account ?';
//=================VALUE==============
const LINK_VALUE = 'Link ->';
//=================ERROR==============
const PASSWORD_MATCH_OR_EMPTY_ERROR = 'Password does not match or empty';
const PASSWORD_SUBMIT_ERROR = 'Please, submit your password';
//=================ACCOUNT CREATE==============
const ACCOUNT_CREATE = 'Account is successfully create';

let formDefaultState = {
  name: '',
  surname: '',
  tel: '',
  email: '',
  password: '',
  repeatPassword: '',
  submitPassword: false
}

function App() {
  const [form, setForm] = useState(formDefaultState)
  const clearInput = () => {
    setForm(formDefaultState)
  }
  const handleInputSetForm = (e) => {
    const { name, value, type, checked } = e.target
    const values = type === TYPE_CHECKBOX ? checked : value

    setForm(({
      ...form,
      [name]: values
    }));
  }

  console.log(form)
  const handleButton = (e) => {
    e.preventDefault()

    if(form.password !== form.repeatPassword || form.password === ''|| form.repeatPassword === '') {
        alert(PASSWORD_MATCH_OR_EMPTY_ERROR)
        return
      }

    if(!form.submitPassword) {
      alert(PASSWORD_SUBMIT_ERROR)
      return
    }

    console.log(form)
    alert(ACCOUNT_CREATE)
    clearInput()
  }

  return (
    <form onSubmit={handleButton}>
      <div>
      <Heading />
      <Instruction />
      <Input
        type={TYPE_TEXT}
        name={NAME}
        value={form.name}
        placeholder={NAME_PLACEHOLDER}
        required
        onChange={handleInputSetForm}
      />
       <Input
        type={TYPE_TEXT}
        name={SURNAME}
        value={form.surname}
        placeholder={SURNAME_PLACEHOLDER}
        required
        onChange={handleInputSetForm}
      />
       <Input
        type={TYPE_TEL}
        name={TEL}
        value={form.tel}
        placeholder={TEL_PLACEHOLDER}
        pattern='\+\d{3}-\d{3}-\d{3}-\d{3}'
        required
        onChange={handleInputSetForm}
      />
       <Input
        type={TYPE_EMAIL}
        name={EMAIL}
        value={form.email}
        placeholder={EMAIL_PLACEHOLDER}
        required
        onChange={handleInputSetForm}
      />
       <Input
        type={TYPE_PASSWORD}
        name={PASSWORD}
        value={form.password}
        placeholder={PASSWORD_PLACEHOLDER}
        onChange={handleInputSetForm}
      />
       <Input
        type={TYPE_PASSWORD}
        name={REPEAT_PASSWORD}
        value={form.repeatPassword}
        placeholder={REPEAT_PASSWORD_PLACEHOLDER}
        onChange={handleInputSetForm}
      />
      <Input
        type={TYPE_CHECKBOX}
        name={SUBMIT_PASSWORD}
        value={form.submitPassword}
        text={SUBMIT_PASSWORD_TEXT}
        onChange={handleInputSetForm}
      />
      <Button 
        type={BUTTOM_TYPE_SUBMIT}
        text={BUTTON_TEXT}
        onClick={handleButton}
      />
      <Separator />
      <Link 
        text={LINK_TEXT}
        value={LINK_VALUE}
        href=''
      />
    </div>
    </form>
  )
}
export default App
