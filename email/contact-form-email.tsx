import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  sender: string;
};

export function ContactFormEmail({ message, sender }: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New meesage from my portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-gray-800">
          <Container>
            <Section className="bg-red-300 borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                Following message was sent from the Portfolio - Contact Form
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The sender's email is: {sender}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
