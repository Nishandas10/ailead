'use client';

import { LeadMagnetEditorContextProvider } from '@/context/LeadMagnetEditorContext';
import { LeadMagnet } from '@prisma/client';
import React from 'react'
import LeadMagnetEditorPage from '../page';
import LeadMagnetEditor from './LeadMagnetEditor';


interface LeadMagnetEditorContainerProps {
    leadMagnet: LeadMagnet; 
}

function LeadMagnetEditorContainer({
    leadMagnet,
}: LeadMagnetEditorContainerProps) {
  return (
    <LeadMagnetEditorContextProvider leadMagnet={leadMagnet}>
        <LeadMagnetEditor/>
    </LeadMagnetEditorContextProvider>
  )
}

export default LeadMagnetEditorContainer;