import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import { TextContent, Title, Description } from '../Hero/Home';
import Community from './Community';
import ContactContent from './ContactContent';
import { useForm } from 'react-hook-form';

const Container = styled.div`
  height: 90%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;

  @media only screen and (max-width: 600px){
        width: 100%;
        margin-top: -100px
     }
`;

const FormContent = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 600px){
        width: 100%;
        margin-top: -50px;
     }
`;

const Form = styled.input`
  height: 15px;
  width: 320px;
  border: 1px solid;
  border-radius: 3px;
  margin: 15px;
  padding: 12px;
`;

const Button = styled.button`
  display: flex;
  padding: 10px 20px;
  border: 1px solid ${(props) => props.theme.colors.bgprimary};
  border-radius: 1px;
  background-color: ${(props) => props.theme.colors.bgprimary}; 
  color: ${(props) => props.theme.colors.textlight};
  margin-top: 20px;
  margin-left: -270px;
`;

const Textarea = styled.textarea`
  width: 330px;
  border: 1px solid;
  border-radius: 3px;
  margin-top: 12px;
  font-family: Arial;
  font-size: 14px;
  padding: 10px;
`;

const Result = () =>{
  return(
    <p style={{color: 'green'}}>Message Sent!</p>
  )
}

function Contact() {

  const { register, formState: {errors}, handlesubmit } = useForm({
    mode: 'all'
  });


  const [result, showResult] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wuwt6l8', 'template_cnwkqsz', Form.current, 'Nz83RtxxAwK_sNBTH')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      showResult(true)
  };

  // hide result
  setTimeout(() => {
    showResult(false)
  }, 5000)

  // console.log("error", errors)

  return (
    <>
    <Container>
      <TextContent>
        <Title>
          Contact Us
        </Title>

        <Description>
          Need to get in touch with us?
          Fill out the form and find the department email you'll like to contact.
        </Description>
      </TextContent>
      

      <FormContent onSubmit={handlesubmit}>
        <p style={{margin: 0}}>{ 
        result ? <Result /> : null
      }</p>

        <Form type={'text'} 
        placeholder={'First Name'} 
        {...register("firstname", {
          required: "first name required",
          minLength: {
            value: 3,
            message: "first name must be atleast 2 characters long"
          },
          maxLength: {
            value: 3,
            message: "first name must be atmost 30 characters long"
          },
        })}
        />
        <p style={{color: 'red', fontSize: '12px', margin: 0, textAlign: 'left' }}>{errors.firstname?.message}</p>

        <Form type={'text'}
         placeholder={'Last Name'} 
        {...register("lastname", {
          required: "lastname is required",
          minLength: {
            value: 3,
            message: "last name must be atleast 2 characters long"
          },
          maxLength: {
            value: 3,
            message: "last name must be atmost 30 characters long"
          },
        })}
        />
        <p style={{color: 'red', fontSize: '12px', margin: 0, textAlign: 'left' }}>{errors.lastname?.message}</p>

        <Form type={'email'} 
        placeholder={'Email'} 
        {...register("email", {
          required: "Email is required",
          pattern:{
            value:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: "Email must be Valid"
          }
        })}/>
       <p style={{color: 'red', fontSize: '12px', margin: 0, textAlign: 'left' }}>{errors.email?.message}</p>
       
        <Textarea type={'textarea'} cols={3} rows={8} 
        placeholder={'What can we help you with?...'} 
        {...register("textarea", {
        required: "Input is required",
        }
        
        )}>

        </Textarea>
        <p style={{color: 'red', fontSize: '12px', margin: 0, textAlign: 'left' }}>{errors.textarea?.message}</p>

        <Button type={"submit"} onClick={showResult}>Submit</Button>

        
      </FormContent>
     
     

    </Container>
    <ContactContent />
    <Community />

    </>
  )
}

export default Contact