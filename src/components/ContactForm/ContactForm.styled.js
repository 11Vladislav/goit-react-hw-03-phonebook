import styled from 'styled-components';
import { Form, Field } from 'formik';

export const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    padding: 10px;
 `;   

export const Input = styled(Field)`
   margin-top: 5px;
   margin-bottom: 5px; 
   width: 150px; 
`; 