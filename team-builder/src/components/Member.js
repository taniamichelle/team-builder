import React, { useState } from 'react';
import members from './Data';

const Member = () => {
    const [memberState, setMemberState] = useState(members);
    console.log(memberState);
    return (
        <div>
            {memberState.map(member => memberState.name)}
        </div>
    );
}

export default Member;