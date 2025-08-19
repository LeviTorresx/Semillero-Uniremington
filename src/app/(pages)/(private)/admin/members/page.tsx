'use client';
import MemberTable from '@/app/components/member/MemberTable'
import { selectMembers } from '@/app/store/selectors/memberSelectors'
import React from 'react'
import { useSelector } from 'react-redux'

export default function AdminMembersDashboard() {

    const members = useSelector(selectMembers)

    const validMembers = members.filter((m)=> m.valid)
    const invalidMembers= members.filter((m)=> !m.valid)


  return (
   <div className="p-6">
      <MemberTable 
        members={validMembers} 
        title="Miembros por validar" 
        color="yellow" 
        validState={false} 
      />
      
      <MemberTable 
        members={invalidMembers} 
        title="Miembros validados" 
        color="green" 
        validState={true} 
      />
    </div>
  )
}
