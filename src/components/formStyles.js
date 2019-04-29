import styled from "styled-components";
import { fontSize, spacing, color, weight } from "../components/FormVariables";

export const ConsentLink = styled.a`
  color: ${color.secondary};
  text-decoration: underline;
`;

export const FormSectionWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color ${color.primary};
  padding-top: 15em;
  padding-bottom: 10em;
  margin-top: -12em;
  -webkit-clip-path: polygon(0 15%, 100% 8%, 100% 100%, 0% 100%);
  clip-path: polygon(0 15%, 100% 8%, 100% 100%, 0% 100%);
`;

export const FormWrapper = styled.form`
  position: relative;
  display: flex;
  padding: 1em;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vw;
  border: 0.25em dashed ${color.lightgreen};
  @media (max-width: 991px) {
    width: 65vw;
  }
  @media (max-width: 767px) {
    width: 75vw;
  }
  @media (max-width: 479px) {
    width: 80vw;
  }
`;

export const FormText = styled.p`
  color: ${color.secondary};
  font-weight: ${weight.light};
  font-size: ${fontSize.medium};
  letter-spacing: ${spacing.std};
  text-align: center;
  margin-bottom: 1em;
  @media (max-width:991px) {
    font-size: ${fontSize.largeLink};
  }
`;

export const InputBox = styled.input`
  width: 40vw;
  line-height: 200%;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  text-align: center;
  text-transform: uppercase;
  font-size: ${fontSize.xsmall};
  font-weight: ${weight.semib};
  background: ${color.secondary};
  letter-spacing: ${spacing.wide};
  color: ${color.primary};
  @media (max-width:991px) {
    font-size: ${fontSize.body};
    width:58vw;
  }
  @media (max-width: 767px) {
    width: 65vw;
  }
  @media (max-width: 479px) {
    width: 70vw;
    line-height: 300%;
    margin-bottom: 1.5em;
  }
`;

export const ConsentBox = styled.input`
  width: 4%;
  margin-left: 48%;
  margin-bottom: 0.8em;
  margin-top:0.6em;
`

export const ErrorMsg = styled.p`
  width: auto;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  font-size: ${fontSize.small};
  font-weight: ${weight.light};
  color: ${color.secondary};
  text-align: center;
  letter-spacing: ${spacing.med};
  border: 0.1em solid ${color.lightred};
  @media (max-width:991px) {
    font-size: ${fontSize.body};
  }
`;
export const Consent = styled.p`
  color: ${color.secondary};
  font-size: ${fontSize.small};
  letter-spacing: ${spacing.reg};
  font-weight: ${weight.normal};
  line-height: 135%;
  text-align: center;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  padding-bottom: 0.5em;
  @media (max-width:991px) {
    font-size: ${fontSize.medsmall};
    line-height:150%;
  }
  @media (max-width: 767px) {
    width: 65vw;
  }
  @media (max-width: 479px) {
    width: 70vw;
  }
`;

export const SubmitButton = styled.button`
  padding: 0;
  margin: 0 auto;
  position: relative;
  margin-top: -2.5em;
  bottom: -3.2em;
  border-radius: 50%;
  border: 0.15em solid ${color.secondary};
  width: 4em;
  height: 4em;
  background-color: ${color.primary};
  color: ${color.secondary};
  font-weight: 300;
  font-size: ${fontSize.medsmall};
  @media (max-width:991px) {
    font-size: ${fontSize.medium};
    padding-bottom: 0.3em;
  }
`;
