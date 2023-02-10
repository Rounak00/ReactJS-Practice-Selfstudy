// Custom Hook: Same functionality in same pages
import {useEffect, useState} from 'react';

const useTitleCount=(count)=>{
   useEffect(()=>{
     if(count>=1)document.title=`chats (${count})`;
     else document.title=`chat`;
   },[count])
}
export default useTitleCount;
