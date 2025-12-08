import React, { useState } from 'react';
import {
  TerminalButton,
  TerminalContainer,
  TerminalContent,
  TerminalHeader,
} from './Terminal.styled';
import { TypingEffect } from '@/components/display/typography/typingEffect/TypingEffect';
import { Azeret_Mono } from 'next/font/google';

const azeret = Azeret_Mono({
  weight: '400',
  subsets: ['latin'],
});

const Terminal = () => {
  const [isGDGTextTyped, setIsGDGTextTyped] = useState(false);
  return (
    <TerminalContainer>
      <TerminalHeader>
        <TerminalButton color='#FF5656' />
        <TerminalButton color='#FFCA2E' />
        <TerminalButton color='#24B06C' />
      </TerminalHeader>
      <TerminalContent className={azeret.className}>
        <TypingEffect
          className='gdg-text'
          showCursor={true}
          onTypingComplete={() => {
            setIsGDGTextTyped(true);
          }}
          interKeyStrokeDurationInMs={100}
        >{`$gdg cd /tech`}</TypingEffect>
        {isGDGTextTyped && (
          <TypingEffect interKeyStrokeDurationInMs={40} showCursor={true}>
            {`>> The GDG Tech Team is a powerhouse of web development expertise, specializing in the latest technologies like Firebase and beyond.`}
          </TypingEffect>
        )}
      </TerminalContent>
    </TerminalContainer>
  );
};

export default Terminal;
