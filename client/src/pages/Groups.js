import React, { useState } from 'react';

import GroupHeader from 'components/groups/GroupHeader';
import GroupList from 'components/groups/GroupList';
import Container from 'components/layout/Container';


const Groups = ({ }) => {
    const [shared, setShared] = useState(false);

    const toggleShared = () => {
        setShared(!shared);
    }


    return (
        <Container>
            <div className="group">
                <GroupHeader shared={shared} toggleShared={toggleShared} />
                <GroupList />
            </div>
        </Container>
    )
}

export default Groups;
